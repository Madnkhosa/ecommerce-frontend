import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function Detail() {
    const [product, setProduct] = useState("")
    const param = useParams();
    console.log(param);

    useEffect(() => {
        axios.get(`http://localhost:4002/myProducts/${param.pid}`)
            .then((response) => {
                if (response.data.status == true) {
                    setProduct(response.data.product)
                }

            })

    }, []);

    return (
        <>
            <div className="container ">
                <div className="row mt-5">

                    <div className="col-7 ">
                        <img
                            src={`http://localhost:4002/${product.image}`}
                            alt="Product "
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-5 bg-light left_txt ">
                        <h2 className='text-left mt-2 fw-bold colort' >{product.name}</h2>
                        <p className='colort'>Category:{product.category}</p>
                        <p className='colort'>Availability : In Stock</p>
                        <del><span className="money colpd">Rs.{product.price * 2}</span></del>
                        <span className="money mx-2 colpt">Rs.{product.price}</span>

                        <div><button type="button " className='bg-warning mt-3' data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Details of product
                        </button></div>

                        <h5 className="fw-bold fs-6 mt-3">Size: <span className="">2-3Y</span></h5>

                        <ul className='styleul d-flex'>
                            <li className='styleli'><span>2-3Y</span></li>
                            <li className='styleli'><span>2-3Y</span></li>
                            <li className='styleli'><span>2-3Y</span></li>
                            <li className='styleli'><span>2-3Y</span></li>
                            <li className='styleli'><span>2-3Y</span></li>

                        </ul>
                    </div>
                </div>
            </div>


            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-body">
                            {product.details}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Detail