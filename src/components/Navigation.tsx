import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <nav style={{height: '50px', display:'flex', justifyContent: 'space-between', background: 'grey', color: 'white'}}>
            <span style={{fontWeight: 'bold'}}>React 2023</span>

            <span>
                <Link to='/'>Products</Link>
                <Link to='/about'>About</Link>
            </span>
        </nav>
    )
}