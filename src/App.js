import { useState } from "react";
import "./styles.css";

const booksData = {
  Fiction: [
    { id: 1, title: "Sita The Warrior", rating: "4.5" },
    { id: 2, title: "Rama The Prince", rating: "4.0" },
    { id: 3, title: "Christ The Redeemer", rating: "5.0" },
    { id: 4, title: "Revloution 2020", rating: "5.0" }
  ],
  Epics: [
    { id: 1, title: "Mahabharath", rating: "4.9" },
    { id: 2, title: "Raamayan", rating: "5.0" },
    { id: 3, title: "Bhagavatham", rating: "5.0" },
    { id: 4, title: "Shiva Puranam", rating: "4.9" }
  ],
  FairyTales: [
    { id: 1, title: "Tinkle", rating: "5.1" },
    { id: 2, title: "Snow-white and the Huntsman", rating: "4.8" },
    { id: 3, title: "Beauty and the beast", rating: "4.5" },
    { id: 4, title: "Tangled", rating: "5.5" }
  ],
  Biographies: [
    { id: 1, title: "Wings Of Fire", rating: "5.6" },
    { id: 2, title: "Iam Malala", rating: "5.0" },
    { id: 3, title: "Bill Gates", rating: "4.1" },
    { id: 4, title: "A Beautiful Mind", rating: "5.1" }
  ]
};

export default function App() {
  const [genre, setGenre] = useState("Epics");
  const genreSelect = (e) => {
    // console.log(e.target.innerText);
    setGenre(e.target.innerText);
  };
  return (
    <div className="App">
      <h2>Grandhalay</h2>
      <p>Select the Genre</p>
      {Object.keys(booksData).map((e) => (
        <button onClick={genreSelect} key={e}>
          {e}
        </button>
      ))}
      <hr />
      <div>
        <ul>
          {booksData[`${genre}`].map((book) => (
            <li key={book.id}>
              {book.title}
              <div className="rating">Rating: {book.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
