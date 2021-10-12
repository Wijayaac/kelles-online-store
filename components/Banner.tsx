interface Props {

}

const Banner = (props: Props) => {
    return (
        <section className="d-flex flex-wrap justify-content-between align-items-center banner my-md-5">
            <div className="banner__catalog my-2">
                <div className="banner__image" style={{ backgroundImage: "url(" + '/catalog.jpg' + ")" }}></div>
                <div className="banner__text">
                    <h4>Lookbook 2021</h4>
                    <h6>make love this look</h6>
                </div>
            </div>
            <div className="banner__discount">
                <div className="banner__image" style={{ backgroundImage: "url(" + '/discount.jpg' + ")" }}></div>
                <div className="banner__text">
                    <h6>huge sale</h6>
                    <h2>50% off</h2>
                    <h6>hurry up</h6>
                </div>
            </div>
        </section>
    )
}

export default Banner
