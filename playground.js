var Point  = Isomer.Point;
var Path   = Isomer.Path;
var Shape  = Isomer.Shape;
var Vector = Isomer.Vector;
var Color  = Isomer.Color;

var iso = new Isomer(document.getElementById("canvas"));
var nice_yellow = new Color(255, 136, 40);
var light_green = new Color(84, 196, 93);
var dark_green = new Color(3, 80, 111	);

var sky_blue = new Color(139,213, 232);
var cobalt = new Color(47, 75, 160);
var royal_purple = new Color(165, 176, 209);
var origin = Shape.Prism(Point(0,0,0), 3, 3, 3);
var gap = 1.75;
var minicube = Shape.Prism(Point(0,0,0));
var minigap = 1.05
var y_plane = Shape.Prism(Point.ORIGIN, 1, 3,3);
var x_plane = Shape.Prism(Point(-6, 6, 0), 3, 1,3);
var z_plane = Shape.Prism(Point(4.25,-4.25,.25), 3,3,1);
var cube_gap = 4


var cube = [minicube.translate(0,0,3*minigap),
minicube.translate(minigap,0,2*minigap), 
minicube.translate(0, minigap, 2*minigap), 
minicube.translate(0,0,2*minigap), 
minicube.translate(0,2*minigap,-minigap), 
minicube.translate(0,2*minigap,0),
minicube.translate(0,2*minigap,minigap), 
minicube.translate(2*minigap,0,-minigap), 
minicube.translate(2*minigap,0,0), 
minicube.translate(2*minigap,0,minigap), 
minicube.translate(0,minigap,-minigap), 
minicube.translate(0,minigap,0),
minicube.translate(0,-minigap,0),
minicube.translate(minigap,0,0),
minicube.translate(0,minigap,minigap),
minicube.translate(minigap,0,minigap), 
minicube.translate(0, 0, -minigap),
minicube, 
minicube.translate(0, 0, minigap)];

//Figure 23
iso.add(minicube.translate(0,0,3*minigap), royal_purple);
iso.add(minicube.translate(minigap,0,2*minigap), royal_purple);
iso.add(minicube.translate(0, minigap, 2*minigap), royal_purple);
iso.add(minicube.translate(0,0,2*minigap), royal_purple);

iso.add(minicube.translate(0,2*minigap,-minigap), royal_purple);
iso.add(minicube.translate(0,2*minigap,0), royal_purple);
iso.add(minicube.translate(0,2*minigap,minigap), royal_purple);

iso.add(minicube.translate(2*minigap,0,-minigap), royal_purple);
iso.add(minicube.translate(2*minigap,0,0), royal_purple);
iso.add(minicube.translate(2*minigap,0,minigap), royal_purple);

iso.add(minicube.translate(0,minigap,-minigap), royal_purple);
iso.add(minicube.translate(0,minigap,0), royal_purple);
iso.add(minicube.translate(0,-minigap,0), royal_purple);

iso.add(minicube.translate(minigap,0,0), royal_purple);
iso.add(minicube.translate(0,minigap,minigap), royal_purple);
iso.add(minicube.translate(minigap,0,minigap), royal_purple);

iso.add(minicube.translate(0, 0, -minigap), royal_purple);
iso.add(minicube, cobalt);
iso.add(minicube.translate(0, 0, minigap), royal_purple);
/*
//Figure 22
iso.add(minicube.translate(0,0,3*minigap), royal_purple);
iso.add(minicube.translate(minigap,0,2*minigap), cobalt);
iso.add(minicube.translate(0, minigap, 2*minigap), royal_purple);
iso.add(minicube.translate(0,0,2*minigap), royal_purple);

iso.add(minicube.translate(0,2*minigap,-minigap), royal_purple);
iso.add(minicube.translate(0,2*minigap,0), royal_purple);
iso.add(minicube.translate(0,2*minigap,minigap), royal_purple);

iso.add(minicube.translate(2*minigap,0,-minigap), royal_purple);
iso.add(minicube.translate(2*minigap,0,0), royal_purple);
iso.add(minicube.translate(2*minigap,0,minigap), royal_purple);

iso.add(minicube.translate(0,minigap,-minigap), royal_purple);
iso.add(minicube.translate(0,minigap,0), royal_purple);
iso.add(minicube.translate(0,-minigap,0), royal_purple);

iso.add(minicube.translate(minigap,0,0), royal_purple);
iso.add(minicube.translate(0,minigap,minigap), royal_purple);
iso.add(minicube.translate(minigap,0,minigap), royal_purple);

iso.add(minicube.translate(0, 0, -minigap), royal_purple);
iso.add(minicube, royal_purple);
iso.add(minicube.translate(0, 0, minigap), royal_purple);
*/

