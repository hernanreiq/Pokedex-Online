import React from "react";

function Header () {
    return(
        <header className="shadow">
            <div className="container text-center pb-4 pt-3">
                <h1 className="mb-0 display-4">Pokédex</h1>
                <p className="mb-0 h2">Online and easy to use</p>
                <p className="mb-0 firm">Development and Web design by: <span className="badge badge-dark"><a href="https://bit.ly/hernanreiq" target="_blank" className="text-light" rel="noreferrer">Hernan.Reiq</a></span></p>
            </div>
            <div className="black-division"></div>
        </header>
    )
}

export default Header;