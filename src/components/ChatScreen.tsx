import { ArrowLeft, Send, MoreVertical, Heart, Image, Smile } from 'lucide-react';

export default function ChatScreen({ onNavigate }: { onNavigate: (screen: number) => void }) {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#0a0e27] via-[#1a0f2e] to-[#2d1b4e] relative overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
      </div>
      
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between p-4 pt-16 border-b border-white/5">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onNavigate(4)}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center neon-glow-purple relative">
              <span className="text-xl">🎸</span>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#0a0e27]"></div>
            </div>
            <div>
              <h3 className="text-base">지우</h3>
              <p className="text-xs text-emerald-400">온라인</p>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => onNavigate(8)}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
      
      {/* Chat Messages */}
      <div className="flex-1 overflow-auto p-4 space-y-4 relative z-10">
        {/* Match notification */}
        <div className="flex flex-col items-center py-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center neon-glow-purple mb-3">
            <Heart className="w-8 h-8 fill-white" />
          </div>
          <p className="text-sm text-purple-300 text-center">
            지우님과 매칭되었어요<br />
            <span className="text-xs opacity-70">2024.12.06 오후 3:24</span>
          </p>
        </div>
        
        {/* Received message */}
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
            <span className="text-sm">🎸</span>
          </div>
          <div>
            <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-white/10 backdrop-blur-sm border border-white/10 max-w-xs">
              <p>안녕하세요! 👋</p>
            </div>
            <p className="text-xs text-purple-300 opacity-50 mt-1 ml-2">오후 3:24</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
            <span className="text-sm">🎸</span>
          </div>
          <div>
            <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-white/10 backdrop-blur-sm border border-white/10 max-w-xs">
              <p>저도 음악 페스티벌 진짜 좋아해요 ㅎㅎ</p>
            </div>
            <p className="text-xs text-purple-300 opacity-50 mt-1 ml-2">오후 3:24</p>
          </div>
        </div>
        
        {/* Sent message */}
        <div className="flex justify-end">
          <div>
            <div className="px-4 py-3 rounded-2xl rounded-tr-sm bg-gradient-to-r from-purple-500 to-pink-500 neon-glow-purple max-w-xs">
              <p>오 반가워요!</p>
            </div>
            <p className="text-xs text-purple-300 opacity-50 mt-1 mr-2 text-right">오후 3:25</p>
          </div>
        </div>
        
        <div className="flex justify-end">
          <div>
            <div className="px-4 py-3 rounded-2xl rounded-tr-sm bg-gradient-to-r from-purple-500 to-pink-500 neon-glow-purple max-w-xs">
              <p>오늘 공연 어땠어요?</p>
            </div>
            <p className="text-xs text-purple-300 opacity-50 mt-1 mr-2 text-right">오후 3:25</p>
          </div>
        </div>
        
        {/* Typing indicator */}
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
            <span className="text-sm">🎸</span>
          </div>
          <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-white/10 backdrop-blur-sm border border-white/10">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Message Input */}
      <div className="relative z-10 p-4 border-t border-white/5">
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <Image className="w-5 h-5 text-purple-400" />
          </button>
          
          <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
            <input 
              type="text" 
              placeholder="메시지 입력..."
              className="flex-1 bg-transparent outline-none placeholder:text-white/30"
            />
            <button>
              <Smile className="w-5 h-5 text-purple-400" />
            </button>
          </div>
          
          <button className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 neon-glow-purple flex items-center justify-center">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}