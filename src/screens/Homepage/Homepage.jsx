import { PlayIcon } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Header } from "../../components/ui/header";

import { DivSubsection } from "./sections/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection";
import { FrameSubsection } from "./sections/FrameSubsection";
import { OverlapGroupWrapperSubsection } from "./sections/OverlapGroupWrapperSubsection";
import { OverlapWrapperSubsection } from "./sections/OverlapWrapperSubsection/OverlapWrapperSubsection";
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
  const [delayedStatsBg, setDelayedStatsBg] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  
  // Immediate scroll blocking using ref to prevent multiple rapid scrolls
  const scrollBlockedRef = useRef(false);
  
  // Track last scroll time to detect momentum/multiple events from same physical scroll
  const lastScrollTimeRef = useRef(0);
  const scrollMomentumThreshold = 2000; // 2 seconds to detect momentum scrolling
  const safetyTimeoutRef = useRef(null); // Track safety timeout to prevent multiple
  
  // Loading bar ref for section transitions
  const loadingBarRef = useRef(null);

  // Log initial component state
  useEffect(() => {
    console.log('Component loaded - Initial state: circle, currentSection:', currentSection);
  }, []);

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    if ((yellowBgAnimation.phase === 'square' || yellowBgAnimation.phase === 'transitioning-to-square') && currentSection === 1) {
      setDelayedBrainBg(true); // Instant transition - no delay
    } else {
      setDelayedBrainBg(false);
    }
  }, [yellowBgAnimation.phase, currentSection]);

  // Delay yellow background for stats section
  useEffect(() => {
    if ((yellowBgAnimation.phase === 'stats' || yellowBgAnimation.phase === 'transitioning-to-stats' || yellowBgAnimation.phase === 'transitioning-to-stats-merge' || yellowBgAnimation.phase === 'transitioning-to-stats-merge-from-partners' || yellowBgAnimation.phase === 'transitioning-to-stats-from-partners') && currentSection === 2) {
      setDelayedStatsBg(true); // Instant transition - no delay
    } else {
      setDelayedStatsBg(false);
    }
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
    
    // IMMEDIATE blocking - prevents rapid scroll events
    scrollBlockedRef.current = true;
    const direction = sectionIndex > currentSection ? 'DOWN' : 'UP';
    console.log('🔒 SCROLL BLOCKED SET - Direction:', direction, 'Time:', new Date().toLocaleTimeString(), 'Milliseconds:', new Date().getMilliseconds());
    
    // Start loading bar for section transition
    if (loadingBarRef.current) {
      loadingBarRef.current.continuousStart();
      console.log('🔄 LOADING BAR STARTED - Direction:', direction);
    }
    
    setIsScrolling(true);
    let animationDuration = (currentSection === 1 && sectionIndex === 2) || (currentSection === 3 && sectionIndex === 2) || (currentSection === 1 && sectionIndex === 0) ? 300 : 400; // 300ms for merging transitions
    let extendedBlockingDuration = (currentSection === 1 && sectionIndex === 2) || (currentSection === 3 && sectionIndex === 2) || (currentSection === 1 && sectionIndex === 0) ? 500 : 800; // Shorter blocking for merging
    
    // Clear any existing safety timeout to prevent multiple unblocks
    if (safetyTimeoutRef.current) {
      clearTimeout(safetyTimeoutRef.current);
      console.log('🧹 CLEARED EXISTING SAFETY TIMEOUT');
    }

    // Handle yellow background animation during transitions
    if (currentSection === 0 && sectionIndex === 1) {
      // Going from section 1 to section 2 - smooth transition
      console.log('Starting Section 1 → Section 2 transition at', new Date().toLocaleTimeString());
      
      // Set animation state FIRST to prevent race condition
      console.log('State: transitioning-to-square | Start Position: right: 0px, bottom: 0px, size: 720x720px');
      setYellowBgAnimation({
        isAnimating: true,
        phase: 'transitioning-to-square'
      });
      
      // Then set the current section to start main section transition
      setCurrentSection(sectionIndex);
      
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
      // Going from section 2 back to section 1 - MERGING transition
      console.log('Starting Section 2 → Section 1 MERGING transition at', new Date().toLocaleTimeString());
      
      // Set animation state FIRST to prevent race condition
      console.log('State: transitioning-to-circle-merge | Start Position: left: 48px, top: 50vh, size: 432x460px');
      setYellowBgAnimation({
        isAnimating: true,
        phase: 'transitioning-to-circle-merge'
      });
      
      // Then set the current section to start main section transition
      setCurrentSection(sectionIndex);
      
      // After animation completes, set final state
      setTimeout(() => {
        console.log('State: circle | Final Position: right: 0px, bottom: 0px, size: 720x720px at', new Date().toLocaleTimeString());
        setYellowBgAnimation({
          isAnimating: false,
          phase: 'circle'
        });
      }, 320); // Slightly shorter to prevent blink
    } else if (currentSection === 1 && sectionIndex === 2) {
      // Going from section 2 to section 3 - MERGING transition to stats
      console.log('Starting Section 2 → Section 3 MERGING transition at', new Date().toLocaleTimeString());
      
      // Set animation state FIRST to prevent race condition
      console.log('State: transitioning-to-stats-merge | Start Position: left: 48px, top: 50vh, size: 432x460px');
      setYellowBgAnimation({
        isAnimating: true,
        phase: 'transitioning-to-stats-merge'
      });
      
      // Then set the current section to start main section transition
      setCurrentSection(sectionIndex);
      
      // After animation completes, set final state
      setTimeout(() => {
        console.log('State: stats | Final Position: center: 50%, top: 50vh, size: 320x500px at', new Date().toLocaleTimeString());
        setYellowBgAnimation({
          isAnimating: false,
          phase: 'stats'
        });
      }, 400); // Reduced to 400ms for faster merging animation
    } else if (currentSection === 2 && sectionIndex === 1) {
      // Going from section 3 back to section 2 - reverse transition
      console.log('Starting Section 3 → Section 2 transition at', new Date().toLocaleTimeString());
      
      // Set animation state FIRST to prevent race condition
      console.log('State: transitioning-to-square | Start Position: center: 50%, top: 50vh, size: 320x500px');
      setYellowBgAnimation({
        isAnimating: true,
        phase: 'transitioning-to-square-from-stats'
      });
      
      // Then set the current section to start main section transition
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
      
      // Set animation state FIRST to prevent race condition
      console.log('State: transitioning-to-partners | Start Position: center: 50%, top: 50vh, size: 320x500px');
      setYellowBgAnimation({
        isAnimating: true,
        phase: 'transitioning-to-partners'
      });
      
      // Then set the current section to start main section transition
      setCurrentSection(sectionIndex);
      
      // After animation completes, set final state
      setTimeout(() => {
        console.log('State: partners | Final Position: left: 48px, top: 50vh, size: 8x200px at', new Date().toLocaleTimeString());
        setYellowBgAnimation({
          isAnimating: false,
          phase: 'partners'
        });
      }, 750); // Reduced from 1050 to 750
    } else if (currentSection === 3 && sectionIndex === 2) {
      // Going from section 4 back to section 3 - MERGING transition to stats
      console.log('Starting Section 4 → Section 3 MERGING transition at', new Date().toLocaleTimeString());
      
      // Set animation state FIRST to prevent race condition
      console.log('State: transitioning-to-stats-merge-from-partners | Start Position: left: 48px, top: 50vh, size: 8x200px');
      setYellowBgAnimation({
        isAnimating: true,
        phase: 'transitioning-to-stats-merge-from-partners'
      });
      
      // Then set the current section to start main section transition
      setCurrentSection(sectionIndex);
      
      // After animation completes, set final state
      setTimeout(() => {
        console.log('State: stats | Final Position: center: 50%, top: 50vh, size: 320x500px at', new Date().toLocaleTimeString());
        setYellowBgAnimation({
          isAnimating: false,
          phase: 'stats'
        });
      }, 400); // Reduced to 400ms for faster merging animation
    } else {
      // For all other transitions, set current section immediately
      setCurrentSection(sectionIndex);
    }
    
    // Reset visual animation state after animation completes
    setTimeout(() => {
      setIsScrolling(false);
      setYellowBgAnimation(prev => ({
        ...prev,
        isAnimating: false
      }));
      
      // Complete loading bar when animation is done
      if (loadingBarRef.current) {
        loadingBarRef.current.complete();
        console.log('✅ LOADING BAR COMPLETED - Direction:', direction);
      }
    }, animationDuration); // match animation duration for visual state
    
    // Extended blocking to handle scroll momentum - unblock after longer duration
    setTimeout(() => {
      scrollBlockedRef.current = false;
      console.log('🔓 SCROLL UNBLOCKED (Extended) - Direction:', direction, 'Duration:', extendedBlockingDuration + 'ms', 'Time:', new Date().toLocaleTimeString(), 'Milliseconds:', new Date().getMilliseconds());
    }, extendedBlockingDuration); // Extended blocking to prevent momentum scrolling
    
    // Safety timeout to ensure blocking never gets stuck - only set once
    safetyTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
      scrollBlockedRef.current = false;
      safetyTimeoutRef.current = null;
      console.log('🔓 SAFETY UNBLOCK - Time:', new Date().toLocaleTimeString(), 'Milliseconds:', new Date().getMilliseconds());
    }, 1500); // 1.5 second safety net (longer than extended blocking)
  };

  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;
    const SCROLL_THRESHOLD = 15; // Slightly higher threshold to reduce sensitivity
    
    // Set scrolled state based on current section
    setIsScrolled(currentSection > 0);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    const handleWheel = (e) => {
      e.preventDefault();
      
      const currentTime = Date.now();
      const timeSinceLastScroll = currentTime - lastScrollTimeRef.current;
      
      console.log('🎯 WHEEL EVENT - Time:', new Date().toLocaleTimeString(), 'Milliseconds:', new Date().getMilliseconds(), 'BlockedRef:', scrollBlockedRef.current, 'isScrolling:', isScrolling, 'TimeSinceLast:', timeSinceLastScroll + 'ms');
      
      // IMMEDIATE check - prevents rapid scroll events before state updates
      if (scrollBlockedRef.current || isScrolling) {
        console.log('❌ WHEEL BLOCKED - Reason:', scrollBlockedRef.current ? 'scrollBlockedRef' : 'isScrolling');
        return;
      }
      
      const delta = e.deltaY;
      
      // Check if scroll exceeds minimal threshold
      if (Math.abs(delta) < SCROLL_THRESHOLD) {
        console.log('❌ WHEEL THRESHOLD NOT MET - Delta:', delta, 'Threshold:', SCROLL_THRESHOLD);
        return;
      }
      
      console.log('📊 THRESHOLD CHECK - Delta:', delta, 'BaseThreshold:', SCROLL_THRESHOLD, 'TimeSinceLast:', timeSinceLastScroll + 'ms');
      
      // Smart momentum detection - stricter in first 800ms, then allow normal scrolling
      if (timeSinceLastScroll < 800) {
        // Very strict momentum detection for first 800ms (during animation + cooldown)
        const momentumThreshold = SCROLL_THRESHOLD * 5; // 5x higher threshold for momentum
        if (Math.abs(delta) < momentumThreshold) {
          console.log('❌ MOMENTUM THRESHOLD NOT MET - Delta:', delta, 'MomentumThreshold:', momentumThreshold, 'TimeSinceLast:', timeSinceLastScroll + 'ms');
          return;
        }
        console.log('⚠️ MOMENTUM DETECTED - Delta:', delta, 'exceeded threshold:', momentumThreshold, 'TimeSinceLast:', timeSinceLastScroll + 'ms');
      } else if (timeSinceLastScroll < scrollMomentumThreshold) {
        // Moderate momentum detection for 800ms-2000ms window
        const moderateThreshold = SCROLL_THRESHOLD * 2; // 2x higher threshold
        if (Math.abs(delta) < moderateThreshold) {
          console.log('❌ MODERATE MOMENTUM THRESHOLD NOT MET - Delta:', delta, 'ModerateThreshold:', moderateThreshold, 'TimeSinceLast:', timeSinceLastScroll + 'ms');
          return;
        }
        console.log('⚠️ MODERATE MOMENTUM DETECTED - Delta:', delta, 'exceeded threshold:', moderateThreshold, 'TimeSinceLast:', timeSinceLastScroll + 'ms');
      }
      
      // Update last scroll time
      lastScrollTimeRef.current = currentTime;
      
      const shouldScrollDown = delta > 0;
      const shouldScrollUp = delta < 0;
      
      console.log('✅ WHEEL PROCESSED - Delta:', delta, 'Direction:', delta > 0 ? 'Down' : 'Up', 'TimeSinceLast:', timeSinceLastScroll + 'ms');
      
      // Scene 5: Feature-by-feature scroll
      if (currentSection === 5) {
        if (isFeatureScrolling) return;
        if (featuresListHovered) {
          // Only allow scene scroll if at last/first feature
          if (shouldScrollDown && activeFeature === featuresCount - 1) {
            console.log('📱 FEATURE SCROLL DOWN - Section:', currentSection, '→', currentSection + 1, '(Last Feature)');
            scrollToSection(currentSection + 1);
          } else if (shouldScrollUp && activeFeature === 0) {
            console.log('📱 FEATURE SCROLL UP - Section:', currentSection, '→', currentSection - 1, '(First Feature)');
            scrollToSection(currentSection - 1);
          }
          return;
        }
        
        if (shouldScrollDown) {
          // Scroll down
          if (activeFeature < featuresCount - 1) {
            console.log('📱 FEATURE SCROLL - Feature:', activeFeature, '→', activeFeature + 1);
            setActiveFeature((prev) => prev + 1);
            setIsFeatureScrolling(true);
            setTimeout(() => setIsFeatureScrolling(false), 400);
          } else {
            console.log('📱 FEATURE SCROLL DOWN - Section:', currentSection, '→', currentSection + 1, '(Last Feature)');
            scrollToSection(currentSection + 1);
          }
        } else if (shouldScrollUp) {
          // Scroll up
          if (activeFeature > 0) {
            console.log('📱 FEATURE SCROLL - Feature:', activeFeature, '→', activeFeature - 1);
            setActiveFeature((prev) => prev - 1);
            setIsFeatureScrolling(true);
            setTimeout(() => setIsFeatureScrolling(false), 400);
          } else {
            console.log('📱 FEATURE SCROLL UP - Section:', currentSection, '→', currentSection - 1, '(First Feature)');
            scrollToSection(currentSection - 1);
          }
        }
        return;
      }
      
      // GUARANTEED single-section movement for all other scenes
      if (shouldScrollDown && currentSection < sections.length - 1) {
        console.log('🎯 WHEEL SCROLL DOWN - Section:', currentSection, '→', currentSection + 1);
        scrollToSection(currentSection + 1);
      } else if (shouldScrollUp && currentSection > 0) {
        console.log('🎯 WHEEL SCROLL UP - Section:', currentSection, '→', currentSection - 1);
        scrollToSection(currentSection - 1);
      }
    };

    const handleKeyDown = (e) => {
      if (scrollBlockedRef.current || isScrolling) return;
      
      const currentTime = Date.now();
      const timeSinceLastScroll = currentTime - lastScrollTimeRef.current;
      
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        lastScrollTimeRef.current = currentTime;
        console.log('⌨️ KEYBOARD DOWN - Section:', currentSection, '→', currentSection + 1, 'TimeSinceLast:', timeSinceLastScroll + 'ms');
        scrollToSection(currentSection + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        lastScrollTimeRef.current = currentTime;
        console.log('⌨️ KEYBOARD UP - Section:', currentSection, '→', currentSection - 1, 'TimeSinceLast:', timeSinceLastScroll + 'ms');
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
      if (scrollBlockedRef.current || isScrolling) return;
      
      const currentTime = Date.now();
      const timeSinceLastScroll = currentTime - lastScrollTimeRef.current;
      
      touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      
      if (Math.abs(deltaY) > 30) { // Reduced from 60 to 30 for better responsiveness
        lastScrollTimeRef.current = currentTime;
        
        if (deltaY > 0 && currentSection < sections.length - 1) {
          // Swipe up (scroll down)
          console.log('👆 TOUCH DOWN - Section:', currentSection, '→', currentSection + 1, 'TimeSinceLast:', timeSinceLastScroll + 'ms');
          scrollToSection(currentSection + 1);
        } else if (deltaY < 0 && currentSection > 0) {
          // Swipe down (scroll up)
          console.log('👆 TOUCH UP - Section:', currentSection, '→', currentSection - 1, 'TimeSinceLast:', timeSinceLastScroll + 'ms');
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
      {/* Loading Bar for Section Transitions */}
      <LoadingBar 
        color="linear-gradient(90deg, #FFD700 0%, #F09A07 50%, #FF6B35 100%)" 
        ref={loadingBarRef} 
        height={4}
        shadow={true}
        transitionTime={300}
        className="md:h-3 sm:h-2"
      />
      
      {/* Sticky Header */}
      <Header isScrolled={isScrolled} />

      {/* Sections Container */}
      <div 
        className="w-full h-full transition-transform duration-500 ease-in-out z-30"
        style={{ 
          transform: `translateY(-${currentSection * 100}vh)`,
          height: `${sections.length * 100}vh`
        }}
      >
        {/* Hero Section */}
        <section className="w-full h-screen bg-white flex items-end pt-20 sm:pt-16 md:pt-0">
          <div className="w-full mx-auto pl-12 md:pl-8 sm:pl-4 pr-0 relative">
            <div className="relative w-full h-[720px] md:h-[600px] sm:h-[500px]">

                {/* Duplicate static yellow shape for hero section - hidden on mobile */}
                {currentSection === 0 && !isScrolling && (
                  <img
                    className="absolute w-[720px] h-[720px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] xl:w-[720px] xl:h-[720px] right-0 bottom-0 z-0 hidden sm:hidden md:block"
                    alt="Yellow Shape"
                    src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/rectangle-6.svg"
                  />
                )}

              {/* Hero Image - hidden on mobile, reduced size on tablet */}
              <div className={`absolute w-[779px] h-[636px] md:w-[400px] md:h-[320px] lg:w-[600px] lg:h-[490px] xl:w-[779px] xl:h-[636px] bottom-0 md:bottom-0 lg:bottom-0 xl:bottom-0 right-[30px] md:right-[16px] lg:right-[20px] xl:right-[30px] bg-[url(https://c.animaapp.com/mcovvnm5V0Fxtk/img/adobestock-961893622-2.png)] bg-cover bg-[50%_50%] z-[999] transition-all duration-700 ease-out will-change-transform will-change-opacity hidden sm:hidden md:block ${showHeroImage ? 'translate-y-0 opacity-100 visible' : 'translate-y-16 opacity-0 invisible'}`}>
                <img
                  className="absolute w-[636px] h-[634px] md:w-[320px] md:h-[318px] lg:w-[490px] lg:h-[488px] xl:w-[636px] xl:h-[634px] top-0.5 left-7 md:left-4 lg:left-6 xl:left-7 z-[999]"
                  alt="Vd"
                  src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/vd.png"
                />
              </div>

              <div className="z-[999] md:relative md:z-auto">
                <FrameSubsection />
              </div>

              {/* Info Card - hidden on mobile, reduced size on tablet */}
              <Card className={`absolute w-[348px] h-[220px] md:w-[240px] md:h-[160px] lg:w-[280px] lg:h-[180px] xl:w-[348px] xl:h-[220px] bottom-12 md:bottom-12 lg:bottom-12 xl:bottom-12 left-0 md:left-4 lg:left-4 xl:left-0 rounded-xl overflow-hidden bg-[url(https://c.animaapp.com/mcovvnm5V0Fxtk/img/combined-shape.png)] bg-[100%_100%] border-none z-[999] transition-all duration-700 ease-out will-change-transform will-change-opacity hidden sm:hidden md:block ${showHeroCard ? 'translate-y-0 opacity-100 visible' : 'translate-y-16 opacity-0 invisible'}`}>
                <div className="absolute w-[300px] md:w-[200px] lg:w-[240px] xl:w-[300px] top-[23px] md:top-[16px] lg:top-[20px] xl:top-[23px] left-6 md:left-4 lg:left-5 xl:left-6 font-normal text-white text-lg md:text-sm lg:text-base xl:text-lg leading-7 md:leading-5 lg:leading-6 xl:leading-7">
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
            <div className={`relative w-full md:w-[432px] h-[460px] rounded-3xl transition-all duration-700 ease-in-out flex items-center justify-center hidden md:flex ${
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

            <div className="flex flex-col gap-8 max-w-[850px] md:max-w-[850px] sm:max-w-full text-center md:text-left xs-mt-12">
              <h2 className="font-heading font-normal text-[#202020] text-6xl xs:text-5xl md:text-6xl sm:text-4xl leading-[60px] md:leading-[60px] sm:leading-[48px]">
                By reimagining how information moves across networks
              </h2>
              <p className="font-normal text-[#565a67] text-2xl xs:text-xl md:text-2xl sm:text-lg leading-9 md:leading-9 sm:leading-7">
                We enable organizations to harness the full potential of their data
                infrastructure with performance that exceeds industry standards by
                orders of magnitude.
              </p>
            </div>
          </div>
        </section>

        {/* Watch Zerthos in Action Section */}
        <section className="w-full h-screen bg-white flex items-center">
          <div className="w-full flex items-center px-4 sm:px-6 md:px-8 lg:px-12">
            {/* Desktop Layout - 3 columns */}
            <div className="hidden xl:flex w-full items-stretch h-[500px]">
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
                  delayedStatsBg ? 'bg-[#F09A07]' : 'bg-transparent'
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

            {/* Tablet Layout - 3 columns with reduced sizes */}
            <div className="hidden md:flex xl:hidden w-full items-stretch h-[400px] gap-4">
              {/* Left Column - Text Content with Grey Background */}
              <div className="flex-1 h-full">
                <div className="bg-[#F8F8F8] rounded-[20px] px-6 py-12 flex flex-col justify-center items-start gap-8 h-full">
                  <h2 className="text-[#202020] text-[40px] font-heading font-normal leading-[40px]">
                    Watch<br/>
                    Zerthos<br/>
                    in action
                  </h2>
                  <p className="text-[#565B68] text-lg font-normal leading-7">
                    Watch our technology<br/>
                    demo to see how Zerthos transform data transmission with unmatched speed and<br/>
                    security.
                  </p>
                </div>
              </div>

              {/* Middle Column - Stats Card */}
              <div className="flex-1 flex justify-center items-center h-full">
                <div className={`rounded-[20px] p-4 text-[#202020] w-full max-w-[240px] h-full flex flex-col justify-center relative z-10 ${
                  delayedStatsBg ? 'bg-[#F09A07]' : 'bg-transparent'
                }`}>
                  <div className="text-[32px] font-heading font-bold leading-[32px] mb-1">4x</div>
                  <div className="text-sm font-normal mb-3">Faster data transmission</div>
                  <div className="text-[28px] font-heading font-bold leading-[28px] mb-1">99.99%</div>
                  <div className="text-sm font-normal mb-3">Uptime guarantee</div>
                  <div className="text-[28px] font-heading font-bold leading-[28px] mb-1">256-bit</div>
                  <div className="text-sm font-normal">Military-grade encryption</div>
                </div>
              </div>

              {/* Right Column - Video Demo (Custom Flex, Full Edge) */}
              <div className="flex items-center h-full" style={{flex: '1.75 1 0%'}}>
                <div className="w-full h-full bg-[url(https://c.animaapp.com/mcovvnm5V0Fxtk/img/mask-group.png)] bg-cover bg-center rounded-[20px] relative flex items-center justify-center">
                  <Button className="w-[60px] h-[60px] bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg">
                    <PlayIcon className="w-[18px] h-[18px] text-[#F09A07] ml-1" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Mobile Layout - 2 columns vertical, hide video */}
            <div className="flex md:hidden w-full flex-col gap-6 h-full justify-center">
              {/* Top Row - Text Content with Grey Background */}
              <div className="flex-1 h-[calc(50vh-120px)]">
                <div className="bg-[#F8F8F8] rounded-[20px] px-6 py-8 flex flex-col justify-center items-start gap-6 h-full">
                  <h2 className="text-[#202020] text-[32px] font-heading font-normal leading-[32px]">
                    Watch<br/>
                    Zerthos<br/>
                    in action
                  </h2>
                  <p className="text-[#565B68] text-base font-normal leading-6">
                    Watch our technology demo to see how Zerthos transform data transmission with unmatched speed and security.
                  </p>
                </div>
              </div>

              {/* Bottom Row - Stats Card */}
              <div className="flex-1 h-[calc(50vh-120px)] flex justify-center items-center">
                <div className={`rounded-[20px] p-4 text-[#202020] w-full max-w-[280px] h-full flex flex-col justify-center relative z-10 ${
                  delayedStatsBg ? 'bg-[#F09A07]' : 'bg-transparent'
                }`}>
                  <div className="text-[28px] font-heading font-bold leading-[28px] mb-1">4x</div>
                  <div className="text-sm font-normal mb-3">Faster data transmission</div>
                  <div className="text-[24px] font-heading font-bold leading-[24px] mb-1">99.99%</div>
                  <div className="text-sm font-normal mb-3">Uptime guarantee</div>
                  <div className="text-[24px] font-heading font-bold leading-[24px] mb-1">256-bit</div>
                  <div className="text-sm font-normal">Military-grade encryption</div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Partners Section */}
        <section className="w-full h-screen bg-white flex items-center">
          <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            {/* Desktop Layout - Original design */}
            <div className="hidden xl:flex w-full items-center">
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

            {/* Tablet Layout - Reduced sizes */}
            <div className="hidden md:flex xl:hidden w-full items-center">
              {/* Left side - Title */}
              <div className="flex items-center gap-6">
                <img
                  className={`w-1.5 h-[150px] transition-opacity duration-300 ${
                    yellowBgAnimation.phase === 'partners' ? 'opacity-100' : 'opacity-0'
                  }`}
                  alt="Rectangle"
                  src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/rectangle-7.svg"
                />
                <h2 className="font-heading font-normal text-[#202020] text-4xl leading-[44px] whitespace-pre-line">
                  Trusted by
                  <br />
                  industry leaders
                </h2>
              </div>

              {/* Right side - Partner logos */}
              <div className="flex flex-col items-center gap-6 ml-12 md:ml-16 lg:ml-24">
                {/* First row - 3 logos */}
                <div className="flex items-center justify-center gap-8 md:gap-10 lg:gap-12 w-full max-w-[400px] md:max-w-[450px] lg:max-w-[500px]">
                  <img
                    className="h-6"
                    alt="Delta"
                    src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group.png"
                  />
                  <img
                    className="h-6"
                    alt="ADP"
                    src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-1.png"
                  />
                  <img
                    className="h-6"
                    alt="Carrier"
                    src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-2.png"
                  />
                </div>

                {/* Second row - 5 logos */}
                <div className="flex items-center justify-center gap-6 md:gap-7 lg:gap-8 w-full max-w-[400px] md:max-w-[450px] lg:max-w-[500px] flex-wrap">
                  <img
                    className="h-6"
                    alt="Databricks"
                    src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-3.png"
                  />
                  <img
                    className="h-6"
                    alt="Discover"
                    src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-2-1.png"
                  />
                  <img
                    className="h-6"
                    alt="Alaska Airlines"
                    src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-5.png"
                  />
                  <img
                    className="h-6"
                    alt="Align"
                    src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-6.png"
                  />
                  <img
                    className="h-6"
                    alt="ADP"
                    src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-7.png"
                  />
                </div>

                {/* Third row - 4 logos */}
                <div className="flex items-center justify-center gap-8 md:gap-9 lg:gap-10 w-full max-w-[400px] md:max-w-[450px] lg:max-w-[500px]">
                  <img
                    className="h-6"
                    alt="Delta"
                    src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-8.png"
                  />
                  <img
                    className="h-6"
                    alt="ADP"
                    src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-9.png"
                  />
                  <img
                    className="h-6"
                    alt="Carrier"
                    src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-10.png"
                  />
                  <img
                    className="h-6"
                    alt="3M"
                    src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-1-1.png"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Layout - Vertical stack */}
            <div className="flex md:hidden w-full flex-col items-center gap-8 h-full justify-center">
              {/* Title Section */}
              <div className="flex items-center gap-4">
                <img
                  className={`w-1 h-[100px] transition-opacity duration-300 ${
                    yellowBgAnimation.phase === 'partners' ? 'opacity-100' : 'opacity-0'
                  }`}
                  alt="Rectangle"
                  src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/rectangle-7.svg"
                />
                <h2 className="font-heading font-normal text-[#202020] text-3xl leading-[36px] whitespace-pre-line text-center">
                  Trusted by
                  <br />
                  industry leaders
                </h2>
              </div>

              {/* Partner logos - 2 columns for mobile */}
              <div className="flex flex-col items-center gap-4 w-full">
                {/* First row - 3 logos */}
                <div className="flex items-center justify-center gap-4 w-full">
                  <img
                    className="h-4"
                    alt="Delta"
                    src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group.png"
                  />
                  <img
                    className="h-4"
                    alt="ADP"
                    src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-1.png"
                  />
                  <img
                    className="h-4"
                    alt="Carrier"
                    src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-2.png"
                  />
                </div>

                {/* Second row - 5 logos */}
                <div className="flex items-center justify-center gap-3 w-full flex-wrap">
                  <img
                    className="h-4"
                    alt="Databricks"
                    src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-3.png"
                  />
                  <img
                    className="h-4"
                    alt="Discover"
                    src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-2-1.png"
                  />
                  <img
                    className="h-4"
                    alt="Alaska Airlines"
                    src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-5.png"
                  />
                  <img
                    className="h-4"
                    alt="Align"
                    src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-6.png"
                  />
                  <img
                    className="h-4"
                    alt="ADP"
                    src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-7.png"
                  />
                </div>

                {/* Third row - 4 logos */}
                <div className="flex items-center justify-center gap-4 w-full">
                  <img
                    className="h-4"
                    alt="Delta"
                    src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-8.png"
                  />
                  <img
                    className="h-4"
                    alt="ADP"
                    src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-9.png"
                  />
                  <img
                    className="h-4"
                    alt="Carrier"
                    src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-10.png"
                  />
                  <img
                    className="h-4"
                    alt="3M"
                    src="https://c.animaapp.com/mcovvnm5V0Fxtk/img/group-1-1.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Zerthos Section */}
        <section className="w-full h-screen bg-white flex items-center justify-center">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
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
          <div className="w-full mx-auto sm:px-12">
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
        className={`fixed z-20 will-change-transform will-change-opacity hidden md:block ${
          yellowBgAnimation.phase === 'hidden' || yellowBgAnimation.phase === 'square' || yellowBgAnimation.phase === 'stats' || yellowBgAnimation.phase === 'partners' ? 'opacity-0' : 'opacity-100'
        } ${
          yellowBgAnimation.phase === 'transitioning-to-square' ? 'yellow-to-square' : ''
        } ${
          yellowBgAnimation.phase === 'transitioning-to-circle' ? 'yellow-to-circle' : ''
        } ${
          yellowBgAnimation.phase === 'transitioning-to-circle-merge' ? 'yellow-merge-to-circle' : ''
        } ${
          yellowBgAnimation.phase === 'transitioning-to-stats' ? 'yellow-to-stats' : ''
        } ${
          yellowBgAnimation.phase === 'transitioning-to-stats-merge' ? 'yellow-merge-to-stats' : ''
        } ${
          yellowBgAnimation.phase === 'transitioning-to-square-from-stats' ? 'yellow-to-square-from-stats' : ''
        } ${
          yellowBgAnimation.phase === 'transitioning-to-partners' ? 'yellow-to-partners' : ''
        } ${
          yellowBgAnimation.phase === 'transitioning-to-stats-from-partners' ? 'yellow-to-stats-from-partners' : ''
        } ${
          yellowBgAnimation.phase === 'transitioning-to-stats-merge-from-partners' ? 'yellow-merge-to-stats-from-partners' : ''
        }`}
        alt="Rectangle"
        src={
          yellowBgAnimation.phase === 'transitioning-to-stats' ||
          yellowBgAnimation.phase === 'transitioning-to-stats-merge' ||
          yellowBgAnimation.phase === 'transitioning-to-stats-merge-from-partners' ||
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
               yellowBgAnimation.phase === 'transitioning-to-circle-merge' ||
               yellowBgAnimation.phase === 'transitioning-to-stats' ||
               yellowBgAnimation.phase === 'transitioning-to-stats-merge' ||
               yellowBgAnimation.phase === 'transitioning-to-stats-merge-from-partners' ||
               yellowBgAnimation.phase === 'transitioning-to-square-from-stats' ||
               yellowBgAnimation.phase === 'transitioning-to-partners' ||
               yellowBgAnimation.phase === 'transitioning-to-stats-from-partners') ? {
            // During animation, let CSS keyframes handle positioning
          } : yellowBgAnimation.phase === 'circle' ? {
            // Section 1 position (bottom-right of viewport) - responsive
            width: windowWidth < 768 ? '0px' : windowWidth < 1024 ? '400px' : windowWidth < 1280 ? '600px' : '720px',
            height: windowWidth < 768 ? '0px' : windowWidth < 1024 ? '400px' : windowWidth < 1280 ? '600px' : '720px',
            right: '0px',
            bottom: '0px',
            left: 'auto',
            top: 'auto',
            transform: 'scale(1)',
            borderRadius: '0',
            zIndex: -1, // ensure shape is behind hero image
            display: windowWidth < 768 ? 'none' : 'block'
          } : yellowBgAnimation.phase === 'square' ? {
            // Section 2 position (behind brain image) - responsive
            width: windowWidth < 768 ? '300px' : windowWidth < 1024 ? '350px' : '432px',
            height: windowWidth < 768 ? '320px' : windowWidth < 1024 ? '380px' : '460px',
            left: windowWidth < 768 ? '16px' : windowWidth < 1024 ? '32px' : '48px',
            top: '50vh',
            right: 'auto',
            bottom: 'auto',
            transform: 'translateY(-50%)',
            borderRadius: '24px',
            zIndex: 0
          } : yellowBgAnimation.phase === 'stats' ? {
            // Section 3 position (behind stats card - middle column) - responsive
            width: windowWidth < 768 ? '280px' : windowWidth < 1024 ? '300px' : '320px',
            height: windowWidth < 768 ? '400px' : windowWidth < 1024 ? '450px' : '500px',
            left: '50%',
            top: '50vh',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            borderRadius: '24px'
          } : yellowBgAnimation.phase === 'partners' ? {
            // Section 4 position (left line in Partners section) - responsive
            width: '8px',
            height: windowWidth < 768 ? '150px' : windowWidth < 1024 ? '180px' : '200px',
            left: windowWidth < 768 ? '16px' : windowWidth < 1024 ? '32px' : '48px',
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

      {/* Shared Animated Heading for Scene 4 only */}
      <div
        className={`fixed z-50 pointer-events-none transition-all duration-400 ease-in-out
          ${currentSection === 4 ? 'top-1/2 left-0 w-full flex justify-center items-center translate-y-[-50%]' : ''}
        `}
        style={{
          transitionProperty: 'all',
        }}
      >
        <h2
          className={`transition-all duration-400 ease-in-out font-heading font-normal
            ${currentSection === 4 ? 'md:text-[60px] xs:text-[40px] xs:p-4 sm:text-[40px] xs:leading-[40px] leading-[80px] md:leading-[60px] sm:leading-[40px] text-center' : ''}
            text-[#202020] pointer-events-auto`
          }
          style={{
            maxWidth: currentSection === 4 ? '100%' : undefined,
            letterSpacing: '0.02em',
          }}
        >
          What makes Zerthos<br />a game changer
        </h2>
      </div>

      {/* Section Indicators */}
      <div className="fixed right-8 md:right-6 sm:right-4 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-3 md:gap-2 sm:gap-2 sm:top-[calc(50%+40px)] md:top-1/2 hidden sm:block">
        {sections.map((section, index) => (
          <div key={section.id} className="relative group">
            <button
              onClick={() => scrollToSection(index)}
              className={`relative w-3 h-3 md:w-2.5 md:h-2.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-150 ${
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
            <div className="absolute right-6 md:right-5 sm:right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out translate-x-2 group-hover:translate-x-0 pointer-events-none">
              <div className="bg-gray-900 text-white px-3 py-2 md:px-2 md:py-1.5 sm:px-2 sm:py-1 rounded-lg text-sm md:text-xs sm:text-xs font-medium whitespace-nowrap shadow-lg">
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
