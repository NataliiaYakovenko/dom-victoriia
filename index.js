console.log(document);

console.log(document.head);

console.log(document.body);

const rootEl = document.getElementById('root');
console.log(rootEl);
console.dir(rootEl);

const divEls = document.getElementsByTagName('div')
console.log(divEls);

const divRoot2 = divEls[0]
console.log(divRoot2);

const contantDivs = document.getElementsByClassName('content')
console.log(contantDivs)

const rootEl2 = document.querySelector('#root')
console.log(rootEl2);

const divsAll = document.querySelectorAll('div')
console.log(divsAll)

const contentAll = document.querySelectorAll('.content')
console.log(contentAll);