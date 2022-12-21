import { Details } from './details';
import { Project } from './project';

describe('Project test', () => {
  it('should be create project', () => {
    const data = {
      isPrivate: false,
      content: new Details({
        title: 'test',
        description: 'test',
        details: 'test',
        tags: ['test'],
      }),
    };
    const project = new Project(data);

    expect(project).toBeTruthy();
  });

  it('should be verify project is private', () => {
    const data = {
      isPrivate: true,
      content: new Details({
        title: 'test',
        description: 'test',
        details: 'test',
        tags: ['test'],
      }),
    };
    const project = new Project(data);

    expect(project.isPrivate).toEqual(true);
  });
  it('should be verify project is not private', () => {
    const data = {
      isPrivate: false,
      content: new Details({
        title: 'test',
        description: 'test',
        details: 'test',
        tags: ['test'],
      }),
    };
    const project = new Project(data);

    expect(project.isPrivate).toEqual(false);
  });
});
