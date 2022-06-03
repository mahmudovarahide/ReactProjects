import React, { useState, useEffect } from 'react'

function Products() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([data]);
    const [loading, setLoding] = useState([false]);
    let componentMounted = true;
    useEffect(() => {
        const getProduct = async () => {
            setLoding(true);
            const dataProductsFetchApi = await fetch("https://fakestoreapi.com/products")
            if (componentMounted) {
                setData(await dataProductsFetchApi.clone().json());
                setFilter(await dataProductsFetchApi.json())
                setLoding(false)
            }
            return () => {
                componentMounted = false;
            }
        }
        getProduct()
    }, [])
    const Loading = () => {
        return (
            <div className="my-3 text-center">
                Loading Products...
            </div>
        )
    }
    const filterProduct = (e) => {
        const updateList = data.filter((item) => item.category === e);
        setFilter(updateList)
    }
    const ShowProducts = () => {
        return (
            <div>
                <div className="buttons d-flex justify-content-center my-3">
                    <button className="btn btn-outline-dark" onClick={() => {
                        setFilter(data)
                    }}>All</button>
                    <button className="btn btn-outline-dark ms-2" onClick={() => {
                        filterProduct("men's clothing")
                    }}>Men</button>
                    <button className="btn btn-outline-dark ms-2" onClick={() => {
                        filterProduct("women's clothing")
                    }}>Women</button>
                    <button className="btn btn-outline-dark ms-2" onClick={() => {
                        filterProduct("electronics")
                    }}>electronics</button>
                </div>
                <div className="row">
                    {filter.map((e) => {
                        return (
                            <div className="col-md-4 col-xl-3 mt-2" key={e.id}>
                                <div className="card p-3 h-95">
                                    <img src={e.image} className="card-image-top h-75" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">{e.title.substring(0, 8)}...</h5>
                                        <p className="card-text">${e.price}</p>
                                        <a href="/" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-6 fw-bolder text-center my-1">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </>
    )
}
export default Products
