class UI {
    constructor(){
    this.profile = document.getElementById('profile');
    }

// Profile interface 
showProfile(user){
    this.profile.innerHTML = `
    <div class="container border my-4 p-4" >
    <div class="row">
        <div class="col-md-3">
            <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary mb-4 w-100">Show Profile on Github</a>
        </div>
        <div class="col-md-9">
            <span class="badge bg-primary fs-6">Public Repos: ${user.public_repos}</span>
            <span class="badge bg-secondary fs-6">Private Repos:${user.public_gist}</span>
            <span class="badge bg-success fs-6">Followers: ${user.followers}</span>
            <span class="badge bg-info fs-6">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
                <li class="list-group-item">About Me ${user.bio}</li>
                <li class="list-group-item">Company ${user.company}</li>
                <li class="list-group-item">Website/Blog ${user.blog}</li>
                <li class="list-group-item">Location ${user.location}</li>
                <li class="list-group-item">Account Creation Date ${user.created_at}</li>
                
    
            </ul>
        </div>
    </div>
    
    </div>
    
    <h3 class="fs-1 m-5">Last Repos</h3>
    <div id="repos" class="container p-3"></div>`;
    
    }

 // show repos
 showRepos(repos) {
    let output = '';

    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-4">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge bg-primary fs-6">Stars: ${repo.stargazers_count} </span>
              <span class="badge bg-secondary fs-6">Followers:${repo.watchers_count} </span>
              <span class="badge bg-success fs-6">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // repos to html
    document.getElementById('repos').innerHTML = output;
  }

  // make a alert msg
  showAlert(message, classname) {
    // make a div
    const div = document.createElement('div');

    // add class
    div.className = classname;

    // add msg
    div.innerText = message;

    // get parent element
    const outlet = document.getElementById('alert');

    // post to html
    outlet.appendChild(div);

    // 3 sec to show off
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // show off screen
  clearAlert() {
    // pull the alert
    const currentAlert = document.querySelector('.alert');
    // if alert, remove
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // remove profile

  clearprofile() {
    this.profile.innerHTML = '';
  }
}
