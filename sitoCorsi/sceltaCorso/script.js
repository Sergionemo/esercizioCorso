class Corso {
    nome;
    durata;
    scelta1;
    scelta2;
    scelta3;
    constructor(_nome, _durata, _scelta1, _scelta2, _scelta3) {
        this.nome = _nome;
        this.durata = _durata;
        this.scelta1 = _scelta1;
        this.scelta2 = _scelta2;
        this.scelta3 = _scelta3;
    }
}

$(() => {
    let utente = localStorage.getItem("utente");

    $("#btn-logout").on("click", function () {
        localStorage.clear();
        location.href = "../login/index.html"
    });

    const programmare = ["Javascript", "CSS", "HTML", "Phyton", "C++", "C#", "Java"];
    const cucinare = ["Pizza", "Dolci", "Vegetariano", "Sushi", "Vegano", "Carne"];
    const disegno = ["Manga", "Fumetti", "Abiti", "Disegno classico", "Ritratti"];

    for (i = 0; i < programmare.length; i++) {
        $("#programmazione").append(`<option value="${programmare[i]}">${programmare[i]}</option>`);
    }
    for (i = 0; i < cucinare.length; i++) {
        $("#cucina").append(`<option value="${cucinare[i]}">${cucinare[i]}</option>`);
    }
    for (i = 0; i < disegno.length; i++) {
        $("#disegno").append(`<option value="${disegno[i]}">${disegno[i]}</option>`);
    }

    $("#crea").on("click", function () {
        let name = $("#nomeCorso").val();
        let durata1 = $("#durata").val();
        let scel1 = $("#programmazione").val();
        let scel2 = $("#disegno").val();
        let scel3 = $("#cucina").val();

        const corso1 = new Corso();

        let flag = true

        if (name == "") {
            $("#errNome").text("Inserire nome corso")
            flag = false;
        } else {
            corso1.nome = name;
            $("#errNome").text("")
        }

        if (durata1 == "" && durata1 < 1) {
            $("#errDurata").text("Inserire durata valida")
            flag = false;
        } else {
            corso1.durata = durata1;
            $("#errDurata").text("")
        }

        console.log(scel1, scel2, scel3);
        if (scel1 == "Argomenti programmazione" && scel2 == "Argomenti disegno" && scel3 == "Argomenti cucina") {
            $("#errSel").text("Scegliere almeno un corso");
            flag = false
        }

        if (scel1 == "Argomenti programmazione") {
            corso1.scelta1 = "";
        } else {
            corso1.scelta1 = scel1
        }

        if (scel2 == "Argomenti disegno") {
            corso1.scelta2 = "";
        } else {
            corso1.scelta2 = scel2;
        }

        if (scel3 == "Argomenti cucina") {
            corso1.scelta3 = "";
        } else {
            corso1.scelta3 = scel3;
        }
        if (flag) {
            $("#corsoCreato").text(`Il corso creato da ${utente} chiamato ${corso1.nome} della durata di ${corso1.durata} mesi, Ha scelto come argomenti ${corso1.scelta1} ${corso1.scelta2} ${corso1.scelta3}`);
            let name = $("#nomeCorso").val("");
            let durata1 = $("#durata").val("");
        }
    })
});

// corso1.scelta1 = scel1;
// corso1.scelta2 = scel2;
// corso1.scelta3 = scel3;