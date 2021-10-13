import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Res() res, @Body() createUserDto: any) {
    try {
      const result = await this.usersService.create(createUserDto);
      return res.status(HttpStatus.OK).json();
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error?.message });
    }
  }

  @Get()
  async findAll(@Res() res) {
    try {
      const result = await this.usersService.findAll();
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error?.message });
    }
  }

  @Get('/profile')
  async findOne(@Res() res, @Body() body) {
    try {
      const result = await this.usersService.findOne(body.username);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error?.message });
    }
  }
}
