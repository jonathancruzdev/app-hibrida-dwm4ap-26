import User from "./models/User.js";

console.log('Inicio');
const userModel = new User();

const user1 = {
    name: 'José',
    email: 'jose@dv.edu.ar'
}

const user2 = {
    name: 'Sofia',
    email: 'sofia@dv.edu.ar'
}

userModel.save( user1);
userModel.save( user2);


console.log('Fin');

userModel.find().then( users => {
    console.table(users);
})

/* userModel.findById('40d54f56-a68c-42fc-a652-a7f62772b5e8').then( user => {
    console.log({user})
}) */