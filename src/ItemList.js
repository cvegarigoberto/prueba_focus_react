import react, {Component} from 'react';
import ObjItem from './ObjItem.js';

import  './recipeList.css';


class ItemList extends Component{
	render(){
		//const {objItem} = this.props;
		const objList = this.props.objList.map((t) => (

			<ObjItem 
				preparation = {this.props.preparation}
				key = {t.id}
				{...t}
				/>
		));
		return(
			<div>
				
				<div className="recipe-list">
					{objList}
				</div>
			</div>
			
		);
	}
}



export default ItemList;