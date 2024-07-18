import { useEffect, useState } from "react";
import { Form, useLoaderData, useNavigate } from "react-router-dom";
import CommentBox from "./CommentBox";

function FormComment() {
  const projects = useLoaderData();
  const userId = 1;

  const [commentText, setCommentText] = useState(""); 
  const [commentBox, setCommentBox] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/comments`
      );
      if (response.ok) {
        const data = await response.json();
        setCommentBox(data);
      } else {
        console.error("Failed to fetch comments");
      }
    };
    fetchComments();
  }, []);

  const handleDelete = async (commentId) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/comments/${commentId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      setCommentBox(commentBox.filter((comment) => comment.id !== commentId));
    } else {
      console.error("Failed to delete comment");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/projects/${projects.id}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: commentText, userId }), 
      }
    );
    if (response.ok) {
      setCommentText(""); 
      navigate(0);
    } else {
      console.error("Failed to post comment");
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      action=""
      className="flex flex-col justify-start my-5 mx-2"
    >
      <CommentBox commentBox={commentBox} handleDelete={handleDelete} />

      <label htmlFor="comment">Commentaire</label>
      <textarea
        type="text"
        id="comment"
        name="comment"
        placeholder="Laissez votre commentaire ici..."
        className="w-full h-40 rounded-md pl-2 mb-5 pt-2"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)} 
      />

      <button
        type="submit"
        className="bg-green-light-color shadow-buttonShad w-60 h-12 rounded-md font-semibold"
      >
        Valider
      </button>
    </Form>
  );
}

export default FormComment;
