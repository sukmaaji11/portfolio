import { Mail, Globe, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-neutral-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="font-semibold text-lg">BRADEV</h3>

          <p className="text-neutral-500 text-sm mt-2">
            Building software with simplicity and purpose.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="#"
            className="flex items-center gap-2 hover:opacity-70 transition"
          >
            Portfolio
            <Globe size={18} />
          </a>

          <a
            href="#"
            className="flex items-center gap-2 hover:opacity-70 transition"
          >
            Email
            <Mail size={18} />
          </a>

          <a
            href="#"
            className="flex items-center gap-2 hover:opacity-70 transition"
          >
            Contact
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
