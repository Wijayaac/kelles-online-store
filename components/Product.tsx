import React, { useEffect } from 'react'

// custom hooks & slicer
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getProductItem, selectProduct } from '../features/productSlice'

// Components
import Item from './Item'

const Product = () => {
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
                    {data && data.map((item) => <Item key={item.id} item={item} />)}
                    {error && <p>Something when wrong...</p>}
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
