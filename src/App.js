import book from "./book.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <img src={book} className="App-logo img-fluid" alt="book image" />
        <main>
          <Dictionary />
        </main>
        Hello
        <footer className="App-footer">
          <small>Coded by Anna Ziętarska</small>
        </footer>
      </div>
    </div>
  );
}
