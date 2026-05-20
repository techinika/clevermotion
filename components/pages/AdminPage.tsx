"use client";

"use client";

import { useState, useRef, useCallback, ReactNode } from "react";
import Link from "next/link";
import { FontLoader } from "../parts/Admin/FontLoader";
import { Ic, STATUS, CAT_COLORS, FILE_STYLE } from "../parts/Admin/Icons";
import {
  INITIAL_CUSTOMERS,
  INITIAL_PROJECTS,
  genCode,
  sleep,
  copyText,
} from "../parts/Admin/MockData";

type View =
  | "dashboard"
  | "customers"
  | "projects"
  | "deliverables"
  | "activity";

interface Customer {
  id: string;
  name: string;
  contact: string;
  email: string;
  phone: string;
  org: string;
  status: string;
  joined: string;
  projects: string[];
}
interface ProjectFile {
  id: string;
  name: string;
  type: string;
  size: string;
  duration: string | null;
  uploaded: string;
}
interface AccessLog {
  event: string;
  at: string;
  by: string;
  icon: string;
}
interface Project {
  id: string;
  customerId: string;
  title: string;
  subtitle: string;
  category: string;
  status: string;
  code: string;
  created: string;
  delivered: string | null;
  expires: string | null;
  gradient: string;
  note: string;
  accessLog: AccessLog[];
  files: ProjectFile[];
}

