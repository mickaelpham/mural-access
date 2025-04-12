import { Injectable, OnModuleInit } from '@nestjs/common'
import { monotonicFactory, ULIDFactory } from 'ulid'
import { z } from 'zod'

const PREFIXES = {
  company: 'cpy_',
  group: 'grp_',
  mural: 'mrl_',
  room: 'r_',
  user: 'usr_',
  workspace: 'wrk_',
} as const

type Model = keyof typeof PREFIXES

/**
 * Utility function validating that the input format matches a
 * specific ID format
 */
export function entityId(model: Model) {
  const prefix = PREFIXES[model]
  const length = prefix.length + 26 // ULID length

  return z.string().length(length).startsWith(prefix)
}

@Injectable()
export class IdService implements OnModuleInit {
  private ulid: ULIDFactory

  onModuleInit() {
    this.ulid = monotonicFactory()
  }

  generate(model: Model) {
    return PREFIXES[model] + this.ulid()
  }
}
