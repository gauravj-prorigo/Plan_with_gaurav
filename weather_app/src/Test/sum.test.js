import { describe, it, expect } from 'vitest'
import { sum,greet } from './Practices'

describe('add function', () => {
  it('adds two numbers', () => {
    expect(sum(2, 3)).toBe(5)
  })
})

describe('Greet Msg',()=>{
  it('hello to Gaurav',()=>{
    expect(greet('gaurav')).toBe('Hello gaurav');
  })
})