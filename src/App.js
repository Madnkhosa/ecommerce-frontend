import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import Detail from './pages/Detail';
import CartDetails from './pages/CartDetails';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import About from './pages/About';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
//dashboad
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/dashboard/Create';
import Edit from './pages/dashboard/Edit';
import Products from './pages/dashboard/Products';
import UploadImage from './pages/UploadImage';

function App() {
  const [posts, setPosts] = useState([]);
const [reset,setReset]=useState(false)
  const [cart, setCart] = useState([]);

  const notify = () => toast('product successfully cart!', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });;
    const deletemsg = () => toast('product successfully deleted!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });;
  const getPosts = () => {
    // Make a request for a user with a given ID
    axios
      .get("http://localhost:4002/myProducts")
      .then((response) => {
        if (response.status == 200) {
          setPosts(response.data.myProducts);
          setReset(false)
        }
      });
  };

  const deletePost = (id) => {
    axios
      .delete(`http://localhost:4002/myProducts/${id}`)
      .then((response) => {
        if (response.status == 200) {
          getPosts()
          
        }

      })
  }
  const addToCart = (element) => {

    const existingItem = cart.find((item) => item.id === element.id);
    if (existingItem) {
      alert("already ")
    }
    else {
      const tempar = [...cart, element];
      setCart(tempar);
      notify()

    }



  }




  const deletecart = (index) => {
    const delcart = [...cart]
    delcart.splice(index, 1)
    setCart(delcart)
    deletemsg()
    
  }

  useEffect(() => {
    getPosts();


  }, [reset]);

 
  return (


    <div className="App">

      <Navbar cart={cart} setCart={setCart} />
      
      <Routes>
       {/* <Route path='/' element={<UploadImage />} /> */}
        <Route path='/' element={<Home posts={posts} addToCart={addToCart} deletePost={deletePost} />} />
        <Route path='/About' element={<About />} />
        <Route path='/detail/:pid' element={<Detail />} />
        <Route path="/cart" element={<CartDetails cart={cart} deletecart={deletecart} setCart={setCart}/>} />




        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Products  posts={posts} setPosts={setPosts} setReset={setReset}/>} />
          <Route path="create" element={<Create setReset={setReset} />} />
          <Route path="edit/:pid" element={<Edit setReset={setReset} />} />
        </Route>

      </Routes>

      {/* <button onClick={getPosts}>Get Posts</button> */}


<ToastContainer />



    </div>
  );
}

export default App;
