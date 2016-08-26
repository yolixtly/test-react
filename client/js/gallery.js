var React = require('react');
var ReactDOM = require('react-dom');

var Image = require('./image');

var Gallery = function(props) {
    var images = props.images.map(function(image, index) {
        return <Image url={image.url} description={image.description} key={index}/>;
    });

    return (
        <div className="gallery">{images}</div>
    );
};

var collection = [
{
	url: "http://pre04.deviantart.net/9e11/th/pre/f/2014/082/8/2/pokemon_y__eevee_by_smiley_fakemon-d7bbnee.png",
	description: "Eevee pokemon"	
},
{
	url: "https://1.bp.blogspot.com/-Px--GuqYC7Y/V2f6nNxOvrI/AAAAAAAAEKg/FcxJWpM1UTEKgn7h6ijAEJWSkMIvTloSACLcB/s1600/power_of_the_bunny.jpg",
	description: "Virtual Reality Bunny!"
}
];

module.exports = Gallery;
//document.ready from jquery
// document.addEventListener('DOMContentLoaded', function() {
    // ReactDOM.render(<Gallery  images={collection}/>, document.getElementById('app'));
// });