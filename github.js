class Github {
    constructor(){
        this.client_id ="c9f8d7edfd798c31f46a";
        this.client_secret ="f38c6d0eeb8505bb803ff9ea4b6539600cbcaef7"
        this.repos_count = 10;
        this.repos_sort = "asc"
    }
    async getUser(user){

       const profileResponce = await fetch(
        `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}` 
            );

        const repoResponse = await fetch(
        `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponce.json();
        const repos = await repoResponse.json();

        return {
                profile, repos
        
        };
    }

}