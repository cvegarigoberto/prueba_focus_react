import react, {Component} from 'react';
import LoadImage from './LoadImage.js';
import  './recipe.css';

class ObjItem extends Component{
	constructor(props){
		super(props);
		this.state = {};
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleSubmit(){
		
		const {name, id, thumbnail, preparation_time} = this.props;
		this.props.preparation({name: name, preparation_time:preparation_time});
		console.log("click",name);
	}

	render(){
		
		const {name, id, thumbnail, preparation_time} = this.props;

		return(
			<div className="recipe-card">
				<div className="recipe-card-image">
					<LoadImage src={thumbnail} alt={name}/>
				</div>
				<div className="recipe-card-content">
					<h2 className="recipe-title"> Name: {name} </h2>
					<h4> Preparation time: {preparation_time} </h4>
					<button className="recipe-button" type="button" 
						onClick={this.handleSubmit}>Buy Now!</button>
				</div>
			</div>
		);
	}
}

export default ObjItem;