/*
//Figure 21
iso.add(y_plane.translate(gap, 0, 0), cobalt)
iso.add(y_plane, royal_purple)
iso.add(y_plane.translate(-gap, 0, 0), royal_purple)

iso.add(x_plane.translate(0, gap, 0), royal_purple)
iso.add(x_plane, cobalt)
iso.add(x_plane.translate(0, -gap, 0), royal_purple)

iso.add(z_plane.translate(0, 0, -gap), royal_purple)
iso.add(z_plane, royal_purple)
iso.add(z_plane.translate(0,0,gap), cobalt)
*/
/*
//Figure 20
iso.add(minicube.translate(cube_gap,-cube_gap,3*minigap), dark_green);
iso.add(minicube.translate(cube_gap+ minigap,-cube_gap,2*minigap), light_green);
iso.add(minicube.translate(cube_gap,-cube_gap+ minigap, 2*minigap), dark_green);
iso.add(minicube.translate(cube_gap,-cube_gap,2*minigap), light_green);

iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,-minigap), dark_green);
iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,0), dark_green);
iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,minigap), dark_green);

iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,-minigap), nice_yellow);
iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,0), nice_yellow);
iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,minigap), nice_yellow);

iso.add(minicube.translate(cube_gap,-cube_gap+minigap,-minigap), light_green);
iso.add(minicube.translate(cube_gap,-cube_gap+minigap,0), light_green);
iso.add(minicube.translate(cube_gap,-cube_gap+-minigap,0), nice_yellow);

iso.add(minicube.translate(cube_gap+minigap,-cube_gap,0), nice_yellow);
iso.add(minicube.translate(cube_gap,-cube_gap+minigap,minigap), light_green);
iso.add(minicube.translate(cube_gap+minigap,-cube_gap,minigap), nice_yellow);

iso.add(minicube.translate(cube_gap, -cube_gap, -minigap), nice_yellow);
iso.add(minicube.translate(cube_gap, -cube_gap, 0), nice_yellow);
iso.add(minicube.translate(cube_gap, -cube_gap, minigap), nice_yellow);


iso.add(minicube.translate(0,0,3*minigap), dark_green);
iso.add(minicube.translate(minigap,0,2*minigap), light_green);
iso.add(minicube.translate(0, minigap, 2*minigap), dark_green);
iso.add(minicube.translate(0,0,2*minigap), light_green);

iso.add(minicube.translate(0,2*minigap,-minigap), dark_green);
iso.add(minicube.translate(0,2*minigap,0), dark_green);
iso.add(minicube.translate(0,2*minigap,minigap), dark_green);

iso.add(minicube.translate(2*minigap,0,-minigap), nice_yellow);
iso.add(minicube.translate(2*minigap,0,0), nice_yellow);
iso.add(minicube.translate(2*minigap,0,minigap), nice_yellow);

iso.add(minicube.translate(0,minigap,-minigap), light_green);
iso.add(minicube.translate(0,minigap,0), light_green);
iso.add(minicube.translate(0,-minigap,0), nice_yellow);

iso.add(minicube.translate(minigap,0,0), nice_yellow);
iso.add(minicube.translate(0,minigap,minigap), light_green);
iso.add(minicube.translate(minigap,0,minigap), nice_yellow);

iso.add(minicube.translate(0, 0, -minigap), nice_yellow);
iso.add(minicube, nice_yellow);
iso.add(minicube.translate(0, 0, minigap), nice_yellow);


iso.add(minicube.translate(-cube_gap,cube_gap,3*minigap), dark_green);
iso.add(minicube.translate(-cube_gap+ minigap,cube_gap,2*minigap), light_green);
iso.add(minicube.translate(-cube_gap,cube_gap+ minigap, 2*minigap), dark_green);
iso.add(minicube.translate(-cube_gap,cube_gap,2*minigap), light_green);

iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,-minigap), dark_green);
iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,0), dark_green);
iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,minigap), dark_green);

iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,-minigap), nice_yellow);
iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,0), nice_yellow);
iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,minigap), nice_yellow);

iso.add(minicube.translate(-cube_gap,cube_gap+minigap,-minigap), light_green);
iso.add(minicube.translate(-cube_gap,cube_gap+minigap,0), light_green);
iso.add(minicube.translate(-cube_gap,cube_gap+-minigap,0), nice_yellow);

iso.add(minicube.translate(-cube_gap+minigap,cube_gap,0), nice_yellow);
iso.add(minicube.translate(-cube_gap,cube_gap+minigap,minigap), light_green);
iso.add(minicube.translate(-cube_gap+minigap,cube_gap,minigap), nice_yellow);

iso.add(minicube.translate(-cube_gap, cube_gap, -minigap), nice_yellow);
iso.add(minicube.translate(-cube_gap, cube_gap, 0), nice_yellow);
iso.add(minicube.translate(-cube_gap, cube_gap, minigap), nice_yellow);
*/
/*
//Figure 19

iso.add(minicube.translate(cube_gap,-cube_gap,3*minigap), dark_green);
iso.add(minicube.translate(cube_gap+ minigap,-cube_gap,2*minigap), dark_green);
iso.add(minicube.translate(cube_gap,-cube_gap+ minigap, 2*minigap), dark_green);
iso.add(minicube.translate(cube_gap,-cube_gap,2*minigap), dark_green);

iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,-minigap), nice_yellow);
iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,0), light_green);
iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,minigap), dark_green);

iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,-minigap), nice_yellow);
iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,0), light_green);
iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,minigap), dark_green);

iso.add(minicube.translate(cube_gap,-cube_gap+minigap,-minigap), nice_yellow);
iso.add(minicube.translate(cube_gap,-cube_gap+minigap,0), light_green);
iso.add(minicube.translate(cube_gap,-cube_gap+-minigap,0), nice_yellow);

iso.add(minicube.translate(cube_gap+minigap,-cube_gap,0), light_green);
iso.add(minicube.translate(cube_gap,-cube_gap+minigap,minigap), dark_green);
iso.add(minicube.translate(cube_gap+minigap,-cube_gap,minigap), dark_green);

iso.add(minicube.translate(cube_gap, -cube_gap, -minigap), nice_yellow);
iso.add(minicube.translate(cube_gap, -cube_gap, 0), light_green);
iso.add(minicube.translate(cube_gap, -cube_gap, minigap), dark_green);


iso.add(minicube.translate(0,0,3*minigap), dark_green);
iso.add(minicube.translate(minigap,0,2*minigap), dark_green);
iso.add(minicube.translate(0, minigap, 2*minigap), dark_green);
iso.add(minicube.translate(0,0,2*minigap), dark_green);

iso.add(minicube.translate(0,2*minigap,-minigap), nice_yellow);
iso.add(minicube.translate(0,2*minigap,0), light_green);
iso.add(minicube.translate(0,2*minigap,minigap), dark_green);

iso.add(minicube.translate(2*minigap,0,-minigap), nice_yellow);
iso.add(minicube.translate(2*minigap,0,0), light_green);
iso.add(minicube.translate(2*minigap,0,minigap), dark_green);

iso.add(minicube.translate(0,minigap,-minigap), nice_yellow);
iso.add(minicube.translate(0,minigap,0), light_green);
iso.add(minicube.translate(0,-minigap,0), nice_yellow);

iso.add(minicube.translate(minigap,0,0), light_green);
iso.add(minicube.translate(0,minigap,minigap), dark_green);
iso.add(minicube.translate(minigap,0,minigap), dark_green);

iso.add(minicube.translate(0, 0, -minigap), nice_yellow);
iso.add(minicube, light_green);
iso.add(minicube.translate(0, 0, minigap), dark_green);


iso.add(minicube.translate(-cube_gap,cube_gap,3*minigap), dark_green);
iso.add(minicube.translate(-cube_gap+ minigap,cube_gap,2*minigap), dark_green);
iso.add(minicube.translate(-cube_gap,cube_gap+ minigap, 2*minigap), dark_green);
iso.add(minicube.translate(-cube_gap,cube_gap,2*minigap), dark_green);

iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,-minigap), nice_yellow);
iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,0), light_green);
iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,minigap), dark_green);

iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,-minigap), nice_yellow);
iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,0), light_green);
iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,minigap), dark_green);

iso.add(minicube.translate(-cube_gap,cube_gap+minigap,-minigap), nice_yellow);
iso.add(minicube.translate(-cube_gap,cube_gap+minigap,0), light_green);
iso.add(minicube.translate(-cube_gap,cube_gap+-minigap,0), nice_yellow);

iso.add(minicube.translate(-cube_gap+minigap,cube_gap,0), light_green);
iso.add(minicube.translate(-cube_gap,cube_gap+minigap,minigap), dark_green);
iso.add(minicube.translate(-cube_gap+minigap,cube_gap,minigap), dark_green);

iso.add(minicube.translate(-cube_gap, cube_gap, -minigap), nice_yellow);
iso.add(minicube.translate(-cube_gap, cube_gap, 0), light_green);
iso.add(minicube.translate(-cube_gap, cube_gap, minigap), dark_green);
*/
/*
//Figure 18


iso.add(minicube.translate(cube_gap,-cube_gap,3*minigap), dark_green);
iso.add(minicube.translate(cube_gap+ minigap,-cube_gap,2*minigap), dark_green);
iso.add(minicube.translate(cube_gap,-cube_gap+ minigap, 2*minigap), dark_green);
iso.add(minicube.translate(cube_gap,-cube_gap,2*minigap), dark_green);

iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,-minigap), dark_green);
iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,0), dark_green);
iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,minigap), dark_green);

iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,-minigap), dark_green);
iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,0), dark_green);
iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,minigap), dark_green);

iso.add(minicube.translate(cube_gap,-cube_gap+minigap,-minigap), dark_green);
iso.add(minicube.translate(cube_gap,-cube_gap+minigap,0), dark_green);
iso.add(minicube.translate(cube_gap,-cube_gap+-minigap,0), dark_green);

iso.add(minicube.translate(cube_gap+minigap,-cube_gap,0), dark_green);
iso.add(minicube.translate(cube_gap,-cube_gap+minigap,minigap), dark_green);
iso.add(minicube.translate(cube_gap+minigap,-cube_gap,minigap), dark_green);

iso.add(minicube.translate(cube_gap, -cube_gap, -minigap), dark_green);
iso.add(minicube.translate(cube_gap, -cube_gap, 0), dark_green);
iso.add(minicube.translate(cube_gap, -cube_gap, minigap), dark_green);


iso.add(cube, light_green);

iso.add(minicube.translate(-cube_gap,cube_gap,3*minigap), nice_yellow);
iso.add(minicube.translate(-cube_gap+ minigap,cube_gap,2*minigap), nice_yellow);
iso.add(minicube.translate(-cube_gap,cube_gap+ minigap, 2*minigap), nice_yellow);
iso.add(minicube.translate(-cube_gap,cube_gap,2*minigap), nice_yellow);

iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,-minigap), nice_yellow);
iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,0), nice_yellow);
iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,minigap), nice_yellow);

iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,-minigap), nice_yellow);
iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,0), nice_yellow);
iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,minigap), nice_yellow);

iso.add(minicube.translate(-cube_gap,cube_gap+minigap,-minigap), nice_yellow);
iso.add(minicube.translate(-cube_gap,cube_gap+minigap,0), nice_yellow);
iso.add(minicube.translate(-cube_gap,cube_gap+-minigap,0), nice_yellow);

iso.add(minicube.translate(-cube_gap+minigap,cube_gap,0), nice_yellow);
iso.add(minicube.translate(-cube_gap,cube_gap+minigap,minigap), nice_yellow);
iso.add(minicube.translate(-cube_gap+minigap,cube_gap,minigap), nice_yellow);

iso.add(minicube.translate(-cube_gap, cube_gap, -minigap), nice_yellow);
iso.add(minicube.translate(-cube_gap, cube_gap, 0), nice_yellow);
iso.add(minicube.translate(-cube_gap, cube_gap, minigap), nice_yellow);
*/
/*

//Figure 17

iso.add(minicube.translate(cube_gap,-cube_gap,3*minigap), dark_green);
iso.add(minicube.translate(cube_gap+ minigap,-cube_gap,2*minigap), dark_green);
iso.add(minicube.translate(cube_gap,-cube_gap+ minigap, 2*minigap), light_green);
iso.add(minicube.translate(cube_gap,-cube_gap,2*minigap), light_green);

iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,-minigap), nice_yellow);
iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,0), nice_yellow);
iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,minigap), nice_yellow);

iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,-minigap), dark_green);
iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,0), dark_green);
iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,minigap), dark_green);

iso.add(minicube.translate(cube_gap,-cube_gap+minigap,-minigap), nice_yellow);
iso.add(minicube.translate(cube_gap,-cube_gap+minigap,0), nice_yellow);
iso.add(minicube.translate(cube_gap,-cube_gap+-minigap,0), light_green);

iso.add(minicube.translate(cube_gap+minigap,-cube_gap,0), light_green);
iso.add(minicube.translate(cube_gap,-cube_gap+minigap,minigap), nice_yellow);
iso.add(minicube.translate(cube_gap+minigap,-cube_gap,minigap), light_green);

iso.add(minicube.translate(cube_gap, -cube_gap, -minigap), nice_yellow);
iso.add(minicube.translate(cube_gap, -cube_gap, 0), nice_yellow);
iso.add(minicube.translate(cube_gap, -cube_gap, minigap), nice_yellow);


iso.add(minicube.translate(0,0,3*minigap), dark_green);
iso.add(minicube.translate(minigap,0,2*minigap), dark_green);
iso.add(minicube.translate(0, minigap, 2*minigap), light_green);
iso.add(minicube.translate(0,0,2*minigap), light_green);

iso.add(minicube.translate(0,2*minigap,-minigap), nice_yellow);
iso.add(minicube.translate(0,2*minigap,0), nice_yellow);
iso.add(minicube.translate(0,2*minigap,minigap), nice_yellow);

iso.add(minicube.translate(2*minigap,0,-minigap), dark_green);
iso.add(minicube.translate(2*minigap,0,0), dark_green);
iso.add(minicube.translate(2*minigap,0,minigap), dark_green);

iso.add(minicube.translate(0,minigap,-minigap), nice_yellow);
iso.add(minicube.translate(0,minigap,0), nice_yellow);
iso.add(minicube.translate(0,-minigap,0), light_green);

iso.add(minicube.translate(minigap,0,0), light_green);
iso.add(minicube.translate(0,minigap,minigap), nice_yellow);
iso.add(minicube.translate(minigap,0,minigap), light_green);

iso.add(minicube.translate(0, 0, -minigap), nice_yellow);
iso.add(minicube, nice_yellow);
iso.add(minicube.translate(0, 0, minigap), nice_yellow);


iso.add(minicube.translate(-cube_gap,cube_gap,3*minigap), dark_green);
iso.add(minicube.translate(-cube_gap+ minigap,cube_gap,2*minigap), dark_green);
iso.add(minicube.translate(-cube_gap,cube_gap+ minigap, 2*minigap), light_green);
iso.add(minicube.translate(-cube_gap,cube_gap,2*minigap), light_green);

iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,-minigap), nice_yellow);
iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,0), nice_yellow);
iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,minigap), nice_yellow);

iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,-minigap), dark_green);
iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,0), dark_green);
iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,minigap), dark_green);

iso.add(minicube.translate(-cube_gap,cube_gap+minigap,-minigap), nice_yellow);
iso.add(minicube.translate(-cube_gap,cube_gap+minigap,0), nice_yellow);
iso.add(minicube.translate(-cube_gap,cube_gap+-minigap,0), light_green);

iso.add(minicube.translate(-cube_gap+minigap,cube_gap,0), light_green);
iso.add(minicube.translate(-cube_gap,cube_gap+minigap,minigap), nice_yellow);
iso.add(minicube.translate(-cube_gap+minigap,cube_gap,minigap), light_green);

iso.add(minicube.translate(-cube_gap, cube_gap, -minigap), nice_yellow);
iso.add(minicube.translate(-cube_gap, cube_gap, 0), nice_yellow);
iso.add(minicube.translate(-cube_gap, cube_gap, minigap), nice_yellow);
*/

