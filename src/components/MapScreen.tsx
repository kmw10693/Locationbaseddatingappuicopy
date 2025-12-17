import { Search, Sliders, MapPin, Heart, MessageCircle, User, Map, Calendar, Users } from 'lucide-react';
import { useState } from 'react';

export default function MapScreen({ onNavigate }: { onNavigate: (screen: number, profileData?: any) => void }) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const festivals = [
    { name: '홍대 거리공연 축제', location: '홍대입구', date: '12월 10일 - 12일', participants: 42, emoji: '🎸' },
    { name: '건국대학교 녹색지대 축제', location: '건국대학교', date: '12월 15일 - 17일', participants: 156, emoji: '🎓' },
    { name: '성신여대 운정 그린 페스티벌', location: '성신여대', date: '12월 20일 - 22일', participants: 98, emoji: '🌸' },
    { name: '이화여대 대동제', location: '이화여대', date: '12월 25일 - 27일', participants: 203, emoji: '🎀' },
    { name: '연세대 아카라카', location: '연세대학교', date: '12월 28일 - 30일', participants: 312, emoji: '⚡' },
    { name: '한양대 사자탑 페스티벌', location: '한양대학교', date: '1월 5일 - 7일', participants: 187, emoji: '🦁' },
  ];
  
  const filteredFestivals = festivals.filter(fest => 
    fest.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#0a0e27] via-[#1a0f2e] to-[#2d1b4e] relative overflow-hidden">
      {/* Map Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://s3-alpha-sig.figma.com/img/0d08/afbc/e66853fe873074fe2c27393fde66e13a?Expires=1766966400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YBQANorSQvmoUMEUq1-n9u6e-mRI7ZvPkDl2vG0tx2sHR2fu~ixvTImhRiSagzX-SauRUqxCXd9riYX8nf9cJSIsppbP9YayvbBPnkdfFYczeWKxtTkx5bX2KnO0M1Ekwzln9JUoomloxYS5J~4y6rPR2uGhvgHJ5BsCZfMI~EptWS1HQaZA2-drHsFMzHhlgXiAMLrUR3tbxO73N66kQOA6L20wc4heAVlbdNsfcL7GB~v9tcHmMpN1PWPy6OKCZ9W9fyoHUstGrhd8lmXfskRn2s0ipOQL2PDWPiJfbg8ENDI0u8ouNU23BWK9z0szD4TYEbf269Z-REqSF6-Wng__"
          alt="Hongdae Map"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27]/70 via-[#0a0e27]/40 to-[#0a0e27]/80"></div>
      </div>
      
      {/* Header */}
      <div className="relative z-10 p-4 pt-8">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex-1 flex items-center gap-2 px-3 py-2.5 rounded-xl bg-[#1e1b3c]/80 backdrop-blur-xl border border-white/10 soft-shadow">
            <Search className="w-4 h-4 text-purple-400" />
            <input 
              type="text" 
              placeholder="행사 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSearch(true)}
              className="flex-1 bg-transparent outline-none placeholder:text-white/30 text-sm"
            />
          </div>
          <button className="w-10 h-10 rounded-xl bg-[#1e1b3c]/80 backdrop-blur-xl border border-white/10 flex items-center justify-center soft-shadow">
            <Sliders className="w-4 h-4 text-purple-400" />
          </button>
        </div>
        
        {/* Event Tag */}
        {!showSearch && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 neon-glow-purple">
            <MapPin className="w-4 h-4 text-purple-400" />
            <span className="text-sm">홍대 거리공연 축제</span>
            <span className="text-xs text-purple-300">42명 참여중</span>
          </div>
        )}
      </div>
      
      {/* Search Results Panel */}
      {showSearch && (
        <div className="relative z-20 mx-4 mb-4 max-h-[400px] overflow-y-auto rounded-2xl bg-[#1e1b3c]/95 backdrop-blur-xl border border-white/10 soft-shadow">
          <div className="sticky top-0 bg-[#1e1b3c]/95 backdrop-blur-xl px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <span className="text-sm text-purple-300">축제 검색 결과</span>
            <button 
              onClick={() => setShowSearch(false)}
              className="text-xs text-white/50 hover:text-white/80">
              닫기
            </button>
          </div>
          
          <div className="p-2">
            {filteredFestivals.map((festival, index) => (
              <button
                key={index}
                onClick={() => {
                  setShowSearch(false);
                  setSearchQuery('');
                }}
                className="w-full p-3 mb-2 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 hover:border-purple-400/40 transition-all hover:scale-[1.02]"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl flex-shrink-0">
                    {festival.emoji}
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <div className="text-xs mb-1 truncate">{festival.name}</div>
                    <div className="flex items-center gap-2 text-[10px] text-white/50">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5" />
                        {festival.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-2.5 h-2.5" />
                        {festival.date}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 flex-shrink-0">
                    <Users className="w-2.5 h-2.5 text-purple-300" />
                    <span className="text-[10px] text-purple-300">{festival.participants}</span>
                  </div>
                </div>
              </button>
            ))}
            
            {filteredFestivals.length === 0 && (
              <div className="py-8 text-center text-sm text-white/30">
                검색 결과가 없습니다
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Map Area with User Markers */}
      <div className="flex-1 relative">
        {/* User Marker 1 */}
        <div 
          onClick={() => onNavigate(5)}
          className="absolute top-1/4 left-1/4 flex flex-col items-center animate-pulse cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-white/20 soft-shadow flex items-center justify-center neon-glow-purple">
            <span className="text-lg">🎸</span>
          </div>
          <div className="mt-1 px-2 py-1 rounded-full bg-[#1e1b3c]/90 backdrop-blur-sm text-xs border border-purple-400/30">지우</div>
        </div>
        
        {/* User Marker 2 */}
        <div 
          onClick={() => {
            const profileData = {
              name: '수현',
              age: 22,
              emoji: '🎨',
              bio: '그림 그리는 걸 좋아해요 🎨\n페스티벌에서 새로운 영감을 찾아요!',
              tags: [
                { icon: 'sparkles', label: '아트', color: 'purple' },
                { icon: '🎨', label: '그림', color: 'pink' },
                { icon: '📷', label: '사진', color: 'emerald' }
              ],
              event: '홍대 거리공연 축제',
              distance: '230m'
            };
            onNavigate(5, profileData);
          }}
          className="absolute top-1/2 right-1/3 flex flex-col items-center cursor-pointer animate-pulse" style={{animationDelay: '0.2s'}}>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 border-4 border-white/20 soft-shadow flex items-center justify-center neon-glow-pink">
            <span className="text-lg">🎨</span>
          </div>
          <div className="mt-1 px-2 py-1 rounded-full bg-[#1e1b3c]/90 backdrop-blur-sm text-xs border border-pink-400/30">수현</div>
        </div>
        
        {/* User Marker 3 */}
        <div 
          onClick={() => {
            const profileData = {
              name: '민준',
              age: 25,
              emoji: '🎭',
              bio: '연극과 뮤지컬을 사랑해요 🎭\n예술적인 대화 나누고 싶어요!',
              tags: [
                { icon: 'sparkles', label: '연극', color: 'purple' },
                { icon: '🎭', label: '뮤지컬', color: 'pink' },
                { icon: '🎬', label: '영화', color: 'emerald' }
              ],
              event: '홍대 거리공연 축제',
              distance: '340m'
            };
            onNavigate(5, profileData);
          }}
          className="absolute bottom-1/3 left-1/2 flex flex-col items-center cursor-pointer animate-pulse" style={{animationDelay: '0.4s'}}>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-purple-500 border-4 border-white/20 soft-shadow flex items-center justify-center neon-glow-mint">
            <span className="text-lg">🎭</span>
          </div>
          <div className="mt-1 px-2 py-1 rounded-full bg-[#1e1b3c]/90 backdrop-blur-sm text-xs border border-emerald-400/30">민준</div>
        </div>
        
        {/* Current User Marker */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-4 border-white/30 soft-shadow flex items-center justify-center neon-glow-purple">
            <User className="w-8 h-8" />
          </div>
          <div className="mt-2 px-3 py-1 rounded-full bg-blue-500/80 backdrop-blur-sm border border-blue-300/50">나</div>
        </div>
        
        {/* Distance Indicator */}
        <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-[#1e1b3c]/90 backdrop-blur-xl border border-purple-400/30 soft-shadow">
          <span className="text-sm text-purple-300">반경 500m</span>
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <div className="relative z-10 px-6 pb-6 pt-4">
        <div className="flex items-center justify-around px-6 py-4 rounded-3xl bg-[#1e1b3c]/90 backdrop-blur-xl border border-white/10 soft-shadow">
          <button className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center neon-glow-purple">
              <Map className="w-5 h-5" />
            </div>
            <span className="text-xs text-purple-300">맵</span>
          </button>
          
          <button 
            onClick={() => onNavigate(11)}
            className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
            <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-500 transition-all">
              <Heart className="w-5 h-5" />
            </div>
            <span className="text-xs text-white/50 hover:text-pink-300 transition-colors">좋아요</span>
          </button>
          
          <button 
            onClick={() => onNavigate(18)}
            className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
            <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span className="text-xs text-white/50 hover:text-purple-300 transition-colors">채팅</span>
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