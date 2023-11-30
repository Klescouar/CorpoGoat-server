import { IsInt, IsString } from 'class-validator';

export class CreateRatingDto {
  @IsInt()
  id: number;

  @IsInt()
  rank: number;

  @IsString()
  date: string;

  @IsInt()
  organizationId: number;

  @IsInt()
  gameId: number;

  @IsInt()
  userId: number;

  @IsInt()
  numberOfPlayers: number;
}
