//Сума елементів масиву
function sumOfArrayElements(arr) {
  let sum = 0;
  for (i = 0; arr.length > i; i++) {
    if (typeof arr[i] === "number" && arr[i]) {
      sum = sum + arr[i];
    }
  }
  console.log("Сума елементів масиву: " + sum);
}
//---------------------------------------------------------------------------
// Пошук мінімального та максимального значення елементів масиву.
function maxAndMinValueArr(arr) {
  let min = arr[0];
  let max = arr[0];
  for (i = 0; arr.length > i; i++) {
    if (typeof arr[i] === "number") {
      if (min > arr[i]) {
        min = arr[i];
      } else if (max < arr[i]) {
        max = arr[i];
      }
    }
  }
  console.log(
    "Мінімальне значення масиву: " +
      min +
      "\n" +
      "Максимальне значення масиву: " +
      max
  );
}
//---------------------------------------------------------------------------
// Написати скрипт який виведе наступне:

// #

// ##

// ###

// ####

// #####
function tree(symbol) {
  if (typeof symbol !== "string" || !symbol) {
    return console.error("Error: The function accepts only string data type");
  }
  let grille = symbol;
  for (i = 0; i < 5; i++) {
    console.log(grille);
    grille = grille + symbol;
  }
}
//---------------------------------------------------------------------------
// Створити конструктор Accumulator.
//   Даний конструктор має приймати число, яке буде початковим значенням.
//   Клас має реалізувати методи increment, при виклику якого передане
//   значення має збільшуватись на 1, та decrement, при виклиці якого значення має зменшуватись.
function Acumullator(number) {
  this.value = number;
}

Acumullator.prototype.increment = function () {
  this.value += 1;
  console.log("Acumullator +1 =", this.value);
};

Acumullator.prototype.decrement = function () {
  this.value -= 1;
  console.log("Acumullator -1 =", this.value);
};
//---------------------------------------------------------------------------
// Створити конструктор CancelableAccumulator,
//  який буде наслідувати Accumulator та додатково буде реалізовувати метод clear,
//  при виклику якого значення збереженого числа має стати таким, яким його передали в конструкторі.
function CancelableAccumulator(number) {
  Acumullator.call(this, number);
  this.originalValue = number;
}

CancelableAccumulator.prototype = Object.create(Acumullator.prototype);

CancelableAccumulator.prototype.clear = function () {
  this.value = this.originalValue;
  console.log("The base value:", this.value);
};
//---------------------------------------------------------------------------
// Код завдання №28
// const mainImage = document.querySelector(".main-image");

// function scaleMainImage() {
//   mainImage.classList.toggle("main-image__scale");
// }

// mainImage.addEventListener("click", scaleMainImage);

// const navSpan = document.querySelectorAll(".nav-span");

// function pressTheKeyToNavigate(e) {
//   [...navSpan].forEach((element) => {
//     if (e.code[e.code.length - 1] === element.textContent) {
//       element.scrollIntoView({ block: "start", behavior: "smooth" });
//     }
//   });
// }

// document.addEventListener("keydown", pressTheKeyToNavigate);
