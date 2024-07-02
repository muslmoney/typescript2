// // function(){}
// // () =>{}




// const add = (a: number, b: number): void => {
//   console.log(a + b);

// }

// add(12, 34)

// interface INumberFunc {
//   a: number,
//   b: number,
//   c?: number
// }

// const NumberFunc = ({ a, b, c }: INumberFunc) => {
//   return a + b
// }
// //$ tsc index.ts && node  index.js
// const result: number = NumberFunc({ c: 23, b: 32, a: 0 })
// console.log(result);

// const Func = (param1: null | string, param2: INumberFunc[]) => {
// for (let index:number = 0; index < param2.length; index++) {
//   const element:INumberFunc = param2[index];

// }

// console.log("Param 1" , param1);

// }
// Func(null , [{a:12 , b:23 , c: 43} , {a:0.2 , b:2}])

// const divelement:HTMLDivElement |null = document.querySelector('#id')

// const form: HTMLFormElement | null   = document.querySelector('form')

// const input: HTMLInputElement | null = document.querySelector('input')

// const button: HTMLButtonElement | null = document.querySelector('button')

const input: HTMLInputElement | null = document.querySelector('input')

const empty: NodeListOf<HTMLDivElement> | null = document.querySelectorAll('.empty')

interface UsersData {
  name: string
  email: string | number,
  password: number
}

if (input === null) {
  empty.forEach((element: HTMLDivElement | null) => {
    if (element === null) {
      
    }
  });
}



