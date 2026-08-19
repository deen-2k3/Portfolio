import React, { useState } from "react";

// Get a free access key at https://web3forms.com (enter your email, no
// account/password needed — the key arrives instantly and just tells
// Web3Forms which inbox to relay submissions to).
const WEB3FORMS_ACCESS_KEY = "PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE";

const initialForm = { name: "", email: "", message: "" };

export default function Feedback() {
  const [form, setForm] = useState(initialForm);
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
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="container feedback" id="feedback">
      <div className="feedback-card" data-aos="fade-up" data-aos-duration="800">
        <span className="section-label">Feedback</span>
        <h2 className="section-title">Worked with me? Let me know</h2>
        <p className="feedback-intro">
          Your message goes straight to my inbox — I read every one.
        </p>

        <form className="feedback-form" onSubmit={handleSubmit}>
          <div className="feedback-row">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Share your feedback..."
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="pill-btn" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Feedback"}
          </button>

          {status === "sent" && (
            <p className="feedback-status success">Thanks! Your feedback was sent.</p>
          )}
          {status === "error" && (
            <p className="feedback-status error">
              Couldn't send right now — email me directly instead.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
