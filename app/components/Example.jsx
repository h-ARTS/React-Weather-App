import React from 'react';
import { Link } from 'react-router';

const Example = props => {
    return(
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=Zurich">Zurich, ZH</Link>
                </li>
                <li>
                    <Link to="/?location=Locarno">Locarno, TI</Link>
                </li>
            </ol>
        </div>
    );
};

export default Example;