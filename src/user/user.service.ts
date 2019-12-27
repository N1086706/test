import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './model/user.entity';
import { UserCreateDto, UserUpdateDto } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    // Get all
    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    // Get one
    async findOne(id): Promise<User> {
        return this.userRepository.findOne(id);
    }

    // Create one
    async createOne(userCreateDto: UserCreateDto) {
        return await this.userRepository.save(userCreateDto);
    }

    // Update one
    async updateOne(id: number, userUpdateDto: UserUpdateDto) {
        return await this.userRepository.update(id, userUpdateDto);
    }

    // Delete one
    async deleteOne(id: number) {
        return await this.userRepository.delete(id);
    }
}
