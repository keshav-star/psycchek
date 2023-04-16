import React from 'react'

export default function Footer() {
    return (
        <footer className='d-flex ftr justify-content-around p-3 bg-dark text-light'>
            <div className='ftr-quick'>
                <h4>Quick links</h4>
                <div className="container">
                    <div>About us</div>
                    <div>Contact us</div>
                    <div>Privacy policy</div>
                    <div>Terms and Conditions</div>
                </div>
                {/* This website is developed by Keshav 	&#169; 2023 */}
            </div>
            <div>
                <h4>Actions</h4>
                <div className="container">
                    <div>Sign Up</div>
                    <div>How it works?</div>
                    <div>Register </div>
                </div>
            </div>
            <div>
                <h4>Need Help?</h4>
                <div className='container'>
                    <div>Contact us</div>
                    <span>I</span>
                    <span>fb</span>
                    <span>Tw</span>
                    <div>
                        <input type={'email'} placeholder="E-mail Address">
                        </input>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>

            <div></div>

        </footer>
    )
}
