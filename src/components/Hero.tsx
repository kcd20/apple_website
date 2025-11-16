import { useEffect, useRef, type JSX } from 'react';

const Hero = (): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);
  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img alt="MacBook Title" src="title.png" />
      </div>
      <video ref={videoRef} autoPlay muted playsInline src="/videos/hero.mp4" />

      <button type="button">Buy</button>
      <p>From $1599 or $133/mo for 12 months</p>
    </section>
  );
};

export default Hero;
