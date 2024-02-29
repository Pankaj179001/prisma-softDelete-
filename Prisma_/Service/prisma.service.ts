import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { ExtendedPrismaClient } from '../Utils/ExtendedPrisma.client';

@Injectable()
export class PrismaService
  extends ExtendedPrismaClient
  implements OnModuleInit
{
  async onModuleInit() {
    await this.$connect();
    // this.$use(SoftDelete);
  }

  async enableShutdownHooks(app: INestApplication) {
    process.on('beforeExit', async () => {
      await app.close();
    });
  }
}
