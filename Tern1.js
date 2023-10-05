let a = Math.floor(Math.random() * 100);
let result;
if (a > 10) {
  result = a;
} else {
  result = a * 2;
}

if (result > 5) {
  result = 2 * a + 1;
} else {
  if (a < 3) {
    result = 1;
  } else {
    result = 2 * (a - 2);
  }

  if (result > 4) {
    result = 5;
  } else {
    if (a % 2 === 0) {
      result = 6;
    } else {
      result = 7;
    }
  }
}
console.log(a);
console.log(result);

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()
