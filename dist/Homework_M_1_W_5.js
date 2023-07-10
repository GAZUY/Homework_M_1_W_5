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
document.write("<p>==========================================================================================</p>");
document.write("<p>4. \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u043F\u0440\u043E\u0441\u0442\u043E\u0435 \u043B\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E.</p>");
var simple_or_not = 5;
var simple_or_not1 = 6;
function weIdentifyAPrimeNumber(n, i) {
    if (i === void 0) { i = 2; }
    if (n == i && n % i == 0) {
        return 'Простое число';
    }
    else if (n > i && n % i == 0) {
        return 'Составное число';
    }
    else {
        return weIdentifyAPrimeNumber(n, i + 1);
    }
}
document.write("<p>\u041F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E " + simple_or_not + " - " + weIdentifyAPrimeNumber(simple_or_not) + "</p>");
document.write("<p>\u041F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E " + simple_or_not1 + " - " + weIdentifyAPrimeNumber(simple_or_not1) + "</p>");
document.write("<p>==========================================================================================</p>");
document.write("<p>5. \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E \u0434\u043B\u044F \u0432\u044B\u0432\u043E\u0434\u0430 \u0432\u0441\u0435\u0445 \u043C\u043D\u043E\u0436\u0438\u0442\u0435\u043B\u0435\u0439 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430 \u0432 \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430\u044E\u0449\u0435\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435.\n\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u0447\u0438\u0441\u043B\u043E 18 \u2013 \u043C\u043D\u043E\u0436\u0438\u0442\u0435\u043B\u0438 2 * 3 * 3.</p>");
var factorization = 18;
var factorization1 = 124;
var a = [];
function weDecomposeIntoMultipliers(n, a, i) {
    if (a === void 0) { a = []; }
    if (n == i) {
        //@ts-ignore
        a.push(n);
        return a;
    }
    else if (n >= i && n % i == 0) {
        //@ts-ignore
        a.push(i);
        return weDecomposeIntoMultipliers(n / i, a, i);
    }
    else {
        return weDecomposeIntoMultipliers(n, a, i + 1);
    }
}
document.write("<p>\u041C\u043D\u043E\u0436\u0438\u0442\u0435\u043B\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430 " + factorization + " - " + weDecomposeIntoMultipliers(factorization, a = [], 2).join('*') + "</p>");
document.write("<p>\u041C\u043D\u043E\u0436\u0438\u0442\u0435\u043B\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430 " + factorization1 + " - " + weDecomposeIntoMultipliers(factorization1, a = [], 2).join('*') + "</p>");
document.write("<p>==========================================================================================</p>");
document.write("<p>6. \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0447\u0438\u0441\u043B\u043E \u0424\u0438\u0431\u043E\u043D\u0430\u0447\u0447\u0438\n\u043F\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u043E\u043C\u0443 \u043F\u043E\u0440\u044F\u0434\u043A\u043E\u0432\u043E\u043C\u0443 \u043D\u043E\u043C\u0435\u0440\u0443.\n\u0427\u0438\u0441\u043B\u0430 \u0424\u0438\u0431\u043E\u043D\u0430\u0447\u0447\u0438: 1, 1, 2, 3, 5, 8, 13\u2026 \u0420\u044F\u0434 \u043E\u0441\u043D\u043E\u0432\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043D\u0430\n\u0442\u043E\u043C, \u0447\u0442\u043E \u043A\u0430\u0436\u0434\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u0440\u0430\u0432\u043D\u043E \u0441\u0443\u043C\u043C\u0435 \u0434\u0432\u0443\u0445 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0445 \u0447\u0438\u0441\u0435\u043B.\n\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u043F\u043E\u0440\u044F\u0434\u043A\u043E\u0432\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 3 \u2013 \u0447\u0438\u0441\u043B\u043E 2, \u043F\u043E\u0440\u044F\u0434\u043A\u043E\u0432\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 6 \u2013 \u0447\u0438\u0441\u043B\u043E 8.</p>");
var numFib = 5;
var numFib1 = 10;
function calculateTheFibonacciNumber(n) {
    if (n <= 1) {
        return n;
    }
    else {
        return calculateTheFibonacciNumber(n - 1) + calculateTheFibonacciNumber(n - 2);
    }
}
document.write("<p>\u041D\u0430\u0445\u043E\u0434\u0438\u043C \u043F\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u043E\u0432\u043E\u043C\u0443 \u043D\u043E\u043C\u0435\u0440\u0443 " + numFib + " \u0447\u0438\u0441\u043B\u043E \u0444\u0438\u0431\u043E\u043D\u0430\u0447\u0447\u0438 " + calculateTheFibonacciNumber(numFib) + "</p>");
document.write("<p>\u041D\u0430\u0445\u043E\u0434\u0438\u043C \u043F\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u043E\u0432\u043E\u043C\u0443 \u043D\u043E\u043C\u0435\u0440\u0443 " + numFib1 + " \u0447\u0438\u0441\u043B\u043E \u0444\u0438\u0431\u043E\u043D\u0430\u0447\u0447\u0438 " + calculateTheFibonacciNumber(numFib1) + "</p>");
