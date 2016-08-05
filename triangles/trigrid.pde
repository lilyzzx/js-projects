void setup() {
  size( 694, 500 );
  strokeWeight( 1 );
  X = width / 2;
  Y = height / 2;
  triangles = Array.apply(null, Array(17)).map(function() {
    return Array.apply(null, Array(21)).map(Number.prototype.valueOf,255);
  });
  drawGrid();
}

void drawGrid() {
  background (255);
  stroke(240);
  for (var i = 0; i < 17; i++) {
    line(i * sqrt(1875), 0, i * sqrt(1875), 500);
  }

  for (var i = 0; i < 20; i++) {
    line(0, i * 50 - 500, 700, i * 50 + 17500 / sqrt(1875) - 500);
    line(0, i * 50, 700, i * 50 - 17500 / sqrt(1875));
  }
}

void renderTriangles() {
  for (var startCol = 0; startCol < 9; startCol++) {
    col = startCol * 2;
    for (var startRow = 0; startRow < 11; startRow++) {
      triRow = startRow * 2;
      drawTriangle(col * sqrt(1875), triRow * 25, triangles[col][triRow], true);
      drawTriangle(col * sqrt(1875), triRow * 25, triangles[col][triRow + 1], false);
      if (col === 16) { return; }
      drawTriangle((col + 1) * sqrt(1875), triRow * 25 - 25, triangles[col + 1][triRow], false);
      drawTriangle((col + 1) * sqrt(1875), triRow * 25 + 25, triangles[col + 1][triRow + 1], true);
    }
  }
}

void mousePressed() {
  col = floor(mouseX / sqrt(1875));
  sqRow = floor(mouseY / 50);

  calcX = col * sqrt(1875);
  calcY = sqRow * 50;

  lower = 0;
  upper = 0;
  yIntLow = 0;
  yIntUp = 0;
  if (col % 2 == 0) {
    yIntLow = sqRow * 50 - col * 25;
    yIntUp = sqRow * 50 + col * 25 + 50;
    lower = mouseX * (25 / sqrt(1875)) + yIntLow;
    upper = mouseX * (-25 / sqrt(1875)) + yIntUp;
  } else {
    yIntLow = sqRow * 50 + col * 25 + 25;
    yIntUp = sqRow * 50 - col * 25 + 25;
    lower = mouseX * (-25 / sqrt(1875)) + yIntLow;
    upper = mouseX * (25 / sqrt(1875)) + yIntUp;
  }

  triRow = sqRow * 2;
  isRight = false;
  if (mouseY < lower) {
    if (col % 2 == 0) { isRight = true; }
    else { calcY -= 25; }
  } else {
    if (mouseY < upper) {
      triRow += 1;
      if (col % 2 !== 0) { calcY += 25; isRight = true; }
    } else {
      triRow += 2;
      if (col % 2 == 0) { calcY += 50; isRight = true; }
      else { calcY += 25; }
    }
  }
  triangles[col][triRow] = (triangles[col][triRow] + 64) % 256;
  drawGrid();
  renderTriangles();
}

void drawTriangle(calcX, calcY, color, isRight) {
  if (color === 255) { return; }
  fill(color);
  stroke(color);
  if (isRight) {
    line(calcX, calcY, calcX + sqrt(1875), calcY - 25);
    triangle(calcX, calcY, calcX + sqrt(1875), calcY - 25, calcX + sqrt(1875), calcY + 25);
  } else {
    triangle(calcX, calcY, calcX, calcY + 50, calcX + sqrt(1875), calcY + 25);
    line(calcX, calcY, calcX, calcY + 48);
    line(calcX, calcY, calcX + sqrt(1875), calcY + 25);
  }
}
