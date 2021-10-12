import Banner from "./Banner"
import Blog from "./Blog"
import Category from "./Category"
import Product from "./Product"

const Main = () => {
    return (
        <main className="container px-md-5">
            <Category></Category>
            <Product></Product>
            <Banner></Banner>
            <Blog></Blog>
        </main>
    )
}

export default Main