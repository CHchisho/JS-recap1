function main() {
  const log = document.getElementById('log');

  // Function to calculate Euclidean distance
  function calculateDistance(x1, y1, x2, y2) {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  }

  // Function to validate input
  function isValidNumber(value) {
    return !isNaN(value) && isFinite(value);
  }

  // Option 1: Four separate prompts
  function getCoordinatesWithSeparatePrompts() {
    const x1 = parseFloat(prompt('Enter x-coordinate of the first point:'));
    if (!isValidNumber(x1)) {
      alert('Error: enter a valid number for x-coordinate of the first point');
      return null;
    }

    const y1 = parseFloat(prompt('Enter y-coordinate of the first point:'));
    if (!isValidNumber(y1)) {
      alert('Error: enter a valid number for y-coordinate of the first point');
      return null;
    }

    const x2 = parseFloat(prompt('Enter x-coordinate of the second point:'));
    if (!isValidNumber(x2)) {
      alert('Error: enter a valid number for x-coordinate of the second point');
      return null;
    }

    const y2 = parseFloat(prompt('Enter y-coordinate of the second point:'));
    if (!isValidNumber(y2)) {
      alert('Error: enter a valid number for y-coordinate of the second point');
      return null;
    }

    return { x1, y1, x2, y2 };
  }

  let coordinates;
  coordinates = getCoordinatesWithSeparatePrompts();

  const { x1, y1, x2, y2 } = coordinates;
  const distance = calculateDistance(x1, y1, x2, y2);

  log.innerHTML = `${distance}`;
}

main();
