import { MapPin, Check } from 'lucide-react';

export default function LocationPermissionScreen({ onNavigate }: { onNavigate: (screen: number) => void }) {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#0a0e27] via-[#1a0f2e] to-[#2d1b4e] p-6 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10">
        {/* Icon */}
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-purple-500 neon-glow-mint flex items-center justify-center mb-6 soft-shadow">
          <MapPin className="w-12 h-12" />
        </div>
        
        {/* Title */}
        <h2 className="text-2xl mb-3 text-center">위치 권한 허용</h2>
        <p className="text-purple-300 text-center mb-8 max-w-sm opacity-80">
          주변에 있는 사람들을 찾기 위해<br />위치 권한이 필요해요
        </p>
        
        {/* Benefits */}
        <div className="w-full max-w-sm space-y-3 mb-8">
          <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="w-7 h-7 rounded-full bg-emerald-400/20 flex items-center justify-center flex-shrink-0">
              <Check className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <p className="mb-0.5 text-sm">같은 행사장 사람 찾기</p>
              <p className="text-xs text-purple-300 opacity-70">근처에 있는 사람만 보여요</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="w-7 h-7 rounded-full bg-purple-400/20 flex items-center justify-center flex-shrink-0">
              <Check className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <p className="mb-0.5 text-sm">안전한 만남</p>
              <p className="text-xs text-purple-300 opacity-70">공개된 장소에서만 활성화</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="w-7 h-7 rounded-full bg-pink-400/20 flex items-center justify-center flex-shrink-0">
              <Check className="w-4 h-4 text-pink-400" />
            </div>
            <div>
              <p className="mb-0.5 text-sm">자동 종료</p>
              <p className="text-xs text-purple-300 opacity-70">행사 끝나면 자동으로 꺼져요</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Buttons */}
      <div className="space-y-3 relative z-10">
        <button 
          onClick={() => onNavigate(4)}
          className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-400 to-purple-500 neon-glow-mint flex items-center justify-center soft-shadow">
          <span>위치 권한 허용하기</span>
        </button>
        <button 
          onClick={() => onNavigate(4)}
          className="w-full py-3.5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-purple-300">
          <span>나중에 하기</span>
        </button>
      </div>
    </div>
  );
}