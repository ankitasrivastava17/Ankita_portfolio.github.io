document.addEventListener("visibilitychange", function() {

    if(document.visibilityState == "visible") {

        document.title = "ANKITA | JAVA BACKEND DEVELOPER";
    }
    else {
        
        document.title = "Comback to portfolio";
    }
})