/*
//Figure 16

iso.add(minicube.translate(cube_gap,-cube_gap,3*minigap), royal_purple);
iso.add(minicube.translate(cube_gap+ minigap,-cube_gap,2*minigap), royal_purple);
iso.add(minicube.translate(cube_gap,-cube_gap+ minigap, 2*minigap), royal_purple);
iso.add(minicube.translate(cube_gap,-cube_gap,2*minigap), royal_purple);

iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,-minigap), royal_purple);
iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,0), royal_purple);
iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,minigap), royal_purple);

iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,-minigap), royal_purple);
iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,0), royal_purple);
iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,minigap), royal_purple);

iso.add(minicube.translate(cube_gap,-cube_gap+minigap,-minigap), royal_purple);
iso.add(minicube.translate(cube_gap,-cube_gap+minigap,0), royal_purple);
iso.add(minicube.translate(cube_gap,-cube_gap+-minigap,0), royal_purple);

iso.add(minicube.translate(cube_gap+minigap,-cube_gap,0), royal_purple);
iso.add(minicube.translate(cube_gap,-cube_gap+minigap,minigap), royal_purple);
iso.add(minicube.translate(cube_gap+minigap,-cube_gap,minigap), royal_purple);

iso.add(minicube.translate(cube_gap, -cube_gap, -minigap), royal_purple);
iso.add(minicube.translate(cube_gap, -cube_gap, 0), royal_purple);
iso.add(minicube.translate(cube_gap, -cube_gap, minigap), royal_purple);

iso.add(cube, cobalt);

iso.add(minicube.translate(-cube_gap,cube_gap,3*minigap), royal_purple);
iso.add(minicube.translate(-cube_gap+ minigap,cube_gap,2*minigap), royal_purple);
iso.add(minicube.translate(-cube_gap,cube_gap+ minigap, 2*minigap), royal_purple);
iso.add(minicube.translate(-cube_gap,cube_gap,2*minigap), royal_purple);

iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,-minigap), royal_purple);
iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,0), royal_purple);
iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,minigap), royal_purple);

iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,-minigap), royal_purple);
iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,0), royal_purple);
iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,minigap), royal_purple);

iso.add(minicube.translate(-cube_gap,cube_gap+minigap,-minigap), royal_purple);
iso.add(minicube.translate(-cube_gap,cube_gap+minigap,0), royal_purple);
iso.add(minicube.translate(-cube_gap,cube_gap+-minigap,0), royal_purple);

iso.add(minicube.translate(-cube_gap+minigap,cube_gap,0), royal_purple);
iso.add(minicube.translate(-cube_gap,cube_gap+minigap,minigap), royal_purple);
iso.add(minicube.translate(-cube_gap+minigap,cube_gap,minigap), royal_purple);

iso.add(minicube.translate(-cube_gap, cube_gap, -minigap), royal_purple);
iso.add(minicube.translate(-cube_gap, cube_gap, 0), royal_purple);
iso.add(minicube.translate(-cube_gap, cube_gap, minigap), royal_purple);
*/

