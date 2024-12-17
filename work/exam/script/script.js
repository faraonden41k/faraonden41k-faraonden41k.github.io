document.getElementById('num').addEventListener('blur', function () {
  const input = this.value
  const numbers = input.split(',').map(Number) 
  const sum = numbers.reduce((a, b) => a + b, 0)
  const average = sum / numbers.length
  document.getElementById(
    'average'
  ).textContent = `Середнє арифметичне: ${average}`
})
