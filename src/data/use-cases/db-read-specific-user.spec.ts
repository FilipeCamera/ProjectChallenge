import { CreateUser } from '@domain/use-cases/create-user';
import { DatabaseCreateUser } from './db-create-user';
import { MemoryUserRepository } from '@test/repositories/in-memory-user-database';
import { PasswordCrypto } from '@test/protocols/cryptograph-mocks';
import { DatabaseReadSpecificUser } from './db-read-specific-user';

describe('Database Specific Read User Test', () => {
  it('shoud be able read specific user in database', async () => {
    const memoryRepository = new MemoryUserRepository();
    const db = new DatabaseCreateUser(memoryRepository, new PasswordCrypto());
    const readDb = new DatabaseReadSpecificUser(memoryRepository);
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
    const user = await db.create(data1);
    await db.create(data2);
    await db.create(data3);

    const sut = await readDb.exec({ id: user.id });

    expect(sut).toBeTruthy();
    expect(sut.nickname).toEqual('nickname_test_field_1');
  });
  it('should return an error when not finding the user', async () => {
    const memoryRepository = new MemoryUserRepository();

    const readDb = new DatabaseReadSpecificUser(memoryRepository);

    await expect(async () => await readDb.exec({ id: '1234' })).rejects.toThrow(
      'User not found.'
    );
  });
});
