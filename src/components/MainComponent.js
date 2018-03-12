import React, { Component } from 'react';
import BeautifulDndComponent from './beautifuldndcomponent/BeautifulDndComponent';
import './MainComponent.scss';

class MainComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BeautifulDndComponent/>
            </div>
        )
    }


}

export default MainComponent;