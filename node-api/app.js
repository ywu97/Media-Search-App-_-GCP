//route file for express api
const express = require('express');
const app = express();
var cors = require('cors');
var request = require('request');
const util = require('util');
const { response } = require('express');
const { get } = require('request');
const API_KEY = "8faf615ce381bca323be830ea46c531c";
const PORT = process.env.port || 8080;
const getPromise = util.promisify(request);
var path = require('path');


const _app_folder = 'dist/angular-hw8';
app.use('' ,express.static(path.join(_app_folder)));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, _app_folder + '/index.html'));
// })
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/angular-hw8/index.html'));
})
app.get('/watch/movie/:id', (req, res) =>{
    res.sendFile(path.join(__dirname, '/dist/angular-hw8/index.html'));
})
app.get('/watch/tv/:id',(req, res) =>{
    res.sendFile(path.join(__dirname, '/dist/angular-hw8/index.html'));
})
app.get('/mylist', (req, res) =>{
    res.sendFile(path.join(__dirname, '/dist/angular-hw8/index.html'));
})

//Homepage
var getCurrentMovies = {
    'url' :'https://api.themoviedb.org/3/movie/now_playing?api_key=' + API_KEY + '&language=en-US&page=1'
};
app.get('/currentMovies',cors(), async(req, res) =>{
    var cpMovies = {};
    let currentMovies = await getPromise(getCurrentMovies);
    cpMovies.currentMovies = JSON.parse(currentMovies.body).results.slice(0,5);
    res.json(cpMovies);
});

var getPopularMovies = {
    'url': 'https://api.themoviedb.org/3/movie/popular?api_key=' + API_KEY + '&language=en-US&page=1'
}
app.get('/popularMovies',cors(), async(req, res) =>{
    var ppMovies = {};
    let popularMovies = await getPromise(getPopularMovies);
    ppMovies.popularMovies = JSON.parse(popularMovies.body).results.slice(0,20);
    res.json(ppMovies);
});

var getTopRatedMovies = {
    'url': 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + API_KEY + '&language=en-US&page=1'
};
app.get('/topRatedMovies',cors(), async(req, res) =>{
    var trMovies = {};
    let topRatedMovies = await getPromise(getTopRatedMovies);
    trMovies.topRatedMovies = JSON.parse(topRatedMovies.body).results.slice(0,20);
    res.json(trMovies);
});

var getTrendingMovies = {
    'url': 'https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY
};
app.get('/trendingMovies', cors(), async(req, res) =>{
    var trendMovies = {};
    let trendingMovies = await getPromise(getTrendingMovies); 
    trendMovies.trendingMovies = JSON.parse(trendingMovies.body).results.slice(0,20);
    res.json(trendMovies);
});

var getPopularTvShows = {
    'url': 'https://api.themoviedb.org/3/tv/popular?api_key=' + API_KEY + '&language=en-US&page=1'
};
app.get('/popularTvshows', cors(), async(req, res) =>{
    var ppTvShows = {};
    let popularTvShows = await getPromise(getPopularTvShows);
    ppTvShows.popularTvShows = JSON.parse(popularTvShows.body).results.slice(0,20);    
    res.json(ppTvShows);
});

var getTopRatedTvShows = {
    'url': 'https://api.themoviedb.org/3/tv/top_rated?api_key=' + API_KEY + '&language=en-US&page=1',
};
app.get('/topRatedTvShows', cors(), async(req, res) => {
    var trTvShows = {};
    let topRatedTvShows = await getPromise(getTopRatedTvShows);
    trTvShows.topRatedTvShows = JSON.parse(topRatedTvShows.body).results.slice(0,20);
    res.json(trTvShows);

});

var getTrendingTvShows = {
    'url': 'https://api.themoviedb.org/3/trending/tv/day?api_key=' + API_KEY,
}
app.get('/trendingTvShows', cors(), async(req, res) => {
    var trendTvShows = {};
    let trendingTvShows = await getPromise(getTrendingTvShows);
    trendTvShows.trendingTvShows = JSON.parse(trendingTvShows.body).results.slice(0,20); 
    res.json(trendTvShows);
});

//Movie Video + Details
// var getMoviegenre = 'https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY + '&language=en-US';
// app.get('/movieGenre', cors(), async(req, res) =>{
//     var genreList = {};
//     let genres = await getPromise(getMoviegenre);
//     genreList.genres = JSON.parse(genres.body).genres;
//     res.json(genreList);
// })

