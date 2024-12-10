import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Layout>
        <HomePage />
      </Layout>
    </Router>
  );
}

export default App;
