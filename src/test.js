class A {
  foo() {
    console.log('A::foo()');
  }
}
(() => {
  console.log('test.js');
  const a = new A();
  a.foo();
})();
