import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header-crest">
                    <img src="images/header-logo.svg" alt="Header with Ludlow University crest and name"/>
                </div>

                <div className="header_navigate">
                    <div id="header_navigate__item">Study</div>
                    <div id="header_navigate__item">Research</div>
                    <div id="header_navigate__item">About us</div>
                    <div id="header_navigate__magnify">
                        <img src="images/magnify.png" alt="Magnifying glass" className="header_navigate__magnifying-glass"/>
                    </div>
                </div>
            </header>
        )
     } 
 }

 export default Header