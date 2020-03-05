import React, { Component } from 'react';
import Dogs from './dogs';
import AddDog from './AddDogs';


//CONTAINER COMPONENT
class App extends Component { 
  
      state = {
        dogs : [
           { name:'Penny', age: 4, food: 'bones' ,id:1},
           { name:'Isko', age: 3, food: 'kibble',id:2 },
           { name:'Bunny', age: 2, food: 'grass',id:3 }
       ]
    } 
    
    addDog = (dog) => {
       dog.id = Math.random();
       let dogs = [...this.state.dogs, dog]; //copy of array of dogs from abbove a
       this.setState({
           dogs: dogs
       });
    }

    deleteDog =(id) => {//takes id of dog as parametar
        let dogs = this.state.dogs.filter(dog =>{
            return dog.id !== id
        }) ;
        this.setState ({
            dogs:dogs
        })
    } 
      render () { 
          return (
          <div className ="App">
          
            <h1>Input Fields with submit button</h1>
            <h2>Doggies!</h2>
            <Dogs deleteDog = {this.deleteDog} dogs ={this.state.dogs} />
            <AddDog addDog = {this.addDog} />
           
            

           
          </div>
      );
   }
}

export default App;