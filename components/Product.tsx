import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getProductItem, selectProduct } from '../features/productSlice'
import Item from './Item'
interface Props {

}

const Product = (props: Props) => {
    const dispatch = useAppDispatch()
    const { data, pending, error } = useAppSelector(selectProduct)

    useEffect(() => {
        dispatch(getProductItem())
    }, [])
    return (
        <section className="my-5 product">
            <div className="product__header text-center">
                <div className="product__title h2 py-2 mb-3 position-relative">
                    best seller products
                </div>
                <div className="product__subtitle fs-5 mb-md-5 mb-3 text-muted">
                    we offer all of popular and unique for daily use
                </div>
                <div className="product__menu">
                    <a className="active" href="#">Women</a>
                    <a href="#">Men</a>
                    <a href="#">Accessories</a>
                    <a href="#">Top</a>
                    <a href="#">Bottoms</a>
                    <a href="#">Shoes</a>
                    <a href="#">Jewellry</a>
                </div>
            </div>
            <div className=" mt-md-5 product__items">
                <div className="row row-cols-2 row-cols-md-4 text-center">
                    {pending && <p>Loading...</p>}
                    {data && data.map((item) => <Item key={item.id} />)}
                    {error && <p>Something when wrong...</p>}
                    <div className="col">
                        <div className="product__image">
                            <a href="http://">
                                <div className="main" style={{ backgroundImage: "url(" + '/analogue.jpg' + ")" }}>
                                </div>
                                <div className="secondary" style={{ backgroundImage: "url(" + '/analogue-hover.jpg' + ")" }}>
                                </div>
                            </a>

                            <a className="btn btn-dark rounded-circle product__cart my-2"><svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-cart2" viewBox="0 0 16 16">
                                <path
                                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg></a>
                            <a className="btn btn-dark rounded-circle product__wish my-2"><svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-heart" viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg></a>

                        </div>
                        <div className="product__brand my-2">Kelles</div>
                        <div className="product__name">analogue resin strap</div>
                        <div className="product__price mt-1">$30.00</div>
                    </div>
                    <div className="col">
                        <div className="product__image">
                            <a href="http://">
                                <div className="main" style={{ backgroundImage: "url(" + '/boheme.jpg' + ")" }}>
                                </div>
                                <div className="secondary" style={{ backgroundImage: "url(" + '/boheme-hover.jpg' + ")" }}>
                                </div>

                            </a>
                            <a className="btn btn-dark rounded-circle product__cart my-2"><svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-cart2" viewBox="0 0 16 16">
                                <path
                                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg></a>
                            <a className="btn btn-dark rounded-circle product__wish my-2"><svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-heart" viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg></a>
                        </div>
                        <div className="product__brand my-2">Kelles</div>
                        <div className="product__name">la boheme rose gold</div>
                        <div className="product__price mt-1"><span className="text-decoration-line-through text-danger">$60.00
                        </span>$40.00</div>
                    </div>
                    <div className="col">
                        <div className="product__image">
                            <a href="http://">
                                <div className="main" style={{ backgroundImage: "url(" + '/ridley.jpg' + ")" }}>
                                </div>
                                <div className="secondary" style={{ backgroundImage: "url(" + '/ridley-hover.jpg' + ")" }}>
                                </div>
                            </a>
                            <a className="btn btn-dark rounded-circle product__cart my-2"><svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-cart2" viewBox="0 0 16 16">
                                <path
                                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg></a>
                            <a className="btn btn-dark rounded-circle product__wish my-2"><svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-heart" viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg></a>
                        </div>
                        <div className="product__brand my-2">Kelles</div>
                        <div className="product__name">ridley high waist</div>
                        <div className="product__price mt-1">$36.00</div>
                    </div>
                    <div className="col">
                        <div className="product__image">
                            <a href="http://">
                                <div className="main" style={{ backgroundImage: "url(" + '/cream.jpg' + ")" }}>
                                </div>
                                <div className="secondary" style={{ backgroundImage: "url(" + '/cream-hover.jpg' + ")" }}>
                                </div>
                            </a>
                            <a className="btn btn-dark rounded-circle product__cart my-2"><svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-cart2" viewBox="0 0 16 16">
                                <path
                                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg></a>
                            <a className="btn btn-dark rounded-circle product__wish my-2"><svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-heart" viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg></a>
                        </div>
                        <div className="product__brand my-2">Kelles</div>
                        <div className="product__name">cream women pants</div>
                        <div className="product__price mt-1">$35.00</div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <a href="#" className="product__btn btn btn-dark rounded-0">Load More <svg
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                        d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                </svg></a>
            </div>
        </section>
    )
}

export default Product
