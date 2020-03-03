const colorInput = document.getElementById("color");
const weight = document.getElementById("weight");
const clear = document.getElementById("clear");

const paths = [];
let currentPath = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
}

function draw() {
  noFill();

  if (mouseIsPressed) {
    const point = {
      x: mouseX,
      y: mouseY,
      color: colorInput.value,
      weight: weight.value
    };
    // Adding the point to the `currentPath` array
    currentPath.push(point);
  }

  // Looping over all the paths and drawing all the points inside them
  paths.forEach(path => {
    beginShape();
    path.forEach(point => {
      stroke(point.color);
      strokeWeight(point.weight);
      vertex(point.x, point.y);
    });
    endShape();
  });
}

// when ouse is pressed, this event will fire
function mousePressed() {
  // clean up the currentPath
  currentPath = [];

  // push the path inside the `paths` array
  paths.push(currentPath);
}

clear.addEventListener("click", () => {
  // remove all the paths
  paths.splice(0);

  // clear the background
  background(255);
});
