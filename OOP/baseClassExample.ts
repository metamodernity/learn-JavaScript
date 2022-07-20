class Rectangle{
    width: number;
    height: number;

    constructor(w: number, h: number){
        this.width = w;
        this.height = h;
    }

    calcArea(){
        return this.width * this.height;
    }
    calcPerimeter(){
        return (this.height + this.width) * 2;
    }
}
const rect = new Rectangle(5, 10)
const rect2 = new Rectangle(52, 102)
const rect3 = new Rectangle(10, 102)
console.log(`Площадь первого прямоугольника = ${rect.calcArea()}`);
console.log(`Площадь второго прямоугольника = ${rect2.calcArea()}`);
console.log(`Площадь третьего прямоугольника = ${rect3.calcArea()}`);
console.log(`Периметр первого прямоугольника = ${rect.calcPerimeter()}`);
console.log(`Периметр второго прямоугольника = ${rect2.calcPerimeter()}`);
console.log(`Периметр третьего прямоугольника = ${rect3.calcPerimeter()}`);
