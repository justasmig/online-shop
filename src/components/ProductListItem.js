import React, { Component, button } from "react";
 
class ProductListItem extends Component {
  render() {
    return (
      <div style={{margin: '20px', height: '200px', width:'200px'}}>
        <img
          height={100}
          title={this.props.product.name}
          src={`/products/${this.props.product.image}`}    
          alt=""                
        />
        <h3>{ this.props.product.name }</h3>
        <h3>{ this.props.product.price.toFixed(2) }{this.props.product.type === "unit" ? "€" : "€/kg"}</h3>
        <button onClick={()=>this.props.handleAdding(this.props.product)}>Add to cart</button>
      </div>
    );
  }
}
 
export default ProductListItem;