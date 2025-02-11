function calculateSum() {
  const start = parseInt(document.getElementById('start').value);
  const end = parseInt(document.getElementById('end').value);
  const functionStr = document.getElementById('function').value;

  let sum = 0;
  for (let i = start; i <= end; i++) {
    const result = eval(functionStr.replace('x', i));
    sum += result;
  }

  document.getElementById('result').querySelector('p').textContent = ' ' + sum;
}