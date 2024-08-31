import { Link } from "react-router-dom";


function Home(props) {
 


  return (
    <>
   
      <div  className="hompage text-center" style={{ backgroundColor: "white" }}>
        <h1 className='text-center'>Home Page</h1>
        <div className="container">
          <div className="row">
            {props.posts.length == 0 ? (
              <div className="spinner-border text-danger center-spinner " role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : null}
            {props.posts.map((element, index) => {
              return (
                <div className="col-md-3 mb-3 handelBorder" key={element._id}>
                  <div className="card" style={{borderRadius:'10px'}}>
                    <img  style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}
                    //  src={element.image} 
                    src={`http://localhost:4002/${element.image}`}
                     className="card-img-top imagecontrol " alt="..." />
                    <div className="card-body">
                      <Link to={`/detail/${element._id}`}>
                        <h5 className="card-title">{element.name}</h5>

                      </Link>
                      <h6>Price: ${element.price}</h6>
                      <h6>Category: {element.category}</h6>
                      <p> {element.details}</p>
                      <button
                        onClick={() => {
                          props.addToCart(element);
                        }}
                        className="btn btn-primary "
                      >
                        Add To Cart
                      </button>
                      
                    </div>
                  </div>
                </div>
              );
            })}
          </div>


        </div>
      </div>
    </>
  )
}
export default Home