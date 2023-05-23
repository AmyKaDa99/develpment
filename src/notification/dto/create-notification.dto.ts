import { ApiProperty } from "@nestjs/swagger";

import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateNotificationDto {
  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  type: string;

  userId?: string;

  orderId?: string;

  uniqueId?: string;
  
  isDashboard?: boolean;

}
