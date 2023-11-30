import { Module } from '@nestjs/common';
import { OrganizationController } from './organization/organization.controller';
import { RatingController } from './rating/rating.controller';
import { UserController } from './user/user.controller';
import { GameController } from './game/game.controller';
import { OrganizationService } from './organization/organization.service';
import { RatingService } from './rating/rating.service';
import { GameService } from './game/game.service';
import { UserService } from './user/user.service';

@Module({
  imports: [],
  controllers: [
    OrganizationController,
    RatingController,
    UserController,
    GameController,
  ],
  providers: [OrganizationService, RatingService, UserService, GameService],
})
export class AppModule {}