app.get('/MoviesVideo', cors(), async(req, res) => {
    id = req.query.movieId;
    var getMoviesVideo = 'https://api.themoviedb.org/3/movie/'+ id +'/videos?api_key=' + API_KEY + '&language=en-US&page=1';
    var movieVideo = {};
    let videoList = await getPromise(getMoviesVideo);
    movieVideo.videoList = JSON.parse(videoList.body).results;
    if(movieVideo.videoList.length > 0){
        for(var i = 0 ; i < movieVideo.videoList.length; i++){
            if(movieVideo.videoList[i].site != "YouTube"){
                movieVideo.videoList.splice(i, 1);
                i = i - 1;
            }
        }
    }
    res.json(movieVideo);
});


app.get('/MoviesDetails', cors(), async(req, res) =>{
    id = req.query.movieId;
    //console.log(id);
    var getMoviesDetails = 'https://api.themoviedb.org/3/movie/' + id + '?api_key='+ API_KEY + '&language=en-US&page=1';
    var movieDetails = {};
    let movDetails = await getPromise(getMoviesDetails);
    movieDetails.movDetails = JSON.parse(movDetails.body);
    res.json(movieDetails);
})

app.get('/MovieCast', cors(), async(req, res) =>{
    id = req.query.movieId;
    //console.log(id);
    var getMovieCast = 'https://api.themoviedb.org/3/movie/' + id + '/credits?api_key='+ API_KEY +'&language=en-US&page=1';
    var movieCastCredit = {};
    let castList = await getPromise(getMovieCast);
    movieCastCredit.castList = JSON.parse(castList.body).cast;
    // console.log(movieCastCredit.castList);
    if(movieCastCredit.castList.length > 0){
        for(var i = 0; i < movieCastCredit.castList.length; i++){
            if(movieCastCredit.castList[i].profile_path === null || movieCastCredit.castList[i].profile_path === undefined){
                movieCastCredit.castList.splice(i,1);
                i = i - 1;
            }
        }
    }
    res.json(movieCastCredit);
})

app.get('/MovieReviews', cors(), async(req, res) =>{
    id = req.query.movieId;
    var getMovieReviews = 'https://api.themoviedb.org/3/movie/' + id + '/reviews?api_key='+ API_KEY +'&language=en-US&page=1';
    var moiveReviews = {};
    let reviewsList = await getPromise(getMovieReviews);
    moiveReviews.reviewsList = JSON.parse(reviewsList.body).results;
    res.json(moiveReviews);
})

app.get('/MovieRecommended', cors(), async(req, res) => {
    id = req.query.movieId;
    var getMovieRecommended = 'https://api.themoviedb.org/3/movie/' + id + '/recommendations?api_key='+ API_KEY +'&language=en-US&page=1';
    var movieRecList = {};
    let recomendList = await getPromise(getMovieRecommended);
    movieRecList.recomendList = JSON.parse(recomendList.body).results;
    res.json(movieRecList);
})

app.get('/MovieSimilar', cors(), async(req, res) => {
    id = req.query.movieId;
    var getMovieSimilar = 'https://api.themoviedb.org/3/movie/' + id + '/similar?api_key='+ API_KEY +'&language=en-US&page=1';
    var movieSimList = {};
    let similarList = await getPromise(getMovieSimilar);
    movieSimList.similarList = JSON.parse(similarList.body).results;
    res.json(movieSimList);
})






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/CastDetails', cors(), async(req, res) => {
    id = req.query.CastId;
    var getCastDetails = 'https://api.themoviedb.org/3/person/'+id+'?api_key='+API_KEY+'&language=en-US&page=1';
    var infoDetails = {};
    let castDetails = await getPromise(getCastDetails);
    infoDetails.castDetails = JSON.parse(castDetails.body);
    res.json(infoDetails);
})

app.get('/PersonExternal', cors(), async(req, res) => {
    id = req.query.CastId;
    var getPersonExId = 'https://api.themoviedb.org/3/person/'+id+'/external_ids?api_key='+API_KEY+'&language=en-US&page=1';
    var ExIdLink = {};
    let PersonExId = await getPromise(getPersonExId);
    ExIdLink.PersonExId = JSON.parse(PersonExId.body);
    res.json(ExIdLink);
})

// app.get('/MultiSearch', cors(), async(req, res) => {
//     userInput = req.query.inputString;
//     var getMultiSearch = 'https://api.themoviedb.org/3/search/multi?api_key='+API_KEY+'&language=enUS&query=' + userInput;
//     var multiResult = {};
//     let multiSearchResult = await getPromise(getMultiSearch);
//     multiResult.multiSearchResult = JSON.parse(multiSearchResult.body).results;
// })
app.use(cors());

