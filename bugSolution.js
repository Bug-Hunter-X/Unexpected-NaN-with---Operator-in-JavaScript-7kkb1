function foo(a, b) {
  a = a === null ? 0 : a; // Handle null
  b = b === null ? 0 : b; // Handle null
  a = a === undefined ? 0 : a; // Handle undefined
  b = b === undefined ? 0 : b; // Handle undefined
  return a + b;
}

console.log(foo(undefined, 1)); // 1
console.log(foo(null, 1)); // 1
console.log(foo(1, undefined)); // 1
console.log(foo(1, null)); // 1