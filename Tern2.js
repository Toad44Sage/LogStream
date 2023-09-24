function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);

  if (a > 10) {
    console.log("a is bigger than 10");
  } else if (a <= 10) {
    console.log("a is less than or equal to 10");
  }

  switch (a) {
    case 5:
      console.log("an example of a special case");
    default:
      if (a > 5) {
        console.log("a is greater than 5");
      } else if (a <= 5) {
        console.log("a is less than or equal to 5");
      }
      if (a % 2 === 0) {
        console.log("a is even");
      } else {
        console.log("a is odd");
      }
  }
}

manyChecks();

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()
