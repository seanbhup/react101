const image1 = 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg'
const image2 = "http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-head.jpg"

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
			image: image1
		}
	},
	flipCoin: function(){
		var checkState;
		var randNum = Math.round(Math.random());
		if(randNum == 0){
			checkState= image1;
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