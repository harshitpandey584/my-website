import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/b.png'; /*<img src={dImage} alt="Image" /> infront of bordertext3*/
import cImage from '../assets/c.png';
import dImage from '../assets/d.png';
import AnalyticsImage from '../assets/Analytics.gif';
import growthImage from '../assets/growth.png';
import minimalImage from '../assets/minimal.png';
import '../pages/Home.css';


const Home = () => (
<home className='home'>
  <div classname = "page-container">      
  <p className="left-paragraph"><div className='container'> 
  <p className="text">
    <h1>Your Retail store online in<p className='textColor'>seconds!</p></h1>
    <p>Your Business, Our code, Your App. Get yourself online with your<br />
      own order management system, website and mobile<br/>application
      in just a few clicMailboxLinkks.</p>
      
    <ul>
    
      <li>Your Store Online in a few clicks with minimal documentation.</li>
      <li>Add Services and features as you grow your business.</li>
      <li>Billing to Complete Mobile Application with AikTech.</li>
    </ul>
    
  </p><img src={logo} alt="Image" className="b.png image"  style={{ width: '40%', height: 'auto' }} /></div>  
  <p className='textColor2'>
  <div className="border-text1">
  <nav>
    <ul>
    <li><Link to="/getstarted">Get started</Link></li>
    <li></li>
    <li><Link to="/Contact_Us"><div className="border-text4">Contact Us</div></Link></li>
    </ul>
  </nav>
    </div>  
    
  </p></p>



  <p className='center-align'>
  Why Should You Use Us?<br/><br/>
 <div className='border-text6'>
  <div className="image-container">
  <p>Analytics</p>
  <img src={AnalyticsImage} alt="Image" className="Analytics.png" style={{width: '50%', height: '50%'}}/>
  <p>Get started with the most advanced Order Management System.</p>
  </div>
  <div className="image-container">
  <p>Minimal Documentation</p>
  <img src={growthImage} alt="Image" className="growth.png" style={{width: '50%', height: '50%'}}/>
  <p>Minimal Documention</p>
  </div>
  <div className="image-container">
  <p>10x Growth</p>
  <img src={minimalImage} alt="Image" className="minimal.png" style={{width: '50%', height: '50%'}}/>
  <p>Your Store Online in a few clicks.</p>
  </div>
  
  </div></p>
<hr color='blue'></hr>
  <p className='center-align'>
  Your ideas into reality in 3 easy steps<br/><br/>
  AI fits reusable features together based on a template you choose so our developers can focus
  <br/>on creating the custom features only your business needs. A1 also calculates a price based on the features
  <br/>you choose and gives you fixed costs and clear timelines
  </p><br/><br/><br/><br/>

  <div className="border-text3">
  <p className='right-align'> 
  Plan Selection<br/>
  Select your plan. Upload your product<br/> inventory in an excel sheet<br/> and 
  you are ready to sell <br/>through your app and website.
  </p>
  <p className='center-align'>
  Business Details<br/>
  Add your Business details<br/>- Name, Logo, Address.
  </p>
  <p className='left-align'>
  Signup<br/>
  Sign Up with your email address<br/>Or mobile number.
  </p></div>

  <div className="border-text2">
  <p className='center-align'>
  <h1>Interested to work with us ?</h1>
  Send a line here get and update daily</p><br/>

  <a href="mailto:care@AikTech.in" className="mailbox-link"><div className="border-text5">
  <p className='textColor2'>care@AikTech.in</p></div></a>
     
  </div>
  </div>
  </home>
  )

export default Home;