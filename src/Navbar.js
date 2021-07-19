import react, {Component} from 'react';
import  './navbar.css';

class Navbar extends Component{
	render(){
		return(
			<header>
				<h2><a>FOCUS</a></h2>
				<nav>
					<li><a>Home</a></li>
					<li><a>About</a></li>
					<li><a>Contact Us</a></li>
				</nav>
			</header>
		);
	}
}

export default Navbar;