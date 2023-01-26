import { MemoryUserRepository } from '@test/repositories/in-memory-user-database';
import { DatabaseVerifyNickOrEmailInUse } from './db-verify-nick-or-email-in-use';
import { PasswordCrypto } from '@test/protocols/cryptograph-mocks';
import { CreateUser } from '@domain/use-cases/create-user';
import { DatabaseCreateUser } from './db-create-user';

describe('Database verify nickname or email test', () => {
  it('should return an error when nickname or email exist in database', async () => {
    const memoryDb = new MemoryUserRepository();

    const db = new DatabaseCreateUser(memoryDb, new PasswordCrypto());

    const data: CreateUser.request = {
      email: 'email_test_field',
      nickname: 'nickname_test_field',
      password: 'password_test_field',
      cargo: 'cargo_test_field',
    };
    await db.exec(data);
    const sut = new DatabaseVerifyNickOrEmailInUse(memoryDb);

    await expect(
      async () => await sut.exec({ nickname: data.nickname, email: data.email })
    ).rejects.toThrow('Email or nickname already in use.');
  });
});
