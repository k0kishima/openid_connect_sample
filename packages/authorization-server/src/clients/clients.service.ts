import { Injectable } from '@nestjs/common';
import { Client } from './client.interface';

@Injectable()
export class ClientsService {
  findAll(): Array<Client> {
    return [
      {
        client_id: 'oauth-client-1',
        client_secret: 'oauth-client-secret-1',  // 本来であれば絶対に漏洩してはならない情報。今回は演習の便宜上データにアクセスしやすくするために公開
        redirect_uris: ['http://localhost:3000/callback'],
        scope: 'foo',
      }
    ]
  }
}
