import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderStatusService } from './order-status.service';
import { OrderStatusController } from './order-status.controller';
import { OrderStatus, OrderStatusSchema } from './entities/order-status.entity';


@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: OrderStatus.name,
      useFactory: () => {
        const schema = OrderStatusSchema;
        return schema;
      }
    }
    ])],
  controllers: [OrderStatusController],
  providers: [OrderStatusService],
  exports: [OrderStatusService]
})
export class OrderStatusModule { }
