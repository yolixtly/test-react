var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Gallery = require('../client/js/gallery.js');
var Image = require('../client/js/image.js');

describe('Gallery component', function() {
    it('Renders the gallery of images',  function() {
        var collection = [
            {
                url: "http://pre04.deviantart.net/9e11/th/pre/f/2014/082/8/2/pokemon_y__eevee_by_smiley_fakemon-d7bbnee.png",
                description: "pokemon"    
            },
            {
                url: "https://1.bp.blogspot.com/-Px--GuqYC7Y/V2f6nNxOvrI/AAAAAAAAEKg/FcxJWpM1UTEKgn7h6ijAEJWSkMIvTloSACLcB/s1600/power_of_the_bunny.jpg",
                description: "Bunny!"
            }
        ];
        //Instance of the renderer: Shallow DOM Render
        var renderer = TestUtils.createRenderer();
        //You then render an Image component:
        renderer.render(<Gallery images={collection} />);
        //This returns the rendered React component
        //Using this you can check out the type and props of the elements rendered by your component:
        var gallery = renderer.getRenderOutput();
        console.log(gallery.props.children[0]);
        gallery.props.className.should.equal('gallery');
        gallery.props.children[0].props.url.should.equal(collection[0].url);
        gallery.props.children[0].props.description.should.equal(collection[0].description);
        gallery.type.should.equal('div');
    });
});