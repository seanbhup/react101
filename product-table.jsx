


var products = [
	{
		category: "Sporting Goods",
		price: "$49.99",
		name: "Football",
		inStock: true
	},
	{
		category: "Sporting Goods",
		price: "$9.99",
		name: "Baseball",
		inStock: true	
	},
	{
		category: "Sporting Goods",
		price: "$29.99",
		name: "Basketball",
		inStock: false
	},

	{
		category: "Electronics",
		price: "$99.99",
		name: "iPod Touch",
		inStock: true
	},
	{
		category: "Electronics",
		price: "$399.99",
		name: "iPhone 5",
		inStock: false
	},
	{
		category: "Electronics",
		price: "$199.99",
		name: "Nexus 7",
		inStock: true
	},
	{
		category: "Foods",
		price: "$1.99",
		name: "Cup of Noodles",
		inStock: true
	},
	{
		category: "Foods",
		price: "$2.99",
		name: "Eggs",
		inStock: false
	},
	{
		category: "Foods",
		price: "$4.50",
		name: "Milk",
		inStock: true
	}
]

function ProductCategoryRow(props){
	return(
		<tr>
			<td>{props.category}</td>
		</tr>
	)
}

function ProductRow(props){
	if(props.product.inStock === true){
		var productClass = "text-success";
	}else{
		var productClass = "text-danger";
	}
	return(
		<tr>
			<td className={productClass}>{props.product.name}</td>
			<td className={productClass}>{props.product.price}</td>
		</tr>
	)
}

function ProductTable(props){

	// Init a local var to hold all our rows
	var rows = [];
	// Init a local var to keep track of what category we are on
	var lastCategory = "";
	var key = 0;
	products.forEach(function(product, index){
		if (product.category !== lastCategory){
			// we need to add this to our rows array becasue its a new category
			rows.push(<ProductCategoryRow key={key} category={product.category} />)
			lastCategory = product.category;
			key++;
		}
		rows.push(<ProductRow key={key} product={product} />)
		key++
	});
	console.log(rows);
	return(
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{rows}
			</tbody>
		</table>
	)
}

function SearchBar(props){
	return(
		<form className="search-bar">
			<input type="text" placeholder="Search" />
			<div>
				<input type="checkbox" />&nbsp;Only show products in stock
			</div>
		</form>
	)
}
// this is the more powerful version than above
// class SearchBar extends React.Component{
// 	render(){
// 		return
// 	}
// }

function FilterableProductTable(props){
	return(
		<div className="filterable-product-table">
			<SearchBar />
			<ProductTable />
		</div>
	)
}

// We arent using a class (yet). So we have to include props as a param becasue there is no "this"
function Application(props){
	// Must return a single virtual DOM element
	return(
		<FilterableProductTable />
	)
}

// 2 Args, the what and the where
ReactDOM.render(
	<Application />,
	document.getElementById("container")
)