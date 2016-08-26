var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Image = require('../client/js/image.js');

describe('Image component', function() {
    it('Renders the image and description',  function() {
        var url = "http://www.example.com/image.png";
        var description = "Example description";

        //Instance of the renderer:
        var renderer = TestUtils.createRenderer();
        //You then render an Image component:
        renderer.render(<Image url={url} description={description} />);
        //This returns the rendered React component
        //Using this you can check out the type and props of the elements rendered by your component:
        var result = renderer.getRenderOutput();
        // console.log("Image: ", result);
        result.props.className.should.equal('gallery-image');

        var img = result.props.children[0];
        img.type.should.equal('img');
        // img.props.src.should.equal(url);
        img.props.alt.should.equal(description);

        var p = result.props.children[1];
        p.type.should.equal('p');
        p.props.children.should.equal(description);
    });
});