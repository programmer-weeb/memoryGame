import Header from "./Header";
import { Cards } from "./Cards";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <Header />
      <Cards />
    </div>
  );
}

export default App;
