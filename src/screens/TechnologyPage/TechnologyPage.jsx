import React, { useState, useEffect } from 'react';
import { Header } from '../../components/ui/header';
import { Footer } from '../../components/ui/footer';
import technologyHeroData from '../../assets/technology-hero-img.mp4';
import technologyGoldenGlobe from '../../assets/tech-globe-graphic.svg';
import technologyGradientGraphic from '../../assets/tech-gradient.png';
import technologyFiberGraphic from '../../assets/tech-fiber.png';

export const TechnologyPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const performanceFeatures = [
    {
      title: "Reduce latency and congestion",
      position: "top-left"
    },
    {
      title: "Maximize throughput and delivery fidelity",
      position: "top-right"
    },
    {
      title: "Adapt dynamically to network conditions",
      position: "bottom-left"
    },
    {
      title: "Scale seamlessly across local, cloud, and hybrid environments",
      position: "bottom-right"
    }
  ];

  const environmentFeatures = [
    {
      title: "🚀 Support multiple transform pipelines (text, DNA, UTF, multimedia, binaries, etc.)"
    },
    {
      title: "🚀 Optimize for varying file sizes (from megabytes to terabytes)"
    },
    {
      title: "🚀 Balance speed vs. density - depending on mission need"
    },
    {
      title: "🚀 Adjust for block size, thread count, or header requirements"
    }
  ];

  const industryCards = [
    {
      title: "Healthcare",
      description: "Deliver medical imaging, diagnostics, and EMR data instantly and securely",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <g clip-path="url(#clip0_184_55)">
    <path d="M22.5 18.75V6.75C22.5 3.855 20.145 1.5 17.25 1.5H6.75C3.855 1.5 1.5 3.855 1.5 6.75V29.25C1.5 32.145 3.855 34.5 6.75 34.5H18.75C19.164 34.5 19.5 34.836 19.5 35.25C19.5 35.664 19.164 36 18.75 36H6.75C3.0285 36 0 32.9715 0 29.25V6.75C0 3.0285 3.0285 0 6.75 0H17.25C20.9715 0 24 3.0285 24 6.75V18.75C24 19.164 23.664 19.5 23.25 19.5C22.836 19.5 22.5 19.164 22.5 18.75ZM9.75 21H6.75C6.336 21 6 21.336 6 21.75C6 22.164 6.336 22.5 6.75 22.5H9.75C10.164 22.5 10.5 22.164 10.5 21.75C10.5 21.336 10.164 21 9.75 21ZM17.25 21H14.25C13.836 21 13.5 21.336 13.5 21.75C13.5 22.164 13.836 22.5 14.25 22.5H17.25C17.664 22.5 18 22.164 18 21.75C18 21.336 17.664 21 17.25 21ZM9.75 27H6.75C6.336 27 6 27.336 6 27.75C6 28.164 6.336 28.5 6.75 28.5H9.75C10.164 28.5 10.5 28.164 10.5 27.75C10.5 27.336 10.164 27 9.75 27ZM17.25 27H14.25C13.836 27 13.5 27.336 13.5 27.75C13.5 28.164 13.836 28.5 14.25 28.5H17.25C17.664 28.5 18 28.164 18 27.75C18 27.336 17.664 27 17.25 27ZM12 15C12.414 15 12.75 14.664 12.75 14.25V11.25H15.75C16.164 11.25 16.5 10.914 16.5 10.5C16.5 10.086 16.164 9.75 15.75 9.75H12.75V6.75C12.75 6.336 12.414 6 12 6C11.586 6 11.25 6.336 11.25 6.75V9.75H8.25C7.836 9.75 7.5 10.086 7.5 10.5C7.5 10.914 7.836 11.25 8.25 11.25H11.25V14.25C11.25 14.664 11.586 15 12 15ZM25.5 23.25C25.5 21.183 27.1815 19.5 29.25 19.5C31.3185 19.5 33 21.183 33 23.25C33 25.317 31.3185 27 29.25 27C27.1815 27 25.5 25.317 25.5 23.25ZM27 23.25C27 24.4905 28.0095 25.5 29.25 25.5C30.4905 25.5 31.5 24.4905 31.5 23.25C31.5 22.0095 30.4905 21 29.25 21C28.0095 21 27 22.0095 27 23.25ZM35.976 35.0625C35.22 32.1285 32.391 30 29.25 30C26.109 30 23.28 32.1285 22.524 35.0625C22.422 35.463 22.662 35.8725 23.0625 35.976C23.466 36.0795 23.8725 35.8365 23.976 35.436C24.5535 33.192 26.82 31.4985 29.25 31.4985C31.68 31.4985 33.9465 33.1905 34.524 35.436C34.6125 35.775 34.917 35.9985 35.25 35.9985C35.3115 35.9985 35.3745 35.991 35.4375 35.9745C35.8395 35.871 36.0795 35.463 35.976 35.0625Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_184_55">
      <rect width="36" height="36" fill="white"/>
    </clipPath>
  </defs>
</svg>
      )
    },
    {
      title: "Government & defense",
      description: "Accelerate secure communications and situational data at mission-critical speeds",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <g clip-path="url(#clip0_184_62)">
    <path d="M30 31.5767V19.5002H30.8145C32.0205 19.5002 33 18.5207 33 17.3147C33 16.5152 32.5635 15.7802 31.86 15.3962L19.599 8.70919C19.3275 8.56069 19.041 8.46018 18.75 8.39268V6.98868L23.2185 4.75218C23.7075 4.41469 24 3.84619 24 3.22669C24 2.60719 23.7075 2.03719 23.2185 1.69969C23.181 1.67419 19.725 0.139686 19.5075 0.0751856C18.981 -0.0838144 18.4215 0.0151856 17.9745 0.348186C17.5215 0.685686 17.25 1.22269 17.25 1.78519V8.39268C16.9575 8.46018 16.671 8.56069 16.401 8.70919L4.14 15.3962C3.438 15.7802 3.0015 16.5152 3.0015 17.3147C3.0015 18.5207 3.9825 19.5002 5.187 19.5002H6.0015V31.5767C4.2915 31.9247 3.0015 33.4397 3.0015 35.2502C3.0015 35.6642 3.3375 36.0002 3.7515 36.0002C4.1655 36.0002 4.5015 35.6642 4.5015 35.2502C4.5015 34.0097 5.511 33.0002 6.7515 33.0002H29.2515C30.492 33.0002 31.5015 34.0097 31.5015 35.2502C31.5015 35.6642 31.8375 36.0002 32.2515 36.0002C32.6655 36.0002 33.0015 35.6642 33.0015 35.2502C33.0015 33.4382 31.71 31.9247 30 31.5767ZM18.75 1.78369C18.75 1.65319 18.8325 1.57669 18.8685 1.55119C18.9015 1.52569 19.053 1.50469 19.0755 1.51219C19.23 1.55719 19.3815 1.61269 19.5315 1.68019L22.4025 2.96419C22.4925 3.05269 22.4985 3.18319 22.4985 3.22519C22.4985 3.27019 22.4895 3.43069 22.4565 3.46069L18.7485 5.31018V1.78369H18.75ZM10.5 31.5002H7.5V19.5002H10.5V31.5002ZM15 31.5002H12V19.5002H15V31.5002ZM19.5 31.5002H16.5V19.5002H19.5V31.5002ZM24 31.5002H21V19.5002H24V31.5002ZM25.5 31.5002V19.5002H28.5V31.5002H25.5ZM5.1855 18.0002C4.8075 18.0002 4.5 17.6927 4.5 17.3147C4.5 17.0627 4.6365 16.8332 4.857 16.7117L17.118 10.0247C17.67 9.72618 18.33 9.72618 18.882 10.0247L31.143 16.7117C31.362 16.8332 31.5 17.0627 31.5 17.3147C31.5 17.6927 31.1925 18.0002 30.8145 18.0002H5.1855Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_184_62">
      <rect width="36" height="36" fill="white"/>
    </clipPath>
  </defs>
</svg>
      )
    },
    {
      title: "Finance",
      description: "Speed up market data, analytics, and reporting workflows",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M12 18.0004C12 21.3094 14.691 24.0004 18 24.0004C21.309 24.0004 24 21.3094 24 18.0004C24 14.6914 21.309 12.0004 18 12.0004C14.691 12.0004 12 14.6914 12 18.0004ZM22.5 18.0004C22.5 20.4814 20.481 22.5004 18 22.5004C15.519 22.5004 13.5 20.4814 13.5 18.0004C13.5 15.5194 15.519 13.5004 18 13.5004C20.481 13.5004 22.5 15.5194 22.5 18.0004ZM6 10.5004C6.828 10.5004 7.5 11.1724 7.5 12.0004C7.5 12.8284 6.828 13.5004 6 13.5004C5.172 13.5004 4.5 12.8284 4.5 12.0004C4.5 11.1724 5.172 10.5004 6 10.5004ZM31.5 24.0004C31.5 24.8284 30.828 25.5004 30 25.5004C29.172 25.5004 28.5 24.8284 28.5 24.0004C28.5 23.1724 29.172 22.5004 30 22.5004C30.828 22.5004 31.5 23.1724 31.5 24.0004ZM0 23.2504V12.7504C0 9.02889 3.0285 6.00039 6.75 6.00039H33.9825L30.1155 2.13339C29.823 1.84089 29.823 1.36539 30.1155 1.07289C30.408 0.780391 30.8835 0.780391 31.176 1.07289L35.352 5.24889C35.6865 5.58339 35.9835 6.00039 35.9835 6.75039C35.9835 7.50039 35.6865 7.91739 35.352 8.25189L31.176 12.4279C31.029 12.5749 30.837 12.6469 30.645 12.6469C30.453 12.6469 30.261 12.5734 30.114 12.4279C29.8215 12.1354 29.8215 11.6599 30.114 11.3674L33.981 7.50039H6.75C3.855 7.50039 1.5 9.85539 1.5 12.7504V23.2504C1.5 23.6644 1.164 24.0004 0.75 24.0004C0.336 24.0004 0 23.6644 0 23.2504ZM36 12.7504V23.2504C36 26.9719 32.9715 30.0004 29.25 30.0004H2.0175L5.8845 33.8674C6.177 34.1599 6.177 34.6354 5.8845 34.9279C5.7375 35.0749 5.5455 35.1469 5.3535 35.1469C5.1615 35.1469 4.9695 35.0734 4.8225 34.9279L0.6465 30.7519C0.312 30.4174 0.015 30.0004 0.015 29.2504C0.015 28.5004 0.312 28.0834 0.6465 27.7489L4.8225 23.5729C5.115 23.2804 5.5905 23.2804 5.883 23.5729C6.1755 23.8654 6.1755 24.3409 5.883 24.6334L2.016 28.5004H29.2485C32.1435 28.5004 34.4985 26.1454 34.4985 23.2504V12.7504C34.4985 12.3364 34.8345 12.0004 35.2485 12.0004C35.6625 12.0004 36 12.3364 36 12.7504Z" fill="white"/>
</svg>
      )
    },
    {
      title: "Media & entertainment",
      description: "Move massive 4K/8K video, VFX, and post-production assets globally, in real time",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <g clip-path="url(#clip0_184_144)">
    <path d="M15.75 34.5H7.5V15H8.25C8.664 15 9 14.664 9 14.25C9 13.836 8.664 13.5 8.25 13.5H6C2.691 13.5 0 16.191 0 19.5V30C0 33.309 2.691 36 6 36H15.75C16.164 36 16.5 35.664 16.5 35.25C16.5 34.836 16.164 34.5 15.75 34.5ZM1.5 22.5H6V27H1.5V22.5ZM6 15V21H1.5V19.5C1.5 17.019 3.519 15 6 15ZM1.5 30V28.5H6V34.5C3.519 34.5 1.5 32.481 1.5 30ZM29.25 0H18.75C15.0285 0 12 3.0285 12 6.75V14.25C12 17.9715 15.0285 21 18.75 21H20.25C20.664 21 21 20.664 21 20.25C21 19.836 20.664 19.5 20.25 19.5H18.75C17.397 19.5 16.164 18.981 15.2325 18.1365L23.67 10.7325C23.9715 10.482 24.405 10.5045 24.678 10.776L25.3875 11.493C26.2635 12.3705 27.693 12.3705 28.569 11.493L34.3875 5.6745C34.461 6.0225 34.5 6.3825 34.5 6.7515V14.2515C34.5 14.6655 34.836 15.0015 35.25 15.0015C35.664 15.0015 36 14.6655 36 14.2515V6.75C36 3.0285 32.9715 0 29.25 0ZM27.5085 10.431C27.2175 10.7235 26.742 10.725 26.451 10.434L25.7415 9.717C24.9135 8.8875 23.6085 8.829 22.695 9.591L14.274 16.98C13.7865 16.1835 13.5 15.2505 13.5 14.25V6.75C13.5 3.855 15.855 1.5 18.75 1.5H29.25C31.194 1.5 32.892 2.565 33.7995 4.14L27.5085 10.431ZM19.5 6C19.5 6.828 18.828 7.5 18 7.5C17.172 7.5 16.5 6.828 16.5 6C16.5 5.172 17.172 4.5 18 4.5C18.828 4.5 19.5 5.172 19.5 6ZM32.25 18H27.75C25.6815 18 24 19.683 24 21.75V29.2575C23.373 28.785 22.5945 28.5 21.75 28.5C19.6815 28.5 18 30.183 18 32.25C18 34.317 19.6815 36 21.75 36C23.8185 36 25.5 34.317 25.5 32.25V21.75C25.5 20.5095 26.5095 19.5 27.75 19.5H32.25C33.4905 19.5 34.5 20.5095 34.5 21.75V29.2575C33.873 28.785 33.0945 28.5 32.25 28.5C30.1815 28.5 28.5 30.183 28.5 32.25C28.5 34.317 30.1815 36 32.25 36C34.3185 36 36 34.317 36 32.25V21.75C36 19.683 34.3185 18 32.25 18ZM21.75 34.5C20.5095 34.5 19.5 33.4905 19.5 32.25C19.5 31.0095 20.5095 30 21.75 30C22.9905 30 24 31.0095 24 32.25C24 33.4905 22.9905 34.5 21.75 34.5ZM32.25 34.5C31.0095 34.5 30 33.4905 30 32.25C30 31.0095 31.0095 30 32.25 30C33.4905 30 34.5 31.0095 34.5 32.25C34.5 33.4905 33.4905 34.5 32.25 34.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_184_144">
      <rect width="36" height="36" fill="white"/>
    </clipPath>
  </defs>
</svg>
      )
    },
    {
      title: "AI & machine learning",
      description: "Feed models with vast datasets and updates without downtime",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <g clip-path="url(#clip0_184_151)">
    <path d="M28.5 17.25V27.75C28.5 28.164 28.164 28.5 27.75 28.5C27.336 28.5 27 28.164 27 27.75V17.25C27 16.836 27.336 16.5 27.75 16.5C28.164 16.5 28.5 16.836 28.5 17.25ZM35.25 13.5C34.836 13.5 34.5 13.836 34.5 14.25V29.25C34.5 32.145 32.145 34.5 29.25 34.5H6.75C3.855 34.5 1.5 32.145 1.5 29.25V6.75C1.5 3.855 3.855 1.5 6.75 1.5H21.75C22.164 1.5 22.5 1.164 22.5 0.75C22.5 0.336 22.164 0 21.75 0H6.75C3.0285 0 0 3.0285 0 6.75V29.25C0 32.9715 3.0285 36 6.75 36H29.25C32.9715 36 36 32.9715 36 29.25V14.25C36 13.836 35.664 13.5 35.25 13.5ZM22.2345 6.3255L26.4795 4.719L28.179 0.471C28.407 -0.099 29.343 -0.099 29.5725 0.471L31.275 4.725L35.529 6.4275C35.814 6.5415 36 6.8175 36 7.1235C36 7.4295 35.8125 7.7055 35.529 7.8195L31.275 9.522L29.5725 13.776C29.4585 14.061 29.1825 14.247 28.8765 14.247C28.5705 14.247 28.2945 14.0595 28.1805 13.776L26.475 9.513L22.2105 7.716C21.9285 7.596 21.7455 7.317 21.7515 7.011C21.7575 6.705 21.9495 6.432 22.236 6.324L22.2345 6.3255ZM24.519 7.065L27.345 8.256C27.5295 8.334 27.675 8.4825 27.75 8.6685L28.875 11.481L30 8.6685C30.0765 8.478 30.2265 8.3265 30.4185 8.25L33.231 7.125L30.4185 6C30.228 5.9235 30.0765 5.7735 30 5.5815L28.875 2.769L27.75 5.5815C27.672 5.7765 27.516 5.9295 27.318 6.0045L24.519 7.065ZM16.788 9.3615L22.4655 27.528C22.59 27.9225 22.3695 28.344 21.9735 28.467C21.9 28.491 21.8235 28.5015 21.75 28.5015C21.4305 28.5015 21.135 28.296 21.0345 27.975L19.3245 22.5015H9.177L7.467 27.975C7.3425 28.371 6.921 28.5915 6.528 28.467C6.132 28.344 5.9115 27.9225 6.036 27.528L11.7135 9.3615C12.0675 8.2275 13.065 7.494 14.2515 7.494C15.4395 7.494 16.434 8.2275 16.788 9.3615ZM18.855 21.0015L15.357 9.8085C15.1695 9.2085 14.6625 8.9955 14.25 8.9955C13.8375 8.9955 13.3305 9.21 13.143 9.81L9.645 21.0015H18.855Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_184_151">
      <rect width="36" height="36" fill="white"/>
    </clipPath>
  </defs>
</svg>
      )
    },
    {
      title: "Manufacturing & automotive",
      description: "Transfer designs, software updates, and sensor data without bottlenecks",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <g clip-path="url(#clip0_184_158)">
    <path d="M33.75 31.5H33V16.5C33 14.8755 32.127 13.4625 30.834 12.6705L23.4915 1.899C22.845 0.771 21.642 0 20.25 0C18.183 0 16.5 1.683 16.5 3.75C16.5 3.8625 16.524 3.969 16.533 4.08L16.524 4.086L11.6085 9H7.38897C5.58597 9 3.89097 9.702 2.61597 10.977L0.643474 12.9495C-0.213026 13.806 -0.213026 15.198 0.643474 16.0545C1.49847 16.9095 2.89347 16.9095 3.74847 16.0545L6.08397 13.719C6.22347 13.5795 6.41697 13.5 6.61497 13.5L10.5015 13.404V17.3865C10.5015 17.583 10.422 17.7765 10.2825 17.9175L7.94697 20.253C7.09047 21.1095 7.09047 22.5015 7.94697 23.358C8.37447 23.7855 8.93697 24 9.49947 24C10.062 24 10.6245 23.7855 11.052 23.358L13.0245 21.3855C14.2995 20.1105 15.0015 18.417 15.0015 16.6125V12.393L18.948 8.445L24.057 15.942C24.033 16.128 24 16.3095 24 16.5015V31.5015H23.25C22.0095 31.5015 21 32.511 21 33.7515C21 34.992 22.0095 36.0015 23.25 36.0015H33.75C34.9905 36.0015 36 34.992 36 33.7515C36 32.511 34.9905 31.5 33.75 31.5ZM31.5 16.5C31.5 18.1545 30.1545 19.5 28.5 19.5C26.8455 19.5 25.5 18.1545 25.5 16.5C25.5 14.8455 26.8455 13.5 28.5 13.5C30.1545 13.5 31.5 14.8455 31.5 16.5ZM31.5 19.83V31.5H25.5V19.83C26.298 20.55 27.3435 21 28.5 21C29.6565 21 30.702 20.5485 31.5 19.83ZM13.5 16.611C13.5 18.0135 12.954 19.3305 11.9625 20.3235L9.98997 22.296C9.71847 22.566 9.27747 22.5675 9.00597 22.296C8.87547 22.164 8.80197 21.99 8.80197 21.804C8.80197 21.618 8.87397 21.444 9.00597 21.312L11.3415 18.9765C11.766 18.552 12 17.9865 12 17.385V13.4025C12 12.6285 11.37 11.9985 10.596 11.9985H6.61347C6.01347 11.9985 5.44797 12.2325 5.02197 12.657L2.68647 14.9925C2.42097 15.2535 1.96497 15.2535 1.70247 14.9925C1.43097 14.721 1.43097 14.28 1.70247 14.0085L3.67497 12.036C4.66647 11.0445 5.98497 10.4985 7.38747 10.4985H11.607L13.4985 12.39V16.6095L13.5 16.611ZM14.25 11.019L12.9795 9.7485L17.0505 5.6775C17.1375 5.82 18.087 7.1805 18.087 7.1805L14.25 11.019ZM18 3.7485C18 2.5065 19.008 1.4985 20.25 1.4985C21.492 1.4985 22.5 2.5065 22.5 3.7485C22.5 4.9905 21.492 5.9985 20.25 5.9985C19.008 5.9985 18 4.9905 18 3.7485ZM20.109 7.485C20.157 7.4865 20.202 7.4985 20.25 7.4985C21.885 7.4985 23.2635 6.441 23.7765 4.9785L28.566 12.0045C28.5435 12.0045 28.5225 11.9985 28.5015 11.9985C26.874 11.9985 25.4595 12.8745 24.669 14.172L20.109 7.485ZM33.75 34.4985H23.25C22.836 34.4985 22.5 34.1625 22.5 33.7485C22.5 33.3345 22.836 32.9985 23.25 32.9985H33.75C34.164 32.9985 34.5 33.3345 34.5 33.7485C34.5 34.1625 34.164 34.4985 33.75 34.4985Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_184_158">
      <rect width="36" height="36" fill="white"/>
    </clipPath>
  </defs>
</svg>
      )
    },
    {
      title: "Research & academia",
      description: "Enable collaboration through seamless movement of raw data and simulations",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M23.25 19.5C20.355 19.5 18 21.855 18 24.75C18 26.175 18.5745 27.465 19.5 28.413V34.578C19.5 35.154 19.8435 35.67 20.376 35.8905C20.913 36.114 21.5175 35.991 21.9525 35.556L23.25 34.119L24.5745 35.5845C24.8475 35.856 25.209 36 25.578 36C25.761 36 25.947 35.964 26.124 35.8905C26.655 35.67 27 35.154 27 34.578V28.413C27.9255 27.4665 28.5 26.175 28.5 24.75C28.5 21.855 26.145 19.5 23.25 19.5ZM25.5 34.371L23.8065 32.496C23.523 32.1825 22.977 32.1825 22.6935 32.496L21 34.371V29.4735C21.684 29.802 22.4415 30 23.25 30C24.0585 30 24.816 29.8005 25.5 29.4735V34.371ZM23.25 28.5C21.1815 28.5 19.5 26.817 19.5 24.75C19.5 22.683 21.1815 21 23.25 21C25.3185 21 27 22.683 27 24.75C27 26.817 25.3185 28.5 23.25 28.5ZM28.5 15.75C28.5 16.164 28.164 16.5 27.75 16.5H8.25C7.836 16.5 7.5 16.164 7.5 15.75C7.5 15.336 7.836 15 8.25 15H27.75C28.164 15 28.5 15.336 28.5 15.75ZM14.25 21C14.664 21 15 21.336 15 21.75C15 22.164 14.664 22.5 14.25 22.5H8.25C7.836 22.5 7.5 22.164 7.5 21.75C7.5 21.336 7.836 21 8.25 21H14.25ZM36 9.75V26.25C36 29.3325 33.918 32.0205 30.9375 32.787C30.5325 32.889 30.1275 32.6475 30.024 32.247C29.922 31.845 30.1635 31.437 30.5625 31.3335C32.8815 30.738 34.5 28.6455 34.5 26.2485V9.75C34.5 6.855 32.145 4.5 29.25 4.5H6.75C3.855 4.5 1.5 6.855 1.5 9.75V26.25C1.5 29.145 3.855 31.5 6.75 31.5H15.75C16.164 31.5 16.5 31.836 16.5 32.25C16.5 32.664 16.164 33 15.75 33H6.75C3.0285 33 0 29.9715 0 26.25V9.75C0 6.0285 3.0285 3 6.75 3H29.25C32.9715 3 36 6.0285 36 9.75ZM28.5 9.75C28.5 10.164 28.164 10.5 27.75 10.5H8.25C7.836 10.5 7.5 10.164 7.5 9.75C7.5 9.336 7.836 9 8.25 9H27.75C28.164 9 28.5 9.336 28.5 9.75Z" fill="white"/>
</svg>
      )
    },
    {
      title: "Telecommunications",
      description: "Improve content delivery and internal data pipelines",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <g clip-path="url(#clip0_184_172)">
    <path d="M30 16.5V17.25C30 17.664 29.6641 18 29.25 18C28.8361 18 28.5 17.664 28.5 17.25V16.5C28.5 11.5365 24.4636 7.5 19.5 7.5H18.75C18.3361 7.5 18 7.164 18 6.75C18 6.336 18.3361 6 18.75 6H19.5C25.2901 6 30 10.7115 30 16.5ZM23.25 18C23.6641 18 24 17.664 24 17.25V16.5C24 14.019 21.9811 12 19.5 12H18.75C18.3361 12 18 12.336 18 12.75C18 13.164 18.3361 13.5 18.75 13.5H19.5C21.1546 13.5 22.5 14.8455 22.5 16.5V17.25C22.5 17.664 22.8361 18 23.25 18ZM19.5 0H18.75C18.3361 0 18 0.336 18 0.75C18 1.164 18.3361 1.5 18.75 1.5H19.5C27.771 1.5 34.5 8.229 34.5 16.5V17.25C34.5 17.664 34.8361 18 35.25 18C35.6641 18 36 17.664 36 17.25V16.5C36 7.4025 28.5976 0 19.5 0ZM24.543 28.4115C25.2435 29.112 25.5856 30.0795 25.4821 31.068C25.3771 32.0685 24.8311 32.9565 23.9851 33.5055C21.4186 35.1705 18.4861 35.985 15.5671 35.985C11.5411 35.985 7.53905 34.4385 4.55105 31.4505C-0.60445 26.2935 -1.46845 18.12 2.49605 12.015C3.04505 11.169 3.93455 10.623 4.93355 10.518C5.91605 10.4175 6.88805 10.7565 7.58855 11.457L15.5356 19.404L18.2206 16.719C18.5131 16.4265 18.9886 16.4265 19.2811 16.719C19.5736 17.0115 19.5736 17.487 19.2811 17.7795L16.5961 20.4645L24.543 28.4115ZM23.9896 30.9105C24.0466 30.3765 23.8621 29.8515 23.4825 29.472L6.52805 12.5175C6.19355 12.183 5.74655 12 5.27855 12C4.50005 12 4.05605 12.366 3.75305 12.8325C0.17255 18.3465 0.95255 25.731 5.61155 30.39C10.2691 35.046 17.6536 35.826 23.1691 32.247C23.6341 31.9455 23.9341 31.4595 23.9911 30.9105H23.9896Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_184_172">
      <rect width="36" height="36" fill="white"/>
    </clipPath>
  </defs>
</svg>
      )
    }
  ];

  const cardsPerView = 4;
  const maxIndex = Math.max(0, industryCards.length - cardsPerView);

  const nextCards = () => {
    setCurrentCardIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevCards = () => {
    setCurrentCardIndex(prev => Math.max(prev - 1, 0));
  };


  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Dark with Data Visualization */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
        {/* Data Visualization Background */}
        <div className="absolute inset-0">
        <video 
                src={technologyHeroData} 
                alt="Technology data visualization" 
                className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-1 transform rotate-180 scale-x-[-1]"
                autoPlay
                muted
                loop
              />
        {/* Linear Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent opacity-60 rounded-2xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 lg:h-[388px] flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white leading-tight">
                Redefining the
                <br />
                movement of data
              </h1>
              <p className="text-lg md:text-xl text-white leading-relaxed max-w-5xl">
                At Zerthos, we've engineered something extraordinary — a proprietary protocol that transforms how data moves, scales, and performs. TalonX is our breakthrough in intelligent data transport: enabling near-instant, lossless delivery across any network, system, or device, no matter the size or format.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Lower Content Section - Two Columns */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h2 className="text-2xl md:text-3xl font-inter font-normal text-[#333333] mb-6">
                Files that once took minutes or hours to move now travel in seconds. TalonX dramatically reduces digital weight, without sacrificing quality or fidelity, delivering unmatched performance in both throughput and restoration speed.
              </h2>
              <p className="text-lg text-[#333333] leading-relaxed">
                
              </p>
            </div>
            
            {/* Right Column */}
            <div>
              <h3 className="text-xl md:text-2xl font-heading font-light text-[#666666] leading-relaxed">
                And while traditional solutions hit a ceiling, TalonX can be tuned, manipulated, and evolved — unlocking levels of optimization that no static format or legacy protocol can match.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* A new class of performance Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-6xl font-heading font-normal text-[#333333] mb-6">
              A new class of performance
            </h2>
            <p className="text-lg md:text-2xl text-[#333333] leading-relaxed max-w-4xl">
              TalonX works above the limitations of conventional transfer methods like TCP/IP, UDP, or standard compression libraries. Operating at the application level, it uses proprietary real-time analysis to:
            </p>
          </div>
          
          {/* Golden Arc with Feature Boxes */}
          <div className="relative">
            {/* Golden Arc */}
            <div className="relative h-full mb-12 lg:pt-12">
              <img src={technologyFiberGraphic} alt="Fiber graphic" className="w-full h-full object-cover hidden md:block" />
              
              {/* Feature Boxes positioned around the arc */}
              <div className="flex flex-col items-center md:block md:absolute md:top-0 md:left-1/4 md:transform md:-translate-x-1/2">
                <div className="bg-white rounded-lg p-4 shadow-lg max-w-xs h-20 w-80 opacity-80 mb-4 md:mb-0">
                  <p className="text-[#333333] font-medium">Reduce latency and congestion</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center md:block md:absolute md:top-0 md:right-1/4 md:transform md:translate-x-1/2">
                <div className="bg-white rounded-lg p-4 shadow-lg max-w-xs h-20 w-80 opacity-80 mb-4 md:mb-0">
                  <p className="text-[#333333] font-medium">Maximize throughput and delivery fidelity</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center md:block md:absolute md:top-1/4 md:left-0">
                <div className="bg-white rounded-lg p-4 shadow-lg max-w-xs h-20 w-80 opacity-80 mb-4 md:mb-0">
                  <p className="text-[#333333] font-medium">Adapt dynamically to network conditions</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center md:block md:absolute md:top-1/4 md:right-0">
                <div className="bg-white rounded-lg p-4 shadow-lg max-w-xs h-20 w-80 opacity-80 mb-4 md:mb-0">
                  <p className="text-[#333333] font-medium">Scale seamlessly across local, cloud, and hybrid environments</p>
                </div>
              </div>
              <div className="text-center">
            <p className="text-lg md:text-xl text-[#333333] leading-relaxed max-w-4xl mx-auto lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 pt-8">
              Our internal benchmarks show that TalonX consistently outperforms today's fastest and most efficient data transport algorithms — including LZ4 and Zstd — even under enterprise-grade stress conditions.
            </p>
          </div>
            </div>
          </div>
          
          {/* Concluding Statement */}
          {/* <div className="text-center lg:relative">
            <p className="text-lg md:text-xl text-[#333333] leading-relaxed max-w-4xl mx-auto lg:absolute lg:top-[-100px] lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
              Our internal benchmarks show that TalonX consistently outperforms today's fastest and most efficient data transport algorithms — including LZ4 and Zstd — even under enterprise-grade stress conditions.
            </p>
          </div> */}
        </div>
      </section>

      {/* Precision-tuned for every environment Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-3">
              <h2 className="md:text-6xl font-heading font-normal text-[#333333] mb-6 text-3xl">
                Precision-tuned for every environment
              </h2>
              
              
              {/* Feature Cards Grid */}
              <div className="grid lg:grid-cols-4 gap-32">
                <div className="lg:col-span-2">

                <p className="text-lg md:text-2xl text-[#333333] leading-relaxed mb-8 font-normal">
                TalonX is fully customizable, with modular building blocks that can be adapted to:
              </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                {environmentFeatures.map((feature, index) => (
                  <div key={index} className="bg-orange-50 rounded-xl p-6">
                      <p className="text-[#333333] leading-relaxed font-heading text-2xl">
                        {feature.title}
                      </p>
                  </div>
                ))}
              </div>
                <div className="space-y-4">
                <p className="text-lg text-[#333333] leading-relaxed">
                  This tunable architecture makes TalonX not just fast — but versatile. It can be engineered for use cases that demand raw speed, high-volume archiving, zero-loss restoration, or all three.
                </p>
                <p className="text-lg md:text-2xl text-[#333333] leading-relaxed font-inter font-semibold">
                  Other protocols are static. TalonX is alive — it learns, adjusts, and improves.
                </p>
              </div>
                </div>
                
              <div className="relative hidden lg:flex col-span-2">
              <img 
                src={technologyGradientGraphic} 
                alt="Gradient graphic" 
                className="absolute inset-0 w-full h-full object-fill"
              />
            </div>
              
              
              
            </div>
            </div>
            
            {/* Right - Gradient Graphic */}
            
          </div>
        </div>
      </section>

      {/* Limitless application. Global impact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-6xl font-heading font text-[#333333] mb-6 ">
              Limitless application. Global impact.
            </h2>
            <p className="text-lg md:text-xl text-[#333333] leading-relaxed max-w-4xl">
              TalonX isn't for one industry. It's for every industry that relies on fast, secure, reliable data movement.
            </p>
          </div>
          
          {/* Industry Cards - Mobile Vertical List / Desktop Carousel */}
          <div className="relative">
            {/* Mobile: Vertical List (below md) */}
            <div className="md:hidden space-y-4 mb-8">
              {industryCards.map((card, index) => (
                <div key={index} className="bg-[#FFF6F0] rounded-xl p-6">
                  <div className="flex flex-col items-start">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#E56C15] to-[#E52] rounded-lg flex items-center justify-center mb-8 ">
                      {card.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#333333] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-[#333333] leading-relaxed text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Carousel with Arrows (md and above) */}
            <div className="hidden md:block relative overflow-hidden mb-12">
              {/* Cards Container with Slide Animation */}
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ 
                  transform: `translateX(-${currentCardIndex * (100 / cardsPerView)}%)`,
                  width: `${(industryCards.length / cardsPerView) * 100}%`
                }}
              >
                {industryCards.map((card, index) => (
                  <div 
                    key={index} 
                    className="bg-[#FFF6F0] rounded-xl p-6 flex-shrink-0"
                    style={{ width: `${100 / industryCards.length}%` }}
                  >
                    <div className="flex flex-col items-start">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#E56C15] to-[#E52] rounded-lg flex items-center justify-center mb-11 ">
                        {card.icon}
                      </div>
                      <h3 className="text-lg font-bold text-[#333333] mb-2">
                        {card.title}
                      </h3>
                      <p className="text-[#333333] leading-relaxed text-sm">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows - Desktop Only */}
            <div className="hidden md:flex justify-start space-x-4 my-8">
              <button
                onClick={prevCards}
                disabled={currentCardIndex === 0}
                className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
                  currentCardIndex === 0 
                    ? 'border-gray-300 bg-gray-100 cursor-not-allowed' 
                    : 'border-orange-300 bg-white hover:bg-orange-50 cursor-pointer'
                }`}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke={currentCardIndex === 0 ? "#9CA3AF" : "#F09A07"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={nextCards}
                disabled={currentCardIndex >= maxIndex}
                className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
                  currentCardIndex >= maxIndex 
                    ? 'border-gray-300 bg-gray-100 cursor-not-allowed' 
                    : 'border-orange-500 bg-white hover:bg-orange-50 cursor-pointer'
                }`}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke={currentCardIndex >= maxIndex ? "#9CA3AF" : "#F09A07"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Concluding Statement */}
          <div className="text-left">
            <p className="text-lg md:text-xl text-[#333333] leading-relaxed">
              Wherever data lives — TalonX delivers it faster, leaner, and exactly as it was intended.
            </p>
          </div>
        </div>
      </section>

      {/* Built for what comes next Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-[#333333] leading-tight">
                Built for what
                <br />
                comes next
              </h2>
              <p className="text-lg md:text-xl text-[#333333] leading-relaxed">
                The future won't wait. And your data shouldn't either.
                TalonX isn't just a better engine — it's a new kind of fuel for
                the digital world.
              </p>
              <p className="text-lg md:text-xl text-[#333333] leading-relaxed font-light italic">
                What the world couldn't move, we just did.
              </p>
            </div>
            
            {/* Right - Golden Globe Graphic */}
            <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
              <img 
                src={technologyGoldenGlobe} 
                alt="Golden globe graphic" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}; 