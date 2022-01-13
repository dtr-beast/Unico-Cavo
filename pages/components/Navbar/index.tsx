import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faUser, faSearch, faCartPlus, faAngleLeft} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <>
            <header className={"header"}>
                <div className="container">
                    <div className="row v-center">
                        <div className="header-item item-left">
                            <div className="logo"><a href="#">Unico Cavo</a></div>
                        </div>
                        <div className="header-item item-center">
                            <div className="menu-overlay"/>
                            <nav className="menu">
                                <div className="mobile-menu-head">
                                    <div className="go-back"><FontAwesomeIcon icon={faAngleLeft}/></div>
                                    <div className="current-menu-title"/>
                                    <div className="mobile-menu-close">&times;</div>
                                </div>
                                <ul className="menu-main">
                                    <li>
                                        <a href="#">Pricing</a>
                                    </li>

                                    <li className="menu-item-has-children">
                                        <div className="sale-design">
                                            <span className="sale-label">Sale</span>
                                        </div>
                                        <a href="#">Products</a>
                                    </li>
                                    <li>
                                        <a href="#">Support</a>
                                    </li>
                                    <li>
                                        <a href="#">Discover</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header-item item-right">
                            <a href="#" className="search">
                                <FontAwesomeIcon icon={faSearch}/>
                            </a>
                            <a href="#" className="user">
                                <FontAwesomeIcon icon={faUser}/>
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faCartPlus}/>
                            </a>
                            <div className="mobile-menu-trigger">
                                <span/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

