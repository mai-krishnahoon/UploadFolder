function Setuser (username){
    this.username = username
}

function fulluser (username, email, password){
    Setuser.call (this, username);
    this.email = email;
    this.password = password;

}

const firstUser = new fulluser("Krishna", 'madhvi@mishra.com', 'mad@krishna')
// console.log(firstUser)




//Class based method creation -------------------------------------------------------------------------------





class userData{
    constructor(username){
        this.username = username;
    }
    static trueLength(){
        console.log(this.username.length)
    }

}


class NewUser extends userData{
    constructor (username, email, password){
        super(username)
        this.email = email;
        this.password = password
    }
    login(){
        console.log(this.username)
    }
}


const something = new NewUser("harish", 'krishna@gmail.com', "password@425")
// something.login()
// console.log(something.truelength())

const anotherUser = new userData("krishna raj")
anotherUser.trueLength()



