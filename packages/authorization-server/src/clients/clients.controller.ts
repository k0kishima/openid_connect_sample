import { Controller, Get } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from './client.interface';

@Controller('clients')
export class ClientsController {
  constructor(private readonly service: ClientsService) { }

  @Get()
  index(): Array<Client> {
    return this.service.findAll();
  }
}
