function main() {
  const log = document.getElementById('log');

  const n = Number(prompt('Enter a positive integer:'));

  if (n > 0 && Number.isInteger(n)) {
    let tableHTML = '<table border="1">';

    for (let i = 1; i <= n; i++) {
      tableHTML += '<tr>';
      for (let j = 1; j <= n; j++) {
        const product = i * j;
        tableHTML += `<td>${product}</td>`;
      }
      tableHTML += '</tr>';
    }

    tableHTML += '</table>';
    log.innerHTML = tableHTML;
  } else {
    log.innerHTML = 'Please enter a positive integer';
  }

}

main();
