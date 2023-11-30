import { IsInt, IsString } from 'class-validator';

export class CreateGameDto {
  @IsInt()
  id: number;

  @IsString()
  title: string;

  @IsString()
  createdAt: string;
}
