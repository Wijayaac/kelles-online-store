interface Props {

}

const Blog = (props: Props) => {
    return (
        <section className="blog my-5">
            <div className="blog__header my-3 text-center">
                <h3 className="blog__title pb-3 fw-bold">latest blog posts</h3>
                <p className="text-muted fs-md-5">Get the newest insight of popular outfits use by your favourite celebrity
                </p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 mt-md-5">
                <article className="col blog__item">
                    <a href="#">
                        <div className="blog__image" style={{ backgroundImage: "url(" + '/summer.jpg' + ")" }}></div>
                        <div className="blog__text">
                            <div className="blog__name fs-5 my-2">Spring - Summer Trending</div>
                            <div className="blog__meta my-2">By <strong>Laureen Jennifer</strong> on <strong>April 6,
                                2021</strong>
                            </div>
                            <div className="blog__excerpt text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing
                                elit.
                                Unde
                                debitis est facere natus sit eos delectus voluptate quisquam? Numquam id quidem, iste
                                esse
                                delectus tempora necessitatibus.</div>
                        </div>
                    </a>
                </article>
                <article className="col blog__item">
                    <a href="#">
                        <div className="blog__image" style={{ backgroundImage: "url(" + '/break.jpg' + ")" }}></div>
                        <div className="blog__text">
                            <div className="blog__name fs-5 my-2">The Easiest Way to Break Out on Top</div>
                            <div className="blog__meta my-2">By <strong>Laureen Jennifer</strong> on <strong>April 6,
                                2021</strong>
                            </div>
                            <div className="blog__excerpt text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing
                                elit.
                                Unde
                                debitis est facere natus sit eos delectus voluptate quisquam? Numquam id quidem, iste
                                esse
                                delectus tempora necessitatibus.</div>
                        </div>
                    </a>
                </article>
                <article className="col blog__item">
                    <a href="#">
                        <div className="blog__image" style={{ backgroundImage: "url(" + '/wedding.jpg' + ")" }}></div>
                        <div className="blog__text">
                            <div className="blog__name fs-5 my-2">Style for couple in Wedding season</div>
                            <div className="blog__meta my-2">By <strong>Laureen Jennifer</strong> on <strong>April 6,
                                2021</strong>
                            </div>
                            <div className="blog__excerpt text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing
                                elit.
                                Unde
                                debitis est facere natus sit eos delectus voluptate quisquam? Numquam id quidem, iste
                                esse
                                delectus tempora necessitatibus.</div>
                        </div>
                    </a>
                </article>
            </div>
        </section>
    )
}

export default Blog
