import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash } from 'argon2';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const { password, ...user } = createUserDto;
    const hashedPassword = await hash(password);
    return this.prismaService.user.create({
      data: { ...user, password: hashedPassword },
    });
  }

  async findByEmail(email: string) {
    return await this.prismaService.user.findUnique({
      where: { email },
    });
  }
}
