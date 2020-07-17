class Github {
   constructor() {
     this.client_id ='cfd88789cf2128255f54';
     this.client_secret ='77881e8f15072fdd6819cf5460421a00f723b98d';
     this.repos_count = 10;
     this.repos_sort ='created: asc';
   }
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

     const profile = await profileResponse.json();
     const repos = await repoResponse.json();

     return {
      profile,
      repos
     }
   }
}