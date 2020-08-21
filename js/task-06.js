let input;
let total = 0;
do {
  input = prompt('Введите число');
  if ((input = Number(input))) {
    total = total + input;
  } else if ((input = Number.isNaN(input))) {
    alert('Было введено не число, попробуйте еще раз');
  }
  input = prompt('Введите число');
} while (input !== null);
alert(`Общая сумма введенных чисел ${total}`);
