import { Controller, Post } from '@nestjs/common';
import { Req } from '@nestjs/common';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { CloudinaryService } from './cloudinary.service';


@Controller('cloud')
export class CloudinaryController {
  constructor(
    private readonly cloudinaryService: CloudinaryService,
  ) { }


  @Post('/image')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async uploadImage(@Req() req): Promise<any> {
    const data = await req.file()
    const url = await this.cloudinaryService.uploadImage(data.file) as any;
    const trimUrl = url.substring(48);
    return('https://res.cloudinary.com/refq2021/image/upload/q_10/' + trimUrl)
  }


  @Post('/video')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async uploadVideo(@Req() req): Promise<string> {
    const files = await req.saveRequestFiles()
    return await this.cloudinaryService.uploadVideo(files[0])
  }

}


