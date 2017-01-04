class Triangle{
  constructor(side1,side2,side3){
    this.side1 =  side1;
    this.side2 = side2;
    this.side3 = side3;
  }
  
  perimeter(){
    return this.side1 + this.side2 + this.side3
  }
  
  getArea(){
    var p = (this.perimeter() / 2);
    return Math.sqrt(p * ((p - this.side1) * (p - this.side2) * (p - this.side3))); 
  }
  
}

var tri = new Triangle(102, 120, 77);
console.log(tri.getArea());

class EqTriangle extends Triangle{
  constructor(side){
    super(side, side, side);
  }
}

var eqTri = new EqTriangle(98);
console.log(eqTri.getArea());
// --------------------------------------.map() practice---------------------------------
var numbers = [1, 4, 10, 15];
var times2 = numbers.map(function(x){
   return x * 2;
});
var numbersCopy = numbers.map(function(x){
  return x.toString() + x.toString();
});


numbersCopy