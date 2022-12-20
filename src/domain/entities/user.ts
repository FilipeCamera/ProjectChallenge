import { Replace } from '@helpers/replace';
import { randomUUID } from 'node:crypto';

export interface IUserData {
  nickname: string;
  email: string;
  password: string;
  cargo: string;
  social?: {
    linkedin?: string;
    github?: string;
  } | null;
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
      social: data.social ?? null,
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

  public set social(social) {
    this.data.social = social;
  }

  public get social() {
    return this.data.social;
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
