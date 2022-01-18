import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

// to create a React component, use a JS function that returns some HTML / other components
// React component names should be capitalized
function Recipe({
    // to get access to attributes, put {attribute_name} in the arguments of the function
    ingredients,
    title,
    prep_time,
    alt_text,
    image
}){
    
    /*
       <li>ingredient 1</li>
       <li>ingredient 2</li>
     */
    
    return (
	<Card>
	    <CardMedia
		component='img'
		height='140'
		image={image}
		alt={alt_text}
	    />
	    <CardContent>
		<h2>
		    {title}
		</h2>
		<p>
		    {prep_time}
		</p>
		<ol>
		    {ingredients.map(
			// .map is a built in function of arrays that allows you to process them one at a time.
			// remember when using .map that you need to provide a *unique* key attribute for each item
			(ingredient) => {
			    return <li key={ingredient}>{ingredient}</li>;
			}
		    )}
		</ol>
		<Rating name="no-value" value={null} />
	    </CardContent>
	</Card>
    );
}


// this lets other components / JS files use this file
export default Recipe;
