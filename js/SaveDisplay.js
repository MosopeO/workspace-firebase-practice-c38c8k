// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
$(".sampleSurvey input[type='submit']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('.sampleSurvey').serializeArray();
  var inputJson = {};

  inputdata.forEach((data) => {
    var name = data.name;
    var val = data.value;
    console.log(name + ' ' + val);

    inputJson[name] = val;
  });

  firebase.firestore().collection('saveDisplay').add(inputJson);
});

// update the result in table
