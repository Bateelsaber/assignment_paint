////////////////////////////////////////////////////////////////////
// bateelsaber.js
//
// basic bateelsaber tool: draws random rectangles
// author: Bateel Saber



////////////////////////////////////////////////////////////////////
// create and install brush

var bateelsaber = new Brush("bateelsaber",
	"./brushes/bateelsaber/bateelsaber.svg");
brushes.push(bateelsaber);



////////////////////////////////////////////////////////////////////
// define brush behavior

bateelsaber.draw = function() {
	noFill(forecolor);
	stroke(forecolor);

	if (mouseIsPressed) {
		rect(pmouseX, pmouseY, random(-20, 20), random(-20, 20));

	}
};