/*
//Figure 15


iso.add(minicube.translate(cube_gap,-cube_gap,3*minigap), royal_purple);
iso.add(minicube.translate(cube_gap+ minigap,-cube_gap,2*minigap), royal_purple);
iso.add(minicube.translate(cube_gap,-cube_gap+ minigap, 2*minigap), royal_purple);
iso.add(minicube.translate(cube_gap,-cube_gap,2*minigap), royal_purple);

iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,-minigap), royal_purple);
iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,0), royal_purple);
iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,minigap), royal_purple);

iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,-minigap), royal_purple);
iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,0), royal_purple);
iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,minigap), royal_purple);

iso.add(minicube.translate(cube_gap,-cube_gap+minigap,-minigap), royal_purple);
iso.add(minicube.translate(cube_gap,-cube_gap+minigap,0), royal_purple);
iso.add(minicube.translate(cube_gap,-cube_gap+-minigap,0), royal_purple);

iso.add(minicube.translate(cube_gap+minigap,-cube_gap,0), royal_purple);
iso.add(minicube.translate(cube_gap,-cube_gap+minigap,minigap), royal_purple);
iso.add(minicube.translate(cube_gap+minigap,-cube_gap,minigap), royal_purple);

iso.add(minicube.translate(cube_gap, -cube_gap, -minigap), royal_purple);
iso.add(minicube.translate(cube_gap, -cube_gap, 0), royal_purple);
iso.add(minicube.translate(cube_gap, -cube_gap, minigap), royal_purple);


iso.add(cube, royal_purple);

iso.add(minicube.translate(-cube_gap,cube_gap,3*minigap), cobalt);
iso.add(minicube.translate(-cube_gap+ minigap,cube_gap,2*minigap), cobalt);
iso.add(minicube.translate(-cube_gap,cube_gap+ minigap, 2*minigap), cobalt);
iso.add(minicube.translate(-cube_gap,cube_gap,2*minigap), cobalt);

iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,-minigap), cobalt);
iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,0), cobalt);
iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,minigap), cobalt);

iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,-minigap), cobalt);
iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,0), cobalt);
iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,minigap), cobalt);

iso.add(minicube.translate(-cube_gap,cube_gap+minigap,-minigap), cobalt);
iso.add(minicube.translate(-cube_gap,cube_gap+minigap,0), cobalt);
iso.add(minicube.translate(-cube_gap,cube_gap+-minigap,0), cobalt);

iso.add(minicube.translate(-cube_gap+minigap,cube_gap,0), cobalt);
iso.add(minicube.translate(-cube_gap,cube_gap+minigap,minigap), cobalt);
iso.add(minicube.translate(-cube_gap+minigap,cube_gap,minigap), cobalt);

iso.add(minicube.translate(-cube_gap, cube_gap, -minigap), cobalt);
iso.add(minicube.translate(-cube_gap, cube_gap, 0), cobalt);
iso.add(minicube.translate(-cube_gap, cube_gap, minigap), cobalt);
*/
/*
//Figure 14


iso.add(minicube.translate(cube_gap,-cube_gap,3*minigap), cobalt);
iso.add(minicube.translate(cube_gap+ minigap,-cube_gap,2*minigap), cobalt);
iso.add(minicube.translate(cube_gap,-cube_gap+ minigap, 2*minigap), cobalt);
iso.add(minicube.translate(cube_gap,-cube_gap,2*minigap), cobalt);

iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,-minigap), cobalt);
iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,0), cobalt);
iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,minigap), cobalt);

iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,-minigap), cobalt);
iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,0), cobalt);
iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,minigap), cobalt);

iso.add(minicube.translate(cube_gap,-cube_gap+minigap,-minigap), cobalt);
iso.add(minicube.translate(cube_gap,-cube_gap+minigap,0), cobalt);
iso.add(minicube.translate(cube_gap,-cube_gap+-minigap,0), cobalt);

iso.add(minicube.translate(cube_gap+minigap,-cube_gap,0), cobalt);
iso.add(minicube.translate(cube_gap,-cube_gap+minigap,minigap), cobalt);
iso.add(minicube.translate(cube_gap+minigap,-cube_gap,minigap), cobalt);

iso.add(minicube.translate(cube_gap, -cube_gap, -minigap), cobalt);
iso.add(minicube.translate(cube_gap, -cube_gap, 0), cobalt);
iso.add(minicube.translate(cube_gap, -cube_gap, minigap), cobalt);

iso.add(cube, royal_purple);


iso.add(minicube.translate(-cube_gap,cube_gap,3*minigap), royal_purple);
iso.add(minicube.translate(-cube_gap+ minigap,cube_gap,2*minigap), royal_purple);
iso.add(minicube.translate(-cube_gap,cube_gap+ minigap, 2*minigap), royal_purple);
iso.add(minicube.translate(-cube_gap,cube_gap,2*minigap), royal_purple);

iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,-minigap), royal_purple);
iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,0), royal_purple);
iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,minigap), royal_purple);

iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,-minigap), royal_purple);
iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,0), royal_purple);
iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,minigap), royal_purple);

iso.add(minicube.translate(-cube_gap,cube_gap+minigap,-minigap), royal_purple);
iso.add(minicube.translate(-cube_gap,cube_gap+minigap,0), royal_purple);
iso.add(minicube.translate(-cube_gap,cube_gap+-minigap,0), royal_purple);

iso.add(minicube.translate(-cube_gap+minigap,cube_gap,0), royal_purple);
iso.add(minicube.translate(-cube_gap,cube_gap+minigap,minigap), royal_purple);
iso.add(minicube.translate(-cube_gap+minigap,cube_gap,minigap), royal_purple);

iso.add(minicube.translate(-cube_gap, cube_gap, -minigap), royal_purple);
iso.add(minicube.translate(-cube_gap, cube_gap, 0), royal_purple);
iso.add(minicube.translate(-cube_gap, cube_gap, minigap), royal_purple);
*/
/*
//Figure 13-----------------------------------------
//4D y axis cuts


iso.add(minicube.translate(cube_gap,-cube_gap,3*minigap), cobalt);
iso.add(minicube.translate(cube_gap+ minigap,-cube_gap,2*minigap), cobalt);
iso.add(minicube.translate(cube_gap,-cube_gap+ minigap, 2*minigap), cobalt);
iso.add(minicube.translate(cube_gap,-cube_gap,2*minigap), cobalt);

iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,-minigap), cobalt);
iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,0), cobalt);
iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,minigap), cobalt);

iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,-minigap), cobalt);
iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,0), cobalt);
iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,minigap), cobalt);

iso.add(minicube.translate(cube_gap,-cube_gap+minigap,-minigap), cobalt);
iso.add(minicube.translate(cube_gap,-cube_gap+minigap,0), cobalt);
iso.add(minicube.translate(cube_gap,-cube_gap+-minigap,0), cobalt);

iso.add(minicube.translate(cube_gap+minigap,-cube_gap,0), cobalt);
iso.add(minicube.translate(cube_gap,-cube_gap+minigap,minigap), cobalt);
iso.add(minicube.translate(cube_gap+minigap,-cube_gap,minigap), cobalt);

iso.add(minicube.translate(cube_gap, -cube_gap, -minigap), cobalt);
iso.add(minicube.translate(cube_gap, -cube_gap, 0), cobalt);
iso.add(minicube.translate(cube_gap, -cube_gap, minigap), cobalt);

iso.add(cube,cobalt);

iso.add(minicube.translate(-cube_gap,cube_gap,3*minigap), royal_purple);
iso.add(minicube.translate(-cube_gap+ minigap,cube_gap,2*minigap), royal_purple);
iso.add(minicube.translate(-cube_gap,cube_gap+ minigap, 2*minigap), royal_purple);
iso.add(minicube.translate(-cube_gap,cube_gap,2*minigap), royal_purple);

iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,-minigap), royal_purple);
iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,0), royal_purple);
iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,minigap), royal_purple);

iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,-minigap), royal_purple);
iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,0), royal_purple);
iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,minigap), royal_purple);

iso.add(minicube.translate(-cube_gap,cube_gap+minigap,-minigap), royal_purple);
iso.add(minicube.translate(-cube_gap,cube_gap+minigap,0), royal_purple);
iso.add(minicube.translate(-cube_gap,cube_gap+-minigap,0), royal_purple);

iso.add(minicube.translate(-cube_gap+minigap,cube_gap,0), royal_purple);
iso.add(minicube.translate(-cube_gap,cube_gap+minigap,minigap), royal_purple);
iso.add(minicube.translate(-cube_gap+minigap,cube_gap,minigap), royal_purple);

iso.add(minicube.translate(-cube_gap, cube_gap, -minigap), royal_purple);
iso.add(minicube.translate(-cube_gap, cube_gap, 0), royal_purple);
iso.add(minicube.translate(-cube_gap, cube_gap, minigap), royal_purple);
*/
/*
//Figure 12-----------------------------------------
//4D y axis cuts


iso.add(minicube.translate(cube_gap,-cube_gap,3*minigap), cobalt);
iso.add(minicube.translate(cube_gap+ minigap,-cube_gap,2*minigap), cobalt);
iso.add(minicube.translate(cube_gap,-cube_gap+ minigap, 2*minigap), cobalt);
iso.add(minicube.translate(cube_gap,-cube_gap,2*minigap), cobalt);

iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,-minigap), cobalt);
iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,0), cobalt);
iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,minigap), cobalt);

iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,-minigap), cobalt);
iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,0), cobalt);
iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,minigap), cobalt);

iso.add(minicube.translate(cube_gap,-cube_gap+minigap,-minigap), cobalt);
iso.add(minicube.translate(cube_gap,-cube_gap+minigap,0), cobalt);
iso.add(minicube.translate(cube_gap,-cube_gap+-minigap,0), cobalt);

iso.add(minicube.translate(cube_gap+minigap,-cube_gap,0), cobalt);
iso.add(minicube.translate(cube_gap,-cube_gap+minigap,minigap), cobalt);
iso.add(minicube.translate(cube_gap+minigap,-cube_gap,minigap), cobalt);

iso.add(minicube.translate(cube_gap, -cube_gap, -minigap), cobalt);
iso.add(minicube.translate(cube_gap, -cube_gap, 0), cobalt);
iso.add(minicube.translate(cube_gap, -cube_gap, minigap), cobalt);

iso.add(cube, royal_purple);

iso.add(minicube.translate(-cube_gap,cube_gap,3*minigap), cobalt);
iso.add(minicube.translate(-cube_gap+ minigap,cube_gap,2*minigap), cobalt);
iso.add(minicube.translate(-cube_gap,cube_gap+ minigap, 2*minigap), cobalt);
iso.add(minicube.translate(-cube_gap,cube_gap,2*minigap), cobalt);

iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,-minigap), cobalt);
iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,0), cobalt);
iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,minigap), cobalt);

iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,-minigap), cobalt);
iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,0), cobalt);
iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,minigap), cobalt);

iso.add(minicube.translate(-cube_gap,cube_gap+minigap,-minigap), cobalt);
iso.add(minicube.translate(-cube_gap,cube_gap+minigap,0), cobalt);
iso.add(minicube.translate(-cube_gap,cube_gap+-minigap,0), cobalt);

iso.add(minicube.translate(-cube_gap+minigap,cube_gap,0), cobalt);
iso.add(minicube.translate(-cube_gap,cube_gap+minigap,minigap), cobalt);
iso.add(minicube.translate(-cube_gap+minigap,cube_gap,minigap), cobalt);

iso.add(minicube.translate(-cube_gap, cube_gap, -minigap), cobalt);
iso.add(minicube.translate(-cube_gap, cube_gap, 0), cobalt);
iso.add(minicube.translate(-cube_gap, cube_gap, minigap), cobalt);
*/
/*
//Figure 11 ----------------------------------------------------
//4D x axis cuts
var cube_gap = 4

iso.add(minicube.translate(cube_gap,-cube_gap,3*minigap), royal_purple);
iso.add(minicube.translate(cube_gap+ minigap,-cube_gap,2*minigap), royal_purple);
iso.add(minicube.translate(cube_gap,-cube_gap+ minigap, 2*minigap), royal_purple);
iso.add(minicube.translate(cube_gap,-cube_gap,2*minigap), royal_purple);

iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,-minigap), royal_purple);
iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,0), royal_purple);
iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,minigap), royal_purple);

iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,-minigap), royal_purple);
iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,0), royal_purple);
iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,minigap), royal_purple);

iso.add(minicube.translate(cube_gap,-cube_gap+minigap,-minigap), royal_purple);
iso.add(minicube.translate(cube_gap,-cube_gap+minigap,0), royal_purple);
iso.add(minicube.translate(cube_gap,-cube_gap+-minigap,0), royal_purple);

iso.add(minicube.translate(cube_gap+minigap,-cube_gap,0), royal_purple);
iso.add(minicube.translate(cube_gap,-cube_gap+minigap,minigap), royal_purple);
iso.add(minicube.translate(cube_gap+minigap,-cube_gap,minigap), royal_purple);

iso.add(minicube.translate(cube_gap, -cube_gap, -minigap), royal_purple);
iso.add(minicube.translate(cube_gap, -cube_gap, 0), royal_purple);
iso.add(minicube.translate(cube_gap, -cube_gap, minigap), royal_purple);


iso.add(cube, cobalt)


iso.add(minicube.translate(-cube_gap,cube_gap,3*minigap), cobalt);
iso.add(minicube.translate(-cube_gap+ minigap,cube_gap,2*minigap), cobalt);
iso.add(minicube.translate(-cube_gap,cube_gap+ minigap, 2*minigap), cobalt);
iso.add(minicube.translate(-cube_gap,cube_gap,2*minigap), cobalt);

iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,-minigap), cobalt);
iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,0), cobalt);
iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,minigap), cobalt);

iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,-minigap), cobalt);
iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,0), cobalt);
iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,minigap), cobalt);

iso.add(minicube.translate(-cube_gap,cube_gap+minigap,-minigap), cobalt);
iso.add(minicube.translate(-cube_gap,cube_gap+minigap,0), cobalt);
iso.add(minicube.translate(-cube_gap,cube_gap+-minigap,0), cobalt);

iso.add(minicube.translate(-cube_gap+minigap,cube_gap,0), cobalt);
iso.add(minicube.translate(-cube_gap,cube_gap+minigap,minigap), cobalt);
iso.add(minicube.translate(-cube_gap+minigap,cube_gap,minigap), cobalt);

iso.add(minicube.translate(-cube_gap, cube_gap, -minigap), cobalt);
iso.add(minicube.translate(-cube_gap, cube_gap, 0), cobalt);
iso.add(minicube.translate(-cube_gap, cube_gap, minigap), cobalt);

*/

