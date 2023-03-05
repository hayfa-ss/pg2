<div class="cart">
  <h2>Panier</h2>
  <div class="cart-item">
    <span>Nom du produit</span>
    <span>Quantité</span>
    <span>Prix unitaire</span>
    <span>Prix total</span>
    <button onClick="removeItem()">Supprimer</button>
  </div>
  <div class="cart-item">
    <span>Produit 1</span>
    <span><input type="number" value="1" min="1" onChange="updateQuantity()"></span>
    <span>10.00€</span>
    <span>10.00€</span>
    <button onClick="removeItem()">Supprimer</button>
  </div>
  <div class="cart-item">
    <span>Produit 2</span>
    <span><input type="number" value="1" min="1" onChange="updateQuantity()"></span>
    <span>15.00€</span>
    <span>15.00€</span>
    <button onClick="removeItem()">Supprimer</button>
  </div>
  <div class="cart-total">
    Total : <span id="total-price">25.00€</span>
  </div>
</div>
function addToCart(productName, quantity, price) {
  // récupérer les informations du panier
  var cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // ajouter les informations du produit
  cart.push({
    name: productName,
    quantity: quantity,
    price: price
  });
  
  // mettre à jour le nombre total de produits dans le panier
  var totalItems = cart.reduce(function(total, item) {
    return total + item.quantity;
  }, 0);
  
  // enregistrer les informations du panier dans le stockage local
  localStorage.setItem('cart', JSON.stringify(cart));
  
  // mettre à jour l'affichage du nombre total de produits dans le panier
  document.getElementById('cart-count').innerHTML = totalItems;
}
