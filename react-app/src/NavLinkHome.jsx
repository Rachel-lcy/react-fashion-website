
import downArrow from './assets/arrow-down-s-line.png';
import shoppingBag from './assets/shopping-bag-line.svg';
import heart from './assets/heart-2-line.png';

function NavLinkHome(){
 
  return(
    <div>
              <div className='left_area'>
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
  );
}

export default NavLinkHome;