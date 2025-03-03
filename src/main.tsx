import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './styles.css'

import {Provider} from "react-redux";
import {store} from "./app/model/store.ts";
import {App} from "./App.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Provider store={store}><App/></Provider>
    </StrictMode>,
)
