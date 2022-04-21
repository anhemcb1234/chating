import {Axios} from './Axios';

function getArticles(payload) {
   return Axios.get(`?q=${payload}&from=2022-04-20&sortBy=publishedAt&apiKey=9f395695403c4ad08ded1cfaeec0aaab`);
}
function getWeather(id) {
   return Axios.get(`/data/2.5/weather?id=${id}&appid=d9cb7772d7a5a6fb6638d31490c19689`);
}
function postLogin(payload) {
   return Axios.post(`/login`,payload);

}
export const userServices = {
getArticles,
getWeather,
postLogin
};