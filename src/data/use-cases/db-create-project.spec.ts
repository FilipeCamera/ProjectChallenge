import { MemoryProjectRepository } from '@test/repositories/in-memory-project-database';
import { DatabaseCreateProject } from './db-create-project';
import { User } from '@domain/entities/user';
import { CreateProject } from '@domain/use-cases/create-project';

describe('Create Project Test', () => {
  const user = new User({
    nickname: 'test',
    email: 'test@email.com',
    password: '123456',
    cargo: 'dev',
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  it('should be able create project in database', async () => {
    const inMemoryDatabase = new MemoryProjectRepository();
    const dbCreateProject = new DatabaseCreateProject(inMemoryDatabase);

    const data: CreateProject.request = {
      content: {
        title: 'test_title_project',
        description: 'test_description_project',
        details: 'test_details_project',
        tags: ['Back-end'],
        link: null,
      },
      isPrivate: false,
      user,
    };
    const project = await dbCreateProject.exec(data);

    expect(project).toBeTruthy();
  });

  it('should be able return an error when my content is invalid parameters', async () => {
    const inMemoryDatabase = new MemoryProjectRepository();
    const dbCreateProject = new DatabaseCreateProject(inMemoryDatabase);

    const data: CreateProject.request = {
      content: {
        title: 'title',
        description: 'test_description',
        details: 'test_details',
        tags: ['Back-end'],
        link: null,
      },
      isPrivate: false,
      user,
    };

    await expect(
      async () => await dbCreateProject.exec(data)
    ).rejects.toThrow();
  });
  it('should be able verify project in database', async () => {
    const inMemoryDatabase = new MemoryProjectRepository();
    const dbCreateProject = new DatabaseCreateProject(inMemoryDatabase);

    const data: CreateProject.request = {
      content: {
        title: 'test_title_project',
        description: 'test_description_project',
        details: 'test_details_project',
        tags: ['Back-end'],
        link: null,
      },
      isPrivate: false,
      user,
    };
    const project = await dbCreateProject.exec(data);

    console.log(inMemoryDatabase.projects[0].content);
    expect(inMemoryDatabase.projects).toEqual(
      expect.arrayContaining([project])
    );
  });
});
