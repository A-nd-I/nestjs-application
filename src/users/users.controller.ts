import { 
    Controller, 
    Get, 
    Post, 
    Patch, 
    Put, 
    Delete, 
    Param,
    Query,
    Body,
    Req,
    Headers,
    Ip,
    ParseIntPipe,
    DefaultValuePipe,
    ValidationPipe
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';

@Controller('users')
export class UsersController {

    @Get('/:id?')
    public getUsers(
        @Param() getUsersParamDto: GetUsersParamDto, 
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    ){
        console.log(getUsersParamDto);
        return 'you sent a get request to users endpoint';
    }

    @Post()
    public createUsers(
        @Body() createUserDto: CreateUserDto, 
    ){
        console.log(createUserDto);
        
        return 'you sent a post request to the users endpoint'
    }

    @Patch()
    public patchUser(@Body() patchUserDto: PatchUserDto ){
        return patchUserDto;
    }


}
