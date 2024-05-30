let cardsList = document.querySelector(".cards");
let cards = [];
let card = {
    title: "index",
    url: "index.html"
}
Array.push(card)

cards.map((item) => {
    cardsList.innerHTML+=
    ` <div class="cards">
        <div class="card">
            <div class="card-inner">
                <div class="card-front">
                    <h2>${card.title}</h2>
                </div>
                <div class="card-back">
                    <a href="project_1/project1.html">Project Link</a>
                </div>
            </div>
        </div>`
})

// look up what an object in JavaScript is, when you find the syntax for an object, include a title and a url link
// Look up how to push an object to an array