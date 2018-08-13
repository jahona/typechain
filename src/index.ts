// (name:string, age:number):return type
const sayHi = (name: string, age: number, gender: string): void => {
  /*error return type invalid
  // return console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
  */
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

sayHi("bbo", 24, "male");

export {};
