import React from "react";
import logoSvg from "../../assets/logo-light.svg";
import { Separator } from "./separator";

const socialLinks = [
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "Youtube", href: "#" },
];

const legalLinks = [
  { name: "Cookies policy", href: "/cookies-policy" },
  { name: "Legal terms", href: "/legal-terms" },
  { name: "Privacy policy", href: "/privacy-policy" },
];

export const Footer = () => (
  <footer className="w-full bg-[#202020] flex flex-col items-center justify-center py-8 lg:py-12 px-4 sm:px-6 lg:px-8 mt-auto relative z-10">
    <div className="flex flex-col w-full max-w-[1344px] items-start gap-6 lg:gap-9 mx-auto px-0 py-0">
      {/* Main content section */}
      <div className="items-start relative self-stretch w-full flex flex-col lg:flex-row justify-between gap-6 lg:gap-8">
        {/* Left section - Logo and Contact */}
        <div className="flex flex-col sm:flex-row items-start gap-6 lg:gap-24 relative w-full lg:w-auto">
          {/* Logo */}
          <div className="relative w-28 h-14 lg:w-32 lg:h-16">
            <img className="w-full h-full object-contain" alt="Zerthos Logo" src={logoSvg} />
          </div>

          {/* Contact information */}
          <div className="flex flex-col sm:flex-row items-start gap-4 lg:gap-9 relative w-full sm:w-auto">
            <div className="flex flex-col items-start gap-2 relative">
              <h3 className="font-sans font-bold text-white text-sm lg:text-base leading-5 lg:leading-6">Zerthos Corporate HQ</h3>
              <p className="opacity-70 font-sans font-normal text-white text-xs lg:text-sm leading-5 lg:leading-[22px]">
                801 South Pointe Drive,<br />TH1 Miami Beach,<br />FL 33139
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 lg:gap-9">
              <a href="mailto:hello@zerthos.com" className="font-sans font-normal text-white text-sm lg:text-base leading-5 lg:leading-6 underline hover:opacity-80 transition-opacity">hello@zerthos.com</a>
              <a href="tel:(877)-60-Zerthos" className="font-sans font-normal text-white text-sm lg:text-base leading-5 lg:leading-6 underline hover:opacity-80 transition-opacity">(877)-60-Zerthos</a>
            </div>
          </div>
        </div>

        {/* Right section - Legal links */}
        <div className="flex flex-col sm:flex-row items-start gap-4 lg:gap-9 relative w-full lg:w-auto">
          {legalLinks.map((link, index) => (
            <a 
              key={`legal-${index}`} 
              href={link.href} 
              className="font-sans font-normal text-white text-sm lg:text-base leading-5 lg:leading-6 hover:opacity-80 transition-opacity"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Separator */}
      <Separator className="w-full h-0.5 bg-white/20" />

      {/* Bottom section - Copyright and Social */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between relative self-stretch w-full gap-4">
        <div className="opacity-70 font-sans font-normal text-white text-xs lg:text-sm leading-5 lg:leading-[22px] order-2 sm:order-1">
          ©Zerthos 2025. All rights reserved.
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-3.5 relative w-full sm:w-auto order-1 sm:order-2">
          <span className="font-sans font-semibold text-white text-xs lg:text-sm leading-5 lg:leading-[22px]">Connect:</span>
          <div className="flex flex-wrap gap-3 lg:gap-3.5">
            {socialLinks.map((social, index) => (
              <a 
                key={`social-${index}`} 
                href={social.href} 
                className="font-sans font-normal text-white text-xs lg:text-sm leading-5 lg:leading-[22px] hover:opacity-80 transition-opacity"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
); 