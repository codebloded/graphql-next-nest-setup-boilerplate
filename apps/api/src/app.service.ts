import { Injectable } from '@nestjs/common'
import { add } from '@graph-n3-monorepo/sample-lib'
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Monorepo-setup!' + add(1, 2)
  }
}
