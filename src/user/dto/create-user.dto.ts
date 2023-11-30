import { IsInt, IsString } from 'class-validator';

export class CreateUserDto {
  @IsInt()
  id: number;

  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsString()
  createdAt: string;
}
