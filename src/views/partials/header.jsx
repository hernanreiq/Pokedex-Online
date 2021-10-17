import React from "react";

function Header () {
    return(
        <header className="shadow">
            <div className="container text-center pb-4 pt-3">
                <h1 className="mb-0 display-3">Pokédex</h1>
                <p className="mb-0 h2">Online and easy to use</p>
            </div>
            <div className="black-division"></div>
        </header>
    )
}

export default Header;