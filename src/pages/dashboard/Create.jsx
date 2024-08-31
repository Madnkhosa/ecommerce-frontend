import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Create(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [category, setCategory]=useState("")
  const Navigator=useNavigate();
  const [errors, setErrors]=useState(false);
  const [image,setImage]=useState(null)
  const successMsg = () =>
    toast.success("Product successfully created", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });

  const handleSubmit = () => {
    console.log(name, price);

    if (name !== "" && price !== 0 && category!=="") {
      // create product
      setLoading(true);

      axios
        .post("http://localhost:4002/myProducts", {
          name: name,
          price: price,
          category:category,
          image:image
        }, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }  )
        .then((res) => {
          console.log(res);
          if (res.status == 201) {
           setName('')
           setPrice('')
           setCategory('')
           props.setReset(true)
            successMsg();
            setTimeout(()=>{
              Navigator("/dashboard")


            } ,3000)
           
          } else if (res.data.status == false) {
            console.log(res.data.errors);
            setErrors(res.data.errors);}
        })
        .catch((er) => {
          console.log(er.message);
        })
        .finally(() => setLoading(false));
    } else {
      alert("fields are empty");
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
              <h2 className="formheading">Create Product</h2>

        <div className="mb-3">
          <label id="name">Product Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="form-control"
            value={name}
            placeholder="product name"
          />
        </div>
        <div className="mb-3">
          <label id="price">Price</label>
          <input
            type="number"
            id="price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            className="form-control"
            value={price}
            placeholder="product name"
          />
        </div>
        <div className="mb-3">
          <label id="category">Product Category</label>
          <input
            type="text"
            id="category"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className="form-control"
            value={category}
            placeholder="product category"
          />
                      { (errors.category) ?  <div className="alert alert-danger py-1 mt-1"> {errors.category}</div> : null}

        </div>

        <div className="mb-3">
          <label id="image" >Image</label>
          <input
            type="file"
            id="image"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            className="form-control"
          />
           { (errors.image) ?  <div className="alert alert-danger py-1 mt-1"> {errors.image}</div> : null}
        </div>
       

        <button
          class="btn btn-danger"
          type="button"
          onClick={handleSubmit}
          disabled={loading == true ? true : ""}
        >
          {loading == true ? (
            <span
              class="spinner-grow spinner-grow-sm me-1"
              aria-hidden="true"
            ></span>
          ) : null}

          <span role="status">
           
            {loading == false ? "Create Product" : "Loading..."}
          </span>
        </button>
      </form>
    </>
  );
}

export default Create;
