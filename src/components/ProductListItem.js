import React, { Component } from "react";
 
class ProductListItem extends Component {
  render() {
    return (
      <div>
        <img
          height={100}
          title={this.props.product.name}
          src={`/products/${this.props.product.image}`}    
          alt=""                
        />
        <h3>{ this.props.product.name }</h3>
        <h3>{ this.props.product.price }{this.props.product.type === "unit" ? "€" : "€/kg"}</h3>
      </div>
    );
  }
}
 
export default ProductListItem;