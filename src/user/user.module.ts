import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { ConstantController, HomeController, UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { CategoryModule } from 'src/category/category.module';
import { KitchenModule } from 'src/kitchen/kitchen.module';
import { DiscountModule } from 'src/discount/discount.module';
import { RegionModule } from 'src/region/region.module';
import { IngredientModule } from 'src/ingredient/ingredient.module';
import { UnitModule } from 'src/unit/unit.module';
import { OrderStatusModule } from 'src/order-status/order-status.module';
import { MealModule } from 'src/meal/meal.module';

@Module({
  imports: [
    OrderStatusModule,
    CategoryModule,
    RegionModule,
    IngredientModule,
    UnitModule,
    MealModule,
    forwardRef(() => KitchenModule),
    DiscountModule,
    MongooseModule.forFeatureAsync([{
      name: User.name,
      useFactory: () => {
        const schema = UserSchema;
        return schema
      }
    }])
  ],
  controllers: [UserController, HomeController, ConstantController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule { }
