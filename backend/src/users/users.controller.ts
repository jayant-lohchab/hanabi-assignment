import { Controller, Get } from '@nestjs/common';
import { user } from './user.entity';
import { Crud, CrudController } from '@nestjsx/crud';
import { UsersService } from './users.service';

@Crud({
    model: {
        type:user
    }
})
@Controller('users')
export class UsersController implements CrudController<user> {
    constructor(public service: UsersService){}
}
