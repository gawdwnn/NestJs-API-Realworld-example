import { Module } from '@nestjs/common';
import { ArticleController } from '@app/article/article.controller';
import { ArticleService } from '@app/article/article.service';
import { UserEntity } from '@app/user/user.entity';
import { ArticleEntity } from './article.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity, UserEntity])],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
