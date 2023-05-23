import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MealModule } from './meal/meal.module';
import { KitchenModule } from './kitchen/kitchen.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { CategoryModule } from './category/category.module';
import { UnitModule } from './unit/unit.module';
import { UserModule } from './user/user.module';
import { RegionModule } from './region/region.module';
import { DiscountModule } from './discount/discount.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { OrderStatusModule } from './order-status/order-status.module';
import { ReviewModule } from './review/review.module';
import { TelegramBotModule } from './telegram-bot/telegram-bot.module';
import { NotificationModule } from './notification/notification.module'
import { AppStatusModule } from './app-status/app-status.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING),
    AuthModule,
    MealModule,
    KitchenModule,
    CloudinaryModule,
    CategoryModule,
    UnitModule,
    UserModule,
    RegionModule,
    DiscountModule,
    IngredientModule,
    OrderModule,
    OrderStatusModule,
    ReviewModule,
    TelegramBotModule,
    NotificationModule,
    AppStatusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
