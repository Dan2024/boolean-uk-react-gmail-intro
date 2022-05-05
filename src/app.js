import "./styles/app.css";

import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Main />
    </div>
  );
}
