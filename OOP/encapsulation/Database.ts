class Database{
    private _url;
    private _port;
    private _username;
    private _password;
    private _tables;

    constructor(url, port, username, password){
        this._url = url;
        this._port = port;
        this._username = username;
        this._password = password;
        this._tables = []
    }

    public createNewTable(table){
        this._tables.push(table);
    }

    public clearTables(){
        this._tables = []
    }

    get url(){
        return this._url;
    }

    get port(){
        return this._port;
    }

    get username(){
        return this._username;
    }
}

const db = new Database(1, 2, 3, 4)
db.createNewTable({name: 'roles'})
db.createNewTable({name: 'users'})
db.clearTables()
