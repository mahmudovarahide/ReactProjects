import React from 'react'
import './home.css'
import Products from '../Products/Products'
import BgImage from '../../images/bg.jpg'

export default function Home() {
    return (
        <>
            <div className="home">
                <div className="card text-white">
                <img src={BgImage} className="card-img" alt="" />
                    <div className="card-img-overlay w-30 text-black d-flex justify-content-center align-items-center flex-column mt-5 ">
                        <h5 className="card-title display-6">Card title</h5>
                        <p className="card-text">Last updated 3 mins ago</p>
                    </div>
                </div>
            </div>
            <Products/>
        </>
    )
}
