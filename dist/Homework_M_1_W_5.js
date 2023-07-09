document.write("<p>\u0417\u0430\u0434\u0430\u043D\u0438\u0435</p>");
document.write("<p>* \u0412\u043E \u0432\u0441\u0435\u0445 \u0437\u0430\u0434\u0430\u043D\u0438\u044F\u0445 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u043A\u0443\u0440\u0441\u0438\u044E.</p>");
document.write("<p>1. \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E \u0432\u043E\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0447\u0438\u0441\u043B\u0430 \u0432 \u0441\u0442\u0435\u043F\u0435\u043D\u044C.</p>");
var the_number_being_erected = 5;
var degree = 3;
document.write("<p>\u0412\u043E\u0437\u0432\u043E\u0434\u0438\u043C \u0447\u0438\u0441\u043B\u043E " + the_number_being_erected + " \u0432 \u0441\u0442\u0435\u043F\u0435\u043D\u044C " + degree + "</p>");
function weRaiseToADegree(num, n) {
    if (n == 1) {
        return num;
    }
    else {
        return num * weRaiseToADegree(num, n - 1);
    }
}
document.write("<p>\u041F\u043E\u043B\u0443\u0447\u0430\u0435\u043C: " + weRaiseToADegree(the_number_being_erected, degree) + "</p>");
document.write("<p>==========================================================================================</p>");
document.write("<p>2. \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E \u043F\u043E\u0438\u0441\u043A\u0430 \u043D\u0430\u0438\u0431\u043E\u043B\u044C\u0448\u0435\u0433\u043E \u043E\u0431\u0449\u0435\u0433\u043E \u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044F.</p>");
var num1 = 36;
var num2 = 24;
document.write("<p>\u041D\u0430\u0439\u0434\u0435\u043C \u043D\u0430\u0438\u0431\u043E\u043B\u044C\u0448\u0438\u0439 \u043E\u0431\u0449\u0438\u0439 \u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C " + num1 + " \u0438 " + num2 + "</p>");
function calculateTheGCD(a, s) {
    if (s == 0) {
        return a;
    }
    else if (a == 0) {
        return s;
    }
    if (a > s) {
        return calculateTheGCD(a % s, s);
    }
    else {
        return calculateTheGCD(a, s % a);
    }
}
document.write("<p>\u041D\u0430\u0438\u0431\u043E\u043B\u044C\u0448\u0438\u0439 \u043E\u0431\u0449\u0438\u0439 \u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C \u0440\u0430\u0432\u0435\u043D: " + calculateTheGCD(num1, num2) + "</p>");
document.write("<p>==========================================================================================</p>");
document.write("<p>3. \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0446\u0438\u0444\u0440\u044B \u0432 \u0447\u0438\u0441\u043B\u0435.</p>");
var six_digits = 780235;
document.write("<p>\u041D\u0430\u0439\u0434\u0435\u043C \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443\u044E \u0446\u0438\u0444\u0440\u0443 \u0432 \u0447\u0438\u0441\u043B\u0435:" + six_digits + "</p>");
function weFindTheMaximumFigure(n) {
    var max;
    if (n < 10) {
        return n;
    }
    else {
        return Math.max(n % 10, weFindTheMaximumFigure(Math.round(n / 10)));
    }
}
document.write("<p>\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0446\u0438\u0444\u0440\u0430: " + weFindTheMaximumFigure(six_digits) + "</p>");
/*
document.write (`<p></p>`)
Задание
* Во всех заданиях обязательно использовать рекурсию.
1. Написать функцию возведения числа в степень.
2. Написать функцию поиска наибольшего общего делителя.
3. Написать функцию для поиска максимальной цифры в числе.
4. Написать функцию, которая определяет простое ли пере-
данное число.
5. Написать функцию для вывода всех множителей передан-
ного числа в возрастающем порядке.
Например: число 18 – множители 2 * 3 * 3.
6. Написать функцию, которая возвращает число Фибоначчи
по переданному порядковому номеру.
Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на
том, что каждое число равно сумме двух предыдущих чисел.
Например: порядковый номер 3 – число 2, порядковый
*/ 
