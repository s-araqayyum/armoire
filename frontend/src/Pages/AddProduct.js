import React, { useState } from "react";
import Axios from "axios";

function goBack(){
	window.location = '/'
}

export default function AddProduct () {
	
    const[product, setProduct] = useState({
        Name: "",
		url: "",
		Category: "",
		Price: 0,
		stock: 0,
		Description: "",
		selectedImage: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            Name: product.Name,
			url: product.url,
			Category: "Chair",
			Price: product.Price,
			stock: product.stock,
			Description: product.Description,
			selectedImage: product.selectedImage,
        }

        Axios.post('/create', newProduct)
        .then(res => console.log(res.data))

        setProduct({
			Name: "",
			url: "",
			Category: "",
			Price: 0,
			stock: 0,
			Description: "",
			selectedImage: "",
        });

		alert('Product Added!')
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setProduct(oldProd => {
            return {
                ...oldProd,
                [name]: value
            }
        })
    }

    return (
        <React.Fragment>
		
		<button className="button" onClick={goBack}> Return to Home </button>
		
		<div data-testid="addForm" className="untree_co-section">
		    <div className="container">
		      <div className="row">
		        <div className="col-md-6 mb-5 mb-md-0">
		          <h2 className="h3 mb-3 text-black">Add Product Details</h2>
		          <div className="bg-white border p-3 p-lg-5">
		            <div className="form-group row">
		              <div className="col-md-12">
		                <label htmlFor="c_address" data-testid="nameHeading" className="text-black">Product Name <span className="text-danger">*</span></label>
		                <input type="text" className="form-control" id="c_address" name="Name" value={product.Name} required onChange={handleChange} placeholder="Enter the name of your product"/>
		              </div>
		            </div>

					<br></br>

					<div className="dropdown">
  						<button className="dropbtn">Product Category</button>
 						 <div className="dropdown-content">
  						  	<a href="#">Seating</a>
    						<a href="#">Dining</a>
    						<a href="#">Decorational</a>
  						</div>
					</div>

					<br></br>
					<br></br>
					
		            <div className="form-group row">
		              <div className="col-md-6">
		                <label htmlFor="c_state_country" className="text-black">Product Price <span className="text-danger">*</span></label>
		                <input type="text" className="form-control" id="c_state_country" name="Price" value={product.Price} required 
                    onChange={handleChange}/>
		              </div>
		              <div className="col-md-6">
		                <label htmlFor="c_postal_zip" className="text-black">Product Stock <span className="text-danger">*</span></label>
		                <input type="text" className="form-control" id="c_postal_zip"name="stock" value={product.stock} required 
                    onChange={handleChange}/>
		              </div>
		            </div>

					<br></br>

					<div className="form-group row">
		              <div className="col-md-12">
		                <label htmlFor="c_address" data-testid="urlHeading" className="text-black">Product Image URL <span className="text-danger">*</span></label>
		                <input type="text" className="form-control" id="c_address"  placeholder="Enter the name of your product" name="url" value={product.url} required 
                    onChange={handleChange}/>
		              </div>
		            </div>

					<br></br>

		            <div className="form-group">
		              <label htmlFor="c_order_notes" data-testid="descHeading" className="text-black">Description</label>
		              <textarea id="c_order_notes" cols="30" rows="5" className="form-control"name="Description" value={product.Description} required 
                    onChange={handleChange} placeholder="Enter product description here..."></textarea>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
			<br></br>
			<button className="buttons" onClick={handleSubmit}>Add to Inventory</button>
		  </div>

		  <footer className="footer-section">
			<div className="container relative">

				<div className="sofa-img">
					<img src="Assets/images/sofa.png" alt="Image" className="img-fluid"/>
				</div>
			</div>
		</footer>

		<script src="js/bootstrap.bundle.min.js"></script>
		<script src="js/tiny-slider.js"></script>
		<script src="js/custom.js"></script>
        </React.Fragment>
    )
}