import { Module } from '@nestjs/common';
import { AppStatusService } from './app-status.service';
import { AppStatusController } from './app-status.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppStatus, AppStatusSchema } from './entities/app-status.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: AppStatus.name,
      useFactory: () => {
        const schema = AppStatusSchema;
        return schema;
      }
    }
    ])],
  controllers: [AppStatusController],
  providers: [AppStatusService]
})
export class AppStatusModule {}