/*
//Figure 10 ----------------------------------------------------


iso.add(minicube.translate(cube_gap,-cube_gap,3*minigap), sky_blue);
iso.add(minicube.translate(cube_gap+ minigap,-cube_gap,2*minigap), sky_blue);
iso.add(minicube.translate(cube_gap,-cube_gap+ minigap, 2*minigap), sky_blue);
iso.add(minicube.translate(cube_gap,-cube_gap,2*minigap), sky_blue);

iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,-minigap), sky_blue);
iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,0), sky_blue);
iso.add(minicube.translate(cube_gap,-cube_gap+2*minigap,minigap), sky_blue);

iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,-minigap), sky_blue);
iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,0), sky_blue);
iso.add(minicube.translate(cube_gap+2*minigap,-cube_gap,minigap), sky_blue);

iso.add(minicube.translate(cube_gap,-cube_gap+minigap,-minigap), sky_blue);
iso.add(minicube.translate(cube_gap,-cube_gap+minigap,0), sky_blue);
iso.add(minicube.translate(cube_gap,-cube_gap+-minigap,0), sky_blue);

iso.add(minicube.translate(cube_gap+minigap,-cube_gap,0), sky_blue);
iso.add(minicube.translate(cube_gap,-cube_gap+minigap,minigap), sky_blue);
iso.add(minicube.translate(cube_gap+minigap,-cube_gap,minigap), sky_blue);

iso.add(minicube.translate(cube_gap, -cube_gap, -minigap), sky_blue);
iso.add(minicube.translate(cube_gap, -cube_gap, 0), sky_blue);
iso.add(minicube.translate(cube_gap, -cube_gap, minigap), sky_blue);

iso.add(cube,sky_blue)


iso.add(minicube.translate(-cube_gap,cube_gap,3*minigap), sky_blue);
iso.add(minicube.translate(-cube_gap+ minigap,cube_gap,2*minigap), sky_blue);
iso.add(minicube.translate(-cube_gap,cube_gap+ minigap, 2*minigap), sky_blue);
iso.add(minicube.translate(-cube_gap,cube_gap,2*minigap), sky_blue);

iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,-minigap), sky_blue);
iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,0), sky_blue);
iso.add(minicube.translate(-cube_gap,cube_gap+2*minigap,minigap), sky_blue);

iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,-minigap), sky_blue);
iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,0), sky_blue);
iso.add(minicube.translate(-cube_gap+2*minigap,cube_gap,minigap), sky_blue);

iso.add(minicube.translate(-cube_gap,cube_gap+minigap,-minigap), sky_blue);
iso.add(minicube.translate(-cube_gap,cube_gap+minigap,0), sky_blue);
iso.add(minicube.translate(-cube_gap,cube_gap+-minigap,0), sky_blue);

iso.add(minicube.translate(-cube_gap+minigap,cube_gap,0), sky_blue);
iso.add(minicube.translate(-cube_gap,cube_gap+minigap,minigap), sky_blue);
iso.add(minicube.translate(-cube_gap+minigap,cube_gap,minigap), sky_blue);

iso.add(minicube.translate(-cube_gap, cube_gap, -minigap), sky_blue);
iso.add(minicube.translate(-cube_gap, cube_gap, 0), sky_blue);
iso.add(minicube.translate(-cube_gap, cube_gap, minigap), sky_blue);

*/

