const firebaseConfig = {
    apiKey: "AIzaSyDdv6iLRkSwQjj3_Xr3s5JICfFEQ4M_UKI",
    authDomain: "parcial2-eco-v2.firebaseapp.com",
    projectId: "parcial2-eco-v2",
    storageBucket: "parcial2-eco-v2.appspot.com",
    messagingSenderId: "290032777645",
    appId: "1:290032777645:web:2594d63116684a6bcd8924"
  };

  export function getFirebaseConfig(){
    if(!firebaseConfig || !firebaseConfig.apiKey){
        throw new Error("Firebase configuration error");
    }else{
        return firebaseConfig;
    }
  }