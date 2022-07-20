class Person{
    private _firstName;
    private _lastName;
    private _age;

    constructor(firstName, lastName, age){
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }
    
    public get fullName() {
        return `Фамилия -${this._lastName} Имя - ${this._firstName}`
    }
    get firstName(){
        return this._firstName;
    }

    set firstName(value){
        this._firstName = value;
    }

    get lastName(){
        return this._lastName;
    }
    set lastName(value){
        this._lastName = this._lastName;
    }

    get age(){
        return this._age;
    }
    set age(value){
        if (value < 0) {
            this._age = 0;
        } else {
            this._age = value;
        }

    }

}

class Employee extends Person { //Класс Работник наследуется от класса Человек
    private inn;
    private number;
    private snils;

    constructor(firstName, lastName, age, inn, number, snils){
        super(firstName, lastName, age);
        this.inn = inn;
        this.number = number;
        this.snils = snils;
    }
}
const prsn = new Person('Leonid', 'Yakovlev', 19)
console.log(prsn)
const employee1 = new Employee('Leonid', 'Yakovlev', 19, 15, 10, 100)
console.log(employee1)

class Developer extends Employee{ //Класс Программист наследуется от класса Работник
    private level;
    constructor(firstName, lastName, age, inn, number, snils, level){
        super(firstName, lastName, age, inn, number, snils);
        this.level = level;
    }
}
const Leonid = new Developer('Leonid', 'Yakovlev', 19, 15, 10, 100, 'Junior')
console.log(Leonid.fullName)
