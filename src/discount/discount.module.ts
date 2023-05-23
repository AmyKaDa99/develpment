import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DiscountService } from './discount.service';
import { DiscountController } from './discount.controller';
import { Discount, DiscountSchema } from './entities/discount.entity';
import { MealModule } from 'src/meal/meal.module';
//import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: Discount.name,
      useFactory: () => {
        const schema = DiscountSchema;
        return schema;
      }
    }
    ]),
    MealModule,
    //  ScheduleModule.forRoot(),
  ],
  controllers: [DiscountController],
  providers: [DiscountService],
  exports: [DiscountService]
})
export class DiscountModule { }
