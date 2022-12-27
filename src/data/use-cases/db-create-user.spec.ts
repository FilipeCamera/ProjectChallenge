import { MemoryUserRepository } from '@test/repositories/in-memory-user-database';
import { DatabaseCreateUser } from './db-create-user';
import { CreateUser } from '@domain/use-cases/create-user';

describe('Database create user test', () => {
  it('should be able create user in database', async () => {
    const memoryRepository = new MemoryUserRepository();
    const db = new DatabaseCreateUser(memoryRepository);

    const data: CreateUser.request = {
      email: 'email_test_field',
      nickname: 'nickname_test_field',
      password: 'password_test_field',
      cargo: 'cargo_test_field',
    };
    const sut = await db.create(data);

    expect(sut).toBeTruthy();
    expect(memoryRepository.users).toHaveLength(1);
  });
  it('should be verify user exist in database', async () => {
    const memoryRepository = new MemoryUserRepository();
    const db = new DatabaseCreateUser(memoryRepository);

    const data: CreateUser.request = {
      email: 'email_test_field',
      nickname: 'nickname_test_field',
      password: 'password_test_field',
      cargo: 'cargo_test_field',
    };
    await db.create(data);

    const { users } = memoryRepository;

    expect(users).toHaveLength(1);
    expect(users).toEqual(
      expect.arrayContaining([expect.objectContaining(data)])
    );
  });
});