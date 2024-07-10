let heading = React.createElement('h1',{id:'heading'},'Hello world');

// console.log(heading)

// let root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading)







//This following nested div is what we are creating using above concept
/*

<div id= "parent">
    <div id= 'child'>
        <h1>Biriyani</h1>
        <h2>Samosa</h2>
    </div>
    <div id='child2'>
        <h1>Fish</h1>
        <h3>Crab</h3>
    </div>
</div>

*/

let parent = React.createElement('div',{ id:'parent' },
    [React.createElement('div',{ id:'child' },
        [React.createElement('h1',{},'Biriyani'),React.createElement('h2',{},'Samossa')]),React.createElement('div',{id:'child2'},
            [React.createElement('h1',{},'Fish'),React.createElement('h3',{},'Crab')]
        )]
    );

console.log(parent);

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

//Note that this will be the last time we will be using React.createElement