import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto, UserUpdateDto } from './dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    getHello() {
        return this.userService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id) {
        return this.userService.findOne(id);
    }

    @Post()
    postUser(@Body() body: UserCreateDto) {
        return this.userService.createOne(body);
    }

    @Put(':id')
    putUser(@Body() body: UserUpdateDto, @Param('id') id) {
        return this.userService.updateOne(+id, body);
    }

    @Delete(':id')
    deleteUser(@Param('id') id) {
        return this.userService.deleteOne(+id);
    }

}
