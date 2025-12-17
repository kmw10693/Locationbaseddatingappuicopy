import { ArrowLeft, Mail, Phone, Calendar, MapPin } from 'lucide-react';

export default function PersonalInfoScreen({ onNavigate }: { onNavigate: (screen: number) => void }) {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#0a0e27] via-[#1a0f2e] to-[#2d1b4e] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      {/* Header */}
      <div className="relative z-10 flex items-center gap-3 p-4 pt-16 border-b border-white/5">
        <button 
          onClick={() => onNavigate(9)}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg">개인정보</h2>
      </div>
      
      {/* Content */}
      <div className="flex-1 overflow-auto p-6 relative z-10">
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="w-5 h-5 text-purple-400" />
              <p className="text-sm text-purple-300">이메일</p>
            </div>
            <p className="ml-8">user@example.com</p>
          </div>
          
          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <Phone className="w-5 h-5 text-pink-400" />
              <p className="text-sm text-purple-300">전화번호</p>
            </div>
            <p className="ml-8">010-****-1234</p>
          </div>
          
          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-5 h-5 text-emerald-400" />
              <p className="text-sm text-purple-300">생년월일</p>
            </div>
            <p className="ml-8">2001.05.15</p>
          </div>
          
          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-5 h-5 text-purple-400" />
              <p className="text-sm text-purple-300">지역</p>
            </div>
            <p className="ml-8">서울특별시 마포구</p>
          </div>
        </div>
        
        <div className="mt-8 p-4 rounded-2xl bg-orange-500/10 border border-orange-400/30">
          <p className="text-xs text-orange-300 text-center">
            개인정보는 안전하게 보호되며<br />
            다른 사용자에게 공개되지 않습니다
          </p>
        </div>
      </div>
    </div>
  );
}
