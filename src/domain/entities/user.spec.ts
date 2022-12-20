import { User } from './user';

describe('User test', () => {
  it('should be create user without social network', () => {
    const user = new User({
      nickname: 'test',
      email: 'test@email.com',
      password: '123456',
      cargo: 'dev',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    expect(user).toBeTruthy();
    expect(user.social).toEqual(null);
  });

  it('should be create user only with linkedin', () => {
    const user = new User({
      nickname: 'test',
      email: 'test@email.com',
      password: '123456',
      cargo: 'dev',
      social: {
        linkedin: 'linkedin_test',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    expect(user).toBeTruthy();
    expect(user.social).toBeTruthy();
    expect(user.social).toEqual(
      expect.objectContaining({ linkedin: 'linkedin_test' })
    );
  });
  it('should be create user only with github', () => {
    const user = new User({
      nickname: 'test',
      email: 'test@email.com',
      password: '123456',
      cargo: 'dev',
      social: {
        github: 'github_test',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    expect(user).toBeTruthy();
    expect(user.social).toBeTruthy();
    expect(user.social).toEqual(
      expect.objectContaining({ github: 'github_test' })
    );
  });
  it('should be create user only with linkedin and github', () => {
    const user = new User({
      nickname: 'test',
      email: 'test@email.com',
      password: '123456',
      cargo: 'dev',
      social: {
        linkedin: 'linkedin_test',
        github: 'github_test',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    expect(user).toBeTruthy();
    expect(user.social).toBeTruthy();
    expect(user.social).toEqual(
      expect.objectContaining({
        linkedin: 'linkedin_test',
        github: 'github_test',
      })
    );
  });
});
