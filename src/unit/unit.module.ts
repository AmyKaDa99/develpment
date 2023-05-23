import { Module } from '@nestjs/common';
import { UnitService } from './unit.service';
import { UnitController } from './unit.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Unit, UnitSchema } from './entities/unit.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: Unit.name,
      useFactory: () => {
        const schema = UnitSchema;
        return schema;
      }
    }
    ])],
  controllers: [UnitController],
  providers: [UnitService],
  exports: [UnitService]
})
export class UnitModule { }
