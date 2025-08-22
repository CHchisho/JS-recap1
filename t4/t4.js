function main() {
  const log = document.getElementById('log');

  var score = Number(prompt('Enter your score:'));

  if (score >= 0 && score <= 100) {
    if (score <= 39) {
      log.innerHTML = 'Your grade is 0';
    } else if (score <= 51) {
      log.innerHTML = 'Your grade is 1';
    } else if (score <= 63) {
      log.innerHTML = 'Your grade is 2';
    } else if (score <= 75) {
      log.innerHTML = 'Your grade is 3';
    } else if (score <= 87) {
      log.innerHTML = 'Your grade is 4';
    } else {
      log.innerHTML = 'Your grade is 5';
    }
  } else {
    log.innerHTML = 'Invalid score';
  }
}

main();
