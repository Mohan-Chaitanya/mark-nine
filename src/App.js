import { useState } from "react";
import "./styles.css";

const booksData = {
  Fiction: [
    {
      id: 1,
      title: "Sita The Warrior",
      rating: "4.5",
      desc:
        "Written by Amish describing how actually the character sita was described in Ramyan"
    },
    {
      id: 2,
      title: "Rama The Prince",
      rating: "4.0",
      desc: "Writer Amish gave his version and interpretation of Ramayan"
    },
    {
      id: 3,
      title: "Christ The Redeemer",
      rating: "5.0",
      desc:
        "Elizabeth Noll wrote this non fiction book describing one of the seven wonders of the world"
    },
    {
      id: 4,
      title: "Revloution 2020",
      rating: "5.0",
      desc: "One of Chetan Bhagats masterpiece. A must read"
    }
  ],
  Epics: [
    {
      id: 1,
      title: "Mahabharath",
      rating: "4.9",
      desc: "The epic that gives knowledge of how a human should live"
    },
    {
      id: 2,
      title: "Raamayan",
      rating: "5.0",
      desc: "The epic that describes how a man can be a god"
    },
    {
      id: 3,
      title: "Bhagavatham",
      rating: "5.0",
      desc: "Short stories on dashavatars of Bhagavan Vishnu"
    },
    {
      id: 4,
      title: "Shiva Puranam",
      rating: "4.9",
      desc: "Short stories on Prameshwar"
    }
  ],
  FairyTales: [
    {
      id: 1,
      title: "Tinkle",
      rating: "5.1",
      desc: "The ever new kids magazine."
    },
    {
      id: 2,
      title: "Snow-white and the Huntsman",
      rating: "4.8",
      desc: "Story but nostalgic one"
    },
    {
      id: 3,
      title: "Beauty and the beast",
      rating: "4.5",
      desc:
        "How a lonely girl in search of her father comes across a beast who was a cursed prince."
    },
    {
      id: 4,
      title: "Tangled",
      rating: "5.5",
      desc:
        "Rupunzle the girl with golden healing hair and daughter of a king but lives alone.Want to know why? Read the book"
    }
  ],
  Biographies: [
    {
      id: 1,
      title: "Wings Of Fire",
      rating: "5.6",
      desc: "The legend APJ.Abdul Kalams life"
    },
    {
      id: 2,
      title: "Iam Malala",
      rating: "5.0",
      desc:
        "The bullet bearer iron girl from Pakistan.How she was an inspiration for lots of women out there"
    },
    {
      id: 3,
      title: "Bill Gates",
      rating: "4.1",
      desc: "Life of the tech gaint and how he became the pioneer in industry"
    },
    {
      id: 4,
      title: "A Beautiful Mind",
      rating: "5.1",
      desc:
        "The one and only SRINIVASA RAMANUJAN mathematician the world never saw before."
    }
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
              <h3>{book.title}</h3>
              <p>Details: {book.desc}</p>
              <div className="rating">Rating: {book.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
