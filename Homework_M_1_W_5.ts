document.write (`<p>Задание</p>`)
document.write (`<p>* Во всех заданиях обязательно использовать рекурсию.</p>`)
document.write (`<p>1. Написать функцию возведения числа в степень.</p>`)
let the_number_being_erected = 5
let degree = 3
document.write (`<p>Возводим число ${the_number_being_erected} в степень ${degree}</p>`)

function weRaiseToADegree (num, n) {
    if (n == 1){
        return num
    } else {
        return num * weRaiseToADegree (num, n-1)
    }
}
document.write (`<p>Получаем: ${weRaiseToADegree (the_number_being_erected, degree)}</p>`)
document.write (`<p>==========================================================================================</p>`)
document.write (`<p>2. Написать функцию поиска наибольшего общего делителя.</p>`)
let num1 = 36
let num2 = 24
document.write (`<p>Найдем наибольший общий делитель ${num1} и ${num2}</p>`)
function calculateTheGCD (a,s) {
    if (s == 0) {
        return a
    } else if (a == 0) {
        return s
    }
    if (a > s) {
        return calculateTheGCD (a % s,s)
    } else {
        return calculateTheGCD (a,s % a)
    }
}
document.write (`<p>Наибольший общий делитель равен: ${calculateTheGCD (num1,num2)}</p>`)
document.write (`<p>==========================================================================================</p>`)
document.write (`<p>3. Написать функцию для поиска максимальной цифры в числе.</p>`)
let six_digits = 780235
document.write (`<p>Найдем максимальную цифру в числе:${six_digits}</p>`)
function weFindTheMaximumFigure (n,) {
    let max
    if (n<10){
        return n
    }else {
        return  Math.max(n % 10, weFindTheMaximumFigure (Math.round(n / 10)))
    }
}
document.write (`<p>Максимальная цифра: ${weFindTheMaximumFigure(six_digits, )}</p>`)
document.write (`<p>==========================================================================================</p>`)
document.write (`<p>4. Написать функцию, которая определяет простое ли переданное число.</p>`)
let simple_or_not = 5
let simple_or_not1 = 6
function weIdentifyAPrimeNumber (n, i = 2) {
    if (n == i && n % i == 0) {
        return 'Простое число'
    } else if (n > i && n % i == 0) {
        return 'Составное число'
    } else {
        return weIdentifyAPrimeNumber (n, i + 1)
    }
}
document.write (`<p>Переданное число ${simple_or_not} - ${weIdentifyAPrimeNumber (simple_or_not,)}</p>`)
document.write (`<p>Переданное число ${simple_or_not1} - ${weIdentifyAPrimeNumber (simple_or_not1,)}</p>`)
document.write (`<p>==========================================================================================</p>`)
document.write (`<p>5. Написать функцию для вывода всех множителей переданного числа в возрастающем порядке.
Например: число 18 – множители 2 * 3 * 3.</p>`)
let factorization = 18
let factorization1 = 124
let a = []
function weDecomposeIntoMultipliers (n,a = [], i) {
   if (n == i) {
    //@ts-ignore
    a.push(n)
    return a
   }else if (n >= i && n % i == 0 ) {
    //@ts-ignore
    a.push(i)
    return weDecomposeIntoMultipliers (n / i,a, i)
   }else {
    return weDecomposeIntoMultipliers (n,a, i+1)
   }

}
document.write (`<p>Множители переданного числа ${factorization} - ${weDecomposeIntoMultipliers (factorization,a = [], 2).join('*')}</p>`)
document.write (`<p>Множители переданного числа ${factorization1} - ${weDecomposeIntoMultipliers (factorization1,a = [], 2).join('*')}</p>`)
document.write (`<p>==========================================================================================</p>`)
document.write (`<p>6. Написать функцию, которая возвращает число Фибоначчи
по переданному порядковому номеру.
Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на
том, что каждое число равно сумме двух предыдущих чисел.
Например: порядковый номер 3 – число 2, порядковый номер 6 – число 8.</p>`)
let numFib = 5
let numFib1 = 10
function calculateTheFibonacciNumber (n) {
    if (n <= 1){
        return n
    }else {
        return calculateTheFibonacciNumber (n - 1) + calculateTheFibonacciNumber(n - 2)
    }
    
  }
  document.write (`<p>Находим по порядковому номеру ${numFib} число фибоначчи ${calculateTheFibonacciNumber (numFib)}</p>`)
  document.write (`<p>Находим по порядковому номеру ${numFib1} число фибоначчи ${calculateTheFibonacciNumber (numFib1)}</p>`)

  
   








