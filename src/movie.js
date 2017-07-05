import React, {Component} from 'react';
import $ from 'jquery';

class Movie extends Component{
	constructor(props) {
		super(props);
		this.state = {
			movie: {}
		}
	}

	componentDidMount() {
		const mid = this.props.match.params.movieId  
		$.getJSON('https://api.themoviedb.org/3/movie/'+mid+'?api_key=fec8b5ab27b292a68294261bb21b04a5', (movie)=>{
			console.log(movie)
			this.setState({
				movie: movie
			})
		})
	}


	// Params are inside of props.match
	render(){
		console.log(this.props.match.params)
		if(this.state.movie == {}){
			return(
				<h1>{this.props.match.params.movieId}</h1>
			)
		}else{
			return(
				<div className='col-sm-8'>
					{this.state.movie.title}
				</div>
			)
		}
		
	}
}


export default Movie;