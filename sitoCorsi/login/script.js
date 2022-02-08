$(() => {
    localStorage.clear();
    $("#btn-login").on("click", function () {
        let utente = $("#user").val().trim();
        let password = $("#password").val().trim();
        let flag1 = true;
        let flag2 = true;

        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

        if (utente == "") {
            $("#emailErr").text("Inserire email");
            flag1 = false;
        } else if (!regexEmail.test(utente)) {
            $("#emailErr").text("Inserire email valida");
            flag1 = false;
        } else {
            $("#emailErr").text("");
            flag1 = true;
        }

        
        const regexPass = /(?=.*?[0-9])/;

        if (password == "") {
            $("#passErr").text("Inserire password");
            flag2 = false;
        } else if (password.length < 6) {
            $("#passErr").text("La password deve essere almeno di 6 caratteri");
            flag2 = false;
        } else if (!regexPass.test(password)) {
            $("#passErr").text("Inserire password con almeno un valore numerico");
            flag2 = false;
        }else {
            $("#passErr").text("");
            flag2 = true;
        }

        console.log(password);
        if (flag1 && flag2) {
            caricamento();
            setTimeout(login, 5000);
        }

        function caricamento() {
            $(".modal-overlay").addClass("open-modal");
        }

        function login() {
            localStorage.setItem("utente", utente);
            location.href = "../home/index.html"
        }
    })
});