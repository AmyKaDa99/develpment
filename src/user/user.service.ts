import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<UserDocument>
  ) { }

  async create(createUserDto: CreateUserDto) {
    // TO DO:
    // Validate phone number : all must start with +963 and following 8 number
    // Hash Password
    const createUser = new this.UserModel(createUserDto);
    await createUser.save()
    const populateQuery = [{ path: 'region' }]
    return this.UserModel.findOne({ phone: createUser.phone }, {fcm: 0}).populate(populateQuery)
  }

  async update(id: string, updateUser: UpdateUserDto){

    await this.UserModel.updateOne({_id: id}, updateUser
    ).then(res => console.log(res)).catch(err => console.log(err))  

   
    const populateQuery = [{ path: 'region' }]
    return this.UserModel.findOne({ _id: id }, {fcm: 0}).populate(populateQuery)
 
  }

  async findAll() {
    return await this.UserModel.find();
  }

  async findByPhone(phone: string) {
    return this.UserModel.findOne({ phone })
  }

  async logIn(phone: string, password: string, fcm: string) {
    const populateQuery = [{ path: 'region' }]
    const exist = await this.UserModel.findOne({ phone, password }, {fcm: 0}).populate(populateQuery)
    if (exist){ 
       this.UserModel.updateOne({phone}, 
        {fcm}, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Updated Docs : ", docs);
        }
    });
      return exist
    }
    else return false
  }

  
  async findOne(id: string) {
    return await this.UserModel.findOne({_id: id});
  }
  
  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
