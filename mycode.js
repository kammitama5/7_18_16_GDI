//================================================================================

//Objects

var giraffe = {
	colour: 'brown',
	eats: 'grass',
	licks: function() {
		console.log('The giraffe licks Krystal.');
	}
};

giraffe.licks();

var giraffeColour = giraffe.colour;

//====================================================================================


var coyote = {
	colour: 'grey',
	eats: 'people',
	eats: function(){
		console.log('The coyote eats chickens.');
	}
};

coyote.eats();

var coyoteEats = coyote.eats;

//====================================================================================

var cat = {
	colour: 'orange',
	eats: ['cat food', 'mice', 'salmon']
}

var catEats = cat.eats;
//===================================================================================

//Arrays of Objects

var myFavouriteThings = [
		{name: 'Krystal',
		status: 'awesome'},
		{name: 'Krystal1',
		status: 'super awesome'
		}
];

for (var i = 0; i < myFavouriteThings.length; i++)
{
	var favies = myFavouriteThings[i];
	console.log(favies.name + ' is ' + favies.status);
}

//======================================================================================

//Function of Array of Objects

var Things = {

	age: 27,
	furColor: 'chinchilla',
	likes: ['money', 'travel', 'paying people to do my shit for me'],
	birthday: {month: 7, day: 4, year: 1989}
}

function describeThings(thing){
	console.log('I am ' + thing.age + ' years old and I like ' + thing.likes[2]);
}

describeThings(Things);

//=======================================================================================

//Favourite Recipe

var Recipe = {

	name: 'Curried Crab',
	ingredients: ['potato', 'onion', 'garlic', 'curry', 'Blue Crab', 'coconut milk'],
	servings: 2
}

function doRecipe(recipe){
	console.log('To make ' + recipe.name + ' You need: ' + recipe.ingredients[0]
		+ ', '  + recipe.ingredients[1] + ', '  + recipe.ingredients[2] + ', '  + recipe.ingredients[3]
		+ ', '  + recipe.ingredients[4] + ', '  + recipe.ingredients[5] + '. This recipe is for ' +
		recipe.servings + ' servings.');
}

doRecipe(Recipe);

//=======================================================================================

//Object Methods

var fluffyTheDog = {
	age: 2,
	furColor: 'black',
	bowow: function(){
		console.log('bow wow');
	}
};

// Dot notation to call object methods
fluffyTheDog.bowow();

//====================================================================================
