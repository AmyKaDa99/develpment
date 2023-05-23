import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review, ReviewDocument } from './entities/review.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ReviewService {

  constructor(
    @InjectModel(Review.name) private ReviewModel: Model<ReviewDocument>,
  ) { }

  async create(createReviewDto: CreateReviewDto) {
    const createReview = new this.ReviewModel(createReviewDto)
    return await createReview.save()
  }

  async update(_id, updateReviewDto: UpdateReviewDto) {
    updateReviewDto.createdAt = new Date()
    await this.ReviewModel.updateOne({ _id }, updateReviewDto)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  async findOne(_id) {
    return await this.ReviewModel.findOne({ _id })
  }

}
