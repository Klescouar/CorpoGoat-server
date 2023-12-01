import { IsInt, IsString } from 'class-validator';

export class CreateGameDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsString()
  createdAt: string;
}
