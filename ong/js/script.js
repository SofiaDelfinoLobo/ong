const listaPosts = [
    {
        titulo: "Gato siames",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus erat sed consequat lobortis. Fusce eget accumsan diam. Nunc congue diam ligula, a viverra est sollicitudin eu. Proin nec eros non tellus dapibus bibendum. Phasellus non accumsan nunc. Proin gravida dui id ligula bibendum tincidunt",
        imgURL: "./img/gatito.jpg",
        button: "Clique aqui"

    },
    {
        titulo: "Gato onça",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus erat sed consequat lobortis. Fusce eget accumsan diam. Nunc congue diam ligula, a viverra est sollicitudin eu. Proin nec eros non tellus dapibus bibendum. Phasellus non accumsan nunc. Proin gravida dui id ligula bibendum tincidunt",
        imgURL: "./img/images.jpg",
        button: "Clique aqui"
    },
    {
        titulo: "Gato oncinha",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus erat sed consequat lobortis. Fusce eget accumsan diam. Nunc congue diam ligula, a viverra est sollicitudin eu. Proin nec eros non tellus dapibus bibendum. Phasellus non accumsan nunc. Proin gravida dui id ligula bibendum tincidunt",
        imgURL: "./img/enxoval-para-gato-Copia.jpg",
        button: "Clique aqui"
    }
];
let container = document.querySelector(".container");

const criacaoPosts = () => {
    listaPosts.forEach((post) => {
        let card =
            `
        <div class="card">
        <img class = "card-img"src =${post.imgURL} />
        <h2 class="card-titulo">${post.titulo}</h2>
        <p class= "card-descricao">${post.descricao}</p>
        <button class= "card-button">${post.button}</button>
        </div>
        `;
        container.innerHTML += card;
    });
};

window.onload = () => {
    criacaoPosts();

    let card = document.querySelectorAll(".card");

    card.forEach((card) => {
        card.addEventListener("mousemove", () => {
            card.style.backgroundColor = "greenyellow";
            
        });
        card.addEventListener("mouseout",() =>{
            card.style.backgroundColor = "greenyellow";
        });

        card.addEventListener("mouseout", () => {
            card.style.backgroundColor = "transparent";
        });
    });
};

let botaoTema = document.querySelector("#botaoTema");
console.log(botaoTema);

botaoTema.addEventListener("click", () => {
    let body = document.querySelector("body");

    if (botaoTema.checked) {
        body.classList.add("body-dark");

    } else {
        body.classList.remove("body-dark");
    }
});

inputTeste = document.getElementById("inputTeste");

inputTeste.addEventListener("keydown", (tecla) =>{
    alert("Tecla pressionada: "+ tecla.key);
})

