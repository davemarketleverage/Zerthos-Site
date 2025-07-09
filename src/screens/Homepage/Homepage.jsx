import { PlayIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { DivSubsection } from "./sections/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection";
import { FrameSubsection } from "./sections/FrameSubsection";
import { OverlapGroupWrapperSubsection } from "./sections/OverlapGroupWrapperSubsection";
import { OverlapWrapperSubsection } from "./sections/OverlapWrapperSubsection/OverlapWrapperSubsection";
import logoSvg from "../../assets/logo.svg";
import brainImage from "../../assets/section2-brain.png";
import newShape from '../../assets/newShape.png';

export const Homepage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [yellowBgAnimation, setYellowBgAnimation] = useState({
    isAnimating: false,
    phase: 'circle' // 'hidden', 'circle', 'bouncing', 'square'
  });
  const [zoomedOut, setZoomedOut] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isFeatureScrolling, setIsFeatureScrolling] = useState(false);
  const [featuresListHovered, setFeaturesListHovered] = useState(false);
  const [showHeroCard, setShowHeroCard] = useState(false);
  const [showHeroImage, setShowHeroImage] = useState(false);
  const [delayedBrainBg, setDelayedBrainBg] = useState(false);

  // Log initial component state
  useEffect(() => {
    console.log('Component loaded - Initial state: circle, currentSection:', currentSection);
  }, []);

  // Initialize yellow background state based on current section
  useEffect(() => {
    // Skip automatic state setting during scrolling transitions to prevent flickering
    if (isScrolling) return;
    
    if (currentSection === 0 && !yellowBgAnimation.isAnimating) {
      console.log('Setting initial state: circle (Section 1) - right: 0px, bottom: 0px, size: 720x720px');
      setYellowBgAnimation({ isAnimating: false, phase: 'circle' });
    } else if (currentSection === 1 && !yellowBgAnimation.isAnimating) {
      console.log('Setting initial state: square (Section 2) - left: 48px, top: 50vh, size: 432x460px');
      setYellowBgAnimation({ isAnimating: false, phase: 'square' });
    } else if (currentSection === 2 && !yellowBgAnimation.isAnimating) {
      console.log('Setting initial state: stats (Section 3) - center: 50%, top: 50vh, size: 320x500px');
      setYellowBgAnimation({ isAnimating: false, phase: 'stats' });
    } else if (currentSection === 3 && !yellowBgAnimation.isAnimating) {
      console.log('Setting initial state: partners (Section 4) - left: 48px, top: 50vh, size: 8x200px');
      setYellowBgAnimation({ isAnimating: false, phase: 'partners' });
    } else if (currentSection > 3 && !yellowBgAnimation.isAnimating) {
      console.log('Setting initial state: hidden (Section ' + (currentSection + 1) + ')');
      setYellowBgAnimation({ isAnimating: false, phase: 'hidden' });
    }
  }, [currentSection, yellowBgAnimation.isAnimating, isScrolling]);

  useEffect(() => {
    if (currentSection === 4) {
      setZoomedOut(true);
    } else {
      setZoomedOut(false);
    }
  }, [currentSection]);

  useEffect(() => {
    const timer = setTimeout(() => setShowHeroCard(true), 200);
    const timer2 = setTimeout(() => setShowHeroImage(true), 400);
    return () => { clearTimeout(timer); clearTimeout(timer2); };
  }, []);

  // Delay yellow background for brain image
  useEffect(() => {
    let timeout;
    if ((yellowBgAnimation.phase === 'square' || yellowBgAnimation.phase === 'transitioning-to-square') && currentSection === 1) {
      timeout = setTimeout(() => setDelayedBrainBg(true), 100); // Reduced from 200ms to 100ms
    } else {
      setDelayedBrainBg(false);
    }
    return () => clearTimeout(timeout);
  }, [yellowBgAnimation.phase, currentSection]);

  const sections = [
    { id: 'hero', name: 'Hero' },
    { id: 'about', name: 'About' },
    { id: 'stats', name: 'Stats' },
    { id: 'partners', name: 'Partners' },
    { id: 'what-makes', name: 'What Makes' },
    { id: 'features', name: 'Features' },
    { id: 'performance', name: 'Performance' },
    { id: 'advantage', name: 'Advantage' },
    { id: 'contact', name: 'Contact' }
  ];

  const featuresCount = 4; // keep in sync with OverlapWrapperSubsection

  const scrollToSection = (sectionIndex) => {
    if (isScrolling || sectionIndex < 0 || sectionIndex >= sections.length) return;
    
    setIsScrolling(true);
    let animationDuration = 400; // Reduced from 700 to 400 for faster transitions

    // Handle yellow background animation during transitions
    if (currentSection === 0 && sectionIndex === 1) {
      // Going from section 1 to section 2 - smooth transition
      console.log('Starting Section 1 → Section 2 transition at', new Date().toLocaleTimeString());
      
      // Set the current section immediately to start main section transition
      setCurrentSection(sectionIndex);
      
      // Removed 50ms delay for immediate animation start
      console.log('State: transitioning-to-square | Start Position: right: 0px, bottom: 0px, size: 720x720px');
      setYellowBgAnimation({
        isAnimating: true,
        phase: 'transitioning-to-square'
      });
      
      // Log intermediate positions during animation
      setTimeout(() => console.log('5% (35ms): 705x707px, right: calc(0.05 * (100vw - 48px - 432px)), bottom: calc(0.05 * (50vh - 230px)), radius: 4px'), 35);
      setTimeout(() => console.log('10% (70ms): 691x694px, right: calc(0.1 * (100vw - 48px - 432px)), bottom: calc(0.1 * (50vh - 230px)), radius: 8px'), 70);
      setTimeout(() => console.log('15% (105ms): 676x681px, right: calc(0.15 * (100vw - 48px - 432px)), bottom: calc(0.15 * (50vh - 230px)), radius: 12px'), 105);
      setTimeout(() => console.log('20% (140ms): 662x668px, right: calc(0.2 * (100vw - 48px - 432px)), bottom: calc(0.2 * (50vh - 230px)), radius: 16px'), 140);
      setTimeout(() => console.log('25% (175ms): 648x655px, right: calc(0.25 * (100vw - 48px - 432px)), bottom: calc(0.25 * (50vh - 230px)), radius: 20px'), 175);
      setTimeout(() => console.log('30% (210ms): 634x642px, right: calc(0.3 * (100vw - 48px - 432px)), bottom: calc(0.3 * (50vh - 230px)), radius: 24px'), 210);
      setTimeout(() => console.log('35% (245ms): 619x629px, right: calc(0.35 * (100vw - 48px - 432px)), bottom: calc(0.35 * (50vh - 230px)), radius: 28px'), 245);
      setTimeout(() => console.log('40% (280ms): 605x616px, right: calc(0.4 * (100vw - 48px - 432px)), bottom: calc(0.4 * (50vh - 230px)), radius: 32px'), 280);
      setTimeout(() => console.log('45% (315ms): 590x603px, right: calc(0.45 * (100vw - 48px - 432px)), bottom: calc(0.45 * (50vh - 230px)), radius: 32px'), 315);
      setTimeout(() => console.log('50% (350ms): 576x590px, right: calc(0.5 * (100vw - 48px - 432px)), bottom: calc(0.5 * (50vh - 230px)), radius: 32px'), 350);
      setTimeout(() => console.log('55% (385ms): 562x577px, right: calc(0.55 * (100vw - 48px - 432px)), bottom: calc(0.55 * (50vh - 230px)), radius: 32px'), 385);
      setTimeout(() => console.log('60% (420ms): 547x564px, right: calc(0.6 * (100vw - 48px - 432px)), bottom: calc(0.6 * (50vh - 230px)), radius: 32px'), 420);
      setTimeout(() => console.log('65% (455ms): 533x551px, right: calc(0.65 * (100vw - 48px - 432px)), bottom: calc(0.65 * (50vh - 230px)), radius: 31px'), 455);
      setTimeout(() => console.log('70% (490ms): 518x538px, right: calc(0.7 * (100vw - 48px - 432px)), bottom: calc(0.7 * (50vh - 230px)), radius: 30px'), 490);
      setTimeout(() => console.log('75% (525ms): 504x525px, right: calc(0.75 * (100vw - 48px - 432px)), bottom: calc(0.75 * (50vh - 230px)), radius: 29px'), 525);
      setTimeout(() => console.log('80% (560ms): 490x512px, right: calc(0.8 * (100vw - 48px - 432px)), bottom: calc(0.8 * (50vh - 230px)), radius: 28px'), 560);
      setTimeout(() => console.log('85% (595ms): 475x499px, right: calc(0.85 * (100vw - 48px - 432px)), bottom: calc(0.85 * (50vh - 230px)), radius: 27px'), 595);
      setTimeout(() => console.log('90% (630ms): 461x486px, right: calc(0.9 * (100vw - 48px - 432px)), bottom: calc(0.9 * (50vh - 230px)), radius: 26px'), 630);
      setTimeout(() => console.log('95% (665ms): 446x473px, right: calc(0.95 * (100vw - 48px - 432px)), bottom: calc(0.95 * (50vh - 230px)), radius: 25px'), 665);
      setTimeout(() => console.log('100% (700ms): 432x460px, right: calc(100vw - 48px - 432px), bottom: calc(50vh - 230px), radius: 24px'), 700);
      
      // After animation completes, set final state
      setTimeout(() => {
        console.log('State: square | Final Position: left: 48px, top: 50vh, size: 432x460px at', new Date().toLocaleTimeString());
        setYellowBgAnimation({
          isAnimating: false,
          phase: 'square'
        });
      }, 800); // Reduced from 1200 to 800
    
    } else if (currentSection === 1 && sectionIndex === 0) {
      // Going from section 2 back to section 1 - smooth reverse transition
      console.log('Starting Section 2 → Section 1 transition at', new Date().toLocaleTimeString());
      
      // Set the current section immediately to start main section transition
      setCurrentSection(sectionIndex);
      
      // Removed 50ms delay for immediate animation start
      console.log('State: transitioning-to-circle | Start Position: left: 48px, top: 50vh, size: 432x460px');
      setYellowBgAnimation({
        isAnimating: true,
        phase: 'transitioning-to-circle'
      });
      
      // Log intermediate positions during reverse animation
      setTimeout(() => console.log('5% (35ms): 446x473px, right: calc(0.95 * (100vw - 48px - 432px)), bottom: calc(0.95 * (50vh - 230px)), radius: 25px'), 35);
      setTimeout(() => console.log('10% (70ms): 461x486px, right: calc(0.9 * (100vw - 48px - 432px)), bottom: calc(0.9 * (50vh - 230px)), radius: 26px'), 70);
      setTimeout(() => console.log('15% (105ms): 475x499px, right: calc(0.85 * (100vw - 48px - 432px)), bottom: calc(0.85 * (50vh - 230px)), radius: 27px'), 105);
      setTimeout(() => console.log('20% (140ms): 490x512px, right: calc(0.8 * (100vw - 48px - 432px)), bottom: calc(0.8 * (50vh - 230px)), radius: 28px'), 140);
      setTimeout(() => console.log('25% (175ms): 504x525px, right: calc(0.75 * (100vw - 48px - 432px)), bottom: calc(0.75 * (50vh - 230px)), radius: 29px'), 175);
      setTimeout(() => console.log('30% (210ms): 518x538px, right: calc(0.7 * (100vw - 48px - 432px)), bottom: calc(0.7 * (50vh - 230px)), radius: 30px'), 210);
      setTimeout(() => console.log('35% (245ms): 533x551px, right: calc(0.65 * (100vw - 48px - 432px)), bottom: calc(0.65 * (50vh - 230px)), radius: 31px'), 245);
      setTimeout(() => console.log('40% (280ms): 547x564px, right: calc(0.6 * (100vw - 48px - 432px)), bottom: calc(0.6 * (50vh - 230px)), radius: 32px'), 280);
      setTimeout(() => console.log('45% (315ms): 562x577px, right: calc(0.55 * (100vw - 48px - 432px)), bottom: calc(0.55 * (50vh - 230px)), radius: 32px'), 315);
      setTimeout(() => console.log('50% (350ms): 576x590px, right: calc(0.5 * (100vw - 48px - 432px)), bottom: calc(0.5 * (50vh - 230px)), radius: 32px'), 350);
      setTimeout(() => console.log('55% (385ms): 590x603px, right: calc(0.45 * (100vw - 48px - 432px)), bottom: calc(0.45 * (50vh - 230px)), radius: 32px'), 385);
      setTimeout(() => console.log('60% (420ms): 605x616px, right: calc(0.4 * (100vw - 48px - 432px)), bottom: calc(0.4 * (50vh - 230px)), radius: 32px'), 420);
      setTimeout(() => console.log('65% (455ms): 619x629px, right: calc(0.35 * (100vw - 48px - 432px)), bottom: calc(0.35 * (50vh - 230px)), radius: 28px'), 455);
      setTimeout(() => console.log('70% (490ms): 634x642px, right: calc(0.3 * (100vw - 48px - 432px)), bottom: calc(0.3 * (50vh - 230px)), radius: 24px'), 490);
      setTimeout(() => console.log('75% (525ms): 648x655px, right: calc(0.25 * (100vw - 48px - 432px)), bottom: calc(0.25 * (50vh - 230px)), radius: 20px'), 525);
      setTimeout(() => console.log('80% (560ms): 662x668px, right: calc(0.2 * (100vw - 48px - 432px)), bottom: calc(0.2 * (50vh - 230px)), radius: 16px'), 560);
      setTimeout(() => console.log('85% (595ms): 676x681px, right: calc(0.15 * (100vw - 48px - 432px)), bottom: calc(0.15 * (50vh - 230px)), radius: 12px'), 595);
      setTimeout(() => console.log('90% (630ms): 691x694px, right: calc(0.1 * (100vw - 48px - 432px)), bottom: calc(0.1 * (50vh - 230px)), radius: 8px'), 630);
      setTimeout(() => console.log('95% (665ms): 705x707px, right: calc(0.05 * (100vw - 48px - 432px)), bottom: calc(0.05 * (50vh - 230px)), radius: 4px'), 665);
      setTimeout(() => console.log('100% (700ms): 720x720px, right: 0px, bottom: 0px, radius: 0px'), 700);
      
      // After animation completes, set final state
      setTimeout(() => {
        console.log('State: circle | Final Position: right: 0px, bottom: 0px, size: 720x720px at', new Date().toLocaleTimeString());
        setYellowBgAnimation({
          isAnimating: false,
          phase: 'circle'
        });
      }, 750); // Reduced from 1050 to 750
    } else if (currentSection === 1 && sectionIndex === 2) {
      // Going from section 2 to section 3 - transition to stats
      console.log('Starting Section 2 → Section 3 transition at', new Date().toLocaleTimeString());
      
      // Set the current section immediately to start main section transition
      setCurrentSection(sectionIndex);
      
      // Removed 50ms delay for immediate animation start
      console.log('State: transitioning-to-stats | Start Position: left: 48px, top: 50vh, size: 432x460px');
      setYellowBgAnimation({
        isAnimating: true,
        phase: 'transitioning-to-stats'
      });
      
      // After animation completes, set final state
      setTimeout(() => {
        console.log('State: stats | Final Position: center: 50%, top: 50vh, size: 320x500px at', new Date().toLocaleTimeString());
        setYellowBgAnimation({
          isAnimating: false,
          phase: 'stats'
        });
      }, 750); // Reduced from 1050 to 750
    } else if (currentSection === 2 && sectionIndex === 1) {
      // Going from section 3 back to section 2 - reverse transition
      console.log('Starting Section 3 → Section 2 transition at', new Date().toLocaleTimeString());
      
      // Set the current section immediately to start main section transition
      setCurrentSection(sectionIndex);
      
      // Removed 50ms delay for immediate animation start
      console.log('State: transitioning-to-square | Start Position: center: 50%, top: 50vh, size: 320x500px');
      setYellowBgAnimation({
        isAnimating: true,
        phase: 'transitioning-to-square-from-stats'
      });
      
      // After animation completes, set final state
      setTimeout(() => {
        console.log('State: square | Final Position: left: 48px, top: 50vh, size: 432x460px at', new Date().toLocaleTimeString());
        setYellowBgAnimation({
          isAnimating: false,
          phase: 'square'
        });
      }, 750); // Reduced from 1050 to 750
    } else if (currentSection === 2 && sectionIndex === 3) {
      // Going from section 3 to section 4 - transition to partners
      console.log('Starting Section 3 → Section 4 transition at', new Date().toLocaleTimeString());
      
      // Set the current section immediately to start main section transition
      setCurrentSection(sectionIndex);
      
      // Removed 50ms delay for immediate animation start
      console.log('State: transitioning-to-partners | Start Position: center: 50%, top: 50vh, size: 320x500px');
      setYellowBgAnimation({
        isAnimating: true,
        phase: 'transitioning-to-partners'
      });
      
      // After animation completes, set final state
      setTimeout(() => {
        console.log('State: partners | Final Position: left: 48px, top: 50vh, size: 8x200px at', new Date().toLocaleTimeString());
        setYellowBgAnimation({
          isAnimating: false,
          phase: 'partners'
        });
      }, 750); // Reduced from 1050 to 750
    } else if (currentSection === 3 && sectionIndex === 2) {
      // Going from section 4 back to section 3 - reverse transition
      console.log('Starting Section 4 → Section 3 transition at', new Date().toLocaleTimeString());
      
      // Set the current section immediately to start main section transition
      setCurrentSection(sectionIndex);
      
      // Removed 50ms delay for immediate animation start
      console.log('State: transitioning-to-stats | Start Position: left: 48px, top: 50vh, size: 8x200px');
      setYellowBgAnimation({
        isAnimating: true,
        phase: 'transitioning-to-stats-from-partners'
      });
      
      // After animation completes, set final state
      setTimeout(() => {
        console.log('State: stats | Final Position: center: 50%, top: 50vh, size: 320x500px at', new Date().toLocaleTimeString());
        setYellowBgAnimation({
          isAnimating: false,
          phase: 'stats'
        });
      }, 750); // Reduced from 1050 to 750
    } else {
      // For all other transitions, set current section immediately
      setCurrentSection(sectionIndex);
    }
    
    // Reset scrolling and animation states after animation
    setTimeout(() => {
      setIsScrolling(false);
      setYellowBgAnimation(prev => ({
        ...prev,
        isAnimating: false
      }));
    }, animationDuration); // match animation duration to prevent skipping
  };

  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;
    let scrollCooldown = false;
    const SCROLL_THRESHOLD = 50; // Increased threshold to require more intentional scrolling
    const COOLDOWN_DURATION = 100; // Short cooldown to prevent rapid firing
    
    // Set scrolled state based on current section
    setIsScrolled(currentSection > 0);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    const handleWheel = (e) => {
      e.preventDefault();
      
      // Block all scroll events during animation or cooldown
      if (isScrolling || scrollCooldown) return;
      
      const delta = e.deltaY;
      
      // Check if scroll exceeds threshold
      if (Math.abs(delta) < SCROLL_THRESHOLD) return;
      
      // Set cooldown immediately to prevent rapid firing
      scrollCooldown = true;
      setTimeout(() => {
        scrollCooldown = false;
      }, COOLDOWN_DURATION);
      
      const shouldScrollDown = delta > 0;
      const shouldScrollUp = delta < 0;
      
      // Scene 5: Feature-by-feature scroll
      if (currentSection === 5) {
        if (isFeatureScrolling) return;
        if (featuresListHovered) {
          // Only allow scene scroll if at last/first feature
          if (shouldScrollDown && activeFeature === featuresCount - 1) {
            scrollToSection(currentSection + 1);
          } else if (shouldScrollUp && activeFeature === 0) {
            scrollToSection(currentSection - 1);
          }
          return;
        }
        
        if (shouldScrollDown) {
          // Scroll down
          if (activeFeature < featuresCount - 1) {
            setActiveFeature((prev) => prev + 1);
            setIsFeatureScrolling(true);
            setTimeout(() => setIsFeatureScrolling(false), 400);
          } else {
            scrollToSection(currentSection + 1);
          }
        } else if (shouldScrollUp) {
          // Scroll up
          if (activeFeature > 0) {
            setActiveFeature((prev) => prev - 1);
            setIsFeatureScrolling(true);
            setTimeout(() => setIsFeatureScrolling(false), 400);
          } else {
            scrollToSection(currentSection - 1);
          }
        }
        return;
      }
      
      // Default scroll for other scenes - ONE SECTION AT A TIME
      if (shouldScrollDown && currentSection < sections.length - 1) {
        // Scroll down to next section only
        scrollToSection(currentSection + 1);
      } else if (shouldScrollUp && currentSection > 0) {
        // Scroll up to previous section only
        scrollToSection(currentSection - 1);
      }
    };

    const handleKeyDown = (e) => {
      if (isScrolling) return;
      
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        scrollToSection(currentSection + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollToSection(currentSection - 1);
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
    };

    const handleTouchEnd = (e) => {
      if (isScrolling) return;
      
      touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      
      if (Math.abs(deltaY) > 60) { // Reduced threshold for easier touch scrolling
        if (deltaY > 0 && currentSection < sections.length - 1) {
          // Swipe up (scroll down)
          scrollToSection(currentSection + 1);
        } else if (deltaY < 0 && currentSection > 0) {
          // Swipe down (scroll up)
          scrollToSection(currentSection - 1);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });
    
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      // Restore body scroll
      document.body.style.overflow = 'auto';
    };
  }, [currentSection, isScrolling, sections.length, activeFeature, isFeatureScrolling, featuresListHovered]);

  const navigationItems = [
    { text: "Technology", width: "w-[89px]" },
    { text: "Leadership", width: "w-[84px]" },
    { text: "Industries We Serve", width: "w-[152px]" },
    { text: "TalonX", width: "w-[53px]" },
    { text: " Solutions", width: "w-[75px]" },
    { text: "News & Updates", width: "w-[127px]" },
    { text: "Careers", width: "w-[60px]" },
  ];



  const statsData = [
    {
      value: "4x",
      description: "Faster data\ntransmission",
    },
    {
      value: "99.99%",
      description: "Uptime guarantee",
    },
    {
      value: "256-bit",
      description: "Military-grade\nencryption",
    },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white" data-model-id="84:741" style={{ isolation: 'isolate' }}>
      {/* Sticky Header */}
      <div className={`w-full mx-auto px-12 py-8 flex justify-between items-center fixed top-0 z-50 bg-white transition-all duration-300 ease-in-out ${isScrolled ? 'border-b border-gray-200 shadow-sm' : ''}`}>
        <div className="relative w-32 h-16">
          <img
            className="w-full h-full object-contain"
            alt="Zerthos Logo"
            src={logoSvg}
          />
        </div>

        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-9">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className={`${item.width} font-normal text-[#202020] text-base leading-6 break-words cursor-pointer`}
                  onClick={() => scrollToSection(index % sections.length)}
                >
                  {item.text}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Sections Container */}
      <div 
        className="w-full h-full transition-transform duration-500 ease-in-out z-30"
        style={{ 
          transform: `translateY(-${currentSection * 100}vh)`,
          height: `${sections.length * 100}vh`
        }}
      >
        {/* Hero Section */}
        <section className="w-full h-screen bg-white flex items-end">
          <div className="w-full mx-auto pl-12 pr-0 relative">
            <div className="relative w-full h-[720px]">

                {/* Duplicate static yellow shape for hero section */}
                {currentSection === 0 && !isScrolling && (
                  <img
                    className="absolute w-[720px] h-[720px] right-0 bottom-0 z-0"
                    alt="Yellow Shape"
                    src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/rectangle-6.svg"
                  />
                )}

              <div className={`absolute w-[779px] h-[636px] top-[84px] right-[30px] bg-[url(https://c.animaapp.com/mcovvnm5V0Fxtk/img/adobestock-961893622-2.png)] bg-cover bg-[50%_50%] z-[999] transition-all duration-700 ease-out will-change-transform will-change-opacity ${showHeroImage ? 'translate-y-0 opacity-100 visible' : 'translate-y-16 opacity-0 invisible'}`}>
                <img
                  className="absolute w-[636px] h-[634px] top-0.5 left-7 z-[999]"
                  alt="Vd"
                  src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/vd.png"
                />
              </div>

              <div className="z-[999]">
                <FrameSubsection />
              </div>

              <Card className={`absolute w-[348px] h-[220px] bottom-12 left-0 rounded-xl overflow-hidden bg-[url(https://c.animaapp.com/mcovvnm5V0Fxtk/img/combined-shape.png)] bg-[100%_100%] border-none z-[999] transition-all duration-700 ease-out will-change-transform will-change-opacity ${showHeroCard ? 'translate-y-0 opacity-100 visible' : 'translate-y-16 opacity-0 invisible'}`}>
                <div className="absolute w-[300px] top-[23px] left-6 font-normal text-white text-lg leading-7">
                  Our proprietary TalonX protocol enables lightning-fast, secure, and
                  reliable delivery - leaving outdated systems behind.
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full h-screen bg-white flex items-center">
          <div className="w-full mx-auto px-12 flex flex-col md:flex-row gap-16 items-center">
            <div className={`relative w-full md:w-[432px] h-[460px] rounded-3xl transition-all duration-700 ease-in-out flex items-center justify-center ${
              delayedBrainBg ? 'bg-[#F09A07]' : 'bg-transparent'
            }`} style={{ zIndex: 30 }}>
              {/* Brain image in center */}
              <img
                className={`w-[380px] h-[380px] object-contain mix-blend-overlay relative transition-all duration-1000 ease-out will-change-transform will-change-opacity ${
                  (yellowBgAnimation.phase === 'square' || yellowBgAnimation.phase === 'transitioning-to-square') && currentSection === 1 
                    ? 'opacity-100 scale-100 visible' 
                    : 'opacity-0 scale-90 invisible'
                }`}
                alt="Brain"
                src={brainImage}
                style={{ zIndex: 30 }}
              />
            </div>

            <div className="flex flex-col gap-8 max-w-[850px]">
              <h2 className="font-heading font-normal text-[#202020] text-6xl leading-[60px]">
                By reimagining how information moves across networks
              </h2>
              <p className="font-normal text-[#565a67] text-2xl leading-9">
                We enable organizations to harness the full potential of their data
                infrastructure with performance that exceeds industry standards by
                orders of magnitude.
              </p>
            </div>
          </div>
        </section>

        {/* Watch Zerthos in Action Section */}
        <section className="w-full h-screen bg-white flex items-center">
          <div className="w-full flex items-center">
            <div className="flex w-full items-stretch h-[500px]">
              {/* Left Column - Text Content with Grey Background */}
              <div className="flex-1 h-full ml-12">
                <div className="bg-[#F8F8F8] rounded-[24px] px-9 py-16 flex flex-col justify-center items-start gap-12 h-full">
                  <h2 className="text-[#202020] text-[60px] font-heading font-normal leading-[60px]">
                    Watch<br/>
                    Zerthos<br/>
                    in action
                  </h2>
                  <p className="text-[#565B68] text-2xl font-normal leading-9">
                    Watch our technology<br/>
                    demo to see how Zerthos transform data transmission with unmatched speed and<br/>
                    security.
                  </p>
                </div>
              </div>

              {/* Middle Column - Stats Card */}
              <div className="flex-1 flex justify-center items-center h-full">
                <div className={`rounded-[24px] p-6 text-[#202020] w-full max-w-[320px] h-full flex flex-col justify-center relative z-10 ${
                  yellowBgAnimation.phase === 'stats' ? 'bg-[#F09A07]' : 'bg-transparent'
                }`}>
                  <div className="text-[48px] font-heading font-bold leading-[48px] mb-1">4x</div>
                  <div className="text-base font-normal mb-4">Faster data transmission</div>
                  <div className="text-[40px] font-heading font-bold leading-[40px] mb-1">99.99%</div>
                  <div className="text-base font-normal mb-4">Uptime guarantee</div>
                  <div className="text-[40px] font-heading font-bold leading-[40px] mb-1">256-bit</div>
                  <div className="text-base font-normal">Military-grade encryption</div>
                </div>
              </div>

              {/* Right Column - Video Demo (Custom Flex, Full Edge) */}
              <div className="flex items-center h-full" style={{flex: '1.75 1 0%'}}>
                <div className="w-full h-full bg-[url(https://c.animaapp.com/mcovvnm5V0Fxtk/img/mask-group.png)] bg-cover bg-center rounded-l-[24px] relative flex items-center justify-center">
                  <Button className="w-[70px] h-[70px] bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg">
                    <PlayIcon className="w-[20px] h-[20px] text-[#F09A07] ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Partners Section */}
        <section className="w-full h-screen bg-white flex items-center">
          <div className="w-full mx-auto px-12 flex items-center">
            {/* Left side - Title */}
            <div className="flex items-center gap-8">
              <img
                className={`w-2 h-[200px] transition-opacity duration-300 ${
                  yellowBgAnimation.phase === 'partners' ? 'opacity-100' : 'opacity-0'
                }`}
                alt="Rectangle"
                src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/rectangle-7.svg"
              />
              <h2 className="font-heading font-normal text-[#202020] text-5xl leading-[52px] whitespace-pre-line">
                Trusted by
                <br />
                industry leaders
              </h2>
            </div>

            {/* Right side - Partner logos */}
            <div className="flex flex-col items-center gap-9 ml-48">
              {/* First row - 3 logos */}
              <div className="flex items-center justify-center gap-20 w-[774px]">
                <img
                  className="h-8"
                  alt="Delta"
                  src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group.png"
                />
                <img
                  className="h-8"
                  alt="ADP"
                  src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-1.png"
                />
                <img
                  className="h-8"
                  alt="Carrier"
                  src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-2.png"
                />
              </div>

              {/* Second row - 5 logos */}
              <div className="flex items-center justify-center gap-12 w-[774px]">
                <img
                  className="h-8"
                  alt="Databricks"
                  src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-3.png"
                />
                <img
                  className="h-8"
                  alt="Discover"
                  src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-2-1.png"
                />
                <img
                  className="h-8"
                  alt="Alaska Airlines"
                  src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-5.png"
                />
                <img
                  className="h-8"
                  alt="Align"
                  src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-6.png"
                />
                <img
                  className="h-8"
                  alt="ADP"
                  src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-7.png"
                />
              </div>

              {/* Third row - 4 logos */}
              <div className="flex items-center justify-center gap-16 w-[774px]">
                <img
                  className="h-8"
                  alt="Delta"
                  src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-8.png"
                />
                <img
                  className="h-8"
                  alt="ADP"
                  src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-9.png"
                />
                <img
                  className="h-8"
                  alt="Carrier"
                  src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-10.png"
                />
                <img
                  className="h-8"
                  alt="3M"
                  src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-1-1.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Zerthos Section */}
        <section className="w-full h-screen bg-white flex items-center justify-center">
          <div className="w-full max-w-6xl mx-auto px-12 text-center">
            {/* Heading removed, handled by shared heading */}
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full h-screen bg-white flex items-center">
          <div className="w-full mx-auto px-12">
            <OverlapWrapperSubsection animate={currentSection === 5} activeFeature={activeFeature} setActiveFeature={setActiveFeature} setFeaturesListHovered={setFeaturesListHovered} />
          </div>
        </section>

        {/* Performance Section */}
        <section className="w-full h-screen bg-[#010101] flex items-center">
          <div className="w-full mx-auto">
            <OverlapGroupWrapperSubsection />
          </div>
        </section>

        {/* Advantage Section */}
        <section className="w-full h-screen bg-white flex items-center">
          <div className="w-full mx-auto px-12">
            <DivWrapperSubsection />
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full h-screen bg-[#202020] flex items-center">
          <div className="w-full mx-auto">
            <DivSubsection />
          </div>
        </section>
      </div>

      

      {/* Animated Yellow Background Overlay */}
      <img
        className={`fixed z-20 ${
          yellowBgAnimation.phase === 'hidden' || yellowBgAnimation.phase === 'square' || yellowBgAnimation.phase === 'stats' ? 'opacity-0' : 'opacity-100'
        } ${
          yellowBgAnimation.phase === 'transitioning-to-square' ? 'yellow-to-square' : ''
        } ${
          yellowBgAnimation.phase === 'transitioning-to-circle' ? 'yellow-to-circle' : ''
        } ${
          yellowBgAnimation.phase === 'transitioning-to-stats' ? 'yellow-to-stats' : ''
        } ${
          yellowBgAnimation.phase === 'transitioning-to-square-from-stats' ? 'yellow-to-square-from-stats' : ''
        } ${
          yellowBgAnimation.phase === 'transitioning-to-partners' ? 'yellow-to-partners' : ''
        } ${
          yellowBgAnimation.phase === 'transitioning-to-stats-from-partners' ? 'yellow-to-stats-from-partners' : ''
        }`}
        alt="Rectangle"
        src={
          yellowBgAnimation.phase === 'transitioning-to-stats' ||
          yellowBgAnimation.phase === 'stats' ||
          yellowBgAnimation.phase === 'transitioning-to-square-from-stats' ||
          yellowBgAnimation.phase === 'transitioning-to-partners' ||
          yellowBgAnimation.phase === 'transitioning-to-stats-from-partners'
            ? newShape
            : "https://c.animaapp.com/mcovvnm5V0Fxtk/img/rectangle-6.svg"
        }
        style={{
          ...((yellowBgAnimation.phase === 'transitioning-to-square' || 
               yellowBgAnimation.phase === 'transitioning-to-circle' ||
               yellowBgAnimation.phase === 'transitioning-to-stats' ||
               yellowBgAnimation.phase === 'transitioning-to-square-from-stats' ||
               yellowBgAnimation.phase === 'transitioning-to-partners' ||
               yellowBgAnimation.phase === 'transitioning-to-stats-from-partners') ? {
            // During animation, let CSS keyframes handle positioning
          } : yellowBgAnimation.phase === 'circle' ? {
            // Section 1 position (bottom-right of viewport)
            width: '720px',
            height: '720px',
            right: '0px',
            bottom: '0px',
            left: 'auto',
            top: 'auto',
            transform: 'scale(1)',
            borderRadius: '0',
            zIndex: -1 // ensure shape is behind hero image
          } : yellowBgAnimation.phase === 'square' ? {
            // Section 2 position (behind brain image)
            width: '432px',
            height: '460px',
            left: '48px',
            top: '50vh',
            right: 'auto',
            bottom: 'auto',
            transform: 'translateY(-50%)',
            borderRadius: '24px',
            zIndex: 0
          } : yellowBgAnimation.phase === 'stats' ? {
            // Section 3 position (behind stats card - middle column)
            width: '320px',
            height: '500px',
            left: '50%',
            top: '50vh',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            borderRadius: '24px'
          } : yellowBgAnimation.phase === 'partners' ? {
            // Section 4 position (left line in Partners section)
            width: '8px',
            height: '200px',
            left: '48px',
            top: '50vh',
            right: 'auto',
            bottom: 'auto',
            transform: 'translateY(-50%)',
            borderRadius: '4px'
          } : {
            // Hidden state
            width: '720px',
            height: '720px',
            right: '0px',
            bottom: '0px',
            left: 'auto',
            top: 'auto',
            transform: 'scale(0)',
            opacity: '0'
          })
        }}
      />

      {/* Shared Animated Heading for Scenes 4 and 5 */}
      <div
        className={`fixed z-50 pointer-events-none transition-all duration-400 ease-in-out
          ${currentSection === 4 ? 'top-1/2 left-0 w-full flex justify-center items-center translate-y-[-50%]' : ''}
          ${currentSection === 5 ? 'top-0 left-0 flex justify-start items-start pl-32 pt-12' : ''}
        `}
        style={{
          transitionProperty: 'all',
        }}
      >
        <h2
          className={`transition-all duration-400 ease-in-out font-heading font-normal
            ${currentSection === 4 ? 'text-[80px] leading-[80px] text-center' : ''}
            ${currentSection === 5 ? 'text-[60px] leading-10 text-left': ''}
            text-[#202020] pointer-events-auto`
          }
          style={{
            width: currentSection === 5 ? '750px' : '100%',
            maxWidth: currentSection === 4 ? '100%' : undefined,
            minWidth: currentSection === 5 ? '320px' : undefined,
            marginTop: currentSection === 5 ? '110px' : undefined,
            lineHeight: currentSection === 5 ? '55px' : undefined,
            letterSpacing: currentSection === 5 ? '0.02em' : '0.02em',


          }}
        >
          What makes Zerthos<br />a game changer
        </h2>
      </div>

      {/* Section Indicators */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-3">
        {sections.map((section, index) => (
          <div key={section.id} className="relative group">
            <button
              onClick={() => scrollToSection(index)}
              className={`relative w-3 h-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-150 ${
                index === currentSection 
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 scale-125 shadow-lg shadow-orange-500/50' 
                  : 'bg-gray-300 hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400 hover:shadow-md hover:shadow-orange-400/30'
              }`}
              aria-label={`Go to ${section.name} section`}
            >
              {/* Inner glow effect */}
              <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                index === currentSection 
                  ? 'bg-white opacity-20 scale-75' 
                  : 'bg-white opacity-0 group-hover:opacity-10 group-hover:scale-75'
              }`} />
              
              {/* Ripple effect on hover */}
              <div className="absolute inset-0 rounded-full bg-orange-400 opacity-0 group-hover:opacity-20 group-hover:scale-[200%] transition-all duration-500 ease-out" />
            </button>
            
            {/* Tooltip */}
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out translate-x-2 group-hover:translate-x-0 pointer-events-none">
              <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
                {section.name}
                {/* Tooltip arrow */}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-gray-900 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
