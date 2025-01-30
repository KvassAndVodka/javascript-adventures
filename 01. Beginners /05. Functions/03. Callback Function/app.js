// 1. Create a function name (showCallFunc)
// 2. pass "fn" as parameter
// 3. inside that function, create variable which holds value of 10
// 4. pass that value to the callback function
// 5. Now create callback function & print that value which you pass as parameter to the callback func.

function showCallFunc(fn) {
  const x = 10;
  fn(x);
}

// to be fair I find this disgusting in js
showCallFunc(function (value) {
  // who tf allows this
  console.log(value);
});
