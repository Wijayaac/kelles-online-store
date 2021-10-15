import Image from 'next/image'
import Menu from './Menu'
const Navbar = () => {
    return (
        <header className="header">
            <Menu />
            <div className="container header__navigation justify-content-between align-items-center py-3">
                <div className="header__logo">
                    <Image src="/logo.png" width={120} height={60} alt="logo kelles" />
                </div>
                <div className="header__menu">
                    <a className="text-decoration-none fw-bold text-dark" href="/">Home</a>
                    <a className="text-decoration-none fw-bold text-dark" href="/shop.html">Shop</a>
                    <a className="text-decoration-none fw-bold text-dark" href="/product.html">Product</a>
                    <a className="text-decoration-none fw-bold text-danger" href="/sale.html">Sale</a>
                    <a className="text-decoration-none fw-bold text-success" href="/coupon.html">Coupon</a>
                </div>
                <div className="header__icon">
                    <a className="text-dark" href="/">
                        <Image src='/search.svg' height={16} width={16} />
                    </a>
                    <a className="text-dark position-relative" href="/shop.html">
                        <Image src='/heart.svg' height={16} width={16} />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                            1
                            <span className="visually-hidden">unread messages</span>
                        </span></a>
                    <a className="text-dark position-relative" href="/product.html">
                        <Image src='/cart.svg' height={16} width={16} />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                            1
                            <span className="visually-hidden">unread messages</span>
                        </span></a>
                    <a className="text-dark" href="/sale.html"><Image src='/user.svg' height={16} width={16} /></a>
                </div>
            </div>
        </header>
    )
}

export default Navbar