/*
//Figure 9 ---------------------------------------------------
var plane_gap = 4
iso.add(minicube.translate(plane_gap,-plane_gap,3*minigap), sky_blue);
iso.add(minicube.translate(plane_gap + minigap,-plane_gap,2*minigap), sky_blue);
iso.add(minicube.translate(plane_gap, -plane_gap + minigap, 2*minigap), sky_blue);
iso.add(minicube.translate(plane_gap,-plane_gap,2*minigap), sky_blue);
iso.add(minicube.translate(plane_gap,-plane_gap + 2*minigap,minigap), sky_blue);
iso.add(minicube.translate(plane_gap + 2*minigap,-plane_gap,minigap), sky_blue);
iso.add(minicube.translate(plane_gap,-plane_gap + minigap,minigap), sky_blue);
iso.add(minicube.translate(plane_gap + minigap,-plane_gap,minigap), sky_blue);
iso.add(minicube.translate(plane_gap, -plane_gap, minigap), sky_blue);

iso.add(minicube.translate(0,0,3*minigap), sky_blue);
iso.add(minicube.translate(minigap,0,2*minigap), sky_blue);
iso.add(minicube.translate(0, minigap, 2*minigap), sky_blue);
iso.add(minicube.translate(0,0,2*minigap), sky_blue);
iso.add(minicube.translate(0,2*minigap,minigap), sky_blue);
iso.add(minicube.translate(2*minigap,0,minigap), sky_blue);
iso.add(minicube.translate(0,minigap,minigap), sky_blue);
iso.add(minicube.translate(minigap,0,minigap), sky_blue);
iso.add(minicube.translate(0, 0, minigap), sky_blue);

iso.add(minicube.translate(-plane_gap,plane_gap,3*minigap), sky_blue);
iso.add(minicube.translate(-plane_gap + minigap,plane_gap,2*minigap), sky_blue);
iso.add(minicube.translate(-plane_gap, plane_gap + minigap, 2*minigap), sky_blue);
iso.add(minicube.translate(-plane_gap,plane_gap,2*minigap), sky_blue);
iso.add(minicube.translate(-plane_gap,plane_gap + 2*minigap,minigap), sky_blue);
iso.add(minicube.translate(-plane_gap + 2*minigap,plane_gap,minigap), sky_blue);
iso.add(minicube.translate(-plane_gap,plane_gap + minigap,minigap), sky_blue);
iso.add(minicube.translate(-plane_gap + minigap,plane_gap,minigap), sky_blue);
iso.add(minicube.translate(-plane_gap, plane_gap, minigap), sky_blue);
*/
/*
//Figure 8 --------------------------------------

iso.add(minicube.translate(0,0,3*minigap), sky_blue);
iso.add(minicube.translate(minigap,0,2*minigap), sky_blue);
iso.add(minicube.translate(0, minigap, 2*minigap), sky_blue);
iso.add(minicube.translate(0,0,2*minigap), sky_blue);
iso.add(minicube.translate(0,2*minigap,minigap), sky_blue);
iso.add(minicube.translate(2*minigap,0,minigap), sky_blue);
iso.add(minicube.translate(0,minigap,minigap), sky_blue);
iso.add(minicube.translate(minigap,0,minigap), sky_blue);
iso.add(minicube.translate(0, 0, minigap), sky_blue);
/*
/*

//Figure 7 -------------------------------------

var line = [minicube.translate(minigap,0,0),minicube,minicube.translate(-minigap,0,0)]
iso.add(line, sky_blue)

var line_spacing = 2.5

iso.add(minicube.translate(line_spacing+minigap,-line_spacing,0),sky_blue)
iso.add(minicube.translate(line_spacing,-line_spacing,0), sky_blue)
iso.add(minicube.translate(line_spacing-minigap,-line_spacing,0),sky_blue)

iso.add(minicube.translate(-line_spacing+minigap,line_spacing,0),sky_blue)
iso.add(minicube.translate(-line_spacing,line_spacing,0), sky_blue)
iso.add(minicube.translate(-line_spacing-minigap,line_spacing,0),sky_blue)
*/

