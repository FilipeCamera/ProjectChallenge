import { MemoryUserRepository } from '@test/repositories/in-memory-user-database';
import { DatabaseVerifyUserAuth } from './db-verify-user-auth';
import { DatabaseCreateUser } from './db-create-user';
import { CreateUser } from '@domain/use-cases/create-user';

describe('Database Verify User Test', () => {
  it('should be able to return a user when passing the email', async () => {
    const memoryRepo = new MemoryUserRepository();
    const db = new DatabaseCreateUser(memoryRepo);

    const data: CreateUser.request = {
      email: 'email_test_field',
      nickname: 'nickname_test_field',
      password: 'password_test_field',
      cargo: 'cargo_test_field',
    };
    await db.create(data);

    const sut = new DatabaseVerifyUserAuth(memoryRepo);

    const { email } = data;

    const user = await sut.exec({ email });

    expect(user).toBeTruthy();
    expect(user).toEqual(
      expect.objectContaining({ email: 'email_test_field' })
    );
  });
  it('should be able to return a user when passing the nickname', async () => {
    const memoryRepo = new MemoryUserRepository();
    const db = new DatabaseCreateUser(memoryRepo);

    const data: CreateUser.request = {
      email: 'email_test_field',
      nickname: 'nickname_test_field',
      password: 'password_test_field',
      cargo: 'cargo_test_field',
    };
    await db.create(data);

    const sut = new DatabaseVerifyUserAuth(memoryRepo);

    const { nickname } = data;

    const user = await sut.exec({ nickname });

    expect(user).toBeTruthy();
    expect(user).toEqual(
      expect.objectContaining({ nickname: 'nickname_test_field' })
    );
  });
  it('should be able to return an error when passing email or nickname not found', async () => {
    const memoryRepo = new MemoryUserRepository();
    const db = new DatabaseCreateUser(memoryRepo);

    const data: CreateUser.request = {
      email: 'email_test_field',
      nickname: 'nickname_test_field',
      password: 'password_test_field',
      cargo: 'cargo_test_field',
    };
    await db.create(data);

    const sut = new DatabaseVerifyUserAuth(memoryRepo);

    await expect(
      async () => await sut.exec({ email: 'test', nickname: 'test' })
    ).rejects.toThrow('User not found.');
  });
});
