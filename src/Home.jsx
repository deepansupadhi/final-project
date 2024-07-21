import React from 'react'
import'./Home.css'
function Home() {
  return (
    <div className="container">
      <div className="brand-logos">
        <img src="https://ii1.pepperfry.com/assets/cf2e9556-3786-4cfe-ab13-79dc75a92479.jpg" alt="" />
      </div>
    <div className="offers">
      <div className="offer">
        <p>Mania Madness</p>
        <p>FURNITURE</p>
        <p>Starting From Rs. 599</p>
        <button>Shop Now</button>
      </div>
      <div className="offer">
        <p>Mania Madness</p>
        <p>HOME & KITCHEN</p>
        <p>Starting From Rs. 69</p>
        <button>Shop Now</button>
      </div>
      <div className="offer">
        <p>SPACEWOOD</p>
        <p>Transforming your home</p>
        <button>Explore More</button>
      </div>
    </div>
    <div className="signup">
      <p>Sign up & get instant credits worth Rs.10,000</p>
      <button>SIGN UP NOW</button>
    </div>
    <div className="shop-deals">
      <p>Shop What The Fry Deals</p>
      <div className="deal-items">
        {/* Add deal items here */}
      </div>
    </div>
  </div>
  )
}

export default Home
