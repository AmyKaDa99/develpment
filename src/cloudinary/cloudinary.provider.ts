import { v2 } from 'cloudinary';
import { CLOUDINARY } from './constant';

export const CloudinaryProvider = {
    provide: CLOUDINARY,
    useFactory: (): any => {
        return v2.config({
            cloud_name: 'refq2021',
            api_key: '146176211369296',
            api_secret: 'USZAGD3wpBJjXEO5DQEcWesY8qU',
        })
    }
}


/*return v2.config({
    cloud_name: 'refq',
    api_key: '613793455243789',
    api_secret: '7ouzNrxyQB66qpchAmkP9ZGsZR8',
})*/