import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

// Get a free access key at https://web3forms.com (enter your email, no
// account/password needed — the key arrives instantly and just tells
// Web3Forms which inbox to relay submissions to).
const WEB3FORMS_ACCESS_KEY = "PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE";

const initialForm = { name: "", email: "", message: "" };

export default function FeedbackPage() {
  const [form, setForm] = useState(initialForm);
  const [rating, setRating] = useState(0);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (WEB3FORMS_ACCESS_KEY.startsWith("PASTE_")) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New feedback from your portfolio",
          from_name: form.name,
          rating: rating || "Not rated",
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setForm(initialForm);
        setRating(0);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="container feedback-page">
      <Link to="/" className="back-link">← Back to home</Link>

      <div className="feedback-card" data-aos="fade-up" data-aos-duration="800">
        <span className="script">We'd love to hear from you</span>
        <h1 className="section-title">Share Your Feedback</h1>
        <p className="feedback-intro">
          Worked with me on a project? Your feedback helps me improve — and
          your message goes straight to my inbox.
        </p>

        <form className="feedback-form" onSubmit={handleSubmit}>
          <div className="feedback-row">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="rating-field">
            <span>Your rating</span>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  type="button"
                  key={n}
                  className={n <= rating ? "star filled" : "star"}
                  onClick={() => setRating(n)}
                  aria-label={`Rate ${n} star${n > 1 ? "s" : ""}`}
                >
                  <FaStar />
                </button>
              ))}
            </div>
          </div>

          <textarea
            name="message"
            placeholder="Your feedback"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="pill-btn" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Submit Feedback"}
          </button>

          {status === "sent" && (
            <p className="feedback-status success">Thanks! Your feedback was sent.</p>
          )}
          {status === "error" && (
            <p className="feedback-status error">
              Couldn't send right now — email me directly at{" "}
              <a href="mailto:deenbandhusingh335@gmail.com">deenbandhusingh335@gmail.com</a>.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
