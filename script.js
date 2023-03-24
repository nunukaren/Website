const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');

  if (name.value === '' || email.value === '' || message.value === '') {
    alert('Please fill in all fields');
  } else {
    alert('Thank you for your message!');
    form.reset();
    const addToCartButtons = document.querySelectorAll('.product__button');
const cartItems = document.querySelector('.cart__items');

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const product = button.parentNode;
    const productName = product.querySelector('.product__name').textContent;
    const productPrice = product.querySelector('.product__price').textContent;

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart__item');
    cartItem.innerHTML = `
      <p class="cart__name">${productName}</p>
      <p class="cart__price">${productPrice}</p>
    `;

    cartItems.appendChild(cartItem);
  });
});

  }
});
