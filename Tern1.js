let a = Math.floor(Math.random() * 100);
console.log(`a = ${a}`);

if (a > 10) {
  if (a > 5) {
    console.log(2 * a + 1);
  } else {
    console.log(5);
  }
} else if (a < 3) {
  console.log(1);
} else if (a > 6) {
  console.log(5);
} else if (a % 2 == 0) {
  console.log(6);
} else {
  console.log(7);
}

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()
