import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 relative filter drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] group-hover:scale-105 transition-transform duration-300">
                <img src="/logo.png" alt="Bae's Food Central Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-2xl font-serif font-bold text-gold-500 tracking-widest leading-none">
                  Bae&apos;s
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-cream/70 mt-1">
                  Food Central
                </div>
              </div>
            </Link>
            <p className="text-cream/60 leading-relaxed mt-4 max-w-xs">
              Bae&apos;s Food Central. Experience the finest dining in Gajuwaka.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gold-400 uppercase tracking-wider mb-6">Contact Us</h4>
            <div className="flex items-start gap-3 text-cream/70">
              <MapPin size={20} className="text-gold-500 shrink-0 mt-1" />
              <div className="flex flex-col gap-2 w-full">
                <a 
                  href="https://maps.app.goo.gl/rxzPHBnqKiXZj6Kr7" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-gold-400 transition-colors"
                >
                  Chaitanya Nagar, Gajuwaka<br />Visakhapatnam, AP 530026
                </a>
                {/* Small visible map */}
                <div className="w-full h-28 rounded-lg overflow-hidden border border-white/10 mt-1 shadow-md">
                  <iframe 
                    src="https://maps.google.com/maps?q=Bae's%20Food%20Central,%20Chaitanya%20Nagar,%20Gajuwaka,%20Visakhapatnam&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(30%) contrast(90%)' }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bae's Food Central Map"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-cream/70 mt-4">
              <Phone size={20} className="text-gold-500 shrink-0" />
              <a href="tel:+919177748899" className="hover:text-gold-400 transition-colors">
                +91 9177748899
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gold-400 uppercase tracking-wider mb-6">Hours</h4>
            <div className="flex items-start gap-3 text-cream/70">
              <Clock size={20} className="text-gold-500 shrink-0 mt-1" />
              <div>
                <p><strong className="text-cream">Mon - Sun:</strong><br/> 11:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>

          {/* Links & Socials */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gold-400 uppercase tracking-wider mb-6">Connect</h4>
            <div className="flex flex-col gap-3 text-cream/70">
              <a href="https://www.instagram.com/baes.gajuwaka/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-gold-400 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> Instagram
              </a>
              <a href="https://www.google.com/maps/place/Bae's+FOOD+CENTRAL+Multi-cuisine+Restaurant/@17.6843117,83.2000539,17z/data=!4m8!3m7!1s0x3a39691361f422c7:0x8dbe5e00ce2b9cac!8m2!3d17.6843117!4d83.2026288!9m1!1b1!16s%2Fg%2F11s4_fjsc5?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-gold-400 transition-colors">
                <Star size={20} /> Google Reviews
              </a>
            </div>
          </div>
          
        </div>



        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-cream/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Bae&apos;s Food Central. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