app.get('/getSearchResult', (req, res) => {
    var queryInputString = req.query.inputString;
    var url = 'https://api.themoviedb.org/3/search/multi?api_key='+API_KEY+'&language=en-US&query=' + queryInputString;
    // console.log(queryInputString);
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var theReturnJSON = JSON.parse(body);
            for(var i = 0; i < theReturnJSON.results.length;i++){
                if(theReturnJSON.results[i].media_type == "person"){
                    theReturnJSON.results.splice(i,1);
                    i = i-1;
                }
            }
            // res.send(body).results;
            res.send(theReturnJSON.results.splice(0,7));
        }
    })
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








//Tv Video + Details
// var getTvgenre = 'https://api.themoviedb.org/3/genre/tv/list?api_key=' + API_KEY + '&language=en-US'
// app.get('/tvGenre', cors(), async(req, res) =>{
//     var genreList = {};
//     let genres = await getPromise(getTvgenre);
//     genreList.genres = JSON.parse(genres.body).genres;
//     res.json(genreList);
// })

app.get('/TvVideo', cors(), async(req, res) => {
    id = req.query.tvId;
    var getTvVideo = 'https://api.themoviedb.org/3/tv/'+ id +'/videos?api_key=' + API_KEY + '&language=en-US&page=1';
    var tvVideo = {};
    let videoList = await getPromise(getTvVideo);
    tvVideo.videoList = JSON.parse(videoList.body).results;
    if(tvVideo.videoList.length > 0){
        for(var i = 0 ; i < tvVideo.videoList.length; i++){
            if(tvVideo.videoList[i].site != "YouTube"){
                tvVideo.videoList.splice(i, 1);
                i = i - 1;
            }
        }
    }
    res.json(tvVideo);
});


app.get('/TvDetails', cors(), async(req, res) =>{
    id = req.query.tvId;
    //console.log(id);
    var getTvDetails = 'https://api.themoviedb.org/3/tv/' + id + '?api_key='+ API_KEY +'&language=en-US&page=1';
    var tvSDetails = {};
    let tvDetails = await getPromise(getTvDetails);
    tvSDetails.tvDetails = JSON.parse(tvDetails.body);
    res.json(tvSDetails);
})

app.get('/TvCast', cors(), async(req, res) =>{
    id = req.query.tvId;
    //console.log(id);
    var getTvCast = 'https://api.themoviedb.org/3/tv/' + id + '/credits?api_key='+ API_KEY +'&language=en-US&page=1';
    var tvCastCredit = {};
    let castList = await getPromise(getTvCast);
    tvCastCredit.castList = JSON.parse(castList.body).cast;
    // console.log(tvCastCredit.castList);
    if(tvCastCredit.castList.length > 0){
        for(var i = 0; i < tvCastCredit.castList.length;i++){
            if(tvCastCredit.castList[i].profile_path === null || tvCastCredit.castList[i].profile_path === undefined){
                tvCastCredit.castList.splice(i, 1);
                i = i - 1;
            }
        }
    }
    // console.log(tvCastCredit.castList);
    res.json(tvCastCredit);
})

app.get('/TvReviews', cors(), async(req, res) =>{
    id = req.query.tvId;
    var getTvReviews = 'https://api.themoviedb.org/3/tv/' + id + '/reviews?api_key='+ API_KEY +'&language=en-US&page=1';
    var tvReviews = {};
    let reviewsList = await getPromise(getTvReviews);
    tvReviews.reviewsList = JSON.parse(reviewsList.body).results;
    res.json(tvReviews);
})

app.get('/TvRecommended', cors(), async(req, res) => {
    id = req.query.tvId;
    var getTvRecommended = 'https://api.themoviedb.org/3/tv/' + id + '/recommendations?api_key='+ API_KEY +'&language=en-US&page=1';
    var tvRecList = {};
    let recomendList = await getPromise(getTvRecommended);
    tvRecList.recomendList = JSON.parse(recomendList.body).results;
    res.json(tvRecList);
})

app.get('/TvSimilar', cors(), async(req, res) => {
    id = req.query.tvId;
    var getTvSimilar = 'https://api.themoviedb.org/3/tv/' + id + '/similar?api_key='+ API_KEY +'&language=en-US&page=1';
    var tvSimList = {};
    let similarList = await getPromise(getTvSimilar);
    tvSimList.similarList = JSON.parse(similarList.body).results;
    res.json(tvSimList);
})


app.listen(PORT, (req, res) =>{
    console.log('Express app.js is running at port 8080');
});
module.exports = app;