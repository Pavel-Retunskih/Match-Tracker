import {MatchesList} from "./pages/matchesList/ui/MatchesList.tsx";
import {Header} from "./pages/header/Header.tsx";
import {Provider} from "react-redux";
import {store} from "./app/model/store.ts";

export function App() {
  return (
      <Provider store={store}>
        <div className={'max-w-[1836px] mx-auto'}>
          <Header/>
          <MatchesList/>
        </div>
      </Provider>
  )
}

