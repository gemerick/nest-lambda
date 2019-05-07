import { Controller, Get } from '@nestjs/common';
import { Language } from './models/language';

@Controller('languages')
export class LanguagesController {

    @Get()
    languages(): Language[] {
        return [new Language("typescript"), new Language("java")];
    }
}
