import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { UserController } from 'src/user/user.controller';
import { UniqueEmailValidator } from './validators/uniqueEmail.validator';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
    ],
    controllers: [UserController],
    providers: [
        UserService,
        UniqueEmailValidator,
    ],
})
export class UserModule { }
