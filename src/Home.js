import React, { Component } from "react";
import Products from './data/products.json';
import ProductListItem from "./components/ProductListItem";

class Home extends Component {    
    componentDidMount(){
        
        console.log(Products)
        
    }
    render() {        
        const items = Products.products.map(productItem => {
            return <td><ProductListItem product={productItem}/></td>
        })
        return (
            <div>                
                
                <h1>HELLO</h1>
                <ul>
                    {items}                
                </ul>
            </div>
        );
    }
}
 
export default Home;