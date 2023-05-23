import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Review, ReviewSchema } from './entities/review.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: Review.name,
      useFactory: () => {
        const schema = ReviewSchema;
        return schema;
      }
    }
    ])
  ],
  controllers: [ReviewController],
  providers: [ReviewService],
  exports: [ReviewService]
})
export class ReviewModule { }
