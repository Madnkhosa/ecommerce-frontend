import axios from 'axios'
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import React from 'react'
import { useNavigate } from "react-router-dom";
function Products(props) {

    const successMsg = () =>
    toast.success("Product successfully deleted", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });

    const deletePoste = (id) => {
        axios
            .delete(`http://localhost:4002/myProducts/${id}`)
            .then((response) => {
                console.log(response);
                if (response.status == 200) {
                    props.setReset(true)
                successMsg()
                      
                }

            })
    }
    const navigator = useNavigate()
    return (
        <>
            <table className="table " style={{ backgroundColor: 'white' }} >
                <thead className='bg-info' style={{ color: 'black', fontWeight: 'bold' }}>
                    <tr >
                        <th scope="col" >Sr.No</th>
                        <th scope="col">Image</th>
                        <th scope="col">Pro_ID</th>
                        <th scope="col">Pro_Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Pro_Category</th>
                        <th scope="col">Pro_del/Edit</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        props.posts.map((element, index) => {

                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td >
                                        <img
                                            src={`http://localhost:4002/${element.image}`}
                                            alt="Image"
                                            style={{ height: "50px", width: "50px", borderRadius: "50%" }}
                                        />
                                    </td>
                                    <td>{element._id}</td>
                                    <td>{element.name}</td>
                                    <td>${element.price}</td>
                                    <td>{element.category}</td>
                                    <td>

                                        <button className='btn btn-danger  ' style={{ marginRight: '5px', padding: '5px' }} onClick={() => deletePoste(element._id)}> delete</button>
                                        <span>
                                            <Link to={`edit/${element._id}`}>
                                                <button className="btn btn-warning ms-2" >Edit</button>

                                            </Link>
                                        </span>
                                        <span>
                                            <Link to={`/detail/${element._id}`}>
                                                <button className="btn btn-success ms-3" >View</button>

                                            </Link>
                                        </span>

                                    </td>
                                </tr>
                            )

                        }

                        )
                    }

                </tbody>
            </table>


        </>
    )
}

export default Products