import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { addCart } from '../../Redux/action/redux'
import { useParams,NavLink} from 'react-router-dom'
import '../Products/products.css'
import Skeleton from 'react-loading-skeleton'

function Product() {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const addProduct = (product)=>{
        dispatch(addCart(product))
    }
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoading(false)
        }
        getProduct()
    }, [])
    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} width={400}/>
                </div>
                <div className="col-md-6">
                    <Skeleton height={50} width={300}/>
                    <Skeleton width={300}/>
                    <Skeleton width={300}/>
                    <Skeleton width={300}/>
                </div>
            </>
        )
    }
    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-4">
                    <img src={product.image} className="w-100 h-450" alt="" />
                </div>
                <div className="col-md-8 ps-4 pt-5">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <h1 className="display-5">{product.title}</h1>
                    <h3 className="fw-bold mt-2">${product.price}</h3>
                    <div className="lead mt-2">{product.description}</div>
                    <button className="btn btn-outline-dark mt-3"  onClick={()=>addProduct(product)}>Add to Cart</button>
                    <NavLink to="/cart" className="btn btn-dark mt-3 ms-3">Go to Cart</NavLink>
                </div>
            </>

        )
    }
    return (
        <div className="container-fluid px-5">
            <div className="row py-5">
                {loading ? <Loading /> : <ShowProduct />}
            </div>
        </div>
    )
}
export default Product
