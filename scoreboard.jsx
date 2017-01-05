// MAKE A COMPONENT CALLED Application
// COMPONENTS ARE UPPERCASE
// COMPONENTS RETURN A VIRTUAL DOM ELEMENT
//THE APP WORKS BUT ITS HUGE AND NO DIFFERENT THAN IF WE PASTED THIS IN OURSELVES

// The app in components is:
// 1. header
// 2. several teams
// 3. each team has a counter

// State. V1.
// Props are immutable (they do not change)
// State is a piece of data, that does not change
// State also has an initial value, that changes when X appears
// In the case of the National Championship, it starts at 0... initial state
// Some kind of mutation or change occurs.
// In order to use state, we have to make our function, React classes

var teams = [
	{
		name: "Knicks",
		score: 0,
		mascot: "Knickerbockers"
		logo: 
	},
	{
		name: "Bucks",
		score: 0,
		mascot: "Buck?"
		logo:
	}	
]


// Capital Header means a new Component
function Header(props){
	return(
		<div className="header">
			<h1>{props.title}</h1>
		</div>
	)
}

function Team(props){
	return(
		<div className="team">
			<div className="team-name">{props.name}</div>
			{/* remove counter. make it a component */}
			<Counter score={props.score} />
		</div>
	)
}

// React.createClass is a React component class that takes an object
// The only REQUIRED property is a render method
// EVERYTIME state changes, render gets called
var Counter = React.createClass({
	// We also need to add a getInitialState property that is part of React
	getInitialState: function() {
		// this function sets the initial state of a variable
		// it usually returns a single object
		return {
			time: "60:00",
			score:0
		}
	},
	getPoint: function(){
		console.log("You clicked on the plus button!")
		// setState is a special React function that updates the state
		this.setState({
			score: (this.state.score + 1)
		})
	},
	losePoint: function(){
		console.log("You clicked on the minus button!")
		this.setState({
			score: (this.state.score - 1)
		})
	},
	render: function(){
		return(
			<div className="counter">
				<button onClick={this.losePoint} className="counter-change minus">-</button>
				{/* Change the score from this.props.score to state! */}
				<div className="team-score">{this.state.score}</div>
				<button onClick={this.getPoint} className="counter-change plus">+</button>
			</div>
		)
	}
});

function Application(props){
	return(
		<div className="scoreboard">
			{/*TO GET THE TITLE, WE CALL THE TITLE PROPERTY OF THE PROPS OBJECT */}
			<Header title={props.title} />
			<div className="teams">
				{/* props.teams is an array of team objects */}
				{/* return a component with the current team name and score */}
				{/* can use "=>" instead of anonymous function" */}
				{props.teams.map((team, index) =>{
					return <Team key={index} name={team.name} score={team.score} />
				})}

			</div>
		</div>

	)
}
// ADD A TITLE ATTRIBUTE TO THE APPLICATION WHEN ITS RENDERED
ReactDOM.render(
	<Application title="NBA Scoreboard" teams={teams} />,
	document.getElementById("container")
)