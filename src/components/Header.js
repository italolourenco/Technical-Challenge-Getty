import React, {Component, Fragment} from 'react'
import '../styles/header.css';


class Header extends Component
{


    render()
    {
        return(
            <Fragment>
                <div className="content">
                    <header className="header">
                        <h2>TO DO LIST</h2> 
                    </header>
                </div>
            </Fragment>
        )
    }
}


export default Header