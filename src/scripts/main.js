'use strict';

// write your code here
const populations = document.querySelectorAll('.population');

const values = Array.from(populations).map((el) => {
  return Number(el.textContent.replace(/,/g, ''));
});

const total = values.reduce((sum, num) => sum + num, 0);
const average = total / values.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