function StatCard({
  label,
  value,
  sub,
  color = "#E50914",
  delay = "",
}: {
  label: string;
  value: string | number;
  sub?: string;
  color?: string | number;
  delay?: string;
}) {
  return (
    <div
      className={`stat-card anim-fadeup ${delay} rounded-xl p-5`}
      style={{
        background: "#111827",
        border: "1px solid rgba(255,255,255,.07)",
      }}
    >
      <p
        className="font-mono-cm text-[.58rem] tracking-[.18em] uppercase mb-3"
        style={{ color: "rgba(229,9,20,.6)" }}
      >
        {label}
      </p>
      <p
        className="font-display text-3xl font-bold"
        style={{ color: color as string }}
      >
        {value}
      </p>
      {sub && (
        <p
          className="font-body text-xs mt-1.5"
          style={{ color: "rgba(245,240,235,.35)" }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

function Modal({
  title,
  onClose,
  children,
  wide,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <div
      className="modal-overlay anim-fadein"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className={`modal-box anim-slideup ${wide ? "max-w-2xl" : ""}`}>
        <div
          className="flex items-center justify-between px-6 py-4 border-b"
          style={{ borderColor: "rgba(255,255,255,.07)" }}
        >
          <p className="font-display text-lg font-bold text-white">{title}</p>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
            style={{ color: "rgba(245,240,235,.4)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f0eb")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(245,240,235,.4)")
            }
          >
            <Ic.Close />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

function Toast({ msg, onDone }: { msg: string; onDone: () => void }) {
  return (
    <div
      className="anim-slidein fixed bottom-6 right-6 z-[300] flex items-center gap-3 px-4 py-3 rounded-xl font-body text-sm font-medium text-white"
      style={{
        background: "#1a2a1a",
        border: "1px solid rgba(52,211,153,.3)",
        minWidth: 220,
      }}
    >
      <span style={{ color: "#34d399" }}>
        <Ic.Check />
      </span>
      {msg}
    </div>
  );
}

function DashboardView({
  customers,
  projects,
}: {
  customers: Customer[];
  projects: Project[];
}) {
  const delivered = projects.filter((p) => p.status === "delivered").length;
  const ready = projects.filter((p) => p.status === "ready").length;
  const inProgress = projects.filter((p) => p.status === "in_progress").length;
  const totalAccess = projects.reduce(
    (a, p) => a + p.accessLog.filter((l) => l.icon === "login").length,
    0,
  );

  const recentActivity = projects
    .flatMap((p) =>
      p.accessLog.map((l) => ({
        ...l,
        projectTitle: p.title,
        projectId: p.id,
      })),
    )
    .slice(-8)
    .reverse();

  return (
    <div>
      <div className="mb-8">
        <p
          className="font-mono-cm text-[.6rem] tracking-[.2em] uppercase mb-1"
          style={{ color: "rgba(229,9,20,.7)" }}
        >
          Overview
        </p>
        <h2 className="font-display text-3xl font-black text-white">
          Dashboard
        </h2>
      </div>

      <div
        className="grid grid-cols-2 gap-4 mb-8"
        style={{ gridTemplateColumns: "repeat(4,1fr)" }}
      >
        <StatCard
          label="Total Customers"
          value={customers.length}
          sub={`${customers.filter((c) => c.status === "active").length} active`}
          delay="d1"
        />
        <StatCard
          label="Projects"
          value={projects.length}
          sub={`${inProgress} in progress`}
          delay="d2"
        />
        <StatCard
          label="Delivered"
          value={delivered}
          sub={`${ready} ready to send`}
          color="#34d399"
          delay="d3"
        />
        <StatCard
          label="Client Accesses"
          value={totalAccess}
          sub="total portal logins"
          color="#818cf8"
          delay="d4"
        />
      </div>

      <div
        className="grid gap-6 mb-6"
        style={{ gridTemplateColumns: "1.4fr 1fr" }}
      >
        <div
          className="rounded-xl p-5 anim-fadeup d3"
          style={{
            background: "#111827",
            border: "1px solid rgba(255,255,255,.07)",
          }}
        >
          <p
            className="font-mono-cm text-[.6rem] tracking-[.18em] uppercase mb-5"
            style={{ color: "rgba(229,9,20,.6)" }}
          >
            Project Pipeline
          </p>
          <div className="flex flex-col gap-4">
            {[
              ["In Progress", inProgress, projects.length, "#E50914"],
              ["Ready", ready, projects.length, "#38bdf8"],
              ["Delivered", delivered, projects.length, "#34d399"],
            ].map(([l, v, t, c]) => (
              <div key={l}>
                <div className="flex justify-between mb-1.5">
                  <span
                    className="font-body text-sm"
                    style={{ color: "rgba(245,240,235,.6)" }}
                  >
                    {l}
                  </span>
                  <span
                    className="font-mono-cm text-xs"
                    style={{ color: c as string }}
                  >
                    {v}
                  </span>
                </div>
                <div
                  className="h-1.5 rounded-full"
                  style={{ background: "rgba(255,255,255,.06)" }}
                >
                  <div
                    className="h-full rounded-full progress-bar"
                    style={{
                      width: `${t ? Math.round((Number(v) / Number(t)) * 100) : 0}%`,
                      background: c as string,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="rounded-xl p-5 anim-fadeup d4"
          style={{
            background: "#111827",
            border: "1px solid rgba(255,255,255,.07)",
          }}
        >
          <p
            className="font-mono-cm text-[.6rem] tracking-[.18em] uppercase mb-4"
            style={{ color: "rgba(229,9,20,.6)" }}
          >
            Recent Customers
          </p>
          <div className="flex flex-col gap-3">
            {customers
              .slice(-4)
              .reverse()
              .map((c) => (
                <div key={c.id} className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-display text-xs font-bold"
                    style={{
                      background: "rgba(229,9,20,.12)",
                      color: "#E50914",
                    }}
                  >
                    {c.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-sm text-white truncate">
                      {c.name}
                    </p>
                    <p
                      className="font-mono-cm text-[.58rem] tracking-wide"
                      style={{ color: "rgba(245,240,235,.3)" }}
                    >
                      {c.joined}
                    </p>
                  </div>
                  <span
                    className={`badge ${c.status === "active" ? "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" : "text-amber-400 bg-amber-400/10 border-amber-400/20"}`}
                  >
                    {c.status}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div
        className="rounded-xl p-5 anim-fadeup d5"
        style={{
          background: "#111827",
          border: "1px solid rgba(255,255,255,.07)",
        }}
      >
        <p
          className="font-mono-cm text-[.6rem] tracking-[.18em] uppercase mb-5"
          style={{ color: "rgba(229,9,20,.6)" }}
        >
          Recent Activity
        </p>
        <div className="activity-line flex flex-col gap-4">
          {recentActivity.map((a, i) => (
            <div key={i} className="activity-dot relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-body text-sm text-white">{a.event}</p>
                  <p
                    className="font-body text-xs mt-0.5"
                    style={{ color: "rgba(245,240,235,.35)" }}
                  >
                    {a.projectTitle}
                  </p>
                </div>
                <p
                  className="font-mono-cm text-[.58rem] tracking-wide flex-shrink-0"
                  style={{ color: "rgba(245,240,235,.28)" }}
                >
                  {a.at}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CustomersView({
  customers,
  projects,
  setCustomers,
  setView,
  setSelectedCustomer,
  toast,
}: {
  customers: Customer[];
  projects: Project[];
  setCustomers: React.Dispatch<React.SetStateAction<Customer[]>>;
  setView: (v: View) => void;
  setSelectedCustomer: (c: Customer | null) => void;
  toast: (m: string) => void;
}) {
  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState<Record<string, string>>({
    name: "",
    contact: "",
    email: "",
    phone: "",
    org: "",
  });
  const [saving, setSaving] = useState(false);

  const filtered = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()),
  );

  const handleAdd = async () => {
    if (!form.name || !form.email) return;
    setSaving(true);
    await sleep(700);
    const newC: Customer = {
      id: `c${Date.now()}`,
      name: form.name || "",
      contact: form.contact || "",
      email: form.email || "",
      phone: form.phone || "",
      org: form.org || "",
      status: "active",
      joined: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      projects: [],
    };
    setCustomers((prev: Customer[]) => [...prev, newC]);
    setSaving(false);
    setShowAdd(false);
    setForm({ name: "", contact: "", email: "", phone: "", org: "" });
    toast("Customer added successfully");
  };

  const handleDelete = (id: string) => {
    setCustomers((prev: Customer[]) => prev.filter((c) => c.id !== id));
    toast("Customer removed");
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <p
            className="font-mono-cm text-[.6rem] tracking-[.2em] uppercase mb-1"
            style={{ color: "rgba(229,9,20,.7)" }}
          >
            Management
          </p>
          <h2 className="font-display text-3xl font-black text-white">
            Customers
          </h2>
        </div>
        <button className="btn-gold" onClick={() => setShowAdd(true)}>
          <Ic.Plus /> Add Customer
        </button>
      </div>

      <div className="relative mb-5">
        <span
          className="absolute left-3.5 top-1/2 -translate-y-1/2"
          style={{ color: "rgba(245,240,235,.3)" }}
        >
          <Ic.Search />
        </span>
        <input
          className="cm-input"
          style={{ paddingLeft: 36 }}
          placeholder="Search by name or email…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div
        className="rounded-xl overflow-hidden"
        style={{ border: "1px solid rgba(255,255,255,.07)" }}
      >
        <table className="w-full" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr
              style={{
                background: "rgba(255,255,255,.03)",
                borderBottom: "1px solid rgba(255,255,255,.07)",
              }}
            >
              {["Customer", "Contact", "Email", "Projects", "Status", ""].map(
                (h) => (
                  <th
                    key={h}
                    className="font-mono-cm text-[.58rem] tracking-[.16em] uppercase text-left px-5 py-3.5"
                    style={{ color: "rgba(245,240,235,.3)" }}
                  >
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {filtered.map((c, i) => {
              const cProjects = projects.filter((p) => p.customerId === c.id);
              return (
                <tr
                  key={c.id}
                  className={`table-row anim-fadeup d${Math.min(i + 1, 6)}`}
                  style={{ borderBottom: "1px solid rgba(255,255,255,.05)" }}
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center font-display text-sm font-bold flex-shrink-0"
                        style={{
                          background: "rgba(229,9,20,.12)",
                          color: "#E50914",
                        }}
                      >
                        {c.name[0]}
                      </div>
                      <div>
                        <p className="font-body text-sm font-semibold text-white">
                          {c.name}
                        </p>
                        <p
                          className="font-mono-cm text-[.58rem] tracking-wide mt-0.5"
                          style={{ color: "rgba(245,240,235,.3)" }}
                        >
                          {c.org}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    className="px-5 py-4 font-body text-sm"
                    style={{ color: "rgba(245,240,235,.6)" }}
                  >
                    {c.contact}
                  </td>
                  <td
                    className="px-5 py-4 font-mono-cm text-[.7rem] tracking-wide"
                    style={{ color: "rgba(245,240,235,.5)" }}
                  >
                    {c.email}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className="font-display text-base font-bold"
                      style={{ color: "#E50914" }}
                    >
                      {cProjects.length}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`badge ${c.status === "active" ? "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" : "text-amber-400 bg-amber-400/10 border-amber-400/20"}`}
                    >
                      {c.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2 justify-end">
                      <button
                        className="btn-ghost"
                        style={{ padding: "6px 10px" }}
                        onClick={() => {
                          setSelectedCustomer(c);
                          setView("projects");
                        }}
                      >
                        <Ic.Eye /> View
                      </button>
                      <button
                        className="btn-danger"
                        style={{ padding: "6px 10px" }}
                        onClick={() => handleDelete(c.id)}
                      >
                        <Ic.Trash />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div
            className="text-center py-12 font-body text-sm"
            style={{ color: "rgba(245,240,235,.25)" }}
          >
            No customers found
          </div>
        )}
      </div>

      {showAdd && (
        <Modal title="Add Customer" onClose={() => setShowAdd(false)}>
          <div className="flex flex-col gap-4">
            {[
              ["Organization Name *", "name", "TUBURA Rwanda", "text"],
              ["Primary Contact", "contact", "Sarah Mukamana", "text"],
              ["Email Address *", "email", "client@organization.com", "email"],
              ["Phone / WhatsApp", "phone", "+250 788 000 000", "tel"],
              ["Sector / Industry", "org", "NGO / Agriculture", "text"],
            ].map(([label, key, ph, type]) => (
              <div key={key}>
                <label
                  className="font-mono-cm text-[.58rem] tracking-[.16em] uppercase block mb-1.5"
                  style={{ color: "rgba(229,9,20,.65)" }}
                >
                  {label}
                </label>
                <input
                  type={type}
                  className="cm-input"
                  placeholder={ph}
                  value={form[key]}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, [key]: e.target.value }))
                  }
                />
              </div>
            ))}
            <div className="flex gap-3 mt-2">
              <button
                className="btn-ghost flex-1"
                onClick={() => setShowAdd(false)}
              >
                Cancel
              </button>
              <button
                className="btn-gold flex-1"
                onClick={handleAdd}
                disabled={saving}
              >
                {saving ? (
                  <>
                    <Ic.Spinner /> Saving…
                  </>
                ) : (
                  <>
                    <Ic.Check /> Add Customer
                  </>
                )}
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

function ProjectsView({
  customers,
  projects,
  setProjects,
  selectedCustomer,
  setSelectedCustomer,
  setSelectedProject,
  setView,
  toast,
}: {
  customers: Customer[];
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  selectedCustomer: Customer | null;
  setSelectedCustomer: (c: Customer | null) => void;
  setSelectedProject: (p: Project | null) => void;
  setView: (v: View) => void;
  toast: (m: string) => void;
}) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState<Record<string, string>>({
    title: "",
    subtitle: "",
    category: "Documentary",
    customerId: selectedCustomer?.id || "",
    note: "",
  });
  const [saving, setSaving] = useState(false);

  const list = projects
    .filter((p) => !selectedCustomer || p.customerId === selectedCustomer.id)
    .filter((p) => filter === "all" || p.status === filter)
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));

  const handleAdd = async () => {
    if (!form.title || !form.customerId) return;
    setSaving(true);
    await sleep(700);
    const newP: Project = {
      id: `p${Date.now()}`,
      customerId: form.customerId || "",
      title: form.title || "",
      subtitle: form.subtitle || "",
      category: form.category || "Documentary",
      status: "in_progress",
      code: genCode(),
      created: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      delivered: null,
      expires: null,
      note: form.note || "",
      gradient: "linear-gradient(135deg,#1a1a2a,#252535)",
      accessLog: [
        {
          event: "Project created",
          at: new Date().toLocaleString(),
          by: "Admin",
          icon: "delivered",
        },
      ],
      files: [],
    };
    setProjects((prev) => [...prev, newP]);
    setSaving(false);
    setShowAdd(false);
    setForm({
      title: "",
      subtitle: "",
      category: "Documentary",
      customerId: selectedCustomer?.id || "",
      note: "",
    });
    toast("Project created");
  };

  const handleStatusChange = (id: string, status: string) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              status,
              delivered:
                status === "delivered"
                  ? new Date().toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  : p.delivered,
              expires:
                status === "delivered"
                  ? (() => {
                      const d = new Date();
                      d.setDate(d.getDate() + 30);
                      return d.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      });
                    })()
                  : p.expires,
              accessLog: [
                ...p.accessLog,
                {
                  event: `Status changed to ${(STATUS as any)[status]?.label}`,
                  at: new Date().toLocaleString(),
                  by: "Admin",
                  icon: "delivered",
                },
              ],
            }
          : p,
      ),
    );
    toast("Status updated");
  };

  const handleDelete = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
    toast("Project deleted");
  };

  const customerName = (id: string) =>
    customers.find((c) => c.id === id)?.name ?? "Unknown";

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          {selectedCustomer && (
            <button
              className="flex items-center gap-1.5 font-mono-cm text-[.58rem] tracking-[.14em] uppercase mb-2 transition-colors"
              style={{ color: "rgba(245,240,235,.3)" }}
              onClick={() => setSelectedCustomer(null)}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E50914")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(245,240,235,.3)")
              }
            >
              <span>← All Projects</span>
            </button>
          )}
          <p
            className="font-mono-cm text-[.6rem] tracking-[.2em] uppercase mb-1"
            style={{ color: "rgba(229,9,20,.7)" }}
          >
            {selectedCustomer ? selectedCustomer.name : "All Customers"}
          </p>
          <h2 className="font-display text-3xl font-black text-white">
            Projects
          </h2>
        </div>
        <button className="btn-gold" onClick={() => setShowAdd(true)}>
          <Ic.Plus /> New Project
        </button>
      </div>

      <div className="flex items-center gap-3 mb-5 flex-wrap">
        <div className="relative flex-1" style={{ minWidth: 200 }}>
          <span
            className="absolute left-3.5 top-1/2 -translate-y-1/2"
            style={{ color: "rgba(245,240,235,.3)" }}
          >
            <Ic.Search />
          </span>
          <input
            className="cm-input"
            style={{ paddingLeft: 36 }}
            placeholder="Search projects…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {["all", "in_progress", "ready", "delivered"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className="font-mono-cm text-[.6rem] tracking-[.14em] uppercase px-4 py-2.5 rounded-lg border transition-all"
            style={{
              background: filter === f ? "#E50914" : "transparent",
              color: filter === f ? "#080a0f" : "rgba(245,240,235,.4)",
              border: `1px solid ${filter === f ? "#E50914" : "rgba(255,255,255,.09)"}`,
              cursor: "pointer",
            }}
          >
            {f === "all" ? "All" : (STATUS as any)[f]?.label}
          </button>
        ))}
      </div>

      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fill,minmax(340px,1fr))" }}
      >
        {list.map((p, i) => {
          const st = (STATUS as any)[p.status];
          const accessCount = p.accessLog.filter(
            (l) => l.icon === "login",
          ).length;
          return (
            <div
              key={p.id}
              className={`anim-fadeup d${Math.min(i + 1, 6)} rounded-xl overflow-hidden`}
              style={{
                background: "#111827",
                border: "1px solid rgba(255,255,255,.07)",
              }}
            >
              <div className="h-24 relative" style={{ background: p.gradient }}>
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='0.15'/%3E%3C/svg%3E\")",
                  }}
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`badge ${(CAT_COLORS as any)[p.category] ?? ""}`}
                  >
                    {p.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`badge ${st.bg} ${st.color}`}>
                    {st.label}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <p
                  className="font-mono-cm text-[.58rem] tracking-[.14em] uppercase mb-1.5"
                  style={{ color: "rgba(229,9,20,.6)" }}
                >
                  {customerName(p.customerId)}
                </p>
                <h3 className="font-display text-lg font-bold text-white mb-0.5">
                  {p.title}
                </h3>
                <p
                  className="font-body text-xs mb-4"
                  style={{ color: "rgba(245,240,235,.4)" }}
                >
                  {p.subtitle}
                </p>

                <div
                  className="grid grid-cols-3 gap-2 mb-4 py-3 rounded-lg"
                  style={{
                    background: "rgba(255,255,255,.03)",
                    border: "1px solid rgba(255,255,255,.05)",
                  }}
                >
                  {[
                    ["Files", p.files.length],
                    ["Accesses", accessCount],
                    ["Code", p.code],
                  ].map(([l, v]) => (
                    <div key={l} className="text-center">
                      <p
                        className="font-mono-cm text-[.56rem] tracking-[.12em] uppercase mb-0.5"
                        style={{ color: "rgba(245,240,235,.28)" }}
                      >
                        {l}
                      </p>
                      <p
                        className={`font-mono-cm text-[.72rem] font-bold ${l === "Code" ? "text-[#E50914]" : "text-white"}`}
                      >
                        {v}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    className="btn-gold flex-1"
                    style={{ padding: "8px 12px", fontSize: ".78rem" }}
                    onClick={() => {
                      setSelectedProject(p);
                      setView("deliverables");
                    }}
                  >
                    <Ic.Files /> Manage Files
                  </button>
                  <div className="relative group">
                    <select
                      className="cm-select"
                      style={{
                        padding: "8px 28px 8px 10px",
                        fontSize: ".75rem",
                        width: "auto",
                      }}
                      value={p.status}
                      onChange={(e) => handleStatusChange(p.id, e.target.value)}
                    >
                      {Object.entries(STATUS).map(([k, v]) => (
                        <option key={k} value={k}>
                          {v.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    className="btn-danger"
                    style={{ padding: "8px 10px" }}
                    onClick={() => handleDelete(p.id)}
                  >
                    <Ic.Trash />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {list.length === 0 && (
        <div
          className="text-center py-16 font-body text-sm"
          style={{ color: "rgba(245,240,235,.25)" }}
        >
          No projects found
        </div>
      )}

      {showAdd && (
        <Modal title="New Project" onClose={() => setShowAdd(false)}>
          <div className="flex flex-col gap-4">
            <div>
              <label
                className="font-mono-cm text-[.58rem] tracking-[.16em] uppercase block mb-1.5"
                style={{ color: "rgba(229,9,20,.65)" }}
              >
                Customer *
              </label>
              <select
                className="cm-select"
                value={form.customerId}
                onChange={(e) =>
                  setForm((f) => ({ ...f, customerId: e.target.value }))
                }
              >
                <option value="">Select a customer…</option>
                {customers.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            {[
              ["Project Title *", "title", "Seeds of Change", "text"],
              [
                "Subtitle / Description",
                "subtitle",
                "Agricultural Impact Documentary",
                "text",
              ],
            ].map(([label, key, ph, type]) => (
              <div key={key}>
                <label
                  className="font-mono-cm text-[.58rem] tracking-[.16em] uppercase block mb-1.5"
                  style={{ color: "rgba(229,9,20,.65)" }}
                >
                  {label}
                </label>
                <input
                  type={type}
                  className="cm-input"
                  placeholder={ph}
                  value={form[key]}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, [key]: e.target.value }))
                  }
                />
              </div>
            ))}
            <div>
              <label
                className="font-mono-cm text-[.58rem] tracking-[.16em] uppercase block mb-1.5"
                style={{ color: "rgba(229,9,20,.65)" }}
              >
                Category
              </label>
              <select
                className="cm-select"
                value={form.category}
                onChange={(e) =>
                  setForm((f) => ({ ...f, category: e.target.value }))
                }
              >
                {[
                  "Documentary",
                  "Photography",
                  "Campaign",
                  "Brand Film",
                  "Event",
                ].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label
                className="font-mono-cm text-[.58rem] tracking-[.16em] uppercase block mb-1.5"
                style={{ color: "rgba(229,9,20,.65)" }}
              >
                Delivery Note (shown to client)
              </label>
              <textarea
                className="cm-input"
                rows={3}
                placeholder="Thank you for trusting us…"
                value={form.note}
                onChange={(e) =>
                  setForm((f) => ({ ...f, note: e.target.value }))
                }
                style={{ resize: "vertical" }}
              />
            </div>
            <div className="flex gap-3 mt-1">
              <button
                className="btn-ghost flex-1"
                onClick={() => setShowAdd(false)}
              >
                Cancel
              </button>
              <button
                className="btn-gold flex-1"
                onClick={handleAdd}
                disabled={saving}
              >
                {saving ? (
                  <>
                    <Ic.Spinner /> Creating…
                  </>
                ) : (
                  <>
                    <Ic.Check /> Create Project
                  </>
                )}
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

function DeliverablesView({
  projects,
  setProjects,
  customers,
  selectedProject,
  setSelectedProject,
  setView,
  toast,
}: {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  customers: Customer[];
  selectedProject: Project | null;
  setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>;
  setView: (v: View) => void;
  toast: (m: string) => void;
}) {
  const [drag, setDrag] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [copied, setCopied] = useState("");
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [newCode, setNewCode] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const project = selectedProject
    ? projects.find((p) => p.id === selectedProject.id)
    : null;
  const customer = project
    ? customers.find((c) => c.id === project.customerId)
    : null;

  const simulateUpload = async (fileList: FileList) => {
    setUploading(true);
    await sleep(1400);
    const uploaded = Array.from(fileList).map((f) => ({
      id: `f${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      name: f.name,
      type: f.type.startsWith("video")
        ? "video"
        : f.name.endsWith(".pdf")
          ? "doc"
          : "archive",
      size:
        f.size > 1e9
          ? `${(f.size / 1e9).toFixed(1)} GB`
          : `${(f.size / 1e6).toFixed(0)} MB`,
      duration: null,
      uploaded: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    }));
    if (!project) return;
    setProjects((prev) =>
      prev.map((p) =>
        p.id === project.id
          ? {
              ...p,
              files: [...p.files, ...uploaded],
              accessLog: [
                ...p.accessLog,
                {
                  event: `${uploaded.length} file${uploaded.length > 1 ? "s" : ""} uploaded`,
                  at: new Date().toLocaleString(),
                  by: "Admin",
                  icon: "upload",
                },
              ],
            }
          : p,
      ),
    );
    setSelectedProject((prev: Project | null) =>
      prev ? { ...prev, files: [...prev.files, ...uploaded] } : null,
    );
    setUploading(false);
    toast(`${uploaded.length} file${uploaded.length > 1 ? "s" : ""} uploaded`);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDrag(false);
    simulateUpload(e.dataTransfer.files);
  };
  const handleDeleteFile = (fid: string) => {
    if (!project) return;
    setProjects((prev) =>
      prev.map((p) =>
        p.id === project.id
          ? { ...p, files: p.files.filter((f) => f.id !== fid) }
          : p,
      ),
    );
    toast("File removed");
  };

  const copyLink = () => {
    if (!project || !customer) return;
    const url = `${window.location.origin}/deliver?email=${customer.email}&asset=${project.id}`;
    copyText(url);
    setCopied("link");
    setTimeout(() => setCopied(""), 1800);
    toast("Delivery link copied");
  };
  const copyCode = () => {
    if (!project) return;
    copyText(project.code);
    setCopied("code");
    setTimeout(() => setCopied(""), 1800);
    toast("Access code copied");
  };

  const handleRegenCode = () => {
    const c = genCode();
    setNewCode(c);
    setShowCodeModal(true);
  };
  const confirmNewCode = () => {
    if (!project) return;
    setProjects((prev) =>
      prev.map((p) =>
        p.id === project.id
          ? {
              ...p,
              code: newCode,
              accessLog: [
                ...p.accessLog,
                {
                  event: "Access code regenerated",
                  at: new Date().toLocaleString(),
                  by: "Admin",
                  icon: "delivered",
                },
              ],
            }
          : p,
      ),
    );
    setShowCodeModal(false);
    toast("Access code updated");
  };

  if (!project) {
    return (
      <div>
        <div className="mb-8">
          <p
            className="font-mono-cm text-[.6rem] tracking-[.2em] uppercase mb-1"
            style={{ color: "rgba(229,9,20,.7)" }}
          >
            Files
          </p>
          <h2 className="font-display text-3xl font-black text-white">
            Deliverables
          </h2>
        </div>
        <div
          className="rounded-xl p-12 text-center"
          style={{
            background: "#111827",
            border: "1px solid rgba(255,255,255,.07)",
          }}
        >
          <p
            className="font-body text-sm mb-4"
            style={{ color: "rgba(245,240,235,.3)" }}
          >
            Select a project to manage its deliverables
          </p>
          <button className="btn-gold" onClick={() => setView("projects")}>
            <Ic.Projects /> Go to Projects
          </button>
        </div>
      </div>
    );
  }

  const st = (STATUS as any)[project.status];
  const accessCount = project.accessLog.filter(
    (l) => l.icon === "login",
  ).length;
  const downloadCount = project.accessLog.filter(
    (l) => l.icon === "download",
  ).length;

  return (
    <div>
      <button
        className="flex items-center gap-1.5 font-mono-cm text-[.58rem] tracking-[.14em] uppercase mb-4 transition-colors"
        style={{ color: "rgba(245,240,235,.3)" }}
        onClick={() => {
          setSelectedProject(null);
          setView("projects");
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#E50914")}
        onMouseLeave={(e) =>
          (e.currentTarget.style.color = "rgba(245,240,235,.3)")
        }
      >
        <span>← Back to Projects</span>
      </button>

      <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-xl flex-shrink-0"
            style={{ background: project.gradient }}
          />
          <div>
            <p
              className="font-mono-cm text-[.58rem] tracking-[.14em] uppercase mb-1"
              style={{ color: "rgba(229,9,20,.6)" }}
            >
              {customer?.name} · {project.category}
            </p>
            <h2 className="font-display text-2xl font-black text-white">
              {project.title}
            </h2>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <span className={`badge ${st.bg} ${st.color}`}>{st.label}</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 mb-6">
        {[
          ["Files", project.files.length, "text-white"],
          ["Client Accesses", accessCount, "text-violet-400"],
          ["Downloads", downloadCount, "text-sky-400"],
          ["Access Code", project.code, "text-[#E50914]"],
        ].map(([l, v, c]) => (
          <div
            key={l}
            className="rounded-xl p-4"
            style={{
              background: "#111827",
              border: "1px solid rgba(255,255,255,.07)",
            }}
          >
            <p
              className="font-mono-cm text-[.56rem] tracking-[.16em] uppercase mb-2"
              style={{ color: "rgba(245,240,235,.28)" }}
            >
              {l}
            </p>
            <p className={`font-mono-cm text-base font-bold ${c}`}>{v}</p>
          </div>
        ))}
      </div>

      <div
        className="rounded-xl p-4 mb-6 flex items-center justify-between gap-4 flex-wrap"
        style={{
          background: "rgba(229,9,20,.05)",
          border: "1px solid rgba(229,9,20,.15)",
        }}
      >
        <div>
          <p
            className="font-mono-cm text-[.58rem] tracking-[.16em] uppercase mb-0.5"
            style={{ color: "rgba(229,9,20,.65)" }}
          >
            Client Delivery
          </p>
          <p
            className="font-body text-sm"
            style={{ color: "rgba(245,240,235,.5)" }}
          >
            Share the link + code with{" "}
            <strong style={{ color: "#f5f0eb" }}>{customer?.email}</strong>
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button className="btn-ghost" onClick={copyCode}>
            {copied === "code" ? (
              <>
                <Ic.Check /> Copied!
              </>
            ) : (
              <>
                <Ic.Key /> Copy Code ({project.code})
              </>
            )}
          </button>
          <button className="btn-ghost" onClick={copyLink}>
            {copied === "link" ? (
              <>
                <Ic.Check /> Copied!
              </>
            ) : (
              <>
                <Ic.Link /> Copy Delivery Link
              </>
            )}
          </button>
          <button
            className="btn-ghost"
            style={{ color: "#fbbf24", borderColor: "rgba(251,191,36,.2)" }}
            onClick={handleRegenCode}
          >
            <Ic.Key /> Regenerate Code
          </button>
        </div>
      </div>

      <div className="grid gap-6" style={{ gridTemplateColumns: "1.4fr 1fr" }}>
        <div>
          <p
            className="font-mono-cm text-[.6rem] tracking-[.18em] uppercase mb-4"
            style={{ color: "rgba(229,9,20,.7)" }}
          >
            Files · {project.files.length}
          </p>

          <div
            className={`drop-zone mb-4 ${drag ? "drag" : ""}`}
            onDragOver={(e) => {
              e.preventDefault();
              setDrag(true);
            }}
            onDragLeave={() => setDrag(false)}
            onDrop={handleDrop}
            onClick={() => fileRef.current?.click()}
          >
            <input
              ref={fileRef}
              type="file"
              multiple
              className="hidden"
              onChange={(e) => {
                if (e.target.files) simulateUpload(e.target.files);
              }}
            />
            {uploading ? (
              <div className="flex flex-col items-center gap-2">
                <Ic.Spinner />
                <p
                  className="font-body text-sm"
                  style={{ color: "rgba(245,240,235,.45)" }}
                >
                  Uploading files…
                </p>
              </div>
            ) : (
              <>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{
                    background: "rgba(229,9,20,.1)",
                    border: "1px solid rgba(229,9,20,.2)",
                  }}
                >
                  <span style={{ color: "#E50914" }}>
                    <Ic.Upload />
                  </span>
                </div>
                <p className="font-body text-sm font-semibold text-white mb-1">
                  Drop files here or click to upload
                </p>
                <p
                  className="font-mono-cm text-[.58rem] tracking-wide"
                  style={{ color: "rgba(245,240,235,.28)" }}
                >
                  Videos, photos, ZIPs, PDFs — any format
                </p>
              </>
            )}
          </div>

          <div className="flex flex-col gap-2">
            {project.files.map((file, i) => {
              const fs = (FILE_STYLE as any)[file.type] ?? FILE_STYLE.doc;
              const FIcon = fs.Icon;
              return (
                <div
                  key={file.id}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl anim-fadeup`}
                  style={{
                    background: "#111827",
                    border: "1px solid rgba(255,255,255,.06)",
                    animationDelay: `${i * 0.05}s`,
                  }}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center border ${fs.bg}`}
                  >
                    <span className={fs.color}>
                      <FIcon />
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-mono-cm text-[.68rem] tracking-wide text-white truncate">
                      {file.name}
                    </p>
                    <div className="flex gap-2 mt-0.5">
                      <p
                        className="font-mono-cm text-[.56rem] tracking-wide"
                        style={{ color: "rgba(245,240,235,.28)" }}
                      >
                        {file.size}
                      </p>
                      {file.duration && (
                        <>
                          <span style={{ color: "rgba(245,240,235,.15)" }}>
                            ·
                          </span>
                          <p
                            className="font-mono-cm text-[.56rem]"
                            style={{ color: "rgba(245,240,235,.28)" }}
                          >
                            {file.duration}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                  <p
                    className="font-mono-cm text-[.55rem] tracking-wide flex-shrink-0"
                    style={{ color: "rgba(245,240,235,.22)" }}
                  >
                    {file.uploaded}
                  </p>
                  <button
                    className="btn-danger"
                    style={{ padding: "5px 8px" }}
                    onClick={() => handleDeleteFile(file.id)}
                  >
                    <Ic.Trash />
                  </button>
                </div>
              );
            })}
            {project.files.length === 0 && (
              <div
                className="text-center py-8 font-body text-xs"
                style={{ color: "rgba(245,240,235,.2)" }}
              >
                No files uploaded yet
              </div>
            )}
          </div>
        </div>

        <div>
          <p
            className="font-mono-cm text-[.6rem] tracking-[.18em] uppercase mb-4"
            style={{ color: "rgba(229,9,20,.7)" }}
          >
            Access Log · {project.accessLog.length} events
          </p>
          <div className="activity-line flex flex-col gap-5">
            {[...project.accessLog].reverse().map((a, i) => (
              <div
                key={i}
                className={`activity-dot relative anim-fadeup`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 ${
                      a.icon === "login"
                        ? "bg-violet-400/15 text-violet-400"
                        : a.icon === "download"
                          ? "bg-sky-400/15 text-sky-400"
                          : a.icon === "upload"
                            ? "bg-amber-400/15 text-amber-400"
                            : "bg-emerald-400/15 text-emerald-400"
                    }`}
                  >
                    {a.icon === "login" ? (
                      <Ic.LogIn />
                    ) : a.icon === "download" ? (
                      <Ic.Download />
                    ) : a.icon === "upload" ? (
                      <Ic.Upload />
                    ) : (
                      <Ic.Check />
                    )}
                  </div>
                  <div>
                    <p className="font-body text-sm text-white">{a.event}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <p
                        className="font-mono-cm text-[.56rem] tracking-wide"
                        style={{ color: "rgba(245,240,235,.3)" }}
                      >
                        {a.at}
                      </p>
                      <span
                        className="font-mono-cm text-[.54rem] px-1.5 py-0.5 rounded"
                        style={{
                          background: "rgba(255,255,255,.05)",
                          color: "rgba(245,240,235,.3)",
                        }}
                      >
                        {a.by}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showCodeModal && (
        <Modal
          title="Regenerate Access Code"
          onClose={() => setShowCodeModal(false)}
        >
          <div className="text-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{
                background: "rgba(251,191,36,.1)",
                border: "1px solid rgba(251,191,36,.2)",
              }}
            >
              <span style={{ color: "#fbbf24" }}>
                <Ic.Key />
              </span>
            </div>
            <p
              className="font-body text-sm mb-2"
              style={{ color: "rgba(245,240,235,.5)" }}
            >
              The current code{" "}
              <strong style={{ color: "#E50914" }}>{project.code}</strong> will
              be invalidated.
            </p>
            <p
              className="font-body text-sm mb-6"
              style={{ color: "rgba(245,240,235,.5)" }}
            >
              New code:{" "}
              <strong
                style={{
                  color: "#34d399",
                  fontFamily: "'Space Mono',monospace",
                  fontSize: "1.2rem",
                  letterSpacing: ".15em",
                }}
              >
                {newCode}
              </strong>
            </p>
            <div className="flex gap-3">
              <button
                className="btn-ghost flex-1"
                onClick={() => setShowCodeModal(false)}
              >
                Cancel
              </button>
              <button className="btn-gold flex-1" onClick={confirmNewCode}>
                <Ic.Check /> Confirm New Code
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

function ActivityView({
  projects,
  customers,
}: {
  projects: Project[];
  customers: Customer[];
}) {
  const allEvents = projects
    .flatMap((p) =>
      p.accessLog.map((l) => ({
        ...l,
        projectTitle: p.title,
        projectId: p.id,
        customerName:
          customers.find((c) => c.id === p.customerId)?.name ?? "Unknown",
      })),
    )
    .reverse();

  const logins = allEvents.filter((e) => e.icon === "login").length;
  const downloads = allEvents.filter((e) => e.icon === "download").length;

  return (
    <div className="flex-1">
      <div className="mb-8">
        <p
          className="font-mono-cm text-[.6rem] tracking-[.2em] uppercase mb-1"
          style={{ color: "rgba(229,9,20,.7)" }}
        >
          Monitoring
        </p>
        <h2 className="font-display text-3xl font-black text-white">
          Activity Log
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard
          label="Total Events"
          value={allEvents.length}
          sub="all projects"
          delay="d1"
        />
        <StatCard
          label="Client Logins"
          value={logins}
          sub="portal accesses"
          color="#818cf8"
          delay="d2"
        />
        <StatCard
          label="File Downloads"
          value={downloads}
          sub="across all projects"
          color="#38bdf8"
          delay="d3"
        />
      </div>

      <div
        className="rounded-xl overflow-hidden anim-fadeup d4"
        style={{ border: "1px solid rgba(255,255,255,.07)" }}
      >
        <div
          className="px-5 py-4"
          style={{
            background: "rgba(255,255,255,.03)",
            borderBottom: "1px solid rgba(255,255,255,.07)",
          }}
        >
          <p
            className="font-mono-cm text-[.6rem] tracking-[.18em] uppercase"
            style={{ color: "rgba(229,9,20,.6)" }}
          >
            All Events · {allEvents.length}
          </p>
        </div>
        <div
          className="divide-y"
          style={{ borderColor: "rgba(255,255,255,.05)" }}
        >
          {allEvents.map((a, i) => (
            <div
              key={i}
              className="table-row flex! items-center gap-4 px-5 py-4"
            >
              <div
                className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center ${
                  a.icon === "login"
                    ? "bg-violet-400/15 text-violet-400"
                    : a.icon === "download"
                      ? "bg-sky-400/15 text-sky-400"
                      : a.icon === "upload"
                        ? "bg-amber-400/15 text-amber-400"
                        : "bg-emerald-400/15 text-emerald-400"
                }`}
              >
                {a.icon === "login" ? (
                  <Ic.LogIn />
                ) : a.icon === "download" ? (
                  <Ic.Download />
                ) : a.icon === "upload" ? (
                  <Ic.Upload />
                ) : (
                  <Ic.Check />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-body text-sm text-white">{a.event}</p>
                <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                  <p
                    className="font-mono-cm text-[.58rem] tracking-wide"
                    style={{ color: "rgba(229,9,20,.6)" }}
                  >
                    {a.projectTitle}
                  </p>
                  <span style={{ color: "rgba(245,240,235,.15)" }}>·</span>
                  <p
                    className="font-mono-cm text-[.56rem] tracking-wide"
                    style={{ color: "rgba(245,240,235,.3)" }}
                  >
                    {a.customerName}
                  </p>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <p
                  className="font-mono-cm text-[.58rem] tracking-wide"
                  style={{ color: "rgba(245,240,235,.28)" }}
                >
                  {a.at}
                </p>
                <span
                  className="font-mono-cm text-[.54rem] px-1.5 py-0.5 rounded"
                  style={{
                    background: "rgba(255,255,255,.04)",
                    color: "rgba(245,240,235,.25)",
                  }}
                >
                  {a.by}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [view, setView] = useState<View>("dashboard");
  const [customers, setCustomers] = useState<Customer[]>(
    INITIAL_CUSTOMERS as Customer[],
  );
  const [projects, setProjects] = useState<Project[]>(
    INITIAL_PROJECTS as Project[],
  );
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null,
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toast, setToastMsg] = useState("");

  const showToast = useCallback((msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 2800);
  }, []);

  const NAV = [
    { id: "dashboard", label: "Dashboard", Icon: Ic.Dashboard },
    { id: "customers", label: "Customers", Icon: Ic.Customers },
    { id: "projects", label: "Projects", Icon: Ic.Projects },
    { id: "deliverables", label: "Deliverables", Icon: Ic.Files },
    { id: "activity", label: "Activity Log", Icon: Ic.Activity },
  ];

  const handleNav = (id: View) => {
    setView(id);
    if (id !== "deliverables") setSelectedProject(null);
    if (id !== "projects" && id !== "deliverables") setSelectedCustomer(null);
  };

  return (
    <>
      <FontLoader />
      <div
        className="font-body flex min-h-screen"
        style={{ background: "#080a0f", color: "#f5f0eb" }}
      >
        <aside
          className="flex flex-col flex-shrink-0"
          style={{
            width: 220,
            background: "#0d1117",
            borderRight: "1px solid rgba(255,255,255,.06)",
            position: "sticky",
            top: 0,
            height: "100vh",
            overflowY: "auto",
          }}
        >
          <div
            className="px-5 pt-6 pb-5 border-b"
            style={{ borderColor: "rgba(255,255,255,.06)" }}
          >
            <Link
              href="/"
              className="font-display text-base font-bold text-white flex items-center gap-2"
            >
              <svg width="22" height="22" viewBox="0 0 26 26" fill="none">
                <rect x="2" y="2" width="9" height="22" rx="1" fill="#E50914" />
                <rect
                  x="15"
                  y="2"
                  width="9"
                  height="14"
                  rx="1"
                  fill="rgba(229,9,20,0.38)"
                />
              </svg>
              Clléver<span style={{ color: "#E50914" }}>motion</span>
            </Link>
            <div className="flex items-center gap-1.5 mt-2">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: "#34d399",
                  animation: "pulse 2s ease infinite",
                }}
              />
              <span
                className="font-mono-cm text-[.54rem] tracking-[.18em] uppercase"
                style={{ color: "rgba(52,211,153,.7)" }}
              >
                Admin Portal
              </span>
            </div>
          </div>

          <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
            {NAV.map(({ id, label, Icon }) => (
              <button
                key={id}
                className={`nav-item ${view === id ? "active" : ""}`}
                onClick={() => handleNav(id as View)}
              >
                <Icon />
                {label}
                {id === "projects" && (
                  <span
                    className="ml-auto font-mono-cm text-[.58rem] px-1.5 py-0.5 rounded"
                    style={{
                      background: "rgba(255,255,255,.06)",
                      color: "rgba(245,240,235,.35)",
                    }}
                  >
                    {projects.length}
                  </span>
                )}
                {id === "customers" && (
                  <span
                    className="ml-auto font-mono-cm text-[.58rem] px-1.5 py-0.5 rounded"
                    style={{
                      background: "rgba(255,255,255,.06)",
                      color: "rgba(245,240,235,.35)",
                    }}
                  >
                    {customers.length}
                  </span>
                )}
              </button>
            ))}
          </nav>

          <div
            className="px-4 py-4 border-t"
            style={{ borderColor: "rgba(255,255,255,.06)" }}
          >
            <Link href="/" className="nav-item" style={{ fontSize: ".78rem" }}>
              <Ic.ArrowRight />
              View Live Site
            </Link>
            <div className="flex items-center gap-2.5 mt-3 px-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center font-display text-xs font-bold"
                style={{ background: "rgba(229,9,20,.15)", color: "#E50914" }}
              >
                A
              </div>
              <div>
                <p className="font-body text-xs font-semibold text-white">
                  Admin
                </p>
                <p
                  className="font-mono-cm text-[.54rem] tracking-wide"
                  style={{ color: "rgba(245,240,235,.3)" }}
                >
                  hello@cllevermotion.com
                </p>
              </div>
            </div>
          </div>
        </aside>

        <main
          className="flex-1 min-w-0 overflow-y-auto"
          style={{ maxHeight: "100vh" }}
        >
          <div
            className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 border-b"
            style={{
              background: "rgba(8,10,15,.92)",
              backdropFilter: "blur(12px)",
              borderColor: "rgba(255,255,255,.06)",
            }}
          >
            <div
              className="flex items-center gap-2 font-mono-cm text-[.58rem] tracking-[.16em] uppercase"
              style={{ color: "rgba(245,240,235,.3)" }}
            >
              {["Admin", view].map((s, i) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && (
                    <span style={{ color: "rgba(245,240,235,.15)" }}>/</span>
                  )}
                  <span style={{ color: i === 1 ? "#E50914" : undefined }}>
                    {s}
                  </span>
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                className="btn-gold"
                style={{ padding: "8px 14px", fontSize: ".78rem" }}
                onClick={() => {
                  setView("deliverables");
                }}
              >
                <Ic.Upload /> Upload Files
              </button>
            </div>
          </div>

          <div className="p-8 flex flex-col flex-1">
            {view === "dashboard" && (
              <DashboardView customers={customers} projects={projects} />
            )}
            {view === "customers" && (
              <CustomersView
                customers={customers}
                projects={projects}
                setCustomers={setCustomers}
                setView={setView}
                setSelectedCustomer={setSelectedCustomer}
                toast={showToast}
              />
            )}
            {view === "projects" && (
              <ProjectsView
                customers={customers}
                projects={projects}
                setProjects={setProjects}
                selectedCustomer={selectedCustomer}
                setSelectedCustomer={setSelectedCustomer}
                setSelectedProject={setSelectedProject}
                setView={setView}
                toast={showToast}
              />
            )}
            {view === "deliverables" && (
              <DeliverablesView
                projects={projects}
                setProjects={setProjects}
                customers={customers}
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
                setView={setView}
                toast={showToast}
              />
            )}
            {view === "activity" && (
              <ActivityView projects={projects} customers={customers} />
            )}
          </div>
        </main>
      </div>

      {toast && <Toast msg={toast} onDone={() => setToastMsg("")} />}
    </>
  );
}
