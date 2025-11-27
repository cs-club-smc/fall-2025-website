function AnimatedBackground() {
  return (
    <div className="animated-bg">
      {/* Base gradient layer */}
      <div className="base-gradient" />

      {/* Animated gradient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="orb orb-4" />

      {/* Dot grid overlay */}
      <div className="dot-grid" />

      {/* Noise texture for depth */}
      <div className="noise" />

      <style jsx>{`
        .animated-bg {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -10;
          overflow: hidden;
          background: #0a0f1a;
        }

        .base-gradient {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 30% 20%, rgba(10, 40, 60, 0.8) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(15, 50, 70, 0.6) 0%, transparent 40%),
            linear-gradient(180deg, #0a1628 0%, #0d1f35 50%, #0a1825 100%);
        }

        /* Floating orbs */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.6;
          will-change: transform;
        }

        .orb-1 {
          width: 600px;
          height: 600px;
          top: -15%;
          right: -10%;
          background: radial-gradient(circle, rgba(102, 196, 138, 0.4) 0%, rgba(78, 205, 196, 0.2) 50%, transparent 70%);
          animation: float1 20s ease-in-out infinite;
        }

        .orb-2 {
          width: 500px;
          height: 500px;
          bottom: -10%;
          left: -10%;
          background: radial-gradient(circle, rgba(78, 205, 196, 0.35) 0%, rgba(69, 183, 209, 0.2) 50%, transparent 70%);
          animation: float2 25s ease-in-out infinite;
        }

        .orb-3 {
          width: 400px;
          height: 400px;
          top: 40%;
          left: 20%;
          background: radial-gradient(circle, rgba(69, 183, 209, 0.2) 0%, transparent 60%);
          animation: float3 18s ease-in-out infinite;
        }

        .orb-4 {
          width: 350px;
          height: 350px;
          top: 60%;
          right: 15%;
          background: radial-gradient(circle, rgba(102, 196, 138, 0.25) 0%, transparent 60%);
          animation: float4 22s ease-in-out infinite;
        }

        @keyframes float1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(-30px, 40px) scale(1.05);
          }
          50% {
            transform: translate(-60px, 20px) scale(0.95);
          }
          75% {
            transform: translate(-20px, -30px) scale(1.02);
          }
        }

        @keyframes float2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(40px, -30px) scale(1.03);
          }
          50% {
            transform: translate(20px, -60px) scale(0.97);
          }
          75% {
            transform: translate(50px, -20px) scale(1.05);
          }
        }

        @keyframes float3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -40px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 30px) scale(0.9);
          }
        }

        @keyframes float4 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-40px, -50px) scale(1.08);
          }
        }

        /* Dot grid pattern */
        .dot-grid {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at center, rgba(102, 196, 138, 0.15) 1px, transparent 1px);
          background-size: 24px 24px;
          mask-image:
            radial-gradient(ellipse at 90% 10%, black 0%, transparent 50%),
            radial-gradient(ellipse at 10% 90%, black 0%, transparent 50%),
            radial-gradient(ellipse at 85% 85%, rgba(0,0,0,0.3) 0%, transparent 40%);
          -webkit-mask-image:
            radial-gradient(ellipse at 90% 10%, black 0%, transparent 50%),
            radial-gradient(ellipse at 10% 90%, black 0%, transparent 50%),
            radial-gradient(ellipse at 85% 85%, rgba(0,0,0,0.3) 0%, transparent 40%);
          animation: gridPulse 8s ease-in-out infinite;
        }

        @keyframes gridPulse {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }

        /* Subtle noise texture */
        .noise {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}

export default AnimatedBackground;
