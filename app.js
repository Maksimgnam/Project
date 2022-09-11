class User{
    constructor(firstName,lastName,gender,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;




    }
    SayYourAccounProfilet(){
        console.log(`welcome to profile:  ${this.firstName} ${this.lastName} ${this.gender} ${this.age}`)

    }
}

let user = new User('loura','Prey', 'famale', '23')
let user2 = new User('loura','Prey', 'famale', '23')



console.log(user)

class Login{
    constructor(name,password){
        this.name = name;
        this.password = password;

    }
    SayYourLogin(){
        console.log(`give name: ${this.name} give password ${this.password} `)
    }
}
let login = new Login('Lores','577685767')



console.log(login)

class SighUp{
    constructor(createName,createPasword){
        this.createName = createName;
        this.createPasword = createPasword;

    }
    SayYourSighUp(){
        console.log(`create name: ${this.createName} create password ${this.createPasword} `)

        

        
    }
}

let sighup = new SighUp('New name', 'New password')

console.log(sighup);
let friends = ['Loura','Ben',"Clara",'Fred'];



function addFriend(){
    friends.unshift('Josh')
 
   

    
}addFriend()
console.log(friends)






function deleteFriend(){
    friends.shift('Josh');

}
deleteFriend();
console.log(friends)








// let friend = ['Loura','Ben',"Clara",'Fred','Josh'];





// function deleteFriend(){

//   friend.pop('Josh')
// } 
// deleteFriend()

// console.log(friend)











