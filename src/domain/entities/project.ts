import { Replace } from '@helpers/replace';
import { randomUUID } from 'node:crypto';
import { Details } from './details';
import { User } from './user';

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
  private _user: User;

  constructor(
    data: Replace<
      IProjectData,
      {
        accepted?: Array<string>;
        like?: number;
        deslike?: number;
        createdAt?: Date;
        updatedAt?: Date;
      }
    >,
    user: User,
    id?: string
  ) {
    this._id = id ?? randomUUID();
    this._user = user;
    this.data = {
      ...data,
      like: data.like ?? 0,
      deslike: data.deslike ?? 0,
      accepted: data.accepted ?? null,
      createdAt: data.createdAt ?? new Date(),
      updatedAt: data.updatedAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public get user() {
    return this._user;
  }

  public get content() {
    return this.data.content;
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
