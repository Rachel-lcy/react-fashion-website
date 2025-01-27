import  { useState } from 'react';
import hamburger from './assets/menu-add-line (1).png';
import downArrow from './assets/arrow-down-s-line.png';
import search from './assets/search-line.svg';
import shoppingBag from './assets/shopping-bag-line.svg';
import heart from './assets/heart-2-line.png';

function NavLinkHome(){
  const [menuOpen, setMenuOpen] = useState(false);
      const toggleMenu = ()=> {
        setMenuOpen(!menuOpen);
        console.log("Menu state:", !menuOpen);
      }
  return(
    <div>
      <div className='hamburger_logo' >
                <img
                src={hamburger} alt=""
                className='hamburger'
                id='hamburger-menu'
                aria-hidden="true"
                onClick={toggleMenu}
                />
              </div>

              <div className='left_area'>
                <div className='arrow'>
                  <img src={downArrow} alt="" />
                  <p>Canada</p>
                </div>
                <p>Our Store</p>
                <p>Sustainability</p>
              </div>

              <div className='search_bag'>
                      <img src={search} alt="" className='search'/>
                      <img src={shoppingBag} alt="" className='bag'/>
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