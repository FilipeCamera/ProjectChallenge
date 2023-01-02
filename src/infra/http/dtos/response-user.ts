export class UserResponse {
  id: string;
  nickname: string;
  email: string;
  cargo: string;
  linkedin: string;
  github: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: string,
    nickname: string,
    email: string,
    cargo: string,
    linkedin: string,
    github: string,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.nickname = nickname;
    this.email = email;
    this.linkedin = linkedin;
    this.github = github;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
