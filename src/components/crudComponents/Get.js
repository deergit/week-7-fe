import { getOneBook } from "../utils";

const Get = ({
  getAllBooks,
  resetBooks,
  setResetBooks,
  setBooks,
  title,
  setTitle,
}) => {
  // const [title, setTitle] = useState("");

  const changeHandler = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <form onSubmit={(e) => getOneBook(e, title, setBooks)}>
        <input placeholder="title" onChange={changeHandler} />
        <button type="submit">Get One Book</button>
      </form>
      <button onClick={(e) => getAllBooks(e, resetBooks, setResetBooks)}>
        Get All Books
      </button>
    </div>
  );
};

export default Get;
