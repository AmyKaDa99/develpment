import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAppStatusDto } from './create-app-status.dto';
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class UpdateAppStatusDto extends PartialType(CreateAppStatusDto) {
    @ApiProperty({ example: false })
    @IsNotEmpty()
    @IsBoolean()
    isOpen?: boolean;
}


