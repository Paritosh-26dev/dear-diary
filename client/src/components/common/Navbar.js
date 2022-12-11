import './Navbar.css';
import { NavLink } from 'react-router-dom';
function Navbar(...props) {
    return (
        <div className="nav">
            <NavLink to="/"><img alt="logo" className="nav-pic" src="https://cdn.theatlantic.com/thumbor/azw5t_2IRwwLNlAmCIsvmPtagIA=/0x361:5010x3179/720x405/https://cdn.theatlantic.com/assets/media/img/mt/2020/08/GS1819699_1/original.jpg"></img></NavLink>
            <NavLink activeClassName="nav-active" exact className="nav-link" to="/">Home</NavLink>
            <NavLink activeClassName="nav-active" className="nav-link" to="/create">New Entry</NavLink>
            <NavLink activeClassName="nav-active" className="nav-link" to="/view">View your Entries</NavLink>
            <button className="nav-button" onClick={props[0].logout}>LogOut</button>
        </div>
    )
}
export default Navbar;