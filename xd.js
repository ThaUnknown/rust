import * as wasm from './pkg/sha_was.js';

// Usage example
const data = new Uint8Array([104, 101, 108, 108, 111]); // "hello"
const hash = wasm.hash_sha256(data);
console.log(wasm)
console.log('SHA-256 hash:', hash);

// Test the hashing function
const testHashResult = wasm.test_hash();
console.log('Test hash result:', testHashResult);