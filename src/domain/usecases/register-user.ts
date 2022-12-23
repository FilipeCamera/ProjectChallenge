import { User } from '@domain/entities/user';
import { UserRepository } from 'src/data/repositories/user-repository';

interface RegisterUserRequest {
  email: string;
  password: string;
  nickname: string;
  cargo: string;
  social?: {
    linkedin?: string;
    github?: string;
  };
}

interface RegisterUserResponse {
  user: User;
}

export class RegisterUser {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(data: RegisterUserRequest): Promise<RegisterUserResponse> {
    const { email, password, nickname, cargo, social } = data;

    const user = new User({ email, nickname, password, cargo, social });

    await this.userRepository.create(user);

    return { user };
  }
}
