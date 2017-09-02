import React from 'react';
import Nav from 'Nav';

const Main = props => {
    return (
        <div>
            <Nav />
            <div className="row">
                <div className="medium-6 large-4 columns small-centered">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Main;