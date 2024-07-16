Transitive dependency : Direct dependencies will depend on transitive dependencies, basically direct dependency is on what our project is dependent on, but those direct dependencies is inturn dependent on other dependencies known as transient dependencies.

q- what happens if the node_modules deleted ?
A) even if you delete the node_modules or put under .gitignore, still you can recreate it using package.json and package.lock.json. 
That signifies the relevance of package.json and package.lock.json

node_modules need not to be pushed to github because it can be regenerated, those which can be regenerated need not be pushed, here node_modules can be regenerated using package.json and package.lock.json so that it is.

Only push necessary things to gitHub

package.json is the configuration file for npm, manages the version of packages either exact version, or ^ or  ~
package.lock.json contains the exact versions of all the dependencies and transitive dependencies 

# - Parcel
-Dev build
- Live server
- (HMR) = Hot Module Replacement
- File Watching Algorithm
-Faster Builds due to caching
- Image Optimization
- Minification 
-Bundling
-Compress 
- Consistent Hashing
- Code splitting
-Differential Bundling
- Error handling suggestions
- HTTPs
- Tree shaking - remove unused codes 
- Different dev and production bundles


3rd episode 
-React.createElement creates a ReactElement which is a Javascript object and while rendering it is converted to HTML.
- JSX is first converted to React.createElement(objet) and rendered to DOM..
-JSX is not a valid javascript, parcel uses babel to transpile 
- Babel is who converts JSX to JS.


//React components
There are two types of components
1) Class Based components (old version)
2) Functional Components ----> Latest

So what is React functional component ?
A) It is just a normal javascript function 😁
It is a function that returns a JSX | React Element( as we know JSX will be converted to ReactElement by Babel)

A function that returns  a REACT functional Component is REACT functional component.