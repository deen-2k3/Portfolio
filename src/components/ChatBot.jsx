import React, { useEffect, useRef, useState } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import skills from "./data/skills.json";
import experience from "./data/experience.json";
import project from "./data/project.json";
import services from "./data/services.json";

const EMAIL = "deenbandhusingh335@gmail.com";

function buildReply(rawInput) {
  const input = rawInput.toLowerCase();

  if (/\b(hi|hello|hey|yo)\b/.test(input)) {
    return "Hey! I'm Deen's portfolio bot. Ask me about his skills, experience, services, projects, or how to get in touch.";
  }

  if (/skill|tech|stack|tool|know/.test(input)) {
    const list = skills.map((s) => s.title).join(", ");
    return `Deen works with: ${list}.`;
  }

  if (/experience|work(ed)?\s|job|role|company/.test(input)) {
    const e = experience[0];
    return `${e.role} at ${e.organisation} (${e.startDate} – ${e.endDate}, ${e.location}). ${e.experiences.join(" ")}`;
  }

  if (/module/.test(input)) {
    const bc = services.find((s) => s.modules);
    if (bc) {
      return `Deen supports these Business Central modules: ${bc.modules.join(", ")}.`;
    }
  }

  if (/service|offer|hire|freelance/.test(input)) {
    const list = services
      .map((s) => `• ${s.title} — ${s.description}`)
      .join("\n");
    return `Here's what Deen offers:\n${list}`;
  }

  if (/project|portfolio|built|voyager/.test(input)) {
    const p = project[0];
    return `${p.title}: ${p.description} Check it out at ${p.demo}`;
  }

  if (/resume|cv/.test(input)) {
    return "You can download Deen's resume using the \"Resume\" button in the hero section at the top of the page.";
  }

  if (/contact|email|reach|talk|hire you|get in touch/.test(input)) {
    return `You can reach Deen directly at ${EMAIL}, or use the "Contact" / "Let's Talk" buttons on the page.`;
  }

  if (/feedback|review|rate/.test(input)) {
    return "You can leave feedback on the dedicated Feedback page — there's a floating \"Feedback\" button in the bottom-right corner.";
  }

  if (/thank/.test(input)) {
    return "You're welcome! Anything else you'd like to know?";
  }

  return `I'm a simple FAQ bot, so I might have missed that. Try asking about skills, experience, services, projects, or contact — or email Deen directly at ${EMAIL}.`;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! I'm a quick FAQ bot for Deen's portfolio. Ask me about his skills, experience, services, projects, or how to get in touch.",
    },
  ]);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, open]);

  const send = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const reply = buildReply(trimmed);
    setMessages((prev) => [
      ...prev,
      { from: "user", text: trimmed },
      { from: "bot", text: reply },
    ]);
    setInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send(input);
  };

  return (
    <>
      {open && (
        <div className="chatbot-panel">
          <div className="chatbot-header">
            <span>Ask about Deen</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <FaTimes />
            </button>
          </div>

          <div className="chatbot-body" ref={bodyRef}>
            {messages.map((m, i) => (
              <div key={i} className={`chatbot-msg ${m.from}`}>
                {m.text.split("\n").map((line, j) => (
                  <span key={j}>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
            ))}
          </div>

          <form className="chatbot-input-row" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" aria-label="Send">
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className="chatbot-fab"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open chat"
      >
        {open ? <FaTimes /> : <FaRobot />}
      </button>
    </>
  );
}
