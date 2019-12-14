const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

function githubData(obj) {
  const card = document.createElement('div')
  card.classList.add('card');
  
  const img_url = document.createElement('img')
  img_url.src = obj.avatar_url;

  const card_info = document.createElement('div')
  card_info.classList.add('card-info');

  const user_name = document.createElement('h3')
  user_name.classList.add('name');
  user_name.textContent = obj.name;

  const username = document.createElement('p')
  username.classList.add('username')
  username.textContent = obj.login;
  
  const location = document.createElement('p');

  const profile = document.createElement('p')
  profile.textContent = `Profile: ${obj.html_url}`;

  const profile_href = document.createElement('a');
  profile_href.href = obj.html_url;

  const followers = document.createElement('p');
  followers.textContent = `Followers: ${obj.followers}`

  const following = document.createElement('p');
  following.textContent = `Following: ${obj.following}`;
  
  const bio = document.createElement('p');
  bio.textContent = `Bio: ${obj.bio}` || `Look into adding more info for ${obj.data}`;
  
  card_info.appendChild(user_name);
  card_info.appendChild(username);
  card_info.appendChild(location)
  card_info.appendChild(profile);
  card_info.appendChild(followers);
  card_info.appendChild(following);
  card_info.appendChild(bio)
  profile.appendChild(profile_href);
  
  card.appendChild(img_url);
  card.appendChild(card_info);
  
  return card;
}
const cardComponent = document.querySelector('.cards')

axios.get('https://api.github.com/users/fiopwk')
.then(res => {
  console.log(res)
  const followersArray = res.data;
  
    // document.querySelector('.cards').appendChild(githubData(obj))
  })
  .catch((err => {
    console.log(err)
  }))

/* Step 1: using axios, send a GET request to the following URL 
(replacing the palceholder with your Github name):
https://api.github.com/users/<your name>
*/
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
   */
/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
