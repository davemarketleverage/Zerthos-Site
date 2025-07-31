import React from "react";
import logoSvg from "../../assets/logo-light.svg";
import { Separator } from "./separator";
import { Instagram, Twitter, Facebook } from "lucide-react";

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/zerthos.talonx", icon: Instagram },
  { name: "X", href: "https://x.com/Zerthos_TalonX", icon: Twitter },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61576774251222", icon: Facebook },
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
              <h3 className="font-sans font-bold text-white text-sm lg:text-base leading-5 lg:leading-6">Zerthos HQ</h3>
              <p className="opacity-70 font-sans font-normal text-white text-xs lg:text-sm leading-5 lg:leading-[22px]">
                801 South Pointe Drive,<br />TH1 Miami Beach,<br />FL 33139
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 relative">
              <h3 className="font-sans font-bold text-white text-sm lg:text-base leading-5 lg:leading-6">Zerthos Office</h3>
              <p className="opacity-70 font-sans font-normal text-white text-xs lg:text-sm leading-5 lg:leading-[22px]">
                105 Bradford Rd, Suite 420,<br />Wexford,<br />PA 15090
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
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6 relative w-full sm:w-auto order-1 sm:order-2">
          <span className="font-sans font-semibold text-white text-xs lg:text-sm leading-5 lg:leading-[22px]">Connect:</span>
          <div className="flex flex-wrap gap-4 lg:gap-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a 
                  key={`social-${index}`} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-sans font-normal text-white text-xs lg:text-sm leading-5 lg:leading-[22px] hover:opacity-80 transition-all duration-200 hover:scale-105"
                  aria-label={`Visit our ${social.name} page`}
                >
                  <IconComponent className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span className="hidden sm:inline">{social.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </footer>
); 