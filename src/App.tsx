import FlavonoidStatistics from "./components/FlavonoidStatistics";
import GammaStatistics from "./components/GammaStatistics";
import { jsonData } from "./components/jsonData";

const data = jsonData();

function App() {
  return (
    <div
      style={{
        padding: 10,
      }}
    >
      <FlavonoidStatistics data={data} />
      <GammaStatistics data={data} />
    </div>
  );
}

export default App;
