import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from './create-order.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateOrderStatusIdDto extends PartialType(CreateOrderDto) {
    @ApiProperty({ example: "63bf04b90d56c87bb8ed962b" })
    @IsNotEmpty()
    @IsString()
    orderStatusId: string;
}


export class UpdateReviewIdDto extends PartialType(CreateOrderDto) {
    @ApiProperty({ example: "63bf04b90d56c87bb8ed962b" })
    @IsNotEmpty()
    @IsString()
    reviewId: string;
}
