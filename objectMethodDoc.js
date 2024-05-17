var User = {
    name:"akshatha",
    Age :22,
    getUserName : function(){
        console.log(`User name is ${this.name}`)
    }
}

var akshatha = Object.create(User)

console.log(akshatha)
// akshatha.name = "mohd"
akshatha.getUserName()

