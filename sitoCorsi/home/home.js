const corsi = [
    {
        id: 1,
        nome: "Cucina",
        img: "img/cucinare.jpeg",
        descizione: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
    },
    {
        id: 2,
        nome: "Programmazione",
        img: "img/programmare.jpg",
        descizione: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
    },
    {
        id: 3,
        nome: "Disegno",
        img: "img/disegnare.jpeg",
        descizione: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
    }
]

$(() => {
    let utente = localStorage.getItem("utente");
    $("#benvenuto").html("<h2>Benvenuto " + utente + "</h2>");

    $("#btn-logout").on("click", function () {
        localStorage.clear();
        location.href = "../login/index.html"
    })

    i = 0;
    //const item = corsi[i];
    cambioImg()

    $("#btn-right").on("click", function () {
        i++;
        console.log(i);
        if (i > corsi.length - 1) {
            i = 0;
        }
        cambioImg();
    });
    $("#btn-left").on("click", function () {
        i--;
        console.log(i);
        if (i < 0) {
            i = corsi.length - 1;
            
        };
        cambioImg();
    })
    function cambioImg() {
        $("#nomeCorso").text(corsi[i].nome);
        $("#immagineCorso").attr("src", corsi[i].img);
        $("#descrizioneCorso").text(corsi[i].descizione);
    }
})