var Application = React.createClass({
	render: function(){
		return(
			<div className="application">
				<div>
					<Coin />
				</div>
			</div>
		)
	}
});


var Coin = React.createClass({
	getInitialState: function() {
		return{
			image: 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg'
		}
	},
	flipCoin: function(){
		this.setState({
			image: "http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-head.jpg"
		})
	},
	render: function(){
		return(
			<div className="flip">
				<button onClick={this.flipCoin}>Click to Flip</button>
				<div><img src={this.state.image} /></div>
			</div>
		)
	}
})


ReactDOM.render(
	<Application imageSrc = 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg' />, 
	document.getElementById('container')
);

// http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg