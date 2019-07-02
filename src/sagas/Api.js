

const urlGetMovies = 'http://192.168.1.2:3001/list_all_foods';

function* getMoviesFromApi() {
    const response = yield fetch(urlGetMovies, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    });
    const responseJson = response.json();
   //const movies = yield response.status === 200 ? JSON.parse(response._bodyInit): []     
    //console.log(responseJson.data)  ;
    return responseJson.data;
}
export const Api = {
    getMoviesFromApi
}; 