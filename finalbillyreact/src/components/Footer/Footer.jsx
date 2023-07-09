import teleImg from "../../assets/images/telegram_img.svg";
import twitterImg from "../../assets/images/tweeter.png";

const Footer = () => {
  // prettier-ignore
  return (
    <footer>
        <div className="container">
            <div className="row footerSection">
                <div className="col-12 text-center">
                    <ul className="socialLinks">
                        <li><a href="https://t.me/Billyherringtoncoin"><img src={teleImg} alt="telegram"/></a></li>
                        <li><a href="https://twitter.com/BillyHerrincoin"><img src={twitterImg} alt="twitter"/></a></li>
                    </ul>

                </div>
                <div className="col-lg-12 text-center">
                    <p>Join our Telegram group, follow us on Twitter, and visit our website for the latest updates, community interactions, and engaging discussions. Get ready to experience the joy, laughter, and potential gains that come with being part of the Billy Herrington Coin family!</p>
                    <div className="social">
                        <a href="#"></a>
                    </div>
                    <div className="col-12 col-md-12 ftrLogo text-center">
                        <i className="fa-solid fa-envelope"></i> admin@billyherrington.com
                    </div>
                </div>
                
                
            </div>
            <div className="row colAlignCenter">
            
                <div className="col-12 col-md-12 ftrLogo text-center">
                    <a href="index.html" className="fLogo">ALL RIGHTS RESERVED BILLY HERRINGTON<span>© 2023</span></a>
                </div>
            
            
            </div>
        </div>
    </footer>
  )
};

export default Footer;
