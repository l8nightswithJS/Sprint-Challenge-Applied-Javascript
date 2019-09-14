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
function ArticleCard(headline, imgSrc, author) {
    const newCard = document.createElement('div');
    const headlineEl = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorsName = document.createElement('span');

    headlineEl.textContent = headline;
    img.src = imgSrc;
    authorsName.textContent = (`"By"${author}`);

    newCard.classList.add('card');
    headlineEl.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainer.classList.add('img-container');

    newCard.appendChild(headline);
    newCard.appendChild(authorDiv);
    authorDiv.appendChild(imgContainer);
    imgContainer.appendChild(img);
    authorDiv.appendChild(authorsName);

    

}