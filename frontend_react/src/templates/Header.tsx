import React from 'react'
import "../styles/templates/header.scss"
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

interface Props {
    
}

const Header = (props: Props) => {
    return (
        <Router>
            <div className="container-header">
                <Link to="/">Header</Link>
                <div>
                    <Link to="/">Home</Link>
                </div>
            </div>
        </Router>
    )
}

export default Header