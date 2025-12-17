import { Search, MessageCircle, Map, Heart, User, Sparkles } from 'lucide-react';

export default function ChatListScreen({ onNavigate }: { onNavigate: (screen: number) => void }) {
  const chats = [
    {
      id: 1,
      name: '지우',
      emoji: '🎸',
      lastMessage: '페스티벌 진짜 재밌네요!',
      time: '방금',
      unread: 2,
      gradient: 'from-purple-500 to-pink-500',
      glow: 'neon-glow-purple'
    },
    {
      id: 2,
      name: '민서',
      emoji: '🎤',
      lastMessage: '나중에 같이 공연 보러 갈래요?',
      time: '5분 전',
      unread: 1,
      gradient: 'from-pink-500 to-purple-500',
      glow: 'neon-glow-pink'
    },
    {
      id: 3,
      name: '준호',
      emoji: '🎧',
      lastMessage: 'ㅋㅋㅋ 완전 공감',
      time: '1시간 전',
      unread: 0,
      gradient: 'from-emerald-400 to-purple-500',
      glow: 'neon-glow-mint'
    },
    {
      id: 4,
      name: '하윤',
      emoji: '✨',
      lastMessage: '오늘 날씨 좋네요~',
      time: '3시간 전',
      unread: 0,
      gradient: 'from-purple-500 to-pink-500',
      glow: 'neon-glow-purple'
    },
  ];

  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#0a0e27] via-[#1a0f2e] to-[#2d1b4e] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      {/* Header */}
      <div className="relative z-10 p-4 pt-16 border-b border-white/5">
        <h1 className="text-2xl mb-4 gradient-text">채팅</h1>
        
        {/* Search Bar */}
        <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-[#1e1b3c]/80 backdrop-blur-xl border border-white/10 soft-shadow">
          <Search className="w-4 h-4 text-purple-400" />
          <input 
            type="text" 
            placeholder="대화 검색..."
            className="flex-1 bg-transparent outline-none placeholder:text-white/30 text-sm"
          />
        </div>
      </div>
      
      {/* Chat List */}
      <div className="flex-1 overflow-auto p-4 relative z-10">
        {chats.length > 0 ? (
          <div className="space-y-2">
            {chats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => onNavigate(7)}
                className="w-full p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${chat.gradient} ${chat.glow} flex items-center justify-center flex-shrink-0 soft-shadow`}>
                    <span className="text-2xl">{chat.emoji}</span>
                    {chat.unread > 0 && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 border-2 border-[#0a0e27] flex items-center justify-center">
                        <span className="text-[10px]">{chat.unread}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Chat Info */}
                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm truncate">{chat.name}</h3>
                      <span className="text-xs text-purple-300 opacity-60 flex-shrink-0 ml-2">{chat.time}</span>
                    </div>
                    <p className={`text-sm truncate ${chat.unread > 0 ? 'text-white/90' : 'text-white/50'}`}>
                      {chat.lastMessage}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 flex items-center justify-center mb-4">
              <MessageCircle className="w-10 h-10 text-purple-400 opacity-50" />
            </div>
            <p className="text-sm text-white/50 mb-2">아직 대화가 없어요</p>
            <p className="text-xs text-white/30 text-center">
              맵에서 새로운 사람들을<br />만나보세요!
            </p>
          </div>
        )}
      </div>
      
      {/* Bottom Navigation */}
      <div className="relative z-10 px-6 pb-6 pt-4">
        <div className="flex items-center justify-around px-6 py-4 rounded-3xl bg-[#1e1b3c]/90 backdrop-blur-xl border border-white/10 soft-shadow">
          <button 
            onClick={() => onNavigate(4)}
            className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
            <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all">
              <Map className="w-5 h-5" />
            </div>
            <span className="text-xs text-white/50 hover:text-purple-300 transition-colors">맵</span>
          </button>
          
          <button 
            onClick={() => onNavigate(11)}
            className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
            <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-500 transition-all">
              <Heart className="w-5 h-5" />
            </div>
            <span className="text-xs text-white/50 hover:text-pink-300 transition-colors">좋아요</span>
          </button>
          
          <button className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center neon-glow-purple">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span className="text-xs text-purple-300">채팅</span>
          </button>
          
          <button 
            onClick={() => onNavigate(9)}
            className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
            <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-500 transition-all">
              <User className="w-5 h-5" />
            </div>
            <span className="text-xs text-white/50 hover:text-pink-300 transition-colors">프로필</span>
          </button>
        </div>
      </div>
    </div>
  );
}
