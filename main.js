const countEl = document.getElementById('char-count');
const btnMinus = document.getElementById('btn-decrease');
const btnPlus = document.getElementById('btn-increase');

if (countEl && btnMinus && btnPlus) {
  let count = parseInt(countEl.textContent, 10) || 12;
  const minCount = 1;
  const maxCount = 32;

  const updateCount = () => {
    countEl.textContent = count;
  };

  btnMinus.addEventListener('click', () => {
    if (count > minCount) {
      count -= 1;
      updateCount();
    }
  });

  btnPlus.addEventListener('click', () => {
    if (count < maxCount) {
      count += 1;
      updateCount();
    }
  });
}
