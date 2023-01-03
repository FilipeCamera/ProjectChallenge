import { ProjectRepository } from '@data/repositories/project-repository';
import { Details } from '@domain/entities/details';
import { Project } from '@domain/entities/project';
import { CreateProject } from '@domain/use-cases/create-project';

export class MemoryProjectRepository implements ProjectRepository {
  public projects: Project[] = [];

  async create(data: CreateProject.request): Promise<CreateProject.response> {
    const { content, isPrivate, user } = data;
    const details = new Details(content);
    const project = new Project({ content: details, isPrivate }, user);

    this.projects.push(project);

    return project;
  }
}
