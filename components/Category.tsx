interface Props {

}

const Category = (props: Props) => {
    return (
        <section className=" my-md-5 overflow-hidden category">
            <div className="row gx-5 text-center my-3">
                <div className="col-md-4 my-2">
                    <div className="p-3 bg-light">FREE SHIPING ALL ORDER OVER 1100</div>
                </div>
                <div className="col-md-4 my-2">
                    <div className="p-3 bg-light">SUMMER SALE OFF TO 50%</div>
                </div>
                <div className="col-md-4 my-2">
                    <div className="p-3 bg-light">WE SUPPORT 24 HOURS A DAY</div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3  border-1 border-dark">
                    <div className="row">
                        <div className=" col col-md-6 category__side mb-md-3 mb-2 mx-1">
                            <div className="category__image" style={{ backgroundImage: "url(" + '/women-category.jpg' + ")" }}>
                            </div>
                            <div className="button__cta category__cta">
                                <a className="btn btn-dark border-0 rounded-0 mb-3 " href="#"> Women</a>
                            </div>
                        </div>
                        <div className=" col col-md-6 category__side mb-md-3 mb-2 mx-1">
                            <div className="category__image" style={{ backgroundImage: "url(" + '/bag-category.jpg' + ")" }}>
                            </div>
                            <div className="button__cta category__cta">
                                <a className="btn btn-dark border-0 rounded-0 mb-3 " href="#"> Bag</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 border-1 border-dark">
                    <div className="category__center mb-md-3 mb-2">
                        <div className="category__image" style={{ backgroundImage: "url(" + '/watch-category.jpg' + ")" }}>

                        </div>
                        <div className="button__cta category__cta">
                            <a className="btn btn-dark border-0 rounded-0 mb-3 " href="#"> Watch</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 border-1 border-dark">
                    <div className="row">

                        <div className="col col-md-6 category__side mb-md-3 mb-2 mx-1">
                            <div className="category__image" style={{ backgroundImage: "url(" + '/men-category.jpg' + ")" }}>
                            </div>
                            <div className="button__cta category__cta">
                                <a className="btn btn-dark border-0 rounded-0 mb-3 " href="#"> Men</a>
                            </div>
                        </div>
                        <div className="col col-md-6 category__side mb-md-3 mb-2 mx-1">
                            <div className="category__image" style={{ backgroundImage: "url(" + '/shoes-category.jpg' + ")" }}>
                            </div>
                            <div className="button__cta category__cta">
                                <a className="btn btn-dark border-0 rounded-0 mb-3 " href="#"> Shoes</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category
