import * as axios from 'axios'
const githubAPI = "https://api.github.com/"
export default{
    ifNull(repoLan){
        return (repoLan != null) ? repoLan : "Desconocidos" 
    },
    async getUser(user){
        return (await axios(
            {
                method:     'get',
                url:        `${githubAPI}users/${user}`,
                responseType: 'stream'
            })).data
    },
    async repoPercentLanguage(user){
        let proyects = [];
        (await axios(
            {
                method:     'get',
                url:        `${githubAPI}users/${user}/repos?per_page=100`,
                responseType: 'stream'
            }
        )).data.forEach(repo=>{
            const labelData = this.ifNull(repo.language)
            if(proyects.findIndex(data=>data.label == labelData) == -1){
                proyects.push({
                    label: labelData,
                    repos: 1
                })

            }
            else{
                proyects.forEach(proyect=>{
                    if(labelData == proyect.label){
                        proyect.repos++
                    }
                })
            }
        });
        return proyects
    },

}