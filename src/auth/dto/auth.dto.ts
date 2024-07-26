import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsEmail()
  Email: string;

  @IsString()
  password: string;
}
