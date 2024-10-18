import { IsString, IsNotEmpty, IsOptional, IsEmail, MinLength, MaxLength, Matches } from "class-validator";



export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(101)
    firstName: string;

    @IsString()
    @IsOptional()
    @MinLength(3)
    @MaxLength(101)
    lastName: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @MaxLength(101)
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @Matches(/[a-z0-9\-]+/, {
        message: 'Has to be an email'
    })
    password: string;
}