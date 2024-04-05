
import { useNavigate } from 'react-router-dom';


export function  ButtonCheckout( {cartItems} ) {
  const history = useNavigate();

  
  const handleButtonCheckoutClick = () => {
    history('/payment', { state: { cartItems: cartItems } });
  };

  return (
    <div>
      <button className='ceckoutButton' onClick={handleButtonCheckoutClick}>Go To Checkout</button>
    </div>
  );
};

