import { User } from './user';

describe('User test', () => {
  it('should be create user without linkedin and github', () => {
    const user = new User({
      nickname: 'test',
      email: 'test@email.com',
      password: '123456',
      cargo: 'dev',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    expect(user).toBeTruthy();
    expect(user.linkedIn).toEqual(null);
    expect(user.github).toEqual(null);
  });

  it('should be create user only with linkedin', () => {
    const user = new User({
      nickname: 'test',
      email: 'test@email.com',
      password: '123456',
      cargo: 'dev',
      linkedin: 'linkedin_test',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    expect(user).toBeTruthy();
    expect(user.linkedIn).toBeTruthy();
    expect(user.linkedIn).toEqual('linkedin_test');
  });
  it('should be create user only with github', () => {
    const user = new User({
      nickname: 'test',
      email: 'test@email.com',
      password: '123456',
      cargo: 'dev',
      github: 'github_test',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    expect(user).toBeTruthy();
    expect(user.github).toBeTruthy();
    expect(user.github).toEqual('github_test');
  });
  it('should be create user only with linkedin and github', () => {
    const user = new User({
      nickname: 'test',
      email: 'test@email.com',
      password: '123456',
      cargo: 'dev',
      linkedin: 'linkedin_test',
      github: 'github_test',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    expect(user).toBeTruthy();
    expect(user.linkedIn).toBeTruthy();
    expect(user.github).toBeTruthy();
    expect(user.linkedIn).toEqual('linkedin_test');
    expect(user.github).toEqual('github_test');
  });
});
