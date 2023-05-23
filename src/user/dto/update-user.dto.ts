import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';
import ILocation from 'src/interfaces/location.interface';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    name: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    phone: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    password: string;

    @ApiPropertyOptional({ example: "63a753f4bee22ac8ccbf14c4" })
    @IsOptional()
    @IsString()
    region: string;

    @ApiPropertyOptional({
        example: [
            {
                type: "Point",
                coordinates: [-73.856077, 40.848447]
            }
        ]
    })
    @IsOptional()
    @IsArray()
    address: ILocation[];

    /*@ApiProperty()
    @IsNotEmpty()
    @IsString()
    fcm: string;*/

    refreshToken?: string;

}
