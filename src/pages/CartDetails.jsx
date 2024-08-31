import React from 'react'

function CartDetails(props) {
    let totalAmount = 0;


    return (

        <div className='container'>

            {
                props.cart.map((element ,index) => {

                    {
                        totalAmount += +element.price;
                      }
                    return (

                        <div className="card mb-3" key={index} >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={`http://localhost:4002/${element.image}`} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h4 className="card-title">{element.name}</h4>
                                        <h6 className="card-title">Category: {element.category}</h6>
                                        <p className="card-text">
                                            {element.details}
                                        </p>
                                        <p className="card-text">
                                            <small className="text-muted">Prices: {element.price}</small>
                                        </p>
                                        <button className='btn btn-danger' onClick={()=>{props.deletecart(index)}}>delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )


                })
            }

            <div style={{textAlign:"center"}}>Grand Total Amount is:{totalAmount}</div>

        </div>


    )
}

export default CartDetails