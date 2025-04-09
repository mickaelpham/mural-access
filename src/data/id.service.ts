import { Injectable, OnModuleInit } from '@nestjs/common'
import { monotonicFactory, ULIDFactory } from 'ulid'

const prefix = {
  company: 'cpy_',
  mural: 'mrl_',
  room: 'r_',
  user: 'usr_',
  workspace: 'wrk_',
} as const

type Model = keyof typeof prefix

@Injectable()
export class IdService implements OnModuleInit {
  private ulid: ULIDFactory

  onModuleInit() {
    this.ulid = monotonicFactory()
  }

  generate(model: Model) {
    return prefix[model] + this.ulid()
  }
}
