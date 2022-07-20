class Person{
    private _firstName;
    private _lastName;
    private _age;

    constructor(firstName: string, lastName: string, age: number){
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }
    
    public greeting(){
        console.log(`Привет я человек и меня зовут ${this._firstName}`)
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

    constructor(firstName: string, lastName: string, age: number, inn: number, number: number, snils: number){
        super(firstName, lastName, age);
        this.inn = inn;
        this.number = number;
        this.snils = snils;
    }

    public greeting(){
        console.log(`Привет я работник и меня зовут ${this.firstName}`)
    }

}
const person = new Person('Ivan', 'Ivanov', 30)
const person2 = new Person('Name', 'Surname', 25)
console.log(person)
const employee1 = new Employee('Leonid', 'Yakovlev', 19, 15, 10, 100)
console.log(employee1)

class Developer extends Employee{ //Класс Программист наследуется от класса Работник
    private level;
    constructor(firstName: string, lastName: string, age: number, inn: number, number: number, snils: number, level: string){
        super(firstName, lastName, age, inn, number, snils);
        this.level = level;
    }

    public greeting(){
        console.log(`Привет я программист и меня зовут ${this.firstName}`)
    }

}
const Leonid = new Developer('Leonid', 'Yakovlev', 19, 15, 10, 100, 'Junior')
console.log(Leonid.fullName)
const personList : Person[] = [person, person2, Leonid, employee1, Leonid]

function massGreeting(persons : Person[]){
    for (let i = 0; i < persons.length; i++){
        const person = persons[i];
        person.greeting()
    }
}
massGreeting(personList)
