import React from "react";
import { FaCommentDots } from "react-icons/fa";

export default function FeedbackFab() {
  return (
    <a href="#feedback" className="feedback-fab" aria-label="Give feedback">
      <FaCommentDots />
      <span>Feedback</span>
    </a>
  );
}
