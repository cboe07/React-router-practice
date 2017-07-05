import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import nba from './nba';
import $ from 'jquery';
import Movie from './movie';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         gists: []
      }
   }

   componentDidMount() {
      // getJSON is a function with two args, a url and a function to run
      $.getJSON('https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=superman', (gists)=>{
         // this.state.gists = gists BAD!!!!!!
         console.log(gists)
         this.setState({
            gists: gists.results
         })
      })
   }

	render() {
      if(this.state.gists.length === 0){
         return (<h1>Loading...</h1>)
      }
      console.log(this.state.gists)
      // Local variable called gist
      // NOT the same thing as this.state.gists
      const localGists = [];
      this.state.gists.map((gist, index)=>{
         localGists.push(
            <div key={index}>
               <Link to={`/g/${gist.id}`}>{gist.title}</Link>
            </div>
         )
      })

		return (
			//The Router component goes around EVERYTHING the router has
			<Router>
				<div className="container">
               <h1>Welcome to the Gists page</h1>
               <Route path="/nba" component={nba} />
					<div className='movie-list col-sm-6'>
                  {localGists}
               </div>
               <div className='col-sm-6'>
            {/* :something, just like express, means wildcard */}
                  <Route path='/g/:movieId' component={Movie} />               
               </div>
				</div>
			</Router>

		);
	}
}

export default App;
