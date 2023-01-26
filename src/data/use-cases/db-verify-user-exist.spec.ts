import { MemoryUserRepository } from '@test/repositories/in-memory-user-database';
import { DatabaseVerifyUserExist } from './db-verify-user-exist';
import { DatabaseCreateUser } from './db-create-user';
import { CreateUser } from '@domain/use-cases/create-user';
import { PasswordCrypto } from '@test/protocols/cryptograph-mocks';

describe('Database Verify User Test', () => {
  it('should be able to return a user when passing the email', async () => {
    const memoryRepo = new MemoryUserRepository();
    const db = new DatabaseCreateUser(memoryRepo, new PasswordCrypto());

    const data: CreateUser.request = {
      email: 'email_test_field',
      nickname: 'nickname_test_field',
      password: 'password_test_field',
      cargo: 'cargo_test_field',
    };
    await db.exec(data);

    const sut = new DatabaseVerifyUserExist(memoryRepo);

    const { email } = data;

    const user = await sut.exec({ email });

    expect(user).toBeTruthy();
    expect(user).toEqual(
      expect.objectContaining({ email: 'email_test_field' })
    );
  });
  it('should be able to return a user when passing the nickname', async () => {
    const memoryRepo = new MemoryUserRepository();
    const db = new DatabaseCreateUser(memoryRepo, new PasswordCrypto());

    const data: CreateUser.request = {
      email: 'email_test_field',
      nickname: 'nickname_test_field',
      password: 'password_test_field',
      cargo: 'cargo_test_field',
    };
    await db.exec(data);

    const sut = new DatabaseVerifyUserExist(memoryRepo);

    const { nickname } = data;

    const user = await sut.exec({ nickname });

    expect(user).toBeTruthy();
    expect(user).toEqual(
      expect.objectContaining({ nickname: 'nickname_test_field' })
    );
  });
  it('should be able to return an error when passing email or nickname not found', async () => {
    const memoryRepo = new MemoryUserRepository();
    const db = new DatabaseCreateUser(memoryRepo, new PasswordCrypto());

    const data: CreateUser.request = {
      email: 'email_test_field',
      nickname: 'nickname_test_field',
      password: 'password_test_field',
      cargo: 'cargo_test_field',
    };
    await db.exec(data);

    const sut = new DatabaseVerifyUserExist(memoryRepo);

    await expect(
      async () => await sut.exec({ email: 'test', nickname: 'test' })
    ).rejects.toThrow('User not found.');
  });
});
