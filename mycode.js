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