import { IsInt, IsString } from 'class-validator';

export class CreateOrganizationDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsString()
  imageUrl: string;
}
