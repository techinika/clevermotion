"use client";

import { X, CheckCircle2, AlertCircle } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type?: "success" | "error" | "info";
  title: string;
  message: string;
  confirmText?: string;
  onConfirm?: () => void;
}

export function Modal({ isOpen, onClose, type = "info", title, message, confirmText, onConfirm }: ModalProps) {
  if (!isOpen) return null;

  const icons = {
    success: <CheckCircle2 className="w-12 h-12 text-[#E8A020]" />,
    error: <AlertCircle className="w-12 h-12 text-red-400" />,
    info: <CheckCircle2 className="w-12 h-12 text-[#E8A020]" />,
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[#111827] border border-white/[0.07] rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">{icons[type]}</div>
          <h3 className="font-display text-xl font-bold text-white mb-2">{title}</h3>
          <p className="font-body text-white/60 mb-6">{message}</p>
          
          <div className="flex gap-3">
            {onConfirm && confirmText && (
              <button
                onClick={onConfirm}
                className="bg-[#E8A020] text-[#080a0f] font-body font-semibold px-6 py-2.5 rounded-lg hover:bg-[#f5c842] transition-colors"
              >
                {confirmText}
              </button>
            )}
            <button
              onClick={onClose}
              className="bg-white/5 text-white font-body font-medium px-6 py-2.5 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
}

export function Toast({ message, type = "success" }: ToastProps) {
  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-[#E8A020]" />,
    error: <AlertCircle className="w-5 h-5 text-red-400" />,
    info: <CheckCircle2 className="w-5 h-5 text-[#E8A020]" />,
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#111827] border border-white/[0.07] rounded-xl px-4 py-3 shadow-xl animate-fadeup">
      {icons[type]}
      <span className="font-body text-sm text-white">{message}</span>
    </div>
  );
}