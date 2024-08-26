import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./component/Footer";
import Navbar from "./component/navbar";
import Todolist from "./component/Todolist";
import About from "./component/About";
import Contact from "./component/Contact";
import ToDoitem from "./component/ToDoitem";
import LogOut from "./component/LogOut";
import React, { useState } from "react";
import Error404 from "./component/Error404";


function App() {
  const [status, setStatus] = useState({
    text: "",
    number: "",
    message: "",
    // image:""
  });
  const [valuee, setValuee] = useState([]);
  const [value, setValue] = useState('false');
  const [image, setImage] = useState([]);

  const handlechange = (event) => {
    let { name, value } = event.target;
    setStatus((p) => {
      return { ...p, [name]: value };
    });
  };
 
 
  const handleclick = (event) => {
    event.preventDefault();
    // if (!status.text || !status.number || !status.message) {
    //   alert("Put some data");
    //   return;
    // }
    setValuee((p) => [...p, { ...status, images:image }]);
    setStatus({
      text: "",
      number: "",
      message: "",
    });
    setImage([]); // Clear images after submission
    alert("Product Submition Done!  Lets Go To Cards Page")
  };
 
  function handle(){
  
    if(value==='false'){
      setValue('true');
     document.body.style.backgroundColor="rgb(2 51 100)";
  
   }
   else if(value==='true'){
    setValue('false');
      document.body.style.backgroundColor="white";
      // console.log(value);
      
   }
  }

  const handleDelete = (id) => {
    console.log(id);
    setValuee((p) => {
      return p.filter((item, index) => {
        return index !== id;
      });
    });
  };

  const imagechange = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setImage(imageUrls);
  };



  let rout = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar value={value} handle={handle}/><Todolist status={status} handlechange={handlechange} handleclick={handleclick} setImage={setImage} image={image} imagechange={imagechange} value={value} /></>
    },
    {
      path:'/about',
      element:<><Navbar value={value} handle={handle}/><About value={value}/></>
    },
    {
      path:'/contact',
      element:<><Navbar value={value} handle={handle}/><Contact value={value} /></>
    },
    {
      path:'/logout',
      element:<><Navbar value={value} handle={handle}/><LogOut value={value} /></>
    },
    {
      path:'/Card',
      element:<><Navbar value={value} handle={handle}/> 
      <center className="mt-5"><h1 className={`text-${value === 'true' ? "light" :  ""}`}>Available Products Here </h1></center>

      <div className="container">
       <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">        
        <div className=" col">
        {valuee.map((v, i) => {
                return (
          <ToDoitem
            handle={handleDelete}
            value={v}
            key={i}
            id={i}
            imagechange={imagechange}
          />
        );
      })}
      </div>
      </div>
      </div>
      </>
    },
    {
      path:'*',
      element:<><Navbar value={value} handle={handle}/><Error404 /></>
    }
    
  ])
  return (
    <> 
      <RouterProvider router={rout}/>
      <Footer value={value}/>
    </>
  );
}

export default App;
