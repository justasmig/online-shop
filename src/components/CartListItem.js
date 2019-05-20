import React, { Component, button } from "react";
 
class CartListItem extends Component {
  render() {
    return (
      <div style={{marginBottom: '100px', height: 'auto', width:'auto', border: "solid", position: "relative", textAlign: 'center', backgroundColor: "#746c14" }}>
        <img
          height={100}
          title={this.props.product.name}
          src={`/products/${this.props.product.image}`}    
          alt=""                
        />
        <h3>{ this.props.product.name }</h3>
        <h3>{ this.props.product.price.toFixed(2) }{this.props.product.type === "unit" ? "€" : "€/kg"}</h3>
        <h3>Quantity {this.props.product.quantity}</h3>
        <button onClick={()=>this.props.handleRemoving(this.props.product)}>Remove</button>
      </div>
    );
  }
}
 
export default CartListItem;