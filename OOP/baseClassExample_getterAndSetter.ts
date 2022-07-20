class Rectangle{
    private _width: number; // если явно не указывать модификатор доступа, то по умолчанию он устанавливается как public
    private _height: number;

    constructor(w: number, h: number){
        this._width = w;
        this._height = h;
    }

    get width(){ //вызывая геттер мы просто вернём ширину этого объекта
        return this._width
    }

    set width(value){ // в случае с сеттером мы можем либо просто присвоить новое значение, либо сделать какие-то дополнительные действия
        if (value <= 0) { // в нашем случае ширина прямоугольника не может быть отрицательной, поэтому мы делаем проверку
            this._width = 1;
        } else {
            this._width = value;
        }
    }


    calcArea(){
        return this.width * this._height;
    }
    calcPerimeter(){
        return (this._height + this.width) * 2;
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
