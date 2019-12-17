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
 
 /* Step 5: Now that you have your own card getting added to the DOM, either 
 follow this link in your browser https://api.github.com/users/<Your github name>/followers 
 , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
          */
         
//          const followersArray = [
//   //          'tetondan',
//   //          'dustinmyers',
//   // 'justsml',
//   // 'luishrd',
//   // 'bigknell'
// ];

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
 
 /* List of LS Instructors Github username's: 
 tetondan
 dustinmyers
 justsml
 luishrd
 bigknell
 */


  
  // axios.get('https://api.github.com/users/fiopwk')
  // .then((res) => {
  //   console.log(res.data)
    
    
  // })
  
  // .catch((err) => {
  //   console.log(err)
  // })

  const followersArray = [
    'tetondan',
    'dustinmyers',
    'justsml',
    'luishrd',
    'bigknell',
    'fiopwk'
  ];
  
  const cards = document.querySelector(".cards");
  
  followersArray.forEach(element => {
    axios.get(`https://api.github.com/users/${element}`)
      .then((response) => {
        
        // console.log(response);
        cards.appendChild(createCard(response.data));
      })
      .catch((error) => {
        
        console.log(error);
      })
  
  })
  
  function createCard(obj){
    let card = document.createElement('div');
    card.classList.add('card');
  
    let card_img = document.createElement('img');
    card.appendChild(card_img);
    card_img.src = obj.avatar_url;
  
    let card_info = document.createElement('div');
    card.appendChild(card_info);
    card_info.classList.add('card-info');
  
    let name = document.createElement('h3');
    card.appendChild(name);
    name.classList.add('name');
    name.textContent = obj.name;
  
    let user_name = document.createElement('p');
    card_info.appendChild(user_name);
    user_name.classList.add('username');
    user_name.textContent = obj.login;
  
    let location = document.createElement('p');
    card_info.appendChild(location);
    location.textContent = 'Location: ' + obj.location;
  
    let profile = document.createElement('p');
    card_info.appendChild(profile);
    profile.textContent = 'Profile: ';
  
    let profile_url = document.createElement('a');
    profile.appendChild(profile_url);
    profile_url.href = obj.html_url;
    profile_url.textContent = obj.html_url;
  
    let followers = document.createElement('p');
    card_info.appendChild(followers);
    followers.textContent = 'Followers: ' + obj.followers;
  
    let following = document.createElement('p');
    card_info.appendChild(following);
    following.textContent = 'Following: ' + obj.following;
  
    let bio = document.createElement('p');
    card_info.appendChild(bio);
    bio.textContent = 'Bio: ' + obj.bio;
  
    return card;
  
  }