/*IMPORTANT NOTES
1- you are using JS Name Casing (CamelCasing)
2- make this code as clean as possible 
3- apply all the concepts you learned during this lab (Naming, comments,  functions)
*/


class Point {
  constructor(xCoordinate, yCoordinate) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
  }
}

class Rectangle {
  constructor(startingPoint, width, height) {
    if (!height || height <= 0 || !width || width <= 0) {
      throw Error("invalid Width and Height"); // throws an error in cas of width or height < 0
    }
    this.startingPoint = startingPoint;
    this.width = width; 
    this.height = height; 
  }

  // ***************
  // METHODS
  // ***************

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * this.width + 2 * this.height;
  }
  
  
  // ***************
  // UPDATE METHODS
  // ***************
  updateHeight(height) {
    if (height && height > 0) {
      this.height = height;
    }
  }

  updateDimentions({ startingPoint, width, height }) {
    if (!height || height <= 0 || !width || width <= 0) {
      throw Error("invalid Width and Height"); // throws an error in case of width or height < 0
    }
    this.startingPoint = startingPoint;
    this.width = width;
    this.height = height;
  }

  // ***************
  // GETTERS
  // ***************

  getHeight() {
    return this.height;
  }

  getWidth() {
    return this.width;
  }

  //function that print the endpoints
  printEndPoints() {
    const topRight = this.startingPoint.xCoordinate + this.width;
    const bottomLeft = this.startingPoint.yCoordinate + this.height;
    console.log("End Point X-Axis (Top Right): " + topRight);
    console.log("End Point Y-Axis (Bottom Left): " + bottomLeft);
  }
}


  // ***************
  // CONSTRUCTING SQUARE AND RECTANGLE
  // ***************

function constructRectangle(width, xCoordinate, height, yCoordinate) {
  const startingPoint = new Point(xCoordinate, yCoordinate);
  const rectangle = new Rectangle(startingPoint, width, height);
  return rectangle;
}

function constructSquare(xCoordinate, yCoordinate , SquareHeight) {
  let square;
  if (!SquareHeight || SquareHeight <= 0) {
    square = constructRectangle(SquareHeight, xCoordinate , SquareHeight, yCoordinate);
  }
  const squareArea = square.calculateArea();
  const squarePerimeter = square.calculatePerimeter();
  console.log("square Area ", squareArea);
  console.log("square Perimeter ", squarePerimeter);
}


  // ***************
  // CREATING OBJECTS
  // ***************

const rectangle = constructRectangle(2, 3, 5, 4);
const square = constructSquare();

console.log(square.calculatePerimeter());
square.printEndPoints();

rectangle.updateHeight(3);
