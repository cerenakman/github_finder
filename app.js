// github instance 
const github = new Github();
const ui = new UI();

//from html
const searchUser = document.getElementById('searchUser');
const searchButton = document.getElementById('searchButton');

console.log(searchUser, searchButton);


//button tracker
searchButton.addEventListener("click", getInput)

function getInput(){
    //if input is full
    if(searchUser.value !==''){
        //http request > pull the data
        github.getUser(searchUser.value).then(data=>{
            if(data.profile.message == "Not Found"){
                //show the error
                ui.showAlert("Aradığınız Kullanıcı Bulunamadı.", 'alert alert-danger')
            }else{
                //show user
                ui.showProfile(data.profile)
                //show repos
                ui.showRepos(data.repos);
            }
        })
    } else{
        //clean profile
        ui.clearprofile();

    }

}