import { Injectable } from '@nestjs/common';
import { v2 } from 'cloudinary';
import stream = require('stream');
import * as util from 'util';

@Injectable()
export class CloudinaryService {

    async uploadImage(file: any) {
        return new Promise((async (resolve, reject) => {
            const pipeline = util.promisify(stream.pipeline);
            const writeStream = v2.uploader.upload_stream((err, image) => {
                if (err) reject(err);
                resolve(image.url);
            });
            await pipeline(file, writeStream)
        }))
    }

    async uploadVideo(file: any) {
        let url;
        const v = await v2.uploader.upload(file.filepath,
            {
                resource_type: "video",
                public_id: "myfolder/mysubfolder/dog_closeup",
                chunk_size: 6000000,
                eager: [
                    { width: 300, height: 300, crop: "pad", audio_codec: "none" },
                    { width: 160, height: 100, crop: "crop", gravity: "south", audio_codec: "none" }],
                eager_async: true,
                eager_notification_url: "https://mysite.example.com/notify_endpoint"
            },
            function (error, result) {
                console.log(result.url, error)
                url = result.url;
            })
            .then((data) => {
                url = data.url
                return url;
            });
        return v;


    }


}