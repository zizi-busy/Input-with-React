import React from 'react';
//UI (FUNCTIONAL) COMPONENTS
const Dogs =(props) =>{
    
    const { dogs, deleteDog } = props; 

    const dogsList = dogs.map (dog =>{
        return (
            <div className="dog" key ={dog.id}>

            <div>Name : {dog.name}</div>
            <div>Age : {dog.age}</div>
            <div>Favourite food : {dog.food}</div>
            <button onClick = {() => {deleteDog(dog.id)}}>Delete</button> 
            <hr/>
           
            </div>
           
        )
    
    })
          return(
        <div className = "dog-list">
            { dogsList }
        </div>
    )
}


export default Dogs