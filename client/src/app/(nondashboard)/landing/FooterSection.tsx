import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Home, Mail, Phone, MapPin, Clock } from "lucide-react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "FAQ", href: "/faq" },
        { label: "Community", href: "/community" },
        { label: "Resources", href: "/resources" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "Disclaimer", href: "/disclaimer" },
      ],
    },
  ];

  const socialLinks = [
    { icon: faFacebook, href: "#", label: "Facebook" },
    { icon: faInstagram, href: "#", label: "Instagram" },
    { icon: faTwitter, href: "#", label: "Twitter" },
    { icon: faLinkedin, href: "#", label: "LinkedIn" },
    { icon: faYoutube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link 
              href="/" 
              className="inline-block"
              scroll={false}
            >
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                RENTIFUL
              </span>
            </Link>
            <p className="text-gray-600 leading-relaxed">
              Discover your perfect living space with Rentiful. We make finding and 
              renting properties simple, secure, and seamless.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5 text-primary-500" />
                <span>contact@rentiful.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5 text-primary-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Clock className="w-5 h-5 text-primary-500" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-gray-900 font-semibold">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary-50 text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <FontAwesomeIcon icon={social.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
            
            {/* Copyright */}
            <div className="text-sm text-gray-600">
              © {currentYear} Rentiful. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>123 Business Street, Suite 100, New York, NY 10001</span>
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary-600 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary-600 transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-primary-600 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
