import { describe, expect, it } from 'vitest'
import { wrapperEnv } from './env'

describe('env function test', () => {
  it('VITE_PORT', () => {
    const env = { VITE_PORT: '9896' }
    const viteEnv = wrapperEnv(env)
    expect(viteEnv.VITE_PORT).toBe(9896)
  })
})
