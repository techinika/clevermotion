"use client";

import { 
  LayoutDashboard, Users, FolderOpen, FileText, Activity, 
  Plus, Search, Eye, Edit, Trash2, Upload, Download, Copy, 
  X, Check, Key, Link, Loader2, AlertTriangle, Video, 
  Archive, ArrowRight, LogIn
} from "lucide-react";

export const Ic = {
  Dashboard: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <rect x="9" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <rect x="1" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <rect x="9" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  ),
  Customers: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="6" cy="5" r="3" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M1 14c0-3 2-5 5-5s5 2 5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M11 7a2.5 2.5 0 010 5M13 14c0-2-1-3.5-2-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  Projects: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="3" width="14" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M5 3V2M11 3V2M1 7h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  Files: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 2h7l3 3v9a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M10 2v4h4" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  ),
  Activity: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <polyline points="1,8 4,4 7,10 10,6 13,9 15,7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Plus: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  Search: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M10 10l2.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  Eye: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7s2-4 6-4 6 4 6 4-2 4-6 4-6-4-6-4z" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="7" cy="7" r="1.8" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  ),
  Edit: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M9.5 2.5l2 2-7 7H2.5v-2l7-7z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>
  ),
  Trash: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 4h10M5 4V2.5h4V4M4 4l.7 7.5h4.6L10 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Upload: () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 12V4M5 8l4-4 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 14h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  Download: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 2v8M3 7l4 4 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 12h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  Copy: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="5" y="5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M9 5V3a1 1 0 00-1-1H3a1 1 0 00-1 1v5a1 1 0 001 1h2" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  ),
  Close: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  Check: () => (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M2 6.5l3.5 3.5 5.5-6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Key: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="5.5" cy="5.5" r="3.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M8 8l4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M10 10l1.5-1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  Link: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M5.5 8.5a3 3 0 004.2 0l2-2a3 3 0 00-4.2-4.2l-1 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M8.5 5.5a3 3 0 00-4.2 0l-2 2a3 3 0 004.2 4.2l1-1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  Spinner: () => <Loader2 className="w-4 h-4 animate-spin" />,
  Alert: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 1.5L13 12H1L7 1.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M7 5.5v3M7 10v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  Video: () => (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <rect x=".5" y="2.5" width="8" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.1"/>
      <path d="M9 5l3.5-2v7L9 8V5z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round"/>
    </svg>
  ),
  Archive: () => (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <rect x=".5" y="3.5" width="12" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.1"/>
      <path d="M.5 3.5l1.5-2h9l1.5 2" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round"/>
      <path d="M4.5 7h4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
    </svg>
  ),
  Doc: () => (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M2.5 1.5h5.5l3 3v7a1 1 0 01-1 1h-7.5a1 1 0 01-1-1v-9a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.1"/>
      <path d="M8 1.5v3.5h3.5" stroke="currentColor" strokeWidth="1.1"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M2 6.5h9M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  LogIn: () => (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M5 2H2a1 1 0 00-1 1v7a1 1 0 001 1h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M8.5 4.5l3 2-3 2M4.5 6.5h7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

export const FILE_STYLE = {
  video:   { color: "text-violet-400", bg: "bg-violet-400/10 border-violet-400/20", Icon: Ic.Video },
  archive: { color: "text-amber-400",  bg: "bg-amber-400/10  border-amber-400/20",  Icon: Ic.Archive },
  doc:     { color: "text-sky-400",    bg: "bg-sky-400/10    border-sky-400/20",    Icon: Ic.Doc },
};

export const CAT_COLORS = {
  Documentary: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Photography: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  Campaign:    "text-sky-400   bg-sky-400/10   border-sky-400/20",
  "Brand Film": "text-amber-400 bg-amber-400/10 border-amber-400/20",
  Event:       "text-rose-400  bg-rose-400/10  border-rose-400/20",
};

export const STATUS = {
  in_progress: { label: "In Progress", color: "text-amber-400", bg: "bg-amber-400/10 border-amber-400/25" },
  ready:       { label: "Ready",       color: "text-sky-400",   bg: "bg-sky-400/10   border-sky-400/25"   },
  delivered:   { label: "Delivered",   color: "text-emerald-400", bg: "bg-emerald-400/10 border-emerald-400/25" },
  archived:    { label: "Archived",    color: "text-gray-400",  bg: "bg-gray-400/10  border-gray-400/25"  },
};