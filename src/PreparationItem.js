import react, {Component} from 'react';


class PreparationItem extends Component{
	constructor(props){
		super(props);
	}

	render(){

		const preparation = this.props.preparation.map((t,i) => (
			
			<div className="preparation-card" key = {i}>
				{t.name} - preparation time: {t.preparation_time} M left.
			</div>
		));
		return(
			<div className="preparation-cont" >
				{preparation}
			</div>
		);
	}
}


export default PreparationItem;