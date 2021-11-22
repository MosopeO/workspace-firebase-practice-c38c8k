// Your web app's Firebase configuration
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

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  //get the username(email) and password from the form
  // change the following code
  
  var email = $("#signup-form input[name='username']").val();
  console.log("The email is: " + email);
  var password = $("#signup-form input[name='password']").val();
  var cpassword = $("#signup-form input[name='cpassword']").val();
  console.log("password: " + password)
  console.log("cpasssword: " + cpassword)

  if (password != cpassword){
    alert("Please make sure the passwords match")
  }

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      // Signed in
      // ...

      console.log("You are signed up");
      window.location.href = "Login.html";
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});

$("#googlelogin").click(function(e) {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  console.log("You clicked the google button")

  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    //var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    //var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log("login success");
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(email+" "+ credential)
    // ...
  });
});