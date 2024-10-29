import "./rating.css";

const Rating = ({ rating }) => {
    return (
    <div className="rating">
      {Array.from({ length: 5 }, (_, i) => (
        <i
          className={`fa-solid fa-star ${i < rating ? 'primary' : 'secondary'}`}
          key={i}
        />
      ))}
    </div>
  );
 };
    

export default Rating
