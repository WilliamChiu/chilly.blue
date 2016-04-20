var fileSelect;
var loadedImage;
var imageLoaded = false;

var partitionQueue = []; //high, low
var partitioning = false,
  start = false;
var pivot;
var i, j, state = 0;
var skips = 5000;

var values = [];

function setup() {
  var c = createCanvas(600, 300);
  c.parent('container');
  c.drop(gotFile);
}

function draw() {
  if (!imageLoaded) {
    background(100);
    fill(255);
    noStroke();
    textSize(24);
    textAlign(CENTER);
    text('Drag & Drop Image Here!\n' + skips, width / 2, height / 2);
  } else if (imageLoaded && start) {
    startSort();
  }
}

function mouseWheel(event) {
  //move the square according to the vertical scroll amount
  if (!imageLoaded) {
    skips -= event.delta;
    //uncomment to block page scrolling
    return false;
  }
}

function startSort() {
  for (var s = 0; s <= skips; s++) {
    if (partitionQueue.length > 0) {
      if (!partitioning) {
        pivot = values[partitionQueue[0].x];
        i = partitionQueue[0].x - 1;
        j = partitionQueue[0].y + 1;
        partitioning = true;
      }
      if (state === 0) {
        i++;
        if (values[i] >= pivot) state++;
      }
      if (state == 1) {
        j--;
        if (values[j] <= pivot) state++;
      }
      if (i >= j && state == 2) {
        if (partitionQueue[0].x < j) partitionQueue.push(createVector(partitionQueue[0].x, j));
        if (j + 1 < partitionQueue[0].y) partitionQueue.push(createVector(j + 1, partitionQueue[0].y));
        partitionQueue.shift();
        partitioning = false;
        state = 0;
      } else if (state == 2) {
        var temp = values[i];
        values[i] = values[j];
        values[j] = temp;
        swap(i, j);
        state = 0;
      }
    }
  }
  updatePixels();
}

function swap(i, j) {
  for (var v = 0; v < 4; v++) {
    var temp2 = pixels[4 * i + v];
    pixels[4 * i + v] = pixels[4 * j + v];
    pixels[4 * j + v] = temp2;
  }
}

function gotFile(f) {
  loadedImage = loadImage(f.data, drawImage);
}

function drawImage(img) {
  resizeCanvas(img.width, img.height);
  image(img, 0, 0);
  imageLoaded = true;
  loadPixels();
  for (var i = 0; i < pixels.length / 4; i++) {
    values.push(sqrt(0.299 * sq(pixels[4 * i]) + 0.587 * sq(pixels[4 * i + 1]) + 0.114 * sq(pixels[4 * i + 2])));
  }
  partitionQueue.push(createVector(0, values.length - 1));
  start = true;
  print(values);
}