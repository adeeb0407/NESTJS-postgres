import { Module } from '@nestjs/common';
import { DetailsModule } from './bordingDetails/details.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Details } from './bordingDetails/entity/details.entity';
import { ConfigModule } from '@nestjs/config';
import { typeOrmAsyncConfig } from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.dev`],
    }),
    DetailsModule,
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
  ],
})
export class AppModule {}
