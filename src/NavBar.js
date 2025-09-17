import { NavLink } from "react-router-dom";

function capitaliseFirstChar(str) {
    if(!str) {
        return "";
    }
    return (
        str.charAt(0).toUpperCase() + str.slice(1)
    );
}

function NavBar({URLs, children}) {
    const listURLs = Object.entries(URLs).map(([URL], index, array) => (
        <span key = {URL}>
            <NavLink to ={'/' + URL} 
            className={({isActive}) => (isActive ? 'active' : '')}>
            {capitaliseFirstChar(URL)}</NavLink>
            {index < array.length - 1 && ' | '}
        </span>
    ));
    return (
        <nav>
            {children} {listURLs}
        </nav>
    );
}

export default NavBar;