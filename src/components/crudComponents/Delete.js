const Delete = ({
  inputChangeHandler,
  setters,
  title,
  resetBooks,
  setResetBooks,
  deleteBookByTitle,
  deleteAllBooks,
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
      <form onSubmit={(e) => deleteAllBooks(e, resetBooks, setResetBooks)}>
        <button type="submit">Delete All</button>
      </form>
    </div>
  );
};

export default Delete;
