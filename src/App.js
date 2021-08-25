/**
 * The App file. It should stay as simple as possible
 */

import React, { Fragment } from 'react';

import { BryntumDemoHeader, BryntumThemeCombo } from '@bryntum/scheduler-react';
import Content from './containers/Content.js';
import './App.scss';

const App = props => {
    return (
        <Fragment>
            <BryntumDemoHeader
                title="React Drag from Grid demo"
                href="../../../../../#example-frameworks-react-javascript-drag-from-grid"
                children={<BryntumThemeCombo />}
            />
            <Content />
        </Fragment>
    );
};

export default App;
