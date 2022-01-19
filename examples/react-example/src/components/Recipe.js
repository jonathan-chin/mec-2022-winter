import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

// to use state variables, we need to first import the useState hook from react.
// with hooks, we cannot call them as components, ie: <useState />
import {useState} from 'react';

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
       To allow a component to update or rerender itself with new information, we have to use state variables.
     */
    /*
       useState syntax:
       let [name_of_variable, name_of_function_to_change_variable] = useState(default_value_for_variable);
    */
    let [upvotes, setUpvotes] = useState(0);

    const handleUpvoteClick = () => {
	setUpvotes(upvotes + 1);
    };
    
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
		    {/* sometimes, we want to do a conditional render */}
		    {upvotes >= 25 && <span>hot! </span>}
		    {title}
		</h2>
		<div>
		    {upvotes}
		    <IconButton aria-label="upvote" onClick={handleUpvoteClick}>
			<ArrowCircleUpIcon />
		    </IconButton>
		</div>
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
	    </CardContent>
	</Card>
    );
}


// this lets other components / JS files use this file
export default Recipe;
