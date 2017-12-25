
function doCardsFixtures() {
	var cards = [
		{
			'userId': null,
			'number': 0,
			'frontContent': 'Fourier Transform and properties?',
			'backContent': '$$\\hat{f}= \\int_{-\\infty}^\\infty f(x) e^{-ikx} dx$$ The inverse Transform is $$f= \\frac{1}{2 \\pi} \\int_{-\\infty}^\\infty f(x) e^{ikx} dk$$ And some properties are ...',
			'repetitions': [new Date()],
		},
	];
	cards.forEach(card => {Cards.insert(card)});
}

Meteor.startup(() => {
	if(Cards.find().count() === 0) {
		doCardsFixtures();
	}
});



/*

FRONT
=====

Fourier Transform and properties?

BACK
====


The fourier transform is 
$$\hat{f}= \int_{-\infty}^\infty f(x) e^{-ikx} dx$$

The inverse Transform is 
$$f= \frac{1}{2 \pi} \int_{-\infty}^\infty f(x) e^{ikx} dk$$
And some properties are ...

*/


