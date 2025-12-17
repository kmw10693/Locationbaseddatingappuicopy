import { ArrowLeft, Heart, MessageCircle, Users, Bell } from 'lucide-react';
import { useState } from 'react';

export default function NotificationSettingsScreen({ onNavigate }: { onNavigate: (screen: number) => void }) {
  const [matchNotif, setMatchNotif] = useState(true);
  const [messageNotif, setMessageNotif] = useState(true);
  const [likeNotif, setLikeNotif] = useState(true);
  const [eventNotif, setEventNotif] = useState(false);
  
  const Toggle = ({ enabled, onChange }: { enabled: boolean; onChange: () => void }) => (
    <button
      onClick={onChange}
      className={`w-11 h-6 rounded-full relative transition-colors ${
        enabled ? 'bg-gradient-to-r from-purple-500 to-pink-500 neon-glow-purple' : 'bg-white/10'
      }`}
    >
      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
        enabled ? 'right-1' : 'left-1'
      }`}></div>
    </button>
  );
  
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#0a0e27] via-[#1a0f2e] to-[#2d1b4e] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      
      {/* Header */}
      <div className="relative z-10 flex items-center gap-3 p-4 pt-16 border-b border-white/5">
        <button 
          onClick={() => onNavigate(9)}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg">알림 설정</h2>
      </div>
      
      {/* Content */}
      <div className="flex-1 overflow-auto p-6 relative z-10">
        <div className="space-y-3">
          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pink-400/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-pink-400" />
              </div>
              <div>
                <p className="mb-1">매칭 알림</p>
                <p className="text-xs text-purple-300 opacity-70">새로운 매칭이 있을 때</p>
              </div>
            </div>
            <Toggle enabled={matchNotif} onChange={() => setMatchNotif(!matchNotif)} />
          </div>
          
          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-400/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="mb-1">메시지 알림</p>
                <p className="text-xs text-purple-300 opacity-70">새로운 메시지가 있을 때</p>
              </div>
            </div>
            <Toggle enabled={messageNotif} onChange={() => setMessageNotif(!messageNotif)} />
          </div>
          
          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="mb-1">좋아요 알림</p>
                <p className="text-xs text-purple-300 opacity-70">누군가 좋아요를 보냈을 때</p>
              </div>
            </div>
            <Toggle enabled={likeNotif} onChange={() => setLikeNotif(!likeNotif)} />
          </div>
          
          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-400/20 flex items-center justify-center">
                <Bell className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <p className="mb-1">이벤트 알림</p>
                <p className="text-xs text-purple-300 opacity-70">새로운 페스티벌 정보</p>
              </div>
            </div>
            <Toggle enabled={eventNotif} onChange={() => setEventNotif(!eventNotif)} />
          </div>
        </div>
        
        <div className="mt-8 p-4 rounded-2xl bg-purple-500/10 border border-purple-400/30">
          <p className="text-xs text-purple-300 text-center">
            알림 설정은 언제든지 변경할 수 있습니다
          </p>
        </div>
      </div>
    </div>
  );
}
