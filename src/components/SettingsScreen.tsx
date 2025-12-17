import { ArrowLeft, User, Bell, Shield, MapPin, Moon, Globe, HelpCircle, LogOut, ChevronRight, FileText } from 'lucide-react';

export default function SettingsScreen({ onNavigate }: { onNavigate: (screen: number) => void }) {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#0a0e27] via-[#1a0f2e] to-[#2d1b4e] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      {/* Header */}
      <div className="relative z-10 flex items-center gap-3 p-4 border-b border-white/5">
        <button 
          onClick={() => onNavigate(4)}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg">설정</h2>
      </div>
      
      {/* Content */}
      <div className="flex-1 overflow-auto relative z-10">
        {/* Profile Section */}
        <div className="p-6 border-b border-white/5">
          <button 
            onClick={() => onNavigate(13)}
            className="w-full flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-colors">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center neon-glow-purple">
              <span className="text-3xl">👤</span>
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-lg mb-1">내 프로필</h3>
              <p className="text-sm text-purple-300">프로필 편집하기</p>
            </div>
            <ChevronRight className="w-5 h-5 text-purple-400" />
          </button>
        </div>
        
        {/* Account Settings */}
        <div className="p-6 border-b border-white/5">
          <h3 className="text-sm text-purple-300 mb-3">계정</h3>
          <div className="space-y-2">
            <button 
              onClick={() => onNavigate(14)}
              className="w-full flex items-center gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-purple-400/20 flex items-center justify-center">
                <User className="w-5 h-5 text-purple-400" />
              </div>
              <span className="flex-1 text-left">개인정보</span>
              <ChevronRight className="w-5 h-5 text-purple-400" />
            </button>
            
            <button 
              onClick={() => onNavigate(15)}
              className="w-full flex items-center gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-pink-400/20 flex items-center justify-center">
                <Bell className="w-5 h-5 text-pink-400" />
              </div>
              <div className="flex-1 text-left">
                <p>알림 설정</p>
                <p className="text-xs text-purple-300 opacity-70">매칭, 메시지 알림</p>
              </div>
              <ChevronRight className="w-5 h-5 text-purple-400" />
            </button>
          </div>
        </div>
        
        {/* Privacy & Safety */}
        <div className="p-6 border-b border-white/5">
          <h3 className="text-sm text-purple-300 mb-3">개인정보 및 안전</h3>
          <div className="space-y-2">
            <button 
              onClick={() => onNavigate(8)}
              className="w-full flex items-center gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-400/30 transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-emerald-400/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="flex-1 text-left">안전 및 신고</span>
              <ChevronRight className="w-5 h-5 text-purple-400" />
            </button>
            
            <button className="w-full flex items-center gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-purple-400/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-purple-400" />
              </div>
              <div className="flex-1 text-left">
                <p>위치 설정</p>
                <p className="text-xs text-purple-300 opacity-70">사용 중일 때만</p>
              </div>
              <div className="w-11 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 neon-glow-purple relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </button>
          </div>
        </div>
        
        {/* App Settings */}
        <div className="p-6 border-b border-white/5">
          <h3 className="text-sm text-purple-300 mb-3">앱 설정</h3>
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-purple-400/20 flex items-center justify-center">
                <Moon className="w-5 h-5 text-purple-400" />
              </div>
              <span className="flex-1 text-left">다크 모드</span>
              <div className="w-11 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 neon-glow-purple relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </button>
            
            <button className="w-full flex items-center gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-pink-400/20 flex items-center justify-center">
                <Globe className="w-5 h-5 text-pink-400" />
              </div>
              <div className="flex-1 text-left">
                <p>언어</p>
                <p className="text-xs text-purple-300 opacity-70">한국어</p>
              </div>
              <ChevronRight className="w-5 h-5 text-purple-400" />
            </button>
          </div>
        </div>
        
        {/* Support */}
        <div className="p-6 border-b border-white/5">
          <h3 className="text-sm text-purple-300 mb-3">지원</h3>
          <div className="space-y-2">
            <button 
              onClick={() => onNavigate(16)}
              className="w-full flex items-center gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-purple-400/20 flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-purple-400" />
              </div>
              <span className="flex-1 text-left">도움말</span>
              <ChevronRight className="w-5 h-5 text-purple-400" />
            </button>
            
            <button 
              onClick={() => onNavigate(17)}
              className="w-full flex items-center gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-pink-400/20 flex items-center justify-center">
                <FileText className="w-5 h-5 text-pink-400" />
              </div>
              <span className="flex-1 text-left">이용약관</span>
              <ChevronRight className="w-5 h-5 text-purple-400" />
            </button>
          </div>
        </div>
        
        {/* Logout */}
        <div className="p-6">
          <button 
            onClick={() => onNavigate(0)}
            className="w-full flex items-center justify-center gap-3 p-4 rounded-2xl bg-red-500/10 border border-red-400/30 hover:bg-red-500/20 transition-colors">
            <LogOut className="w-5 h-5 text-red-400" />
            <span className="text-red-400">로그아웃</span>
          </button>
        </div>
        
        {/* Version */}
        <div className="pb-8 text-center">
          <p className="text-xs text-white/30">버전 1.0.0</p>
        </div>
      </div>
    </div>
  );
}