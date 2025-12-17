import { Heart, MessageCircle, Sparkles } from 'lucide-react';

export default function MatchSuccessScreen({ onNavigate }: { onNavigate: (screen: number) => void }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0e27] via-[#1a0f2e] to-[#2d1b4e] p-6 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Profile Images */}
        <div className="flex items-center justify-center mb-8 relative">
          {/* Left profile */}
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-white/20 soft-shadow flex items-center justify-center neon-glow-purple">
            <span className="text-5xl">🎸</span>
          </div>
          
          {/* Heart icon in center */}
          <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center neon-glow-pink soft-shadow animate-pulse">
            <Heart className="w-8 h-8 fill-white" />
          </div>
          
          {/* Right profile */}
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 border-4 border-white/20 soft-shadow flex items-center justify-center neon-glow-pink ml-16">
            <span className="text-5xl">👤</span>
          </div>
        </div>
        
        {/* Sparkles */}
        <div className="flex gap-2 mb-6">
          <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
          <Sparkles className="w-8 h-8 text-pink-400 animate-pulse" style={{animationDelay: '0.2s'}} />
          <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" style={{animationDelay: '0.4s'}} />
        </div>
        
        {/* Title */}
        <h2 className="text-4xl mb-3 text-center gradient-text">매칭 성공!</h2>
        <p className="text-purple-300 text-center mb-12 max-w-xs opacity-80">
          지우님도 회원님을 좋아해요<br />
          지금 바로 대화를 시작해보세요
        </p>
        
        {/* User Info Card */}
        <div className="w-full max-w-sm p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 soft-shadow mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center neon-glow-purple">
              <span className="text-3xl">🎸</span>
            </div>
            <div>
              <h3 className="text-xl mb-1">지우, 23</h3>
              <p className="text-sm text-purple-300">홍대 거리공연 축제</p>
            </div>
          </div>
          <p className="text-sm text-purple-200 opacity-80">
            음악 듣는 거 좋아하고 페스티벌 자주 와요 🎵
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="w-full max-w-sm space-y-3">
          <button 
            onClick={() => onNavigate(7)}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-purple-500 neon-glow-mint flex items-center justify-center gap-2 soft-shadow">
            <MessageCircle className="w-5 h-5" />
            <span>메시지 보내기</span>
          </button>
          
          <button 
            onClick={() => onNavigate(4)}
            className="w-full py-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-purple-300">
            <span>나중에 하기</span>
          </button>
        </div>
      </div>
    </div>
  );
}