import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios";
import { title } from "process";


class App extends React.Component {

    state = {
        movies: [],

        searchQuery: ""
    }

    async componentDidMount() {
        const response = await axios.get(`https://api.themoviedb.org/3/list/8233016?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        this.setState({ movies: response.data.items })
    }

    //Axios API
    deleteMovie = async (movie) => {
        axios.post(`https://api.themoviedb.org/3/list/8233016/remove_item?media_id=${movie.id}&session_id=${process.env.REACT_APP_SESSION_ID}&api_key=${process.env.REACT_APP_API_KEY}`)
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        )
        this.setState(state => ({
            movies: newMovieList
        }))
    }

    searchMovie = (event) => {
        //console.log(event.target.value)
        this.setState({ searchQuery: event.target.value })
    }

    render() {

        let filteredMovies = this.state.movies.filter(
            (movie) => {
                console.log(movie)
                return movie.title?.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar
                            searchMovieProp={this.searchMovie}
                        />
                    </div>
                </div>
                <MovieList
                    movies={filteredMovies}
                    deleteMovieProp={this.deleteMovie}
                />
            </div>

        )
    }
}

export default App;