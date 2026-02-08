import React from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-neutral-900 text-white py-24 border-t border-white/10">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* About */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">MACE CGPU</h3>
            <p className="text-gray-400 leading-relaxed">
              Empowering the next generation of engineers with careers that matter.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="uppercase tracking-widest text-gray-400 mb-6 font-bold">Contact</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3">
                <MapPin size={20} />
                <span>
                  Mar Athanasius College of Engineering,
                  <br />
                  Kothamangalam, Kerala 686666
                </span>
              </li>
              <li className="flex gap-3">
                <Mail size={20} />
                <a href="mailto:placement@mace.ac.in" className="hover:text-white">
                  placement@mace.ac.in
                </a>
              </li>
              <li className="flex gap-3">
                <Phone size={20} />
                +91 485 2822363
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="uppercase tracking-widest text-gray-400 mb-6 font-bold">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white">Placement Policy</a></li>
              <li><a href="#" className="hover:text-white">Brochure Download</a></li>
              <li><a href="#" className="hover:text-white">Alumni Network</a></li>
              <li><a href="#" className="hover:text-white">Corporate Relations</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="uppercase tracking-widest text-gray-400 mb-6 font-bold">Social</h4>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center
                             hover:bg-white hover:text-black transition"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} MACE Placement Cell. All rights reserved.</p>
          <p>Designed for Excellence.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
