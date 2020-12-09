import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="fixed-top d-flex bd-highlight navbar navbar-expand-lg navbar-light bg-primary">
                <a className="text-white font-weight-bold p-2 flex-grow-1 bd-highlight navbar-brand" href="#"><h4> Farhana Naznin</h4></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="p-2 bd-highlight collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="btn btn-primary font-weight-bold text-white nav-link" href="#">Home <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="btn btn-primary font-weight-bold text-white nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="btn btn-primary font-weight-bold text-white nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="btn btn-primary font-weight-bold text-white nav-link" href="#">Disabled</a>
                    </li>
                    </ul>
                </div>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn btn-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div>
    );
};

export default Header;