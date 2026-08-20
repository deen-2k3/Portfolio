import React from "react";
import { Link } from "react-router-dom";
import { FaCommentDots } from "react-icons/fa";

export default function FeedbackFab() {
  return (
    <Link to="/feedback" className="feedback-fab" aria-label="Give feedback">
      <FaCommentDots />
      <span>Feedback</span>
    </Link>
  );
}
