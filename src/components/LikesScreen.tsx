import { ArrowLeft, Heart, UserPlus } from 'lucide-react';
import { useState } from 'react';

export default function LikesScreen({ onNavigate }: { onNavigate: (screen: number, profileData?: any) => void }) {
  const [activeTab, setActiveTab] = useState<'sent' | 'received'>('received');
  
  const sentLikes = [
    { 
      id: 1, 
      name: '민지', 
      age: 22, 
      emoji: '🎨', 
      location: '홍대 거리공연 축제', 
      time: '10분 전',
      bio: '그림 그리는 걸 좋아해요 🎨\n페스티벌에서 새로운 영감을 찾아요!',
      tags: [
        { icon: 'sparkles', label: '아트', color: 'purple' },
        { icon: '🎨', label: '그림', color: 'pink' },
        { icon: '📷', label: '사진', color: 'emerald' }
      ],
      event: '홍대 거리공연 축제',
      distance: '230m'
    },
    { 
      id: 2, 
      name: '현우', 
      age: 24, 
      emoji: '🎸', 
      location: '홍대 거리공연 축제', 
      time: '1시간 전',
      bio: '밴드에서 기타 치고 있어요 🎸\n음악으로 소통하는 게 좋아요',
      tags: [
        { icon: 'music', label: '밴드', color: 'purple' },
        { icon: 'sparkles', label: '록', color: 'pink' },
        { icon: '🎵', label: '작곡', color: 'emerald' }
      ],
      event: '홍대 거리공연 축제',
      distance: '315m'
    },
    { 
      id: 3, 
      name: '서연', 
      age: 21, 
      emoji: '🌸', 
      location: '건국대 녹색지대 축제', 
      time: '2시간 전',
      bio: '춤추는 거 좋아하고 축제 완전 좋아해요! 💃\n즐거운 사람들 만나고 싶어요',
      tags: [
        { icon: 'sparkles', label: '댄스', color: 'purple' },
        { icon: '💃', label: '춤', color: 'pink' },
        { icon: '🎉', label: '파티', color: 'emerald' }
      ],
      event: '건국대 녹색지대 축제',
      distance: '5.2km'
    },
  ];
  
  const receivedLikes = [
    { 
      id: 4, 
      name: '지우', 
      age: 23, 
      emoji: '🎭', 
      location: '홍대 거리공연 축제', 
      time: '방금 전', 
      isNew: true,
      bio: '연극과 뮤지컬을 사랑해요 🎭\n예술적인 대화 나누고 싶어요!',
      tags: [
        { icon: 'sparkles', label: '연극', color: 'purple' },
        { icon: '🎭', label: '뮤지컬', color: 'pink' },
        { icon: '🎬', label: '영화', color: 'emerald' }
      ],
      event: '홍대 거리공연 축제',
      distance: '180m'
    },
    { 
      id: 5, 
      name: '태민', 
      age: 25, 
      emoji: '⚡', 
      location: '연세대 아카라카', 
      time: '30분 전', 
      isNew: true,
      bio: 'EDM 프로듀서 지망생이에요 ⚡\n클럽 음악 좋아하시는 분 환영!',
      tags: [
        { icon: 'music', label: 'EDM', color: 'purple' },
        { icon: 'sparkles', label: '디제잉', color: 'pink' },
        { icon: '🎧', label: '프로듀싱', color: 'emerald' }
      ],
      event: '연세대 아카라카',
      distance: '3.8km'
    },
    { 
      id: 6, 
      name: '유진', 
      age: 22, 
      emoji: '🎀', 
      location: '이화여대 대동제', 
      time: '1시간 전',
      bio: '패션과 뷰티에 관심 많아요 💄\n트렌디한 축제 문화 좋아해요',
      tags: [
        { icon: 'sparkles', label: '패션', color: 'purple' },
        { icon: '💄', label: '뷰티', color: 'pink' },
        { icon: '📸', label: '셀카', color: 'emerald' }
      ],
      event: '이화여대 대동제',
      distance: '4.1km'
    },
    { 
      id: 7, 
      name: '준호', 
      age: 24, 
      emoji: '🦁', 
      location: '한양대 사자탑 페스티벌', 
      time: '3시간 전',
      bio: '운동 좋아하고 활발한 성격이에요 🏃\n축제에서 재밌는 추억 만들어요!',
      tags: [
        { icon: 'sparkles', label: '운동', color: 'purple' },
        { icon: '⚽', label: '축구', color: 'pink' },
        { icon: '🎉', label: '액티브', color: 'emerald' }
      ],
      event: '한양대 사자탑 페스티벌',
      distance: '6.5km'
    },
  ];
  
  const currentLikes = activeTab === 'sent' ? sentLikes : receivedLikes;
  
  const handleProfileClick = (like: any) => {
    const profileData = {
      name: like.name,
      age: like.age,
      emoji: like.emoji,
      bio: like.bio,
      tags: like.tags,
      event: like.event,
      distance: like.distance
    };
    onNavigate(5, profileData);
  };
  
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#0a0e27] via-[#1a0f2e] to-[#2d1b4e]">
      {/* Header */}
      <div className="px-6 pt-16 pb-6">
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={() => onNavigate(4)}
            className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center soft-shadow">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl">좋아요</h1>
          <div className="w-10"></div>
        </div>
        
        {/* Tabs */}
        <div className="flex gap-2 p-1 rounded-2xl bg-[#1e1b3c]/50 backdrop-blur-xl border border-white/10">
          <button
            onClick={() => setActiveTab('received')}
            className={`flex-1 py-3 rounded-xl transition-all ${
              activeTab === 'received'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 neon-glow-purple'
                : 'bg-transparent text-white/50'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Heart className="w-4 h-4" />
              <span className="text-sm">받은 좋아요</span>
              {receivedLikes.filter(l => l.isNew).length > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-pink-500 text-[10px]">
                  {receivedLikes.filter(l => l.isNew).length}
                </span>
              )}
            </div>
          </button>
          <button
            onClick={() => setActiveTab('sent')}
            className={`flex-1 py-3 rounded-xl transition-all ${
              activeTab === 'sent'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 neon-glow-purple'
                : 'bg-transparent text-white/50'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <UserPlus className="w-4 h-4" />
              <span className="text-sm">보낸 좋아요</span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Likes List */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        {currentLikes.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <Heart className="w-16 h-16 text-white/10 mb-4" />
            <p className="text-white/30">
              {activeTab === 'sent' ? '아직 보낸 좋아요가 없어요' : '아직 받은 좋아요가 없어요'}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {currentLikes.map((like) => (
              <div
                key={like.id}
                className="p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 soft-shadow relative overflow-hidden"
              >
                {like.isNew && (
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-pink-500 text-[10px] neon-glow-pink">
                    NEW
                  </div>
                )}
                
                <div className="flex items-center gap-4">
                  {/* Profile Image */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl neon-glow-purple">
                      {like.emoji}
                    </div>
                    {like.isNew && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-pink-500 border-2 border-[#0a0e27] animate-pulse"></div>
                    )}
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base">{like.name}</h3>
                      <span className="text-sm text-white/50">{like.age}세</span>
                    </div>
                    <p className="text-xs text-purple-300 mb-1">{like.location}</p>
                    <p className="text-[10px] text-white/30">{like.time}</p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2">
                    {activeTab === 'received' && (
                      <>
                        <button 
                          onClick={() => handleProfileClick(like)}
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-sm neon-glow-purple">
                          프로필
                        </button>
                        <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm">
                          채팅
                        </button>
                      </>
                    )}
                    {activeTab === 'sent' && (
                      <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white/50">
                        대기중
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Stats Footer */}
      <div className="px-6 pb-6">
        <div className="p-4 rounded-2xl bg-[#1e1b3c]/50 backdrop-blur-xl border border-white/10 flex items-center justify-around">
          <div className="text-center">
            <div className="text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
              {receivedLikes.length}
            </div>
            <div className="text-[10px] text-white/50">받은 좋아요</div>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div className="text-center">
            <div className="text-2xl bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-1">
              {sentLikes.length}
            </div>
            <div className="text-[10px] text-white/50">보낸 좋아요</div>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div className="text-center">
            <div className="text-2xl bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent mb-1">
              {receivedLikes.filter(l => l.isNew).length}
            </div>
            <div className="text-[10px] text-white/50">새 알림</div>
          </div>
        </div>
      </div>
    </div>
  );
}