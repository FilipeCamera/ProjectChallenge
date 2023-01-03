import { Details } from './details';
import { Project } from './project';
import { User } from './user';

describe('Project test', () => {
  const user = new User({
    nickname: 'test',
    email: 'test@email.com',
    password: '123456',
    cargo: 'dev',
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  it('should be create project', () => {
    const data = {
      isPrivate: false,
      content: new Details({
        title: 'test_project_title',
        description: 'test_project_description',
        details: 'test_project_details',
        tags: ['Back-end'],
      }),
    };
    const project = new Project(data, user);

    expect(project).toBeTruthy();
  });

  it('should be verify project is private', () => {
    const data = {
      isPrivate: true,
      content: new Details({
        title: 'test_project_title',
        description: 'test_project_description',
        details: 'test_project_details',
        tags: ['Back-end'],
      }),
    };
    const project = new Project(data, user);

    expect(project.isPrivate).toEqual(true);
  });
  it('should be verify project is not private', () => {
    const data = {
      isPrivate: false,
      content: new Details({
        title: 'test_project_title',
        description: 'test_project_description',
        details: 'test_project_details',
        tags: ['Back-end'],
      }),
    };
    const project = new Project(data, user);

    expect(project.isPrivate).toEqual(false);
  });
  it('should be able to check if the project has the user it created', () => {
    const data = {
      isPrivate: false,
      content: new Details({
        title: 'test_project_title',
        description: 'test_project_description',
        details: 'test_project_details',
        tags: ['Back-end'],
      }),
    };
    const project = new Project(data, user);

    expect(project.user).toEqual(user);
  });
});
