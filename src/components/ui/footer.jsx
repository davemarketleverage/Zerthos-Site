import React from "react";
import logoSvg from "../../assets/logo.svg";
import { Separator } from "./separator";

const socialLinks = [
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "Youtube", href: "#" },
];

const legalLinks = [
  { name: "Cookies policy", href: "#" },
  { name: "Legal terms", href: "#" },
  { name: "Privacy policy", href: "#" },
];

export const Footer = () => (
  <footer className="w-full bg-[#202020] flex flex-col items-center justify-center py-12 px-8 mt-auto relative z-10">
    <div className="flex flex-col w-full max-w-[1344px] items-start gap-9 mx-auto px-0 py-0">
      <div className="items-start relative self-stretch w-full flex justify-between flex-wrap gap-8">
        <div className="inline-flex items-start gap-24 relative flex-wrap">
          {/* Logo */}
          <div className="relative w-32 h-16 mb-4">
            <img className="w-full h-full object-contain" alt="Zerthos Logo" src={logoSvg} />
          </div>

          {/* Contact information */}
          <div className="inline-flex items-start gap-9 relative flex-wrap">
            <div className="inline-flex flex-col items-start gap-2 relative">
              <h3 className="font-sans font-bold text-white text-base leading-6 whitespace-nowrap">Zerthos Corporate HQ</h3>
              <p className="opacity-70 font-sans font-normal text-white text-sm leading-[22px]">
                801 South Pointe Drive,<br />TH1 Miami Beach,<br />FL 33139
              </p>
            </div>
            <a href="mailto:hello@zerthos.com" className="font-sans font-normal text-white text-base leading-6 underline whitespace-nowrap">hello@zerthos.com</a>
            <a href="tel:(877)-60-Zerthos" className="font-sans font-normal text-white text-base leading-6 underline whitespace-nowrap">(877)-60-Zerthos</a>
          </div>
        </div>
        {/* Legal links */}
        <div className="inline-flex items-start gap-9 relative flex-wrap">
          {legalLinks.map((link, index) => (
            <a key={`legal-${index}`} href={link.href} className="font-sans font-normal text-white text-base leading-6 whitespace-nowrap">
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <Separator className="w-full h-0.5 bg-white/20" />
      <div className="flex items-center justify-between relative self-stretch w-full flex-wrap gap-4">
        <div className="opacity-70 font-sans font-normal text-white text-sm leading-[22px] whitespace-nowrap">
          ©Zerthos 2025. All rights reserved.
        </div>
        <div className="inline-flex items-center justify-center gap-3.5 relative flex-wrap">
          <span className="font-sans font-semibold text-white text-sm leading-[22px] whitespace-nowrap">Connect:</span>
          {socialLinks.map((social, index) => (
            <a key={`social-${index}`} href={social.href} className="font-sans font-normal text-white text-sm leading-[22px] whitespace-nowrap">
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
); 