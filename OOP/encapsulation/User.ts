class User{
    private _username;
    private _password;
    private _id;

    constructor(username, password) {
        this.username = username;
        this.password = password;
        this._id = generateRandomId();
    }

    get username(){
        return this._username;
    }

    set username(value){
        this._username = value;
    }

    get password(){
        return this._password;
    }
    set password(value){
        this._password = value;
    }
    
    get id(){ // имя пользователя и пароль могут меняться, а Id мы можем только получать
        return this._id;
    }
}
const user = new User('Leonid','password')
