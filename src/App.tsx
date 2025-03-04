import {MatchesList} from "./pages/matchesList/ui/MatchesList.tsx";
import {Header} from "./pages/header/Header.tsx";

export function App() {
  return (
      <div className={'max-w-[1836px] mx-auto'}>
        <Header/>
        <MatchesList/>
      </div>
  )
}

