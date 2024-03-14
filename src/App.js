import "./App.css";
import Main from "./pages/Main";
// import { DataContextProvider  } from "./DataContext";
import { resume_data } from './data/mock';

const App = () => {
  return (
    <div className="App">
      {/* <DataContextProvider> */}
        <Main data={resume_data} />
      {/* </DataContextProvider> */}
    </div>
  );
}

export default App;
