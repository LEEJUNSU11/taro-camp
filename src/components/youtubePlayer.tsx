// src/components/youtubePlayer.tsx

'use client';

import {useEffect, useState} from 'react';

const youtubeLinks = [
  'https://www.youtube.com/embed/H4eTCeWGgVQ', // 심규선 - my little bird
  'https://www.youtube.com/embed/BGn2oo-0Dqc', // Gorillaz - On Melancholy Hill
  'https://www.youtube.com/embed/8evbtRNtz8s', // Snoop Lion - Ashtrays and Heartbreaks ft. Miley Cyrus
  'https://www.youtube.com/embed/VQZXXciZb_c', // 10CM - Gradation(그라데이션)
  'https://www.youtube.com/embed/ddl_m1hwWO4', // Destiny Rogers - Outside
  'https://www.youtube.com/embed/PEz2d49XTk0', // sum 41 - Underclass Hero
  'https://www.youtube.com/embed/g8z-qP34-1Y', // sum 41 - With Me
  'https://www.youtube.com/embed/ekr2nIex040', // ROES - APT.
  'https://www.youtube.com/embed/jhC5wKjgN50', // 제이호 - Smokin' Luv
  'https://www.youtube.com/embed/5IJ2Gy1xf_U', // 태군 - Call Me
];

export default function YoutubePlayer() {
  const [randomLink, setRandomLink] = useState<string>('');
  const [isMobile, setIsMobile] = useState(false);
  //   const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [showPlayer, setShowPlayer] = useState(true); // 플레이어를 보여줄지 여부를 관리하는 상태
  const [key, setKey] = useState(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * youtubeLinks.length);
    setRandomLink(youtubeLinks[randomIndex]);

    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      //   setIsLargeScreen(width > 1280);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [key]);

  return (
    <div>
      {isMobile && (
        <button
          onClick={() => setShowPlayer(!showPlayer)} // 버튼 클릭 시 상태 변경
          className="fixed z-20 top-0 right-0 m-4 p-2 rounded-lg">
          {showPlayer ? '유튜브 접기' : '열기'}
        </button>
      )}
      <div
        className={`fixed z-10 left-0
        ${isMobile ? (showPlayer ? 'w-40 h-40' : 'w-0 h-0 ') : 'w-64 h-64'}
        ${isMobile ? 'bottom-20' : 'bottom-0'} `}>
        <iframe
          className="w-full h-full"
          src={randomLink}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </div>
      {showPlayer && (
        <button
          onClick={() => setKey(prev => prev + 1)}
          className={`fixed z-20 left-0 rounded-lg 
        ${isMobile ? 'bottom-60' : 'bottom-64'}`}>
          랜덤 돌리기
        </button>
      )}
    </div>
  );
}