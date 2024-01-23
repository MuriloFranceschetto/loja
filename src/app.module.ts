import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    // intern
    ProductModule,
    UserModule,

    // dependencies
    CacheModule.register({
      isGlobal: true,
      ttl: 10000,
    }),

    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService]
    }),
  ],
  providers: [AppService],
})
export class AppModule { }
