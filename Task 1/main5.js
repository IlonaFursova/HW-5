//Рекурсия

// 1. Написать функцию возведения числа в степень.
function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n-1);
    }
  }
  alert( pow(2, 3) ); 

// 2. Написать функцию поиска наибольшего общего делителя.
//Алгоритм Евклида
 function nod(a,b) {
    if(!b) {
      return a;
    } 
    return nod(b, a % b);
}
console.log(nod(70, 30));
// 3. Написать функцию для поиска максимальной цифры в числе.

function maxNumber (num) {
    let res = -1;
    for (let i = num; i > 0; i = Math.floor(i / 10)) {
        let k = i % 10;
        if (res < k) {
            res = k;
        }
    }
        return res;
}
console.log(maxNumber(1589378));

// 4. Написать функцию, которая определяет простое ли переданное число.
function CheckN(n) {
        if (n < 2) {
            return false;
        }
        else if (n == 2) {
            return true;
        } 
        else if (n % 2 == 0) {
            return false;
        }
        else {
            return true;
        }
    }
    console.log(CheckN(26));

 // 6. Написать функцию, которая возвращает число Фибоначчи
// по переданному порядковому номеру.
// Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на
// том, что каждое число равно сумме двух предыдущих чисел.
// Например: порядковый номер 3 – число 2, порядковый
// номер 6 – число 8

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log( fib(8) ); 
