import PropTypes from 'prop-types';

function CommentBox({ commentBox, handleDelete }) {
  return (
    <>
      {commentBox.map((comment) => (
        <article key={comment.id} className="relative mb-5">
          <button
            onClick={() => handleDelete(comment.id)}
            type="button"
            className="absolute top-2 right-2 bg-inherit text-black rounded-md px-2 py-1 text-bold w-8 h-8"
          >
            X
          </button>
          <p className="bg-primary-bg-color h-28 w-full rounded-md p-3">
            {comment.description}
          </p>
        </article>
      ))}
    </>
  );
}

CommentBox.propTypes = {
  commentBox: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default CommentBox;
