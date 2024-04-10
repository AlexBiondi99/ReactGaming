export function ButtonCart({ gameData }) {
  function addToCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cart.findIndex((item) => item.id === gameData.id);
    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({ ...gameData, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  return (
    <button className="addToCart" onClick={addToCart}>
       <h2 className="textButtonCart">Add to cart</h2>
       <svg fill="#000000" width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8,3V7H21l-2,7H8v2H18a1,1,0,0,1,0,2H7a1,1,0,0,1-1-1V4H4A1,1,0,0,1,4,2H7A1,1,0,0,1,8,3ZM6,20.5A1.5,1.5,0,1,0,7.5,19,1.5,1.5,0,0,0,6,20.5Zm9,0A1.5,1.5,0,1,0,16.5,19,1.5,1.5,0,0,0,15,20.5Z"/>
       <path xmlns="http://www.w3.org/2000/svg" d="M8,3V7H21l-2,7H8v2H18a1,1,0,0,1,0,2H7a1,1,0,0,1-1-1V4H4A1,1,0,0,1,4,2H7A1,1,0,0,1,8,3ZM6,20.5A1.5,1.5,0,1,0,7.5,19,1.5,1.5,0,0,0,6,20.5Zm9,0A1.5,1.5,0,1,0,16.5,19,1.5,1.5,0,0,0,15,20.5Z"/>
       </svg>
     
    </button>
  );
}
