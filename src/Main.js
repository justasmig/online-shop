import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import { slide  as Menu } from 'react-burger-menu';
import CartListItem from "./components/CartListItem";


class Main extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      menuOpen: false,
      shoppingCartItems: [],

    };
  }
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  closeMenu () {
      this.setState({menuOpen: false})
  }
  toggleMenu () {
      this.setState(state => ({menuOpen: !state.menuOpen}))
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  handleAddToCart(item){
    let itemsArray = this.state.shoppingCartItems;
    if(itemsArray.includes(item)){
        itemsArray[itemsArray.indexOf(item)].quantity++;
    }else{
        itemsArray.push(item);
        itemsArray[itemsArray.indexOf(item)].quantity = 1;
    }
    this.setState({shoppingCartItems: itemsArray});
    console.log(this.state.shoppingCartItems);
  }
  handleRemoveFromCart(item){
    let itemsArray = this.state.shoppingCartItems;
    if(itemsArray[itemsArray.indexOf(item)].quantity > 1){
        itemsArray[itemsArray.indexOf(item)].quantity--;
    }else{
        itemsArray.splice(itemsArray.indexOf(item), 1);
    }
    this.setState({shoppingCartItems: itemsArray});
    console.log(this.state.shoppingCartItems);
  }
  getCart(){
    let cartItemsArray = this.state.shoppingCartItems;    
    let cartItems;
    if(cartItemsArray.length > 0){
      return cartItems = cartItemsArray.map(productItem => {
        return <CartListItem product={productItem} handleRemoving={this.handleRemoveFromCart.bind(this)}/>       
    })
    }else{
      return <h2>No items in cart.</h2>
    }
  }
  showTotalPrice(){
    let cartItemsArray = this.state.shoppingCartItems;    
    let sum;
    if(cartItemsArray.length > 0){
      sum = cartItemsArray.reduce((acc, item) => acc + item.price * item.quantity, 0);
      return (
        <div style={{height: '100px', width:'200px', textAlign: 'center', marginBottom: '100px', backgroundColor: '#746c14', border: "solid"}}>
        <h2>Total price: {sum.toFixed(2)}$</h2>
        <button style={{height: '30px', width:'200px'}}onClick={()=>alert(`Paid ${sum.toFixed(2)}$!`)}>Checkout</button>
        </div>
      );
    }else{
      return ;
    }
  }
  
    render() {
      const isMobile = this.state.width <= 500;

    //   if(isMobile){
    //   return (
    //     <HashRouter>
    //       <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)} disableAutoFocus >
    //         <a id="home" className="menu-item" href="/">Home</a>
    //         <a id="about" className="menu-item" href="/about">About</a>
    //       </Menu>          
    //       <main  id="outer-container">
    //         <h1>Ne barbora</h1>
    //         <ul className="header">
    //           <li><NavLink exact to="/">Products</NavLink></li>
    //           <li><button onClick={this.toggleMenu.bind(this)}>Shopping cart</button></li>
    //           <li><NavLink to="/contact">Contact us</NavLink></li>
    //         </ul>
    //         <div className="content">
    //           <Route exact path="/" component={Home}/>
    //           <Route path="/contact" component={Contact}/>
    //         </div>
    //       </main>
    //     </HashRouter>
    //   );
    // } else {
      return (
        <HashRouter id="outer-container">   
            <Menu  pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)} customBurgerIcon={ false } disableAutoFocus>    
              {this.showTotalPrice()}
              {this.getCart()}          
            </Menu>        
            <div id="page-wrap">            
              <h1>Ne barbora</h1>
              <ul className="header">
                <li><NavLink exact to="/">Products</NavLink></li>
                <li><button id="" onClick={this.toggleMenu.bind(this)}>Shopping cart</button></li>
                <li><NavLink to="/contact">Contact us</NavLink></li>
              </ul>
              <div className="content">
                <Route exact path="/" render={(props) => <Home {...props} addItemToCart={this.handleAddToCart.bind(this)}/>}/>
                <Route path="/contact" component={Contact}/>
              </div>
            </div>         
        </HashRouter>
      );
    }
  }
 //}
 
export default Main;