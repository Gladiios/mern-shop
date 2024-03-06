import { AuthProvider } from "../AuthContext";
import Card from "../components/Card";
import Header from "../components/Header";

const Index = () => {
  return (
        <div id="page">
          <Header />
          <div id="main-container">
            <Card />
          </div>
        </div>
  );
};

export default Index;
