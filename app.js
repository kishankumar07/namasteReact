import React from "react";
import ReactDOM from "react-dom/client";
//JSX => Babel => React.createElement => Object => HTML Element (render)

/*
*Header
*-Logo
*-Nav-items

*Body
*-Search
*-Restaurant container
*-Restaurant card
*--Image
*--Name of restaurant, star rating, cuisines,delivery time etc

*Footer
*-Copyright
*-Links
*-address
*-contact
*/ 

let Header =()=>{
    return (
        <div className='header'>
            <div className="logo-container">
                <img className="logo" src="https://static.vecteezy.com/system/resources/previews/007/923/442/non_2x/burger-logo-design-template-illustration-free-vector.jpg"></img>
            </div>
            <div className="nav-items"> 
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Cart</li>
                    </ul>
            </div>
        </div>
    )
}
// inline style
// let styleCard ={
//     backgroundColor:"#f0f0f0",
// }

let RestaurantCard = ()=>{
    return (
        <div className="res-card" style={{ backgroundColor:'#f0f0f0' }}>
            <img className="res-logo" src="https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg" alt='image'></img>
            <h3>Meghana Foods</h3>
            <h4>Biriyani, North Indian,Asian</h4>
            <h4>4.4</h4>
            <h4>38 minutes</h4>
        </div>
    )
}


let Body =()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
            </div>
        </div>
    )
}


let AppLayout = ()=>{
    return (
        <div className="app">
            <Header></Header>
            <Body></Body>
        </div>
    )
}




  

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
