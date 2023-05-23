import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionController } from './region.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Region, RegionSchema } from './entities/region.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: Region.name,
      useFactory: () => {
        const schema = RegionSchema;
        return schema;
      }
    }
    ])],
  controllers: [RegionController],
  providers: [RegionService],
  exports: [RegionService]
})
export class RegionModule { }
