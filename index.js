const admin = require('firebase-admin');

var serviceAccount = require('../get/key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore(); 
 
db.collection('pedidos').where('nome == arthur').get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.data());
        // console.log(doc.id, '=>', doc.data());
      });
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });

// Create a reference to the cities collection
var citiesRef = db.collection('pedidos');

// Create a query against the collection
var queryRef = citiesRef.where('status', '==', 'Recebido');

// var citiesRef = db.collection('cities');

var setSf = citiesRef.doc('SF').set({
    name: 'San Francisco', state: 'CA', country: 'USA',
    capital: false, population: 860000 }); 
var setBj = citiesRef.doc('BJ').set({
    name: 'Beijing', state: null, country: 'China',
    capital: true, population: 21500000 });
    

 