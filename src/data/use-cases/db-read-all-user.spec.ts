import { CreateUser } from '@domain/use-cases/create-user';
import { DatabaseCreateUser } from './db-create-user';
import { MemoryUserRepository } from '@test/repositories/in-memory-user-database';
import { DatabaseReadAllUser } from './db-read-all-user';
import { PasswordCrypto } from '@test/protocols/cryptograph-mocks';

describe('Database All Read User Test', () => {
  it('shoud be able read all users in database', async () => {
    const memoryRepository = new MemoryUserRepository();
    const db = new DatabaseCreateUser(memoryRepository, new PasswordCrypto());
    const readDb = new DatabaseReadAllUser(memoryRepository);
    const data1: CreateUser.request = {
      email: 'email_test_field_1',
      nickname: 'nickname_test_field_1',
      password: 'password_test_field',
      cargo: 'cargo_test_field',
    };
    const data2: CreateUser.request = {
      email: 'email_test_field_2',
      nickname: 'nickname_test_field_2',
      password: 'password_test_field',
      cargo: 'cargo_test_field',
    };
    const data3: CreateUser.request = {
      email: 'email_test_field_3',
      nickname: 'nickname_test_field_3',
      password: 'password_test_field',
      cargo: 'cargo_test_field',
    };
    await db.exec(data1);
    await db.exec(data2);
    await db.exec(data3);

    const users = await readDb.exec();

    expect(users).toHaveLength(3);
  });
  it('should return an error when not finding the users', async () => {
    const memoryRepository = new MemoryUserRepository();
    const readDb = new DatabaseReadAllUser(memoryRepository);

    await expect(async () => await readDb.exec()).rejects.toThrow(
      'Users not found.'
    );
  });
});
