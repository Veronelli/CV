import * as axios from 'axios'
const githubAPI = "https://api.github.com/"
export default{
    async getUser(user){
        return (await axios(
            {
                method:     'get',
                url:        `${githubAPI}users/${user}`,
                responseType: 'stream'
            })).data
    }
}