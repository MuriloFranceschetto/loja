import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

import { UserListDto } from './dto/UserList.dto';
import { UserEntity } from './user.entity';
import { UpdateUserDto } from './dto/UpdateUser.dto';
import { randomUUID } from 'crypto';
import { CreateUserDto } from './dto/CreateUser.dto';

@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    ) { }

    async listUsers() {
        return (await this.userRepository.find({ order: {id: 'ASC'}}))
            .map((user) => new UserListDto(user.id, user.name));
    }
    
    async getUserByEmail(email: string) {
        return await this.userRepository.findOne({
            where: {
                email,
            }
        })
    }

    async createUser(userData: CreateUserDto): Promise<UserEntity> {
        const userEntity = new UserEntity();
        userEntity.name = userData.name;
        userEntity.email = userData.email;
        userEntity.password = userData.password;
        userEntity.id = randomUUID();
        await this.userRepository.save(userEntity);
        return userEntity;
    }

    async updateUser(id: string, userEntity: UpdateUserDto) {
        return await this.userRepository.update(id, userEntity);
    }

    async deleteUser(id: string) {
        return await this.userRepository.delete(id);
    }
    
}
