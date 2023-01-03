import { MemoryUserRepository } from '@test/repositories/in-memory-user-database';
import { DatabaseAuthUser } from './db-auth-user';
import { DatabaseCreateUser } from './db-create-user';
import { PasswordCrypto, TokenHash } from '@test/protocols/cryptograph-mocks';

describe('Database User Auth Test', () => {
  it('must be able to do user authentication', async () => {
    const inMemoryRepository = new MemoryUserRepository();
    const db = new DatabaseAuthUser(
      inMemoryRepository,
      new PasswordCrypto(true),
      new TokenHash()
    );
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

    const token = await db.login({
      nickname: user.nickname,
      password: data.password,
    });

    console.log(token);
    expect(token).toBeTruthy();
    expect(token).not.toEqual('3e674296-094a-477c-b32d-6214c937a883');
  });
  it('should be return an error when user passing email or nickname invalid or not existing', async () => {
    const inMemoryRepository = new MemoryUserRepository();
    const db = new DatabaseAuthUser(
      inMemoryRepository,
      new PasswordCrypto(true),
      new TokenHash()
    );
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

    await db_create.create(data);

    await expect(
      async () =>
        await db.login({
          nickname: 'blabla_test',
          password: data.password,
        })
    ).rejects.toThrow('User not found.');
  });
  it('should be return an error when user password incorrect', async () => {
    const inMemoryRepository = new MemoryUserRepository();
    const db = new DatabaseAuthUser(
      inMemoryRepository,
      new PasswordCrypto(false),
      new TokenHash()
    );
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

    await db_create.create(data);

    await expect(
      async () =>
        await db.login({
          email: 'email_test_field',
          password: data.password,
        })
    ).rejects.toThrow('email/nickname or password incorrect.');
  });
});