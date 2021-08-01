// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCAFhZEKVRoMSU3gJTFat_meuhbJYqs59s",
    authDomain: "sans-d1e07.firebaseapp.com",
    databaseURL: "https://sans-d1e07-default-rtdb.firebaseio.com",
    projectId: "sans-d1e07",
    storageBucket: "sans-d1e07.appspot.com",
    messagingSenderId: "18435121588",
    appId: "1:18435121588:web:2ed7fec316f9dcb96bd2e1",
    measurementId: "G-14YFZGE89H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  //Reference for form collection(3)
  let formMessage = firebase.database().ref('User');
  
  //listen for submit event//(1)
  document
    .getElementById('userInfo')
    .addEventListener('submit', formSubmit);
  
  //Submit form(1.2)
  function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM

      var name = getInputVal('name');
      var email = getInputVal('email');
      // var pantLength = getInputVal('pantLengthField');
      // var waistLength = getInputVal('waistLengthField');
      var age = getInputVal('age');
      var height = getInputVal('height');
      var weight = getInputVal('weight');
      var braBand = getInputVal('braBand');
      var braCup = getInputVal('braCup');
      var dress = getInputVal('dress');
      var pant = getInputVal('pant');
      
  
    //send message values
    sendMessage(name, email, age, height, weight, braBand, braCup, dress, pant);
 
  
    //Form Reset After Submission(7)
    document.getElementById('userInfo').reset();
  }
  
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  //Send Message to Firebase(4)
  
  function sendMessage(name, email, age, height, weight, braBand, braCup, dress, pant) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
        name: name,
        email:email,
        age: age,
        height: height,
        weight: weight,
        braBand: braBand,
        braCup: braCup,
        dress: dress,
        pant: pant
        // pantLength:pantLength,
        // waistLength:waistLength,
    });
  }