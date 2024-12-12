let cart = []

function addToCart(propertyName, propertyPrice) {
  const property = {
    name: propertyName,
    price: propertyPrice,
  }

  cart.push(property)
  updateCartCount()
}

function updateCartCount() {
  const cartCount = document.getElementById('cart-count')
  cartCount.textContent = cart.length
}

function toggleCart() {
  alert("Обрані об'єкти: " + cart.map(item => item.name).join(', '))
}
