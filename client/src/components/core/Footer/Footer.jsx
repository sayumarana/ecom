import React from 'react';
import './footer.css';

function Footer(props) {
    return (
        <footer className="page-footer">
                <div className="wrapper">
                    <div className="content">
                        <h5> Mother Heals Herb Shop</h5>
                        <p>Ranked the Best Online Wellness Shop 2018-2019</p>
                    </div>
                    <div className="social">
                        <h5>Follow Us</h5>
                        <ul className="lol">
                            <li>
                                <a href="https://www.instagram.com " className="fab fa-instagram icon" target="_blank ">Instagram</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com " className="fab fa-instagram icon" target="_blank ">Instagram</a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
        </footer>
    );
}

export default Footer;


