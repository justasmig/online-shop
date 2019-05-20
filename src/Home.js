import React, { Component } from "react";
import Products from './data/products.json';
import ProductListItem from "./components/ProductListItem";


class Home extends Component {    
    render() {        
        const items = Products.products.map(productItem => {
            return <ProductListItem product={productItem} handleAdding={this.props.addItemToCart}/>
        })                            
        return (
            <div id="page-wrap">                                
                <h1>Our products</h1>
                <div style={{display: 'flex', flexWrap: 'wrap', width: '85%', minHeight: '600px', paddingLeft: '10%', paddingRight: '10%'}}>
                    {items}                
                </div>
            </div >
        );
    }
}
 
export default Home;