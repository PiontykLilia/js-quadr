const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));
alert('You entered '+ a +',' + b + ',' + c + '');

const result = solveQuard(a, b, c);
alert(result);

function solveQuard(a, b, c) {
    const d = culcDiscr(a, b, c);
    if (d < 0) {
        return 'Discriminant is less then zero';
    }else
    if (d === 0) {
        const x = -b / (2 * a);
        return 'There is only one result: x1='
    }else
    if (d > 0) {
        const x1 = (-b + Math.sqrt(d)) / (2 * a);
        const x2 = (-b - Math.sqrt(d)) / (2 * a);
        return 'x1='+x1+' , x2='+x2+' '
    }
}
    function culcDiscr(a, b, c) {
        return b * b - 4 * a * c;
    }
