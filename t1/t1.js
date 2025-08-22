function main() {
  const celsius = prompt('Enter a temperature in Celsius:');
  const fahrenheit = (celsius * 9 / 5) + 32;
  const log = document.getElementById('log');
  log.innerHTML = `The temperature in Fahrenheit is ${fahrenheit}`;
}

main();
