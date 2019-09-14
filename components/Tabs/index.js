// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const subjects = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then ((results) => {
        console.log(results);
        
        results.data.topics.forEach(topic => {
            const tabs = document.createElement('div')
            tabs.textContent = topic;
            tabs.classList.add('tab');
            subjects.appendChild(tabs);
            })    
    
            
        })
    .catch()