import { Controller, Get, Post, Delete, Put, Param, Body } from '@nestjs/common';
import { PersonaService } from './persona.service';


@Controller('api/persona')
export class PersonaController {

    constructor (
        private personaService: PersonaService
    ) {}

    @Get()
    getPersonas() {
        return this.personaService.findAll();
    }

    @Get(':id')
    getPersona(@Param('id') id: number) {
        return this.personaService.findOne(id);
    }

    @Post()
    createPersona(@Body() body: any) {
        return this.personaService.createOne(body);
    }

    @Put(':id')
    updatePersona(@Param('id') id: number, @Body() body: any) {
        return this.personaService.updateOne(id, body);
    }

    @Delete(':id')
    deletePersona(@Param('id') id: number) {
        return this.personaService.removeOne(id);
  }

}
