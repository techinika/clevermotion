"use client";

import { FileText, FileVideo, Download } from "lucide-react";

interface Tool {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

const tools: Tool[] = [
  {
    icon: FileText,
    title: "Impact Story Audit",
    desc: "Score your current story for clarity, proof, emotion, and conversion readiness.",
  },
  {
    icon: FileVideo,
    title: "Storytelling Templates",
    desc: "Reusable prompts for campaign stories, beneficiary stories, and partner updates.",
  },
  {
    icon: FileVideo,
    title: "Video Brief Template",
    desc: "A structured brief to align objectives, audience, scenes, interviews, and deliverables.",
  },
];

export const FreeTools = () => {
  return (
    <section id="tools">
      <div className="tools-grid">
        <div>
          <div className="label">Free Tools</div>
          <h2 className="tools-title">Free resources to sharpen your story</h2>
          <p className="tools-desc">
            Use these before investing in production. Clarify your message, know
            your audience, and come to the brief ready.
          </p>
        </div>
        <div className="tools-list">
          {tools.map((t) => (
            <div key={t.title} className="tool-item">
              <div className="tool-item-left">
                <div className="tool-icon">
                  <t.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4>{t.title}</h4>
                  <p>{t.desc}</p>
                </div>
              </div>
              <Download className="tool-dl w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};