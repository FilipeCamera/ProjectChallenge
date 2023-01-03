import { MemoryUserRepository } from '@test/repositories/in-memory-user-database';
import { DatabaseAuthUser } from './db-auth-user';
import { DatabaseCreateUser } from './db-create-user';
import { PasswordCrypto, TokenHash } from '@test/protocols/cryptograph-mocks';

describe('Database User Auth Test', () => {
  it('must be able to do user authentication', async () => {
    const inMemoryRepository = new MemoryUserRepository();
    const db = new DatabaseAuthUser(new TokenHash());
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

    const token = await db.login(user);

    console.log(token);
    expect(token).toBeTruthy();
    expect(token).not.toEqual('3e674296-094a-477c-b32d-6214c937a883');
  });
});
