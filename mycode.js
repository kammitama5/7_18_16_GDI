//================================================================================

//Objects

var giraffe = {
	colour: 'brown',
	eats: 'grass'
};

var giraffeColour = giraffe.colour;


var coyote = {
	colour: 'grey',
	eats: 'people'
};

var coyoteEats = coyote.eats;

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

