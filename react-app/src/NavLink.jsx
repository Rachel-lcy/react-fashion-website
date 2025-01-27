import  { useState } from 'react';
import { Link } from 'react-router-dom';
import search from './assets/search-line.svg';
import closeIcon from './assets/close-line.png';

function NavLink(){

  const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = ()=> {
      setMenuOpen(!menuOpen);
      console.log("Menu state:", !menuOpen);
    }
  return(
    <>
    <div>
        <ul className={`nav-lists ${menuOpen ? "show" : ""}`} >
          <li>
            <Link to='/new'><span href="#" className='dropdown-btn' id='nav-item'>New</span></Link>
              <div className='dropdown-content'>
                <div>
                  <a href="">All New</a>
                  <a href="">New This Week</a>
                  <a href="">The Collection</a>
                  <a href="">Jewelry</a>
                </div>
                <div>
                  <a href="" >New Dresses</a>
                  <a href="" >New Tops</a>
                  <a href="" >New Denim</a>
                  <a href="" >New Sweaters</a>
                  <a href="" >New Outwear</a>
                  <a href="" >New Shoes</a>
                  <a href="" >New Bags</a>
                </div>
                <div>
                  <a href="" >Picked For You</a>
                  <a href="" >The Winter Edit</a>
                  <a href="" >Party Time</a>
                  <a href="" >Romance Yourself</a>
                </div>
              </div>
          </li>

          <li>
            <Link to='/dresses'><span href="#" className='dropdown-btn' id='nav-item'>Dresses</span></Link>
          </li>
          <li>
            <Link to='/clothing'><span href="#" className='dropdown-btn' id='nav-item'>Clothing</span></Link>
          </li>
          <li>
          <Link to='/tops'><span href="#" className='dropdown-btn' id='nav-item'>Tops</span></Link>
          </li>
        <li>
          <Link to='/jeans'><span href="#" className='dropdown-btn' id='nav-item'>Jeans</span></Link>
        </li>
        <li>
          <Link to='/sweaters'><span href="#" className='dropdown-btn' id='nav-item'>Sweaters</span></Link>
        </li>
        <li>
          <Link to='/weddings'><span href="#" className='dropdown-btn' id='nav-item'>Weddings</span></Link>
        </li>
        <li>
          <Link to='/shoes'><span href="#" className='dropdown-btn' id='nav-item'>Shoes</span></Link>
        </li>
        <li>
          <Link to='/bags'><span href="#" className='dropdown-btn' id='nav-item'>Bags</span></Link>
        </li>
        <li>
          <Link to='/workwear'><span href="#" className='dropdown-btn' id='nav-item'>Workwear</span></Link>
        </li>
        <li>
          <Link to='/edits'><span href="#" className='dropdown-btn' id='nav-item'>Edits</span></Link>
        </li>
        </ul>
      </div>

      <div className={`fullscreen-menu ${menuOpen ? "show" : ""}`}>

        <div className="close-icon" onClick={toggleMenu}>
          <img src={closeIcon} alt="Close" />
        </div>

        <div className='nav_search'>
          <img src={search} alt="" />
          <p>Search</p>
        </div>

        <ul className={`extra-menu ${menuOpen ? "show" : ""}`}>
          <li><a href="#">Sign in</a></li>
          <li><a href="#">Shipping to: CA</a></li>
          <li><a href="#">Stores</a></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">Favorites</a></li>
          <li><a href="#">Order lookup</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

    </>
  )
}

export default NavLink