const firebaseConfig = {
  apiKey: "AIzaSyDohlqBYaGMYURoFBgTxYHwAsNm3n-PLbQ",
  authDomain: "csc225-b9d35.firebaseapp.com",
  projectId: "csc225-b9d35",
  storageBucket: "csc225-b9d35.appspot.com",
  messagingSenderId: "1080011624938",
  appId: "1:1080011624938:web:7e6049d59a716559916293"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
/* object examples 
var testJson = {};
testJson["lastname"] = "zhang";
testJson["location"] = "aiken";
console.log(testJson);
*/

firebase.auth.onAuthStateChanged(
  (user) => {
    if(user) {
      console.log(user.email)
    }else {
      console.log('no user')
    }
  }
);

// enter data in
$("input[type='button']").click(function(e) {
  //get the value of form
  var inputdata = $('.sampleSurvey').serializeArray();
  var inputJson = {};

  inputdata.forEach((data) => {
    var name = data.name;
    var val = data.value;
    console.log(name + ' ' + val);

    inputJson[name] = val;
  });
  

  /* save the data to database */
  firebase.firestore().collection('saveDisplay').add(inputJson);


  /* clear the entry */
  $("form")[0].reset();
});

/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database */

firebase
  .firestore()
  .collection("hoteldata")
  .onSnapshot(querySnapshot => {
    console.log(querySnapshot.size);
    querySnapshot.forEach(doc => {
      console.log(doc.data());
      console.log(doc.data().room);
      console.log(doc.data().checkout);
    });
  });
