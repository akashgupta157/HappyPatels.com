import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import '../CSS/Home.css';
import img1 from '../img1.png'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt7f295fb7ba086b4b/63ebb5b941faab583d488ac4/send-birthday-flowers-hero-fy23.jpg?quality=75&auto=webp&optimize={medium}" alt="" style={{height:"300px",objectFit:"cover"}} />
      <div id='imgtext'>
        <div style={{color:"#000000",fontSize:"1.4em",letterSpacing:"3px",fontWeight:"500"}}>MAKE EVERY</div>
        <div style={{color:"#000000",fontSize:"2em",fontFamily:"PlayfairDisplay, serif",fontWeight:"900",letterSpacing:"2px"}}>BIRTHDAY SPECIAL</div>
        <div style={{color:"#000000",fontSize:"1em",fontWeight:"500"}}>We love birthdays like we love flowers.Find everything</div>
        <div style={{color:"#000000",fontSize:"1em",fontWeight:"500"}}>from party favors to personalized gifts right here.</div>
        <div style={{backgroundColor:"white",width:"30%",fontWeight:"900",padding:"3px",marginLeft:"35%",marginTop:"10px"}}>SHOP NOW</div>
      </div>
      <div id='imgb'>
        <div style={{fontSize:"18px",fontWeight:"900",marginTop:"20px"}}>FIND THE PERFECT GIFT</div>
        <div style={{display:"grid"}}>
          <label htmlFor="">Where is it going?</label>
          <input type="number" placeholder='Delivery zip code' />
        </div>
        <div style={{display:"grid"}}>
          <label htmlFor="">Occasion</label>
          <select name="" id="">
          <option>BIRTHDAY</option>
          <option>SYMPATHY</option>
          <option>OCCASIONS</option>
          <option>FLOWERS</option>
          <option>PLANTS</option>
          <option>GIFTS BASKETS & FOOD</option>
          <option>GIFTS & MORE</option>
          <option>SAME-DAY DELIVERY</option>
          <option>SALE</option>
          <option>COMMUNITY</option>
          </select>
        </div>
        <button>FIND A GIFT NOW</button>
      </div>
      <br /><br /><br /><br /><br />
      <div style={{textAlign:"center"}}>
        <span id='p1'>Send Flowers & Exclusive Gifts</span>
        <br /><br />
      </div>
      <div id='ban'>
        <div>
          <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt3595a4f11ad56e50/63d92b2699f0c910e171a33c/flower-delivery-same-day-silo-191167xl-260x284.jpg?quality=75&auto=webp&optimize={medium}" alt="" />
          <span>Same-Day Flower Delivery</span>
        </div>
        <div>
          <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blta2748b9a4b476529/63d304315ba46f75ddba03cf/sympathy-flowers-silo-191166XL-260x284.jpg?quality=75&auto=webp&optimize={medium}" alt="" />
          <span>Sympathy</span>
        </div>
        <div>
          <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt867d5477b7adc192/627be2023debbf3afdd2ea1e/get-well-flowers-146761-silo-260x284.jpg?quality=75&auto=webp&optimize={medium}" alt="" />
          <span>Get Well</span>
        </div>
        <div>
          <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt76e3b18a47e939d8/627be2672bec9b34ea68c61c/blooming-love-161132-silo-v3_260x284.jpeg?quality=75&auto=webp&optimize={medium}" alt="" />
          <span>Love & Romance</span>
        </div>
        <div>
          <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt7bc6d66cf28f5b49/625f1ce82777714c51b31360/chocolate-covered-strawberries-delivery-silo-192552m_260x284_(2).jpeg?quality=75&auto=webp&optimize={medium}" alt="" />
          <span>Chocolate Covered Strawberries</span>
        </div>
        <div>
          <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt1cadd11290759d19/63d3046a5d9574542d40a84e/just-because-flowers-silo-191168xl-260x284.jpg?quality=75&auto=webp&optimize={medium}" alt="" />
          <span>Just Because</span>
        </div>
      </div>
      <br /><br />
      <div style={{textAlign:"center"}}>
        <span id='p1'>Explore Our Self-Care Essentials</span>
        <br /><br />
      </div>
      <div id='ban'>
        <div>
          <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt83c25a21462cccea/63a61e2e9233961262fbbcfe/spa-gift-basket-silo-mk012144-260x284.jpg?quality=75&auto=webp&optimize={medium}" alt="" />
          <span>Spa Gifts</span>
        </div>
        <div>
          <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8ccd8ba5f57bb6c5/63a61e6a66600623830ad5b8/candle-gifts-lanterns-silo-mk021324-260x284.jpg?quality=75&auto=webp&optimize={medium}" alt="" />
          <span>Candles & Lanterns</span>
        </div>
        <div>
          <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt204357e08752a3bc/63a61ea27760ab1f00affbb1/gifts-under-25-silo-mk018491-260x284.jpg?quality=75&auto=webp&optimize={medium}" alt="" />
          <span>Gifts Under $25</span>
        </div>
        <div>
          <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt0c60554654188a74/63a61ee81d30ec7c2c531c79/zen-gifts-for-relaxation-silo-mkq016474-260x284.jpg?quality=75&auto=webp&optimize={medium}" alt="" />
          <span>Zen & Relaxation</span>
        </div>
        <div>
          <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt9f97ed604bf1a128/63a61f39609d40109bf54fe8/lavender-flowers-gifts-silo-155227-260x284.jpg?quality=75&auto=webp&optimize={medium}" alt="" />
          <span>Lavender Gifts</span>
        </div>
        <div>
          <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt590656ac79c533bf/63a630b99233961262fbbd0a/cozy-comfort-gifts-silo-mk005330-260x284.jpg?quality=75&auto=webp&optimize={medium}" alt="" />
          <span>Cozy Comfort</span>
        </div>
      </div>
      <br /><br />
      <div id='imgq'>
        <div>
          <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8eb26a7c8e341856/63ed0d369b18a175e2431aee/best-selling-flowers-tier-fy23-v2.jpg?quality=60&auto=webp&optimize={medium}" alt="" />
          <span>Best Sellers</span>
        </div>
        <div>
          <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8f5b6ec0917f2c05/63ebb95e346bf05048c801ad/house-plants-tier-fy23.jpg?quality=60&auto=webp&optimize={medium}" alt="" />
          <span>House Plants</span>
        </div>
      </div>
      <br /><br />
      <img src={img1} alt="" style={{margin:"auto"}} />
        <br /><br /><br />
      <div id='box'>
        <br /><br />
        <span id='p1'>Some of the Great Things Our Customers Say About Us </span>
        <br /><br /><br />
      <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <div className='box1'>
          <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt4c9be4e2d955776a/602a81580aba282006983f75/hp-reviews-final-167891.png?quality=70&auto=webp&optimize={medium}" alt="" />
          <div style={{display:"flex",margin:"auto",marginTop:"20px",width:"38%"}}>
            <p className='star'>★</p>
            <p className='star'>★</p>
            <p className='star'>★</p>
            <p className='star'>★</p>
            <p className='star'>★</p>
          </div>
          <span style={{fontSize:"20px",fontWeight:"800"}}>Beautiful</span>
          <p style={{fontSize:"18px",marginTop:"20px"}}>"I bought these for my Nana’s birthday she said they were amazingly beautiful!"</p>
          <p style={{fontSize:"18px",fontWeight:"800",margin:"auto",marginTop:"10px",width:"29%"}}>- Pamela</p>
        </div>
        <div className="vl"></div>
        <div className='box1'>
          <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt2b874f93791fce4a/62b09064482ba357e65ddbe8/web_icons_125x125_ocean_breeze_orchids.png?quality=70&auto=webp&optimize={medium}" alt="" />
          <div style={{display:"flex",margin:"auto",marginTop:"20px",width:"38%"}}>
            <p className='star'>★</p>
            <p className='star'>★</p>
            <p className='star'>★</p>
            <p className='star'>★</p>
            <p className='star'>★</p>
          </div>
          <span style={{fontSize:"20px",fontWeight:"800"}}>Best Flowers</span>
          <p style={{fontSize:"18px",marginTop:"20px"}}>"These flowers are beautiful and just as vibrant as the picture. One of the most beautiful bouquets I have ever seen!"</p>
          <p style={{fontSize:"18px",fontWeight:"800",margin:"auto",marginTop:"10px",width:"32%"}}>- Michelle</p>
        </div>
        <div className="vl"></div>
        <div className='box1'>
          <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blte0c04d8be69858b7/6259b075b9aa584a4e32649f/web_icons_125x125_classic_budding_rose.png?quality=70&auto=webp&optimize={medium}" alt="" />
          <div style={{display:"flex",margin:"auto",marginTop:"20px",width:"38%"}}>
            <p className='star'>★</p>
            <p className='star'>★</p>
            <p className='star'>★</p>
            <p className='star'>★</p>
            <p className='star'>★</p>
          </div>
          <span style={{fontSize:"20px",fontWeight:"800"}}>Very Happy!</span>
          <p style={{fontSize:"18px",marginTop:"20px"}}>"I love how the recipient can plant the roses and enjoy them for a long time. The plant is healthy and the candle I ordered with it smells great!"</p>
          <p style={{fontSize:"18px",fontWeight:"800",margin:"auto",marginTop:"10px",width:"29%"}}>- Betty</p>
        </div>
        <div className="vl"></div>
        <div className='box1'>
          <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt854645311f2a8ec4/621cf518ba043c4a2c4a9a54/web_icons_125x125_Gourmet_Drizzled_Berries-v2.png?quality=70&auto=webp&optimize={medium}" alt="" />
          <div style={{display:"flex",margin:"auto",marginTop:"20px",width:"38%"}}>
            <p className='star'>★</p>
            <p className='star'>★</p>
            <p className='star'>★</p>
            <p className='star'>★</p>
            <p className='star'>★</p>
          </div>
          <span style={{fontSize:"20px",fontWeight:"800"}}>Sweet Anniversary</span>
          <p style={{fontSize:"18px",marginTop:"20px"}}>"The strawberries arrived on time and were fantastic as always. Definitely made my anniversary a lot sweeter!"</p>
          <p style={{fontSize:"18px",fontWeight:"800",margin:"auto",marginTop:"10px",width:"29%"}}>- Brain</p>
        </div>
      </div>
        <br /><br />
      </div>
        <br /><br />
       <Footer/>
    </div>
  )
}
