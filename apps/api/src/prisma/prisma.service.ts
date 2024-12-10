import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { execSync } from 'child_process';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    this.runMigrations();
  }

  private runMigrations() {
    try {
      execSync('npx prisma migrate deploy', { stdio: 'inherit' });
      console.log('Migrations applied successfully');
    } catch (error) {
      console.error('Failed to apply migrations', error);
    }
  }
}
