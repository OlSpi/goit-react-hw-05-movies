import PropTypes from 'prop-types';

const ReviewItem = ({ reviews }) => {
  return (
    <>
      {reviews.map(review => (
        <li key={review.id}>
          <p>
            Author:<span>{review.author}</span>
          </p>
          <p>{review.content}</p>
        </li>
      ))}
    </>
  );
};

export default ReviewItem;

ReviewItem.propTypes = {
  reviews: PropTypes.array,
};
