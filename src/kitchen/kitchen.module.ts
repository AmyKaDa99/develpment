import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { KitchenService } from './kitchen.service';
import { KitchenController } from './kitchen.controller';
import { Kitchen, KitchenSchema } from './entities/kitchen.entity';
import { MealModule } from 'src/meal/meal.module';

@Module({
  imports: [
    MealModule,
    MongooseModule.forFeatureAsync([{
      name: Kitchen.name,
      useFactory: () => {
        const schema = KitchenSchema;
        return schema;
      }
    }
    ])],
  controllers: [KitchenController],
  providers: [KitchenService],
  exports: [KitchenService]
})
export class KitchenModule { }
