import Image from "next/image"

interface Props {

}

const Footer = (props: Props) => {
    return (
        <footer className="footer bg-light">
            <div className="container px-5 py-5">
                <div className="row">
                    <div className="col-md-3">
                        <Image src="/logo.png" alt="kelles logo" height={50} width={110} />
                        <p>184 Main Rd. E, St. Albans VIC 3021, Australia</p>
                        <p>contact@company.com</p>
                        <p>+62 896-5577-1793</p>
                        <div className="footer__socials">
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img" width="0.63em" height="1em"
                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 320 512">
                                <rect x="0" y="0" width="320" height="512" fill="none" stroke="none" />
                                <path
                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                    fill="currentColor" />
                            </svg></a>
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-twitter" viewBox="0 0 16 16">
                                <path
                                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg></a>
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img" width="0.88em" height="1em"
                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512">
                                <rect x="0" y="0" width="448" height="512" fill="none" stroke="none" />
                                <path
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                    fill="currentColor" />
                            </svg></a>
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img" width="0.88em" height="1em"
                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512">
                                <rect x="0" y="0" width="448" height="512" fill="none" stroke="none" />
                                <path
                                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z"
                                    fill="currentColor" />
                            </svg></a>
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img" width="0.75em" height="1em"
                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 384 512">
                                <rect x="0" y="0" width="384" height="512" fill="none" stroke="none" />
                                <path
                                    d="M204 6.5C101.4 6.5 0 74.9 0 185.6C0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4c0-9.3-23.7-29.1-23.7-67.8c0-80.4 61.2-137.4 140.4-137.4c68.1 0 118.5 38.7 118.5 109.8c0 53.1-21.3 152.7-90.3 152.7c-24.9 0-46.2-18-46.2-43.8c0-37.8 26.4-74.4 26.4-113.4c0-66.2-93.9-54.2-93.9 25.8c0 16.8 2.1 35.4 9.6 50.7c-13.8 59.4-42 147.9-42 209.1c0 18.9 2.7 37.5 4.5 56.4c3.4 3.8 1.7 3.4 6.9 1.5c50.4-69 48.6-82.5 71.4-172.8c12.3 23.4 44.1 36 69.3 36c106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
                                    fill="currentColor" />
                            </svg></a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h3>Categories</h3>
                        <p>Men</p>
                        <p>Women</p>
                        <p>Accesories</p>
                        <p>Shoes</p>
                        <p>Denim</p>
                        <p>Dress</p>
                    </div>
                    <div className="col-md-2">
                        <h3>Information</h3>
                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>Terms & Conditions</p>
                        <p>Return & Exchanges</p>
                        <p>Shipping & Delivery</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className="col-md-2">
                        <h3>Useful links</h3>
                        <p>Store Location</p>
                        <p>Latest News</p>
                        <p>My Account</p>
                        <p>Size Guide</p>
                        <p>FAQ</p>
                        <p>Tax</p>
                    </div>
                    <div className="col-md-3">
                        <h3>Newsletter Signup</h3>
                        <p>Subscribe to our newsletter and get 10% off your first purchase</p>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control rounded-0" placeholder="youremail@gmail.com"
                                aria-label="youremail@gmail.com" aria-describedby="button-addon2" />
                            <button className="btn btn-dark rounded-0" type="button" id="button-addon2">Subscribe</button>
                        </div>
                        <Image src="/credit.png" width={150} height={15} alt="credit card" />
                    </div>
                </div>
            </div>
            <div className="footer__copyright container-fluid px-5 bg-white d-flex justify-content-between">
                <p>Copyright &copy; 2021 Kelles. All right reserved. Powered by The5</p>
                <p><a href="#">Shop</a><a href="#">About Us</a><a href="#">Contact Us</a><a href="#">Blog</a></p>
            </div>
        </footer>
    )
}

export default Footer
