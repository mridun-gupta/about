const firebaseConfig = {
    apiKey: "AIzaSyDldahwdahJb1FitgKnRVD4urLORwM-Joc",
    authDomain: "mridunguptainc-a.firebaseapp.com",
    projectId: "mridunguptainc-a",
    storageBucket: "mridunguptainc-a.appspot.com",
    messagingSenderId: "711019594974",
    appId: "1:711019594974:web:898bf35e20cf0f9f7eae4f"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
        console.log("Notification permission granted.");
        messaging
            .getToken({
                vapidKey:
                    "BO0sa1a8eOVbx5lBcWzCXzlQsAniKgg5SLxXAM4R6YEOSNVAAUaCF2THP8_jwX8Qw7jH4MzSGzc-qHEgTUOW1TY",
            })
            .then((currentToken) => {
                if (currentToken) {
                    console.log("Token:", currentToken);
                } else {
                    console.log("No registration token available.");
                }
            })
            .catch((error) => {
                console.error("Error retrieving token:", error);
            });
    } else {
        console.log("Notification permission denied.");
    }
});