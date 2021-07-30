import React, { useState } from 'react'


const UseStateArray =() =>{

    const bioData = [
        {
        id:0, name:'Adarsh', age:21
    },{
        id:1, name:'Ranjna', age:24
    },{
        id:2, name:'Abhishek', age:21
    },
]

 const [myArray, setMyArray] = useState(bioData);
 const clearArray = () =>{
     setMyArray([])
 }

    return(
        <>
        {
            myArray.map((curElem)=> {
                return(
                <h1>Name:  {curElem.name} and age : {curElem.age}</h1>
             ) })
        }

        <button onClick = {clearArray} > Click</button>
        </>
    )
}

export default UseStateArray