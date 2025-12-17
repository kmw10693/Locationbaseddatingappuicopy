import { ArrowLeft, Shield, AlertTriangle, UserX, Flag, Lock, Eye } from 'lucide-react';

export default function SafetyReportScreen({ onNavigate }: { onNavigate: (screen: number) => void }) {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#0a0e27] via-[#1a0f2e] to-[#2d1b4e] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      
      {/* Header */}
      <div className="relative z-10 flex items-center gap-3 p-4 pt-16 border-b border-white/5">
        <button 
          onClick={() => onNavigate(9)}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg">안전 및 신고</h2>
      </div>
      
      {/* Content */}
      <div className="flex-1 overflow-auto p-6 relative z-10">
        {/* Safety Banner */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-purple-500/20 border border-emerald-400/30 neon-glow-mint mb-6 soft-shadow">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-400/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg mb-2">안전한 만남을 위해</h3>
              <p className="text-xs text-purple-200 opacity-80">
                공개된 장소에서 만나고,<br />
                개인정보는 신중하게 공유하세요
              </p>
            </div>
          </div>
        </div>
        
        {/* Safety Guidelines */}
        <div className="mb-6">
          <h3 className="text-sm text-purple-300 mb-3">안전 가이드</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-8 h-8 rounded-full bg-purple-400/20 flex items-center justify-center flex-shrink-0">
                <Eye className="w-4 h-4 text-purple-400" />
              </div>
              <p className="text-sm">공공장소에서 만나기</p>
            </div>
            
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-8 h-8 rounded-full bg-pink-400/20 flex items-center justify-center flex-shrink-0">
                <Lock className="w-4 h-4 text-pink-400" />
              </div>
              <p className="text-sm">개인정보 보호하기</p>
            </div>
            
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-8 h-8 rounded-full bg-emerald-400/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-sm">지인에게 일정 알리기</p>
            </div>
          </div>
        </div>
        
        {/* Report Options */}
        <div className="mb-6">
          <h3 className="text-sm text-purple-300 mb-3">신고하기</h3>
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-400/30 transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-red-400/20 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-red-400" />
              </div>
              <div className="flex-1 text-left">
                <p className="mb-1">부적절한 행동</p>
                <p className="text-xs text-purple-300 opacity-70">스팸, 욕설, 성희롱 등</p>
              </div>
            </button>
            
            <button className="w-full flex items-center gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-400/30 transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-orange-400/20 flex items-center justify-center flex-shrink-0">
                <Flag className="w-5 h-5 text-orange-400" />
              </div>
              <div className="flex-1 text-left">
                <p className="mb-1">가짜 프로필</p>
                <p className="text-xs text-purple-300 opacity-70">사진 도용, 허위 정보</p>
              </div>
            </button>
            
            <button className="w-full flex items-center gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-purple-400/20 flex items-center justify-center flex-shrink-0">
                <UserX className="w-5 h-5 text-purple-400" />
              </div>
              <div className="flex-1 text-left">
                <p className="mb-1">미성년자</p>
                <p className="text-xs text-purple-300 opacity-70">19세 미만으로 의심됨</p>
              </div>
            </button>
          </div>
        </div>
        
        {/* Emergency Contact */}
        <div className="p-4 rounded-2xl bg-red-500/10 border border-red-400/30">
          <p className="text-sm text-center text-red-300">
            위급 상황 시 즉시 <span className="font-semibold">112</span>에 신고하세요
          </p>
        </div>
      </div>
      
      {/* Bottom Button */}
      <div className="p-6 relative z-10">
        <button 
          onClick={() => onNavigate(12)}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-500/80 to-orange-500/80 flex items-center justify-center gap-2 soft-shadow">
          <Flag className="w-5 h-5" />
          <span>사용자 신고하기</span>
        </button>
      </div>
    </div>
  );
}