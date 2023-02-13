export const getAllBooks = async (e, resetBooks, setResetBooks) => {
  e.preventDefault();
  // const response = await fetch("http://localhost:5001/books/getallbooks");
  // const data = await response.json();
  // console.log("data in index.js getallbooks: ", data);

  //   console.log("setBooks: ", setBooks);
  console.log("getallbooks!!!");
  await setResetBooks(!resetBooks);
};

export const addBook = async (
  e,
  title,
  author,
  genre,
  books,
  setBooks,
  resetBooks,
  setResetBooks,
  setters
) => {
  e.preventDefault();
  try {
  } catch (error) {}
  const body = JSON.stringify({
    title: title,
    author: author,
    genre: genre,
  });

  const response = await fetch("http://localhost:5001/books/addbook", {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: body,
  });

  const data = await response.json();
  console.log(response);
  console.log(data);
  // await getAllBooks(books, setBooks);
  await setResetBooks(!resetBooks);
  // await setters.setTitle("");
  // await setters.setAuthor("");
  // await setters.setGenre("");
  e.target.reset();
};

export const updateAuthor = async (
  e,
  title,
  newAuthor,
  resetBooks,
  setResetBooks
) => {
  e.preventDefault();
  console.log("reset books updateAuthor: ", resetBooks);
  console.log("title, newautor: ", title, newAuthor);
  const body = JSON.stringify({
    title: title,
    newAuthor: newAuthor,
  });

  const response = await fetch("http://localhost:5001/books/updatebookauthor", {
    method: "PUT",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: body,
  });

  const data = await response.json();
  console.log(response);
  console.log(data);
  // await getAllBooks(setBooks);
  await setResetBooks(!resetBooks);
  e.target.reset();
};

export const deleteBookByTitle = async (
  e,
  title,
  resetBooks,
  setResetBooks
) => {
  e.preventDefault();
  console.log("!!!!!deleteBookByTitle");
  const body = JSON.stringify({
    title: title,
  });

  const response = await fetch("http://localhost:5001/books/deletebook", {
    method: "DELETE",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: body,
  });

  const data = await response.json();
  console.log(response);
  console.log(data);
  // await getAllBooks(setBooks);
  await setResetBooks(!resetBooks);
  e.target.reset();
};
