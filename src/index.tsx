import * as React from "react";
import {createRoot} from "react-dom/client";

import {Provider} from "react-redux";
import type {} from 'redux-thunk/extend-redux'
import {store} from "./ducks";
import {MainWindow} from "./components/MainWindow";
import {SideBar} from "./components/SideBar";

function App() {
    return (
        <Provider store={store}>
            <h1>My Super Awesome app</h1>
            <div className="wrapper">
                <MainWindow />
                <SideBar />
            </div>
        </Provider>
    );
}

const root = createRoot(document.getElementById("root")!);

root.render(<App />)

