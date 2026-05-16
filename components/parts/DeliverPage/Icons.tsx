import { Video, Archive, FileText, Download, Lock, Unlock, Mail, ArrowLeft, ArrowRight, Check, Loader2, Info, Calendar, Play } from "lucide-react";

export const Icon = {
  Video: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="3" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M11 6l4-2v8l-4-2V6z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>
  ),
  Archive: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M1 4l2-3h10l2 3" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      <path d="M6 8h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  Document: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 2h7l3 3v9a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M10 2v4h4" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M5 8h6M5 11h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  Download: () => <Download className="w-4 h-4" />,
  Lock: () => <Lock className="w-5 h-5" />,
  Unlock: () => <Unlock className="w-5 h-5" />,
  Mail: () => <Mail className="w-5 h-5" />,
  ArrowLeft: () => <ArrowLeft className="w-4 h-4" />,
  Arrow: () => <ArrowRight className="w-4 h-4" />,
  Check: () => <Check className="w-4 h-4" />,
  Spinner: () => <Loader2 className="w-4 h-4 animate-spin" />,
  Info: () => <Info className="w-4 h-4" />,
  Calendar: () => <Calendar className="w-4 h-4" />,
  Play: () => <Play className="w-3 h-3" />,
};

export const fileIcon = (type: string) => ({ video: Icon.Video, archive: Icon.Archive, document: Icon.Document }[type] ?? Icon.Document);
export const fileColor = (type: string) => ({ video: "text-violet-400", archive: "text-amber-400", document: "text-sky-400" }[type] ?? "text-gray-400");
export const fileBg = (type: string) => ({ video: "bg-violet-400/10 border-violet-400/20", archive: "bg-amber-400/10 border-amber-400/20", document: "bg-sky-400/10 border-sky-400/20" }[type] ?? "bg-gray-400/10 border-gray-400/20");