import React from "react";
import ReactDOM from "react-dom/client";
//JSX => Babel => React.createElement => Object => HTML Element (render)

//React Element
let heading= (
  <h1 className="heading" tabIndex="1">
    Namaste React
  </h1>
);

//React Component (two ways of React components)
// 1) Class Based components (old)
// 2) Functional components (new)

//REACT functional component
let HeadingComponent =()=>{
    return <h1>Namaste React functional component</h1>
}
//if it is a one liner then 
let HeadingComponent2 = ()=> <h1>Namaste REaCT funcitonal components</h1>

let HeadingComponent3 = ()=> (
    <h1>Namaste REACT functional components</h1>
)
/// all the above syntaxes are same, 

// 1) has return statement to return the jsx;
// 2) no return as a one liner;
// 3) one liner with ()
//----------------------------------------------------------------
//Component composition ===> component inside another component
let Title = ()=> (
        <h1 className="head">
            Namaste React using JSX
        </h1>
)
let HeadComponent = ()=>{
   return (
        <div id='container'>
            <Title/>
            <h1 className="heading">Namaste React functional component</h1>
        </div>
    )
}


//=======================================================================
// use of curly braces inside functional component,
///if curly braces is there inside the function , can write any javascript code
let number  = 10000;

let HeadingComponent4 = () =>{
   return (
        <div id='container'>
            <h2>{number}</h2>
            {number + 300}
             <h1>Namaste React here</h1> 
        </div>
        
    )
}
//----------------------------------------------------------------------
//So we learnt about injecting react component inside other component, now let us look on jsx element inside a jsx component.
let element = (
    <h1 className='header'>Namaste React js</h1>
)

let HeadingComponent5 = () =>{
    return (
        <div id='titler'>
            {element}
            <h1>Namaste React by Akshai Saini</h1>
        </div>
        
    )
}
//-----------------------------------------------------------------------

// next is to check element inside another element and then inside component

let elem = (<span>Hello world</span>)

let summer = (
    
    <h1 classNam='none'>
        {elem}
        Rahul Renjan
    </h1>
)

let HeadingComponent6 = () =>{
    return (
        <div id="hinga">
            {summer}
        </div>
    )
}

  

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent6 />);
