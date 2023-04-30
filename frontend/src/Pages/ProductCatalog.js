import Axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

//Static images for page design
import update from './images/update.png';
import del from './images/del.png';
import axios from 'axios';

export default function ProductCatalog() {

	const [products, setProducts] = useState([{}])

	let navigate = useNavigate();

	function addProduct() {
			navigate('/adding')
	 }
	 function deleteProduct(id){
		Axios.delete(`delete/${id}`)
		navigate('/delete')
	 }
	 function updateProduct(Product){
		let Name = prompt("Please enter updated product name, or press OK:",Product.Name);
		let Description = prompt("Please enter udated description:",Product.Description);
		let Price = prompt("Please enter updated price:",Product.Price);
		let Stock = prompt("Please enter updated stock quantity:",Product.stock);
		let selectedImage = prompt("Please enter updated image address:",Product.selectedImage);

		axios.put('/update/'+Product._id, {
			Name,
			Description,
			Price,
			Stock,
			selectedImage
		})

        navigate('/updated')
	 }
	
	const listProducts = async () => {
		const response = await Axios('/getProducts');
		setProducts(response.data)
	};
	
	listProducts();

	const useProducts = products.map((Product)=>{

                    return (
        					<div data-testid="renderProductList" className="before-footer-section product-section untree_co-section">
		    					<div className="container">
										<div className="col-12 col-lg-3 col-md-4 mb-5">
											<a className="product-item" href="#">
											<img src={Product.selectedImage} className="img-fluid product-thumbnail"/>
											<h3 className="product-title">{Product.Name}</h3>
											<strong className="product-price">{Product.Price}</strong>
                                            <p>{Product.Description}</p>
							
											<span className="icon-cross" onClick={() => updateProduct(Product)}>
												<img src={update} className="img-fluid"/>
											</span>
						
                            				<span className="icon-del" onClick={() => deleteProduct(Product._id)}>
												<img src={del} className="img-fluid"/>
											</span>
											</a>
										</div> 
		   						 </div>
							</div>
                      );
				})

	return(
		<React.Fragment>
				<button className="button" data-testid="addnewpage" onClick={addProduct}>Add New Product</button>
					<br></br>
				{useProducts}
		</React.Fragment>
		)
}
