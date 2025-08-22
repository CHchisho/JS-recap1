function main() {
  const log = document.getElementById('log');

  const a = prompt('Enter the length of the first side:');
  const b = prompt('Enter the length of the second side:');
  const c = prompt('Enter the length of the third side:');

  if (a === b && b === c) {
    log.innerHTML = 'The triangle is equilateral';
  } else if (a === b || b === c || a === c) {
    log.innerHTML = `${'The triangle is isosceles'}`;
  } else {
    log.innerHTML = `${'The triangle is scalene'}`;
  }
}

main();
