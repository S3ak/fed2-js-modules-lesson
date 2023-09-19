console.warn('this is a module');

document.querySelector('#header').innerHTML = `<div>hello</div>`;

export function Foo() {
  console.log('foo');
}

export default Foo;
