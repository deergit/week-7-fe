import React from "react";
import "./CrudContainer.css";
import { useState } from "react";
import {
  addBook,
  updateAuthor,
  deleteBookByTitle,
  getAllBooks,
} from "../utils";

const CrudContainer = ({ books, setBooks, setResetBooks, resetBooks }) => {
  const [option, setOption] = useState("get");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const setters = {
    setTitle,
    setAuthor,
    setGenre,
  };

  const setCrudOption = (e) => {
    e.preventDefault();
    setOption(e.target.value);
  };

  const inputChangeHandler = (e, setter, states) => {
    setter(e.target.value);
  };

  return (
    <div class="crud-container">
      <h2>Crud Operations</h2>
      <div>
        <button onClick={(e) => setCrudOption(e)} value={"get"}>
          GET
        </button>
        <button onClick={(e) => setCrudOption(e)} value={"post"}>
          POST
        </button>
        <button onClick={(e) => setCrudOption(e)} value={"put"}>
          PUT
        </button>
        <button onClick={(e) => setCrudOption(e)} value={"delete"}>
          DELETE
        </button>
      </div>
      {option === "get" ? (
        <Get
          getAllBooks={getAllBooks}
          resetBooks={resetBooks}
          setResetBooks={setResetBooks}
        />
      ) : option === "post" ? (
        <Post
          inputChangeHandler={inputChangeHandler}
          setters={setters}
          addBook={addBook}
          title={title}
          author={author}
          genre={genre}
          books={books}
          setBooks={setBooks}
          resetBooks={resetBooks}
          setResetBooks={setResetBooks}
        />
      ) : option === "put" ? (
        <Put
          inputChangeHandler={inputChangeHandler}
          setters={setters}
          updateAuthor={updateAuthor}
          title={title}
          setBooks={setBooks}
          resetBooks={resetBooks}
          setResetBooks={setResetBooks}
        />
      ) : option === "delete" ? (
        <Delete
          inputChangeHandler={inputChangeHandler}
          setters={setters}
          deleteBookByTitle={deleteBookByTitle}
          title={title}
          setBooks={setBooks}
          resetBooks={resetBooks}
          setResetBooks={setResetBooks}
        />
      ) : null}
    </div>
  );
};

const Get = ({ getAllBooks, resetBooks, setResetBooks }) => {
  return (
    <div>
      <button onClick={(e) => getAllBooks(e, resetBooks, setResetBooks)}>
        Get All Books
      </button>
    </div>
  );
};

const Post = ({
  inputChangeHandler,
  setters,
  addBook,
  title,
  author,
  genre,
  books,
  setBooks,
  resetBooks,
  setResetBooks,
}) => {
  return (
    <div>
      <form
        onSubmit={(e) =>
          addBook(
            e,
            title,
            author,
            genre,
            books,
            setBooks,
            resetBooks,
            setResetBooks,
            setters
          )
        }
      >
        <input
          placeholder="title"
          onChange={(e) => inputChangeHandler(e, setters.setTitle)}
        />
        <input
          placeholder="author"
          onChange={(e) => inputChangeHandler(e, setters.setAuthor)}
        />
        <input
          placeholder="genre"
          onChange={(e) => inputChangeHandler(e, setters.setGenre)}
        />
        <button type="submit">Post to DB</button>
      </form>
    </div>
  );
};

const Put = ({
  inputChangeHandler,
  setters,
  title,
  setBooks,
  resetBooks,
  setResetBooks,
}) => {
  const [newAuthor, setNewAuthor] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) =>
          updateAuthor(e, title, newAuthor, resetBooks, setResetBooks)
        }
      >
        <input
          placeholder="title"
          onChange={(e) => inputChangeHandler(e, setters.setTitle)}
        />
        <input
          placeholder="new author"
          onChange={(e) => inputChangeHandler(e, setNewAuthor)}
        />
        <button type="submit">Update Author</button>
      </form>
    </div>
  );
};

const Delete = ({
  e,
  inputChangeHandler,
  setters,
  title,
  resetBooks,
  setResetBooks,
}) => {
  return (
    <div>
      <form
        onSubmit={(e) => deleteBookByTitle(e, title, resetBooks, setResetBooks)}
      >
        <input
          placeholder="title"
          onChange={(e) => inputChangeHandler(e, setters.setTitle)}
        />
        <button type="submit">Delete Book</button>
      </form>
    </div>
  );
};

export default CrudContainer;
