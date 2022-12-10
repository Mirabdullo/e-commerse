import { Module } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { WorkersController } from './workers.controller';

@Module({
  controllers: [WorkersController],
  providers: [WorkersService]
})
export class WorkersModule {}
