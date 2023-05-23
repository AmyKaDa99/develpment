import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Meal, MealSchema } from './entities/meal.entity';
import { MealService } from './meal.service';
import { MealController } from './meal.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: Meal.name,
      useFactory: () => {
        const schema = MealSchema;
        return schema;
      }
    }
    ])],
  controllers: [MealController],
  providers: [MealService],
  exports: [MealService]
})
export class MealModule { }
