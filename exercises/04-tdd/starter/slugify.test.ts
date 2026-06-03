import { describe, it, expect } from 'vitest';
import { slugify } from './slugify';

// 🔴 These describe the feature. They fail until slugify is implemented.
// This file is the SPEC. Do not edit it to make tests pass, implement the code.
describe('slugify', () => {
  it('lowercases and hyphenates words', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  it('collapses multiple spaces', () => {
    expect(slugify('a   b    c')).toBe('a-b-c');
  });

  it('strips punctuation', () => {
    expect(slugify('Hello, World!')).toBe('hello-world');
  });

  it('trims leading/trailing whitespace and hyphens', () => {
    expect(slugify('  spaced out  ')).toBe('spaced-out');
    expect(slugify('--edges--')).toBe('edges');
  });

  it('handles accented characters', () => {
    expect(slugify('Crème Brûlée')).toBe('creme-brulee');
  });

  it('returns empty string for empty-ish input', () => {
    expect(slugify('   ')).toBe('');
    expect(slugify('!!!')).toBe('');
  });
});
