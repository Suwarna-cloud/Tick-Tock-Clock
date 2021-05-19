var hr,mn,sc;
var scAngle;
var clock;

function setup() {
  var canvas = createCanvas(400,400);
  
  //change the angle mode to degrees
  angleMode(DEGREES);
}

function draw() {
  background("black");
  translate(width/2,height/2);
  rotate(-90);

  //Calculating time using predefined func from p5.js
  hr = hour(); //get the actual current hour time from 0-24
  mn = minute(); //get the actual current minute time from 0-60
  sc = second();
  
  scAngle = map(sc, 0, 60, 0, 360); //use the map function to convert 0-60 secs in a min to 0-360 degree of a circle
     //The map() function in p5.js is used to normalize a number having range from min1 to max1 in a range of min2 to max2.
  //map(value, start1, stop1, start2, stop2, [withinBounds])
  //Normalization is very helpful in p5.js if you are scaling your elements. Because as we know normalization takes care of all the proportions in scaling so, we get a completely balanced scaling.
  value: The value you want to normalize.
min1: Minimum value of the value’s current range.
max1: Maximum value of the value’s current range.
min2: Minimum value of the value’s target range.
max2: Maximum value of the value’s target range.
withinBounds (optional): This restricts the normalized value of value in range of [min2, max2].
  //draw the seconds hand
  push();
  rotate(scAngle); //rotate the hands based on the angle calculated
  stroke(255,0,0);
  strokeWeight(7)
  line(0,0,100,0); 
  pop();

  mnAngle = map(mn, 0, 60, 0, 360); //convert 0-60 (mins) to 0-360 (degrees) 
  //draw the minutes hand
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,80,0);
  pop();


  hrAngle = map(hr %12, 0, 12, 0, 360); //since hour is range is 0 to 24...to get hour 0-12
  //draw the hour hand
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,60,0);
  pop();

  //draw the outermost arc
  stroke(255,0,0);
  strokeWeight(7);
  noFill();
  arc(0,0,280,280,0,scAngle); //The arc() method creates an arc/curve
  //Centerarc(100,75,50,0*Math.PI,1.5*Math.PI)
  //x-The x-coordinate of the center of the circle; y-The y-coordinate of the center of the circle,r-radius,The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle),The ending angle, in radians,Optional. Specifies whether the drawing should be counterclockwise or clockwise. False is default, and indicates clockwise, while true indicates counter-clockwise.)

  //draw the 2nd arc
  stroke(0,255,0);
  strokeWeight(7);
  noFill();
  arc(0,0,260,265,0,mnAngle);

  //draw the innermost arc
  stroke(0,0,255);
  strokeWeight(7);
  noFill();
  arc(0,0,250,250,0,hrAngle);

  //draw a pin at the center for hands
  noStroke();
  fill("white");
  ellipse(0,0,8,8);

  if(hour() === 12){
    alert("its 12:00:00");
  }
  drawSprites();
}
