function main() {
  const log = document.getElementById('log');
  
  const n = Number(prompt('Enter a natural number:'));
  
  if (n > 0 && Number.isInteger(n)) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    log.innerHTML = `The sum of natural numbers from 1 to ${n} is ${sum}`;
  } else {
    log.innerHTML = 'Please enter a positive integer';
  }

}

main();
