import { FunctionalComponent, h, Fragment } from 'preact';
import { Route, Router } from 'preact-router';

import { mainContainerStyle } from './app.css';
import Home from '../routes/home';
import Profile from '../routes/profile';
import NotFoundPage from '../routes/notfound';
import Header from './header';

const App: FunctionalComponent = () => <>
    <Header />
    <div class={mainContainerStyle}>
        <Router>
            <Route path="/" component={Home} />
            <Route path="/profile/" component={Profile} user="me" />
            <Route path="/profile/:user" component={Profile} />
            <NotFoundPage default />
        </Router>
    </div>
</>

export default App;
