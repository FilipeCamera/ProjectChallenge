import { PasswordCrypto } from '@test/protocols/cryptograph-mocks';
import { DatabaseCreateUser } from './db-create-user';
import { CreateUser } from '@domain/use-cases/create-user';
import { MemoryUserRepository } from '@test/repositories/in-memory-user-database';
import { UpdateUser } from '@domain/use-cases/update-user';
import { DatabaseUpdateUser } from './db-update-user';

const memoryRepository = new MemoryUserRepository();

describe('Update User Test', () => {
  beforeAll(async () => {
    const db = new DatabaseCreateUser(memoryRepository, new PasswordCrypto());

    const data: CreateUser.request = {
      email: 'email_test_field',
      nickname: 'nickname_test_field',
      password: 'password_test_field',
      cargo: 'cargo_test_field',
    };
    await db.create(data);
  });
  it('should be able update user', async () => {
    const db = new DatabaseUpdateUser(memoryRepository);
    const data: UpdateUser.request = {
      nickname: 'nickname_test_field_1',
      cargo: 'cargo_test_field_1',
      github: 'github_test_field_1',
      linkedin: 'linkedin_test_field_1',
      id: memoryRepository.users[0].id,
    };

    const user = await db.exec(data);

    expect(user).toEqual(
      expect.objectContaining({ nickname: 'nickname_test_field_1' })
    );
  });

  it('should return an error when trying to update the user when passing a wrong parameter or not passing a parameter', async () => {
    const db = new DatabaseUpdateUser(memoryRepository);
    const data: UpdateUser.request = {
      nickname: 'nickname_test_field_1',
      cargo: 'cargo_test_field_1',
      github: 'github_test_field_1',
      linkedin: 'linkedin_test_field_1',
      id: '123',
    };

    await expect(async () => await db.exec(data)).rejects.toThrow(
      'Could not change user.'
    );
  });
});
