import { MemoryUserRepository } from '@test/repositories/in-memory-user-database';
import { DatabaseCreateUser } from './db-create-user';
import { PasswordCrypto } from '@test/protocols/cryptograph-mocks';
import { DatabaseComparePassword } from './db-compare-password';

describe('Database Compare Password Test', () => {
  it('should be able compare password is correct', async () => {
    const inMemoryRepository = new MemoryUserRepository();
    const db = new DatabaseComparePassword(new PasswordCrypto(true));
    const db_create = new DatabaseCreateUser(
      inMemoryRepository,
      new PasswordCrypto(true)
    );

    const data = {
      email: 'email_test_field',
      nickname: 'nickname_test_field',
      password: 'password_test_field',
      cargo: 'cargo_test_field',
    };
    const user = await db_create.create(data);

    const valid = await db.compare({
      hashPassword: user.password,
      plainPassword: data.password,
    });

    expect(valid).toEqual(true);
  });
  it('should be able compare password and return an error if is not correct password', async () => {
    const inMemoryRepository = new MemoryUserRepository();
    const db = new DatabaseComparePassword(new PasswordCrypto());
    const db_create = new DatabaseCreateUser(
      inMemoryRepository,
      new PasswordCrypto(true)
    );

    const data = {
      email: 'email_test_field',
      nickname: 'nickname_test_field',
      password: 'password_test_field',
      cargo: 'cargo_test_field',
    };
    const user = await db_create.create(data);

    await expect(
      async () =>
        await db.compare({ hashPassword: user.password, plainPassword: '123' })
    ).rejects.toThrow('E-mail or nickname or password is incorrect.');
  });
});
