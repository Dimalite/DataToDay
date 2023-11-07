// import data from './user.json' assert { type: 'json' };
// console.log(data[0].name);

import data2 from './sdf.json' assert { type: 'json' };

let randUpTo50 = Math.floor(Math.random() * 50) + 1;
console.log(data2[randUpTo50].str);


const today = new Date();
const dataDay = today.getDate();
const dataMonth = today.getMonth();
const dataYear = today.getFullYear();

const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const btn = document.querySelector("button");
const allMonthEng = [
	"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
]

function myFunction() {
  let f = allMonthEng.find((el, idx) => typeof el === "string" && idx === 0);
  let mon;

  if (dataMonth == 0 || dataMonth == 1) {
    mon = "winter";
    document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?landscape/${mon})`;
  
  } else if(dataMonth == 2 || dataMonth <= 4){
    mon = "spring";
    document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?landscape/${mon})`;
  
  } else if(dataMonth == 5 || dataMonth <= 7){
    mon = "summer";
    document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?landscape/${mon})`;
  
  } else if(dataMonth == 8 || dataMonth <= 10){
    mon = "fall";
    document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?landscape/${mon})`;
  }
   else if(dataMonth == 11){
    mon = "winter";
    document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?landscape/${mon})`;
  }
  



  
  if (dataDay <= 9) day.innerHTML = "0" + dataDay;
  else day.innerHTML = dataDay;
  
	month.innerHTML = f;
	year.innerHTML = dataYear;
}

myFunction()

async function foo() {
  let obj;

  const res = await fetch('https://64ee22551f87218271425b25.mockapi.io/quotes')

  obj = await res.json();

  console.log(obj[2])
}

foo();
// fetch('https://64ee22551f87218271425b25.mockapi.io/photoColections')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

const parent = document.querySelector('.phras'); 
let phaza = parent.querySelector('p');
phaza.innerText = data2[randUpTo50].str;