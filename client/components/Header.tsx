
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-muted bg-white/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-3 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-white">S</span>
          </div>
          <span className="text-base sm:text-lg font-bold text-foreground">ScanPay</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">How It Works</a>
          <a href="#features" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Features</a>
          <a href="#video" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Demo</a>
          <a href="#contact" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Contact</a>
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <Link to="/login" className="inline-flex items-center justify-center rounded-md border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5 transition-colors">
            Admin Login
          </Link>
          <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 lg:px-5 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors whitespace-nowrap">
            Book Demo
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex sm:hidden items-center justify-center rounded-md border border-slate-200 p-2 text-slate-700"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="sm:hidden border-t border-slate-200 bg-white">
          <div className="container px-4 py-4 flex flex-col gap-3">
            <a href="#how-it-works" onClick={closeMenu} className="text-sm font-medium text-slate-700">How It Works</a>
            <a href="#features" onClick={closeMenu} className="text-sm font-medium text-slate-700">Features</a>
            <a href="#video" onClick={closeMenu} className="text-sm font-medium text-slate-700">Demo</a>
            <a href="#contact" onClick={closeMenu} className="text-sm font-medium text-slate-700">Contact</a>
            <div className="grid grid-cols-1 gap-3 pt-2">
              <Link to="/login" onClick={closeMenu} className="inline-flex items-center justify-center rounded-md border border-primary px-4 py-2.5 text-sm font-medium text-primary hover:bg-primary/5 transition-colors">
                Admin Login
              </Link>
              <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary/90 transition-colors">
                Book Demo
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
