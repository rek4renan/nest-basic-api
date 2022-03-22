import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from './entities/persona.entity';

@Injectable()
export class PersonaService {
    constructor(
        @InjectRepository(Persona) private personaRepo: Repository<Persona>
    ) {}

    findAll() {
        return this.personaRepo.find();
    }

    findOne(id: number) {
        return this.personaRepo.findOne(id);
    }

    createOne(body: any) {
        const newPersona = new Persona();
        newPersona.dni = body.dni;
        newPersona.name = body.name;
        newPersona.surname = body.surname;

        return this.personaRepo.save(newPersona);
    }

    async updateOne(id: number, body: any) {
        const personaupd = await this.personaRepo.findOne(id);
        this.personaRepo.merge(personaupd,body);
        return this.personaRepo.save(personaupd);
    }

    async removeOne(id: number) {
        await this.personaRepo.delete(id);
        return true;
    }



}
