import React from "react";

class SearchBar extends React.Component {

    handleFormSubmit = (event) => {
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5">
                    <div className="col-lg-12">
                        <input 
                            onChange={this.props.searchMovieProp}
                            type="text"
                            className="form-control mt-5"   
                            placeholder="Search a movie"
                            />
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar;