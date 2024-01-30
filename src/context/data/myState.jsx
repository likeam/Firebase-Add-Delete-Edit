import React, { useState } from 'react'
import MyContext from './myContext'
import AddProduct from '../../pages/addProduct/AddProduct';
import { fireDB } from '../../firbase/FirebaseConfig';
import { addDoc } from 'firebase/firestore';

function MyState(props) {
    const [products, setProducts] = useState({
        title: "",
        price: "",
        imageUrl: "",
        category: "",
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    })

    const [allProducts, setAllProducts] = useState([]);

    const AddProduct = async() => {
        if(title === '' || price === '' || imageUrl === '' || category === '' ){
            alert("Please Fill All Fields.")
        }
        const productRef = (fireDB, "products");
        try{
            await addDoc(productRef, 'products');
            getProducts();
            alert("Products Added Sucessfully.");
            setTimeout(() => {
                window.location.href = '/';
            }, 800);
            getProducts("");
        } catch(error){
            console.log(error)
        }
    }



  return (
    <MyContext.Provider  value={{name}}>
        {props.children}
    </MyContext.Provider>
  )
}

export default MyState