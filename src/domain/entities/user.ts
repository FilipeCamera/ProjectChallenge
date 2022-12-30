import { Replace } from '@helpers/replace';
import { randomUUID } from 'node:crypto';

export interface IUserData {
  nickname: string;
  email: string;
  password: string;
  cargo: string;
  linkedin?: string | null;
  github?: string | null;
  createdAt: Date;
  updatedAt: Date;
  canceledAt?: Date | null;
}

export class User {
  private _id: string;
  private data: IUserData;

  constructor(
    data: Replace<IUserData, { createdAt?: Date; updatedAt?: Date }>,
    id?: string
  ) {
    this._id = id ?? randomUUID();
    this.data = {
      ...data,
      linkedin: data.linkedin ?? null,
      github: data.github ?? null,
      createdAt: data.createdAt ?? new Date(),
      updatedAt: data.updatedAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set nickname(nickname: string) {
    this.data.nickname = nickname;
  }

  public get nickname() {
    return this.data.nickname;
  }

  public set email(email: string) {
    this.data.email = email;
  }

  public get email() {
    return this.data.email;
  }

  public set password(password: string) {
    this.data.password = password;
  }

  public get password() {
    return this.data.password;
  }

  public set linkedIn(linkedIn) {
    this.data.linkedin = linkedIn;
  }

  public get linkedIn() {
    return this.data.linkedin;
  }
  public set github(github) {
    this.data.github = github;
  }

  public get github() {
    return this.data.github;
  }

  public set cargo(cargo: string) {
    this.data.cargo = cargo;
  }

  public get cargo() {
    return this.data.cargo;
  }

  public get createdAt() {
    return this.data.createdAt;
  }

  public get updatedAt() {
    return this.data.updatedAt;
  }

  public cancel() {
    this.data.canceledAt = new Date();
  }

  public get canceledAt() {
    return this.data.canceledAt;
  }
}
