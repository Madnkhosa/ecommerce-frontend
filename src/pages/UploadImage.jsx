import React, { useState } from "react";
import axios from "axios";


const UploadImage = () => {

  const [image ,setImage]=useState(null);

  const handleFileUpload = () => {
           
    axios.post("http://localhost:4002/uploading", {
      image:image
  },{
        headers: {
          "Content-Type": "multipart/form-data",
      
        },
       } )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <input type="file" onChange={(e)=>{setImage(e.target.files[0])}} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};
export default UploadImage;