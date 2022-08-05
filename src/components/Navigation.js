
import {Navlink} from "react-router-dom"
const Navigation = () => {
    return (
        <div>
            <header className="main-Navigation">
                <nav>
                    <ul>
                        <li>
                            <Navlink to="/" > home</Navlink>
                        </li>
                        <li>
                              <Navlink to="/cart"> Cart</Navlink>
                        </li>
                    </ul>
                    <div>Saheb Shopping </div>
                </nav>

            </header>
        </div>
    );
};

export default Navigation;