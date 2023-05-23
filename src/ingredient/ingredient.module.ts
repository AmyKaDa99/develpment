import { Module } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { IngredientController } from './ingredient.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ingredient, IngredientSchema } from './entities/ingredient.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: Ingredient.name,
      useFactory: () => {
        const schema = IngredientSchema;
        return schema;
      }
    }
    ])],
  controllers: [IngredientController],
  providers: [IngredientService],
  exports: [IngredientService]
})
export class IngredientModule { }
