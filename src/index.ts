// interface는 Ts에서만 동작
interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "bbo",
  age: 24,
  gender: "male"
};

// interface로 person의 타입 체크
const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${
    person.gender
  }`;
};

console.log(sayHi(person));

export {};
