import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController, ReorderController } from './order.controller';
import { Order, OrderSchema } from './entities/order.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderStatusModule } from 'src/order-status/order-status.module';
import { MealModule } from 'src/meal/meal.module';
import { ReviewModule } from 'src/review/review.module';
import { TelegramBotModule } from 'src/telegram-bot/telegram-bot.module';
import { NotificationModule } from 'src/notification/notification.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    NotificationModule,
    UserModule,
    ReviewModule,
    MealModule,
    TelegramBotModule,
    OrderStatusModule,
    MongooseModule.forFeatureAsync([{
      name: Order.name,
      useFactory: () => {
        const schema = OrderSchema;
        return schema;
      }
    }
    ])],
  controllers: [OrderController, ReorderController],
  providers: [OrderService]
})
export class OrderModule { }
