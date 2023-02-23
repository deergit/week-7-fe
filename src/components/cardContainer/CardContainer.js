import Card from "../card/Card";
import "./CardContainer.css";

const CardContainer = ({ books }) => {
  return (
    <div class="card-container">
      {books.map((book) => (
        <Card book={book} key={book._id} />
      ))}
    </div>
  );
};

export default CardContainer;
