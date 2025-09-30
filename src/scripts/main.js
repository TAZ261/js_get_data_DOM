'use strict';

// write your code here
const populations = document.querySelectorAll('.population');

// Перетворюємо текст у числа та фільтруємо некоректні
const values = Array.from(populations)
  .map((el) => {
    const txt = el.textContent.trim().replace(/,/g, ''); // прибираємо коми
    const num = Number(txt);

    return Number.isFinite(num) ? num : null;
  })
  .filter((num) => num !== null);

const total = values.reduce((sum, num) => sum + num, 0);
const average = values.length > 0 ? Math.round(total / values.length) : 0;

const separator = ',';

document.querySelector('.total-population').textContent = total
  .toLocaleString('en-US')
  .replace(/,/g, separator);

document.querySelector('.average-population').textContent = average
  .toLocaleString('en-US')
  .replace(/,/g, separator);
