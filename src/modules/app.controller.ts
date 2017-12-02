import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController {

    @Get('/test')
    root(): string {
        return 'hello world';
    }
}
