import React, { Component } from 'react'
import axios from 'axios';

class Form extends Component {
    state = { 

     } 

    createPost = async(data) => {
    // await fetch('http://127.0.0.1:8000/post', {
    //     method: "POST",

    //     headers: {
    //     Accept: "application/json",
    //     "content-type": "application/json",
 //       'Authorization': `Bearer ${token}`,
    //     },
    //     body: JSON.stringify(data),
    axios
      .post("http://127.0.0.1:8000/post", data)
      
      .then(res => console.log(res))
      .catch(err => console.log(err));
        alert('Post Added')
        const getPost =this.props.refresh
        getPost()


    };
    
    submitHandler = (e) => {
        e.preventDefault()
        var Data = new FormData(e.target);

        const form_values = Object.fromEntries(Data);
        
        const formData = new FormData();

        formData.append("heading", form_values.heading);
        formData.append("subheading", form_values.subheading);
        formData.append("description", form_values.description);
        formData.append("image", form_values.image);
        this.createPost(formData)
        e.target.reset()
        
        
    } 
    render() { 
        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label htmlFor="heading">Heading</label>
                        <input maxLength={30} name='heading' type="text" className="form-control" id="heading" aria-describedby="heading" placeholder="Enter your heading" required />
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="subHeading">Sub heading</label>
                        <input maxLength={30} name='subheading' type="text" className="form-control" id="subHeading" aria-describedby="subHeading" placeholder="Enter your sub heading" required />
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea maxLength={30} className="form-control"  name='description' id="description" aria-describedby="description" placeholder="Enter your description" required></textarea>
                        
                    </div>

                    <div className='form-group d-grid'>
                        <label htmlFor="description">Add image or leave blank to use defualt</label>
                        <input type="file" id="image" name="image" accept="image/*" />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type='submit'>Submit</button>
                    </div>
                    
                </form>
            </>
        );
    }
}
 
export default Form;