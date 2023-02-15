import * as React from "react";
import { MainWindow} from "./MainWindow.js";
import {createRoot} from "react-dom/client";

import {SideBar} from "./SideBar";
import {createStore} from "redux";
import {rootReducer} from "./rootReducer";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";

function App() {
    const store = createStore(
        rootReducer,
        composeWithDevTools()
    )

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