/*

//Figure 6--------------------------------------
iso.add(minicube.translate(0,0,3*minigap), royal_purple);
iso.add(minicube.translate(minigap,0,2*minigap), royal_purple);
iso.add(minicube.translate(0, minigap, 2*minigap), royal_purple);
iso.add(minicube.translate(0,0,2*minigap), royal_purple);

iso.add(minicube.translate(0,2*minigap,-minigap), royal_purple);
iso.add(minicube.translate(0,2*minigap,0), royal_purple);
iso.add(minicube.translate(0,2*minigap,minigap), royal_purple);

iso.add(minicube.translate(2*minigap,0,-minigap), royal_purple);
iso.add(minicube.translate(2*minigap,0,0), royal_purple);
iso.add(minicube.translate(2*minigap,0,minigap), royal_purple);


iso.add(minicube.translate(0,minigap,-minigap), royal_purple);
iso.add(minicube.translate(0,minigap,0), royal_purple);
iso.add(minicube.translate(0,-minigap,0), royal_purple);

iso.add(minicube.translate(minigap,0,0), royal_purple);
iso.add(minicube.translate(0,minigap,minigap), royal_purple);
iso.add(minicube.translate(minigap,0,minigap), royal_purple);

iso.add(minicube.translate(0, 0, -minigap), royal_purple);
iso.add(minicube, royal_purple);
iso.add(minicube.translate(0, 0, minigap), cobalt);

8/
/*
//Figure 5---------------------------------------
iso.add(y_plane.translate(gap, 0, 0), royal_purple)
iso.add(y_plane, royal_purple)
iso.add(y_plane.translate(-gap, 0, 0), royal_purple)
iso.add(Shape.Prism(Point(-gap, 0, 2)), cobalt)

iso.add(x_plane.translate(0, gap, 0), royal_purple)
iso.add(x_plane, royal_purple)
iso.add(x_plane.translate(0, -gap, 0), royal_purple)
iso.add(Shape.Prism(Point(-6,6-gap,2)), cobalt)

iso.add(z_plane.translate(0, 0, -gap), royal_purple)
iso.add(z_plane, royal_purple)
iso.add(z_plane.translate(0,0,gap), royal_purple)
iso.add(Shape.Prism(Point(4.25,-4.25, 2)),cobalt)
*/

