import Image from "next/image"
import { MenuList } from "../constants"
const Menu = () => {
    return (
        <>
            {/* Desktop menu */}
            <div className="bg-light">
                <div className="container row row-cols-1 row-cols-md-3 gx-0 text-center">
                    <div className="col">
                        <p className="d-inline-block text-muted header__top">
                            <Image src='/phone.svg' height={12} width={12} />+000-0000-0000
                        </p>
                        <p className="d-inline-block text-muted header__top">
                            <Image src='/mail.svg' width={12} height={12} /> testing@gmail.com
                        </p>
                    </div>
                    <div className="col">
                        <p className="text-muted  header__top">Summer sale discount <span className="text-danger">50%</span> <b>Shop
                            Now</b> </p>
                    </div>
                    <div className="col d-flex justify-content-center justify-content-md-end align-items-center">
                        <div className="dropdown mx-1">
                            <a className="dropdown-toggle text-decoration-none text-muted d-inline-block  header__top"
                                type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Language
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">English</a></li>
                                <li><a className="dropdown-item" href="#">Indonesia</a></li>
                            </ul>
                        </div>
                        <div className="dropdown mx-1">
                            <a className="dropdown-toggle text-decoration-none text-muted d-inline-block  header__top"
                                type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Currency
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">
                                    <Image src='/us-flag.svg' width={30} height={16} /> USD</a></li>
                                <li><a className="dropdown-item" href="#">
                                    <Image src='/id-flag.svg' height={16} width={30.2} /> IDR</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            <div className="container header__mobile">
                <Image src='/logo.png' width={120} height={60} alt="logo kelles" />
                <button className="btn btn-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample">
                    <Image src='/nav-menu.svg' height={36} width={36} />
                </button>

                <div className="offcanvas offcanvas-start" tabIndex={1} id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <nav className="header__pills">
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                    aria-selected="true">Home</button>
                                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
                                    aria-selected="false">Category</button>
                            </div>
                        </nav>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                                aria-labelledby="nav-home-tab">
                                <div className="accordion" id="accordionMenu">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingShop">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseShop"
                                                aria-expanded="false" aria-controls="collapseShop">
                                                Shop
                                            </button>
                                        </h2>
                                        <div id="collapseShop" className="accordion-collapse collapse"
                                            aria-labelledby="headingShop" data-bs-parent="#accordionExample">
                                            <div className="accordion-body p-0">
                                                <div className="list-group rounded-0">
                                                    <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                                                        The current link item
                                                    </a>
                                                    {MenuList.shop.map((item) => (
                                                        <a href={item.link} key={item.id} className="list-group-item" >
                                                            {item.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingProduct">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseProduct"
                                                aria-expanded="false" aria-controls="collapseProduct">
                                                Product
                                            </button>
                                        </h2>
                                        <div id="collapseProduct" className="accordion-collapse collapse"
                                            aria-labelledby="headingProduct" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>This is the third item's accordion body.</strong> It is hidden by
                                                default, until the collapse plugin adds the appropriate classes that we use
                                                to style each element. These classes control the overall appearance, as well
                                                as the showing and hiding via CSS transitions. You can modify any of this
                                                with custom CSS or overriding our default variables. It's also worth noting
                                                that just about any HTML can go within the <code>.accordion-body</code>,
                                                though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingLookbook">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseLookbook"
                                                aria-expanded="false" aria-controls="collapseLookbook">
                                                Lookbook
                                            </button>
                                        </h2>
                                        <div id="collapseLookbook" className="accordion-collapse collapse"
                                            aria-labelledby="headingLookbook" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>This is the third item's accordion body.</strong> It is hidden by
                                                default, until the collapse plugin adds the appropriate classes that we use
                                                to style each element. These classes control the overall appearance, as well
                                                as the showing and hiding via CSS transitions. You can modify any of this
                                                with custom CSS or overriding our default variables. It's also worth noting
                                                that just about any HTML can go within the <code>.accordion-body</code>,
                                                though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingBlog">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseBlog"
                                                aria-expanded="false" aria-controls="collapseBlog">
                                                Blog
                                            </button>
                                        </h2>
                                        <div id="collapseBlog" className="accordion-collapse collapse"
                                            aria-labelledby="headingBlog" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>This is the third item's accordion body.</strong> It is hidden by
                                                default, until the collapse plugin adds the appropriate classes that we use
                                                to style each element. These classes control the overall appearance, as well
                                                as the showing and hiding via CSS transitions. You can modify any of this
                                                with custom CSS or overriding our default variables. It's also worth noting
                                                that just about any HTML can go within the <code>.accordion-body</code>,
                                                though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSearch">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseSearch"
                                                aria-expanded="false" aria-controls="collapseSearch">
                                                Search
                                            </button>
                                        </h2>
                                        <div id="collapseSearch" className="accordion-collapse collapse"
                                            aria-labelledby="headingSearch" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>This is the third item's accordion body.</strong> It is hidden by
                                                default, until the collapse plugin adds the appropriate classes that we use
                                                to style each element. These classes control the overall appearance, as well
                                                as the showing and hiding via CSS transitions. You can modify any of this
                                                with custom CSS or overriding our default variables. It's also worth noting
                                                that just about any HTML can go within the <code>.accordion-body</code>,
                                                though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingLogin">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseLogin"
                                                aria-expanded="false" aria-controls="collapseLogin">
                                                Login / Register
                                            </button>
                                        </h2>
                                        <div id="collapseLogin" className="accordion-collapse collapse"
                                            aria-labelledby="headingLogin" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>This is the third item's accordion body.</strong> It is hidden by
                                                default, until the collapse plugin adds the appropriate classes that we use
                                                to style each element. These classes control the overall appearance, as well
                                                as the showing and hiding via CSS transitions. You can modify any of this
                                                with custom CSS or overriding our default variables. It's also worth noting
                                                that just about any HTML can go within the <code>.accordion-body</code>,
                                                though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingHelp">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseHelp"
                                                aria-expanded="false" aria-controls="collapseHelp">
                                                Need Help ?
                                            </button>
                                        </h2>
                                        <div id="collapseHelp" className="accordion-collapse collapse"
                                            aria-labelledby="headingHelp" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>This is the third item's accordion body.</strong> It is hidden by
                                                default, until the collapse plugin adds the appropriate classes that we use
                                                to style each element. These classes control the overall appearance, as well
                                                as the showing and hiding via CSS transitions. You can modify any of this
                                                with custom CSS or overriding our default variables. It's also worth noting
                                                that just about any HTML can go within the <code>.accordion-body</code>,
                                                though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingCurrency">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseCurrency"
                                                aria-expanded="false" aria-controls="collapseCurrency">
                                                Currency
                                            </button>
                                        </h2>
                                        <div id="collapseCurrency" className="accordion-collapse collapse"
                                            aria-labelledby="headingCurrency" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>This is the third item's accordion body.</strong> It is hidden by
                                                default, until the collapse plugin adds the appropriate classes that we use
                                                to style each element. These classes control the overall appearance, as well
                                                as the showing and hiding via CSS transitions. You can modify any of this
                                                with custom CSS or overriding our default variables. It's also worth noting
                                                that just about any HTML can go within the <code>.accordion-body</code>,
                                                though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <div className="accordion" id="accordionCategory">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                                Men
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse"
                                            aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It is shown by
                                                default, until the collapse plugin adds the appropriate classes that we use
                                                to style each element. These classes control the overall appearance, as well
                                                as the showing and hiding via CSS transitions. You can modify any of this
                                                with custom CSS or overriding our default variables. It's also worth noting
                                                that just about any HTML can go within the <code>.accordion-body</code>,
                                                though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                aria-expanded="false" aria-controls="collapseTwo">
                                                Women
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse"
                                            aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>This is the second item's accordion body.</strong> It is hidden by
                                                default, until the collapse plugin adds the appropriate classes that we use
                                                to style each element. These classes control the overall appearance, as well
                                                as the showing and hiding via CSS transitions. You can modify any of this
                                                with custom CSS or overriding our default variables. It's also worth noting
                                                that just about any HTML can go within the <code>.accordion-body</code>,
                                                though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                                Kids
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse"
                                            aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>This is the third item's accordion body.</strong> It is hidden by
                                                default, until the collapse plugin adds the appropriate classes that we use
                                                to style each element. These classes control the overall appearance, as well
                                                as the showing and hiding via CSS transitions. You can modify any of this
                                                with custom CSS or overriding our default variables. It's also worth noting
                                                that just about any HTML can go within the <code>.accordion-body</code>,
                                                though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu
