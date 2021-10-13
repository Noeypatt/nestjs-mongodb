import { Model, ObjectId } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from '../schemas/users.schema';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private readonly userModel: Model<User>,
  ) {}

  async create(createUserDto: any): Promise<User> {
    const createdCat = new this.userModel(createUserDto);
    return createdCat.save();
  }
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  async findOne(username: string): Promise<any | undefined> {
    return this.userModel.findOne({ username: username });
  }
}
