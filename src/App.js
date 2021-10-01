import { useState } from "react";
import Content from './content/Content';

import './app.scss';
import Header from "./components/Header/Header";

const App = () => {
    const [] = useState();
    return <>
        <Header/>
        <Content />
    </>;
};

export default App;
