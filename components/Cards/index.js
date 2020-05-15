// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector('.cards-container');

function ArticleCard(arr) {
    const newCard = document.createElement('div');
    const headlineEl = document.createElement('h1');
    const authorDiv = document.createElement('div');
    // const headlineText = document.createElement
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorsName = document.createElement('span');

    headlineEl.textContent = arr.headline;
    img.src = arr.authorPhoto;
    authorsName.textContent = (`"By"${arr.authorName}`);

    newCard.classList.add('card');
    headlineEl.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainer.classList.add('img-container');

    newCard.appendChild(headlineEl);
    newCard.appendChild(authorDiv);
    authorDiv.appendChild(imgContainer);
    imgContainer.appendChild(img);
    authorDiv.appendChild(authorsName);
    cardContainer.appendChild(newCard);

    return newCard;

}

axios.get('https://lambda-times-backend.herokuapp.com/articles')

    .then((result) => {
        console.log(result.data);
        const javaScript = result.data.articles.javascript;
        const bootStrap = result.data.articles.bootstrap;
        const technology = result.data.articles.technology;
        const jquery = result.data.articles.jquery;
        const node = result.data.articles.node;

        javaScript.forEach(item => {
            const newCard = ArticleCard(item);
            cardContainer.appendChild(newCard);
        })

        bootStrap.forEach(item => {
            const newCard = ArticleCard(item);
            cardContainer.appendChild(newCard);
        })

        technology.forEach(item => {
            const newCard = ArticleCard(item);
            cardContainer.appendChild(newCard);
        })

        jquery.forEach(item => {
            const newCard = ArticleCard(item);
            cardContainer.appendChild(newCard);
        })

        node.forEach(item => {
            const newCard = ArticleCard(item);
            cardContainer.appendChild(newCard);
        })
        // const cardData = ArticleCard(headline, imgSrc, authorName);      
    })
    .catch((err) => {
        console.log(err);
    })