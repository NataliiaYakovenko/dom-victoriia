"use strict";

//JSON

const obj ={
  number: 1,
  string:'Nataliia',
  array: [1,2,false],
  boolean: true,
  null: null,
  object:{prop:10},
  getNumber(){     // методи не передаються
    return this.number;
  },
  undefined:undefined, //не передається
}
console.log(obj);

//Передача даних з об'єкту на сервер
//obj => JSON - серіалізаія
const objJson = JSON.stringify(obj);
console.log(objJson);

//Зворотня передача даних з серверу на JSON
//JSON => obj   - десеріалізаія
const parseObj = JSON.parse(objJson);
console.log(parseObj);