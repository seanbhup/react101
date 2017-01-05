const image1 = 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg'
const image2 = "http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-head.jpg"
const headsScore = 0
const tailsScore = 0

var Application = React.createClass({
	render: function(){
		return(
			<div className="application">
				<div>
					<Coin />
					<Scoreboard />
				</div>
			</div>
		)
	}
});

var Scoreboard = React.createClass({
	getInitialState: function(){
		return{
			addHeads: headsScore,
			addTails: tailsScore,
		}
	},
	addScore: function(){
		var checkScore;
		var randNum = Math.round(Math.random());
		if(randNum == 0){
			checkScore = headsScore + 1
		}else{
			checkScore = tailsScore + 1
		}
		this.setState({
			addHeads: checkScore,
			addTails: checkScore,

		})
	},
	render: function(){
		return(
			<div className="score-container">
				<button onClick={this.addScore}>Check Scores</button>
				<div className="heads">
					Heads: <span className="heads-score">{this.state.addTails}</span>
				</div>
				<div className="tails">
					Tails: <span className="tails-score">{this.state.addHeads}</span>
				</div>
			</div>
		)
	}
})

var Coin = React.createClass({
	getInitialState: function() {
		return{
			image: image1,
		}
	},
	flipCoin: function(){
		var checkState;
		var randNum = Math.round(Math.random());
		if(randNum == 0){
			checkState = image1;
		}else{
			checkState = image2;
		}
		this.setState({
			image: checkState
		})
	},
	render: function(){
		return(
			<div className="flip">
				<button onClick={this.flipCoin}>Flip Coin</button>
				<div><img src={this.state.image} /></div>
			</div>
		)
	}
})


ReactDOM.render(
	<Application />, 
	document.getElementById('container')
);