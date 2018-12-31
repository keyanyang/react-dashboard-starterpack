import React, { Component, Fragment } from 'react';

import Post from './Post';
import ThemeSwitcher from './Theme/ThemeSwitcher';

class App extends Component {
    render() { 
        return (
        <ThemeSwitcher post={<Post />} />
        );
    }
}

export default App;
