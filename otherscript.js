class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const userOne = new Teacher("Krishna", "madhvi@mishra")
console.log(userOne)

const userTwo = new User("krishna")

//this console will not print because it has not access of createId()

console.log(userTwo.createId())
