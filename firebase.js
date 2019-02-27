const firebase = require('firebase');
require('dotenv').config()

firebase.initializeApp({
  apiKey: process.env.apiKey,                    
  authDomain: process.env.authDomain,       
  databaseURL: process.env.databaseURL, 
  storageBucket: process.env.storageBucket,         
  messagingSenderId: process.env.messagingSenderId             
});

var rootRef = firebase.database().ref();

module.exports.getForm = () => {
  return firebase.database().ref('form').once('value')
  .then((snapshot) => {
    let formArray = []
   
    snapshot.forEach((childSnapshot) => {
     
        formArray.push({
          id: childSnapshot.key,
          name: childSnapshot.val().name,
          muamba: childSnapshot.val().muamba,
          pagto: childSnapshot.val().pagto
        })
    

    })
    return formArray
  })
}

module.exports.inputForm = (data) => {
  return firebase.database().ref('form').push({
      name: data.name,
      muamba: data.muamba,
      pagto: data.gridRadios
  })
}


return module.exports