export interface Client {
  client_id: string;  // 本来であれば一意制約が必須
  client_secret: string;
  redirect_uris: Array<string>;
  scope: string;
}
