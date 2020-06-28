let totalAmount = document.getElementById('total-amount');
let arrows = document.querySelectorAll('button');
let spotAmount = document.getElementById('spot-amount');
let frontAmount = document.getElementById('front-amount');
let fullAmount = document.getElementById('full-amount');

let fullCount = 0;
let frontCount = 0;
let spotCount = 0;

function updateCount(e) {
  let id = e.target.id.split('-');
  if (id[0] === 'plus') {
    id[1] === 'full' ? fullCount++ : null;
    id[1] === 'front' ? frontCount++ : null;
    id[1] === 'spot' ? spotCount++ : null;
  } else {
    id[1] === 'full' && fullCount > 0 ? fullCount-- : null;
    id[1] === 'front' && frontCount > 0 ? frontCount-- : null;
    id[1] === 'spot' && spotCount > 0 ? spotCount-- : null;
  }
  document.getElementById('full-amount').innerText = Math.abs(fullCount);
  document.getElementById('front-amount').innerText = frontCount;
  document.getElementById('spot-amount').innerText = spotCount;

  e.target.classList.add('emph');
  setTimeout(() => {
    e.target.classList.remove('emph');
  }, 100);

  updateTotal();
}

function updateTotal() {
  let total = fullCount * 85 + frontCount * 65 + spotCount * 35;
  totalAmount.innerHTML = `${total}`;
}

arrows.forEach((i, index) => {
  i.addEventListener('click', updateCount);
});
