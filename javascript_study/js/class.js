class User {
    username;
    password; 
    name;
    email; 

   

    constructor(username, password, name, email){
        this.username=username;
        this.name=name;
        this.email=email;
        this.password=password;
    }
    toString(){
        return 'User = {username: ${this.username}, password: }'
    }
}

const user = new User();
console.log(toString());

