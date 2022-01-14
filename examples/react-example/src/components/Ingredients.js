
// to create a React component, use a JS function that returns some HTML / other components
// React component names should be capitalized
function Ingredients({
    // to get access to attributes, put {attribute_name} in the arguments of the function
    ingredients
}){

    /*
       <li>ingredient 1</li>
       <li>ingredient 2</li>
    */
    
    return (
	<ol>
	    {ingredients.map(
		// .map is a built in function of arrays that allows you to process them one at a time.
		// remember when using .map that you need to provide a *unique* key attribute for each item
		(ingredient) => {
		    return <li key={ingredient}>{ingredient}</li>;
		}
	    )}
	</ol>
    );
}


// this lets other components / JS files use this file
export default Ingredients;