/*
//Figure 4---------------------------------------
iso.add(y_plane.translate(gap, 0, 0), royal_purple)
iso.add(y_plane, royal_purple)
iso.add(y_plane.translate(-gap, 0, 0), cobalt)

iso.add(x_plane.translate(0, gap, 0), royal_purple)
iso.add(x_plane, royal_purple)
iso.add(x_plane.translate(0, -gap, 0), cobalt)

iso.add(z_plane.translate(0, 0, -gap), royal_purple)
iso.add(z_plane, royal_purple)
iso.add(z_plane.translate(0,0,gap), cobalt)
*/

/*
//Figure 3------------------------------------------------
iso.add(Shape.Prism(Point.ORIGIN, 1,1,1), royal_purple)
iso.add(Shape.Prism(Point(2,-2,0), 1,1,1), cobalt)
iso.add(Shape.Prism(Point(-2,2,0), 1,1,1), sky_blue)
*/

/*
//Figure 2------------------------------------------------
iso.add(y_plane.translate(gap, 0, 0), sky_blue)
iso.add(y_plane, sky_blue)
iso.add(y_plane.translate(-gap, 0, 0), sky_blue)

iso.add(x_plane.translate(0, gap, 0), sky_blue)
iso.add(x_plane, sky_blue)
iso.add(x_plane.translate(0, -gap, 0), sky_blue)

iso.add(z_plane.translate(0, 0, -gap), sky_blue)
iso.add(z_plane, sky_blue)
iso.add(z_plane.translate(0,0,gap), sky_blue)
*/
/*
//Figure 1--------------------------------------------------

iso.add(cube, sky_blue);
 */

