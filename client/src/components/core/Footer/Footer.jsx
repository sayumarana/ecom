import React from 'react';
import './footer.css';

function Footer(props) {
    return (
        <footer className="page-footer">
                <div className="wrapper">
                    <div className="content">
                        <h5 className="shoptitle"> Mother Heals Herb Shop</h5>
                        <p>Ranked the Best Online Wellness Shop 2018-2019</p>
                    </div>
                    <div className="social">
                        <h5>Follow Us</h5>
                        <ul className="socialsite">
                            <li>
                                <a href="https://instagram.com" className="socialtag" target="_blank ">Instagram: @motherheals<img alt="instagram" src="/images/instagram.png" className="socialtag2"/></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com " className="socialtag" target="_blank ">Facebook: @motherheals<img alt="facebook" src="/images/facebook.png" className="socialtag1"/></a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
        </footer>
    );
}

export default Footer;


