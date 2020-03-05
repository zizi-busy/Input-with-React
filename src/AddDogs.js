import React , { Component} from 'react'

class AddDog extends Component {
    state = {
        name: null,
        age: null,
        food:null,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value //id from form-input in html
        });
    }

   handleSubmit = (e) =>{
      e.preventDefault();
       this.props.addDog(this.state); //function from  App
       console.log(this.state)

   } 
    render (){
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor="name">Name :</label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <label htmlFor="age">Age :</label>
                    <input type="text" id="age" onChange={this.handleChange}/>
                    <label htmlFor="food">Food :</label>
                    <input type="text" id="food" onChange={this.handleChange}/>
                    <button>Submit</button>

                </form>
            </div>
        )
    }
}

export default AddDog
    

