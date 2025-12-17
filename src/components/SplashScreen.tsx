export default function SplashScreen({ onNavigate }: { onNavigate: (screen: number) => void }) {
  // Auto-navigate after 2 seconds
  setTimeout(() => {
    onNavigate(1);
  }, 2000);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0e27] via-[#1a0f2e] to-[#2d1b4e] relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 right-10 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
      
      {/* Logo - centered */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="neon-glow-purple bg-gradient-to-br from-purple-500 to-pink-500 w-32 h-32 rounded-3xl flex items-center justify-center mb-6">
          <span className="text-6xl">✨</span>
        </div>
        
        <h1 className="text-5xl text-center mb-2 tracking-tight">키읔</h1>
        <p className="text-purple-300 text-center tracking-widest">FESTIVAL DATING</p>
      </div>
      
      {/* Loading indicator */}
      <div className="absolute bottom-20 flex gap-2">
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
      </div>
    </div>
  );
}