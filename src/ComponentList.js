import react, {Component} from 'react';
import ItemList from './ItemList.js';
import Navbar from './Navbar.js';
import ObjItem from './ObjItem.js';
import PreparationItem from './PreparationItem.js';

const mainUrl = 'https://vending-machine-test.vercel.app/api/products';

class ComponentList extends Component{
	constructor(props){
		super(props);
		this.state = {
			objList : [],
			preparation: []
		};
		this.handlePreparation = this.handlePreparation.bind(this);
	}

	componentDidMount(){
		this.loadList();
		
	}

	loadList(){
		fetch(mainUrl)
		.then(data =>{
			if(!data.ok){
				if(data.status >= 400 && data.status < 500){
					return data.json().then(data => {
						var err = {errorMessage: data.message}
						throw err;
					});
				}else{
					var err = {errorMessage: 'Please try again later.'};
					throw err;
				}
			} 
			
			return data.json();
		})
		.then(objList => {

			var objList = objList.data;

			this.setState({objList:objList, preparation:[]});
		});
	}

	handlePreparation(item){
		
		this.setState((prevState, props) =>{
			const newItem = {...item};
			console.log(newItem);
			return {
				preparation: [...this.state.preparation, newItem],
				objList: [...this.state.objList] 
			}	
		});
		
	}

	render(){
			
		const objList = this.state.objList;			
		const preparation = this.state.preparation;			
		return (
			<div>
				<Navbar/>
				<h1> Foodcus </h1>
				<PreparationItem preparation = {preparation} />
				<ItemList objList={objList}
					preparation={this.handlePreparation}/>
			</div>
			);
	}
}

export default ComponentList;