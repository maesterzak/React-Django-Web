import React, { Component } from 'react'


class Card extends Component {
    // state = { 
    //     "post": this.props.data
    //  } 
    render() { 
        
        const post = this.props.data
        const orig = 'http://127.0.0.1:8000/static'
        console.log(post)
        return (
            <>
                <div className='row g-2 '>
                    <h3 className='h5'>Total: {post.data.length}</h3>
                    {post.data.map(function(post, index){
                        return(
                            <div key={index} className="card col-12 col-lg-3" >
                        <img className="card-img-top" src={post.image ? orig + post.image: 'image1.jpg'} alt="Card " />
                        <div className="card-body">
                            <h5 className="card-title">{post.heading}</h5>
                            <h6>{post.subheading}</h6>
                            <p className="card-text"> {post.description}</p>
                        </div>
                        
                        
                    </div>
                        )
                    })};                    
                    
                </div>
            </>
        );
    }
}
 
export default Card;