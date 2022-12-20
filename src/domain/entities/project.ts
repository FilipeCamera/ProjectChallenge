import { Replace } from '@helpers/replace';
import { randomUUID } from 'node:crypto';
import { Details } from './details';

export interface IProjectData {
  isPrivate: boolean;
  content: Details;
  like: number;
  deslike: number;
  accepted: Array<string> | null;
  createdAt: Date;
  updatedAt: Date;
}

export class Project {
  private _id: string;
  private data: IProjectData;

  constructor(
    data: Replace<
      IProjectData,
      {
        links?: string;
        accepted?: Array<string>;
        like?: number;
        deslike?: number;
      }
    >,
    id?: string
  ) {
    this._id = id ?? randomUUID();
    this.data = {
      ...data,
      like: data.like ?? 0,
      deslike: data.deslike ?? 0,
      accepted: data.accepted ?? null,
    };
  }

  public get id() {
    return this._id;
  }

  public set isPrivate(isPrivate: boolean) {
    this.data.isPrivate = isPrivate;
  }

  public get isPrivate() {
    return this.data.isPrivate;
  }

  public set like(like: number) {
    this.data.like = like;
  }

  public get like() {
    return this.data.like;
  }

  public set deslike(deslike: number) {
    this.data.deslike = deslike;
  }

  public get deslike() {
    return this.data.deslike;
  }

  public set accept(accepted: string) {
    this.data.accepted.push(accepted);
  }

  public get accepted(): string[] {
    return this.data.accepted;
  }

  public get createdAt() {
    return this.data.createdAt;
  }

  public get updatedAt() {
    return this.data.updatedAt;
  }
}
