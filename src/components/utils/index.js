export const getAllBooks = async (e, resetBooks, setResetBooks) => {
  e.preventDefault();
  await setResetBooks(!resetBooks);
};

export const addBook = async (
  e,
  title,
  author,
  genre,
  resetBooks,
  setResetBooks
) => {
  e.preventDefault();
  try {
    const body = JSON.stringify({
      title: title,
      author: author,
      genre: genre,
    });

    await fetch(`http://localhost:5001/books`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: body,
    });

    await setResetBooks(!resetBooks);
    e.target.reset();
  } catch (error) {
    console.log(error);
  }
};

export const getOneBook = async (e, title, setBooks) => {
  e.preventDefault();
  try {
    const response = await fetch(`http://localhost:5001/books/${title}`);
    const data = await response.json();
    setBooks([data.book]);
  } catch (error) {
    console.log(error);
  }
};

export const updateAuthor = async (
  e,
  title,
  newAuthor,
  resetBooks,
  setResetBooks
) => {
  e.preventDefault();

  try {
    const body = JSON.stringify({
      title: title,
      newAuthor: newAuthor,
    });

    await fetch(`http://localhost:5001/books`, {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: body,
    });

    await setResetBooks(!resetBooks);
    e.target.reset();
  } catch (error) {
    console.log(error);
  }
};

export const deleteBookByTitle = async (
  e,
  title,
  resetBooks,
  setResetBooks
) => {
  e.preventDefault();
  try {
    const body = JSON.stringify({
      title: title,
    });

    await fetch(`http://localhost:5001/books`, {
      method: "DELETE",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: body,
    });

    await setResetBooks(!resetBooks);
    e.target.reset();
  } catch (error) {
    console.log(error);
  }
};

export const deleteAllBooks = async (e, resetBooks, setResetBooks) => {
  e.preventDefault();
  try {
    await fetch(`http://localhost:5001/books/all`, {
      method: "DELETE",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    });
    setResetBooks(!resetBooks);
  } catch (error) {
    console.log(error);
  }
};
