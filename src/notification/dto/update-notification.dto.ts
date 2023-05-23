import { PartialType } from "@nestjs/mapped-types";
import { ApiPropertyOptional } from "@nestjs/swagger";
import { ObjectId } from "bson";
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";
import { CreateNotificationDto } from "./create-notification.dto";

export class UpdateNotificationDto extends PartialType(CreateNotificationDto) {
  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  date: Date;

  @ApiPropertyOptional({
    description:
      "it used to make send notification more dynamically ( like number of rides to the driver, or number of money to the user .. )",
  })
  @IsOptional()
  @IsNumber()
  number: number;


}
