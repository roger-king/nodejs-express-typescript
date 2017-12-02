import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController {

    @Get('/test')
    private root(): Object {
        return {'test': 'hello'};
    }
}
