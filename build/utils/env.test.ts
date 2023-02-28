import { describe, expect, it } from 'vitest'
import { wrapperEnv } from './env'

describe('env function test', () => {
  it('VITE_PORT', () => {
    const env = { VITE_PORT: '3000' }
    const viteEnv = wrapperEnv(env)
    expect(viteEnv.VITE_PORT).toBe(3000)
  })

  it('VITE_PROXY', () => {
    const env = { VITE_PROXY: '[["/api","http://localhost:3001/api"]]' }
    const viteEnv = wrapperEnv(env)
    expect(viteEnv.VITE_PROXY).toStrictEqual([['/api', 'http://localhost:3001/api']])
  })
})
