// INITIALIZE GITHUB
  const github = new Github;

// INITIATE UI
   const ui = new UI;

// SERACH INPUT
   const searchUser = document.getElementById('searchUser');

// SEARCH INPUT EVENT LISTENER
   searchUser.addEventListener('keyup', (e) => {
   // GET INPUT TEXT
   const userText = e.target.value;

   if(userText !== ''){
      // MAKE HTTP CALL
      github.getUser(userText)
      .then(data => {
         if(data.profile.message === 'Not Found'){
          // SHOW ALERT 
          ui.showAlert('User not found', 'alert alert-danger');
         } else {
          // SHOW PROFILE
           ui.showProfile(data.profile);
           ui.showRepos(data.repos);
         }
      })

   } else {
      // CLEAR PROFILE
        ui.clearProfile();
   }
});
