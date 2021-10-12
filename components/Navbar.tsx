import Image from 'next/image'

const Navbar = () => {
    return (
        <header className="header">
            <div className="bg-light">
                <div className="container row row-cols-1 row-cols-md-3 gx-0 text-center">
                    <div className="col">
                        <p className="d-inline-block text-muted header__top">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                                className="bi bi-telephone" viewBox="0 0 16 16">
                                <path
                                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg> +000-0000-0000
                        </p>
                        <p className="d-inline-block text-muted header__top">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                                className="bi bi-envelope-open" viewBox="0 0 16 16">
                                <path
                                    d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z" />
                            </svg> testing@gmail.com
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
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true" role="img" width="1.89em" height="1em"
                                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 300 159">
                                        <rect x="0" y="0" width="300" height="159" fill="none" stroke="none" />
                                        <g fill="none">
                                            <path fill="#FFF" d="M0 .552h300v157.895H0z" />
                                            <path fill="#B22234"
                                                d="M0 .552h300v12.146H0zm0 24.292h300V36.99H0zm0 24.291h300v12.146H0zm0 24.292h300v12.146H0zm0 24.291h300v12.146H0zm0 24.292h300v12.146H0zm0 24.291h300v12.146H0z" />
                                            <path fill="#3C3B6E" d="M0 .552h120v85.02H0z" />
                                            <path fill="#FFF"
                                                d="M5.638 7.454l2.859 2.077l-1.092 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.092 3.361l2.859-2.077l2.859 2.077l-1.092-3.361l2.858-2.077H31.25l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.092 3.361l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.092 3.361l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.077h-3.534l-1.091-3.36l-1.092 3.36zm19.894 0l2.859 2.077l-1.092 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.092 3.361l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.077h-3.533l-1.092-3.36l-1.092 3.36zm-89.527 8.527l2.859 2.077l-1.092 3.36l2.859-2.077l2.858 2.077l-1.092-3.36l2.859-2.077h-3.534l-1.091-3.361l-1.092 3.361zm19.895 0l2.859 2.077l-1.092 3.36l2.858-2.077l2.859 2.077l-1.092-3.36l2.858-2.077h-3.533l-1.092-3.361l-1.092 3.361zm19.895 0l2.859 2.077l-1.092 3.36L60 19.341l2.859 2.077l-1.092-3.36l2.858-2.077h-3.533L60 12.62l-1.092 3.361zm19.895 0l2.858 2.077l-1.092 3.36l2.859-2.077l2.858 2.077l-1.092-3.36l2.859-2.077h-3.533l-1.092-3.361l-1.092 3.361zm19.894 0l2.859 2.077l-1.092 3.36l2.858-2.077l2.859 2.077l-1.092-3.36l2.858-2.077h-3.533l-1.092-3.361l-1.091 3.361zM5.638 24.507l2.859 2.077l-1.092 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.092 3.361l2.859-2.077l2.859 2.077l-1.092-3.361l2.858-2.077H31.25l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.092 3.361l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.092 3.361l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.077h-3.534l-1.091-3.36l-1.092 3.36zm19.894 0l2.859 2.077l-1.092 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.092 3.361l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.077h-3.533l-1.092-3.36l-1.092 3.36zm-89.281 8.555l2.858 2.077l-1.091 3.36l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.076h-3.533l-1.092-3.361l-1.092 3.361zm19.895 0l2.858 2.077l-1.092 3.36l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.076h-3.533l-1.092-3.361l-1.092 3.361zm19.895 0l2.858 2.077l-1.092 3.36l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.076h-3.534l-1.091-3.361l-1.092 3.361zm19.894 0l2.859 2.077l-1.092 3.36l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.076h-3.533l-1.092-3.361l-1.092 3.361zm19.895 0l2.858 2.077l-1.092 3.36l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.076h-3.533l-1.092-3.361l-1.092 3.361zM5.94 41.517l2.859 2.076l-1.092 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.076h-3.533l-1.092-3.361l-1.092 3.361zm19.895 0l2.858 2.076l-1.092 3.361l2.859-2.077l2.858 2.077l-1.091-3.361l2.858-2.076h-3.533l-1.092-3.361l-1.092 3.361zm19.895 0l2.858 2.076l-1.092 3.361l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.076h-3.533l-1.092-3.361l-1.092 3.361zm19.894 0l2.859 2.076l-1.092 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.859-2.076h-3.534l-1.092-3.361l-1.091 3.361zm19.895 0l2.858 2.076l-1.091 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.076h-3.533l-1.092-3.361l-1.092 3.361zm19.895 0l2.858 2.076l-1.092 3.361l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.076h-3.533l-1.092-3.361l-1.092 3.361zM6.127 58.299l2.858 2.077l-1.092 3.361l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.894 0l2.859 2.077l-1.092 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.091 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.092 3.361l2.859-2.077l2.858 2.077l-1.091-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.894 0l2.859 2.077l-1.092 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.859-2.077h-3.534l-1.092-3.36l-1.091 3.36zm19.895 0l2.858 2.077l-1.091 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zM5.884 75.279l2.858 2.077l-1.092 3.361l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.077H11.6l-1.091-3.36l-1.092 3.36zm19.894 0l2.859 2.077l-1.092 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.091 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.077H51.39l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.092 3.361l2.859-2.077l2.858 2.077l-1.091-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.894 0l2.859 2.077l-1.092 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.859-2.077h-3.534l-1.092-3.36l-1.091 3.36zm19.895 0l2.858 2.077l-1.091 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zM15.89 49.824l2.858 2.077l-1.091 3.36l2.858-2.077l2.859 2.077l-1.092-3.36l2.858-2.077h-3.533l-1.092-3.361l-1.092 3.361zm19.895 0l2.858 2.077l-1.092 3.36l2.859-2.077l2.858 2.077l-1.091-3.36l2.858-2.077h-3.533l-1.092-3.361l-1.092 3.361zm19.895 0l2.858 2.077l-1.092 3.36l2.859-2.077l2.858 2.077l-1.092-3.36l2.859-2.077h-3.533l-1.092-3.361l-1.092 3.361zm19.894 0l2.859 2.077l-1.092 3.36l2.858-2.077l2.859 2.077l-1.092-3.36l2.858-2.077h-3.533l-1.092-3.361l-1.092 3.361zm19.895 0l2.858 2.077l-1.092 3.36l2.859-2.077l2.858 2.077l-1.091-3.36l2.858-2.077h-3.533l-1.092-3.361l-1.092 3.361zM15.831 66.777l2.859 2.077l-1.092 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.092 3.361l2.859-2.077l2.859 2.077l-1.092-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.092 3.361l2.859-2.077l2.858 2.077l-1.092-3.361l2.859-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.894 0l2.859 2.077l-1.092 3.361l2.858-2.077l2.859 2.077l-1.092-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36zm19.895 0l2.858 2.077l-1.092 3.361l2.859-2.077l2.858 2.077l-1.091-3.361l2.858-2.077h-3.533l-1.092-3.36l-1.092 3.36z" />
                                        </g>
                                    </svg> USD</a></li>
                                <li><a className="dropdown-item" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true" role="img" width="1.89em" height="1em"
                                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 301 201">
                                        <rect x="0" y="0" width="301" height="201" fill="none" stroke="none" />
                                        <g fill="none">
                                            <path fill="#CE1126" d="M.5.5h300v200H.5z" />
                                            <path fill="#FFF" d="M.5 100.5h300v100H.5z" />
                                        </g>
                                    </svg> IDR</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container header__mobile">
                <Image src='/logo.png' width={120} height={60} alt="logo kelles" />
                <button className="btn btn-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample">
                    <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.625 6.75a1.125 1.125 0 0 0 0 2.25h24.75a1.125 1.125 0 1 0 0-2.25H5.625Zm0 6.75a1.125 1.125 0 1 0 0 2.25h13.5a1.125 1.125 0 1 0 0-2.25h-13.5Zm-.211 7.334a1.125 1.125 0 1 0 0 2.25h24.75a1.125 1.125 0 1 0 0-2.25H5.414Z"
                            fill="#000" />
                    </svg>
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
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                                Home
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
                                                Shop
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
                                                Product
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
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                                Sale
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
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                                Lookbook
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
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                                Blog
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
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                                Wishlist
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
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                                Search
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
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                                Login / Register
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
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                                Need Help ?
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
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                                Currency
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
                    <a className="text-dark" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    </a>
                    <a className="text-dark position-relative" href="/shop.html"><svg xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                        <path
                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                            1
                            <span className="visually-hidden">unread messages</span>
                        </span></a>
                    <a className="text-dark position-relative" href="/product.html"><svg xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                        <path
                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                            1
                            <span className="visually-hidden">unread messages</span>
                        </span></a>
                    <a className="text-dark" href="/sale.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg></a>
                </div>
            </div>
        </header>
    )
}

export default Navbar