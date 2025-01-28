
import downArrow from './assets/arrow-down-s-line.png';
import shoppingBag from './assets/shopping-bag-line.svg';
import heart from './assets/heart-2-line.png';

function NavLinkHome(){

  return(
    <>
    <div className='bg-blue-100 h-10 flex justify-center items-center text-gray-500'>
      <p>Free express shipping to Canada. Duty-free</p>
    </div>
    <div>
      <div className='left_area  text-gray-500'>
        <div className='arrow'>
          <img src={downArrow} alt="" />
          <p>Canada</p>
        </div>
        <p>Our Store</p>
        <p>Sustainability</p>
      </div>

      <div className='heart_area'>
        <div className='heart'>
          <img src={heart} alt="" />
          <p>Favorites</p>
        </div>
        <a href="#" className='sign-in'>Sign In</a>
        <div className='bag'>
          <img src={shoppingBag} alt="" />
          <p>Bag</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default NavLinkHome;