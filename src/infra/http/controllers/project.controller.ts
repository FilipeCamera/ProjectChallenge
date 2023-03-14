import { DatabaseCreateProject } from '@data/use-cases/db-create-project';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateProjectBody } from '../dtos/create-project-body';

@Controller('project')
export class ProjectController {
  constructor(private readonly dbCreateProject: DatabaseCreateProject) {}

  @Post()
  async create(@Body() body: CreateProjectBody) {
    const { content, user, isPrivate } = body;

    const project = await this.dbCreateProject.exec({
      content,
      user,
      isPrivate,
    });
    return project;
  }
}
