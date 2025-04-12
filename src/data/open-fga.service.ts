import { Injectable } from '@nestjs/common'
import { OpenFgaClient } from '@openfga/sdk'

@Injectable()
export class OpenFgaService extends OpenFgaClient {
  constructor() {
    super({
      apiUrl: process.env.FGA_API_URL,
      storeId: process.env.FGA_STORE_ID,
      authorizationModelId: process.env.FGA_MODEL_ID,
    })
  }
}
