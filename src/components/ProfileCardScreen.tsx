import { X, Heart, MessageCircle, MapPin, Music, Camera, Sparkles, Info } from 'lucide-react';

interface ProfileData {
  name: string;
  age: number;
  emoji: string;
  bio: string;
  tags: Array<{ icon: string; label: string; color: string }>;
  event: string;
  distance: string;
}

export default function ProfileCardScreen({ 
  onNavigate, 
  profileData 
}: { 
  onNavigate: (screen: number) => void;
  profileData?: ProfileData;
}) {
  // Default profile data (지우)
  const defaultProfile: ProfileData = {
    name: '지우',
    age: 23,
    emoji: '🎸',
    bio: '음악 듣는 거 좋아하고 페스티벌 자주 와요 🎵\n오늘 처음 와봤는데 분위기 좋네요!',
    tags: [
      { icon: 'music', label: '인디음악', color: 'purple' },
      { icon: 'sparkles', label: '페스티벌', color: 'pink' },
      { icon: '🎨', label: '사진', color: 'emerald' }
    ],
    event: '홍대 거리공연 축제',
    distance: '127m'
  };
  
  const profile = profileData || defaultProfile;

  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#0a0e27] via-[#1a0f2e] to-[#2d1b4e] p-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <button 
          onClick={() => onNavigate(4)}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <X className="w-5 h-5" />
        </button>
        <button 
          onClick={() => onNavigate(8)}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <Info className="w-5 h-5" />
        </button>
      </div>
      
      {/* Profile Card */}
      <div className="flex-1 flex flex-col relative z-10">
        {/* Image Area */}
        <div className="relative rounded-3xl overflow-hidden soft-shadow mb-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 h-96">
          {/* Photo placeholder with gradient */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Camera className="w-24 h-24 text-white/20" />
          </div>
          
          {/* Profile emoji overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-9xl">{profile.emoji}</span>
          </div>
          
          {/* Distance badge */}
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[#1e1b3c]/90 backdrop-blur-xl border border-purple-400/30 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-purple-400" />
            <span className="text-xs">{profile.distance}</span>
          </div>
          
          {/* Photo count indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1">
            <div className="h-1 w-12 bg-white rounded-full"></div>
            <div className="h-1 w-12 bg-white/30 rounded-full"></div>
            <div className="h-1 w-12 bg-white/30 rounded-full"></div>
          </div>
        </div>
        
        {/* Profile Info */}
        <div className="flex-1 overflow-auto">
          {/* Name and Age */}
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-3xl">{profile.name}</h2>
            <span className="text-2xl text-purple-300">{profile.age}</span>
            <Sparkles className="w-5 h-5 text-pink-400" />
          </div>
          
          {/* Bio */}
          <p className="text-purple-200 mb-4 opacity-80 whitespace-pre-line">
            {profile.bio}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {profile.tags.map((tag, index) => (
              <div 
                key={index}
                className={`px-3 py-1.5 rounded-full bg-${tag.color}-500/20 border border-${tag.color}-400/30 flex items-center gap-1.5`}>
                {tag.icon === 'music' && <Music className="w-3 h-3 text-purple-400" />}
                {tag.icon === 'sparkles' && <Sparkles className="w-3 h-3 text-pink-400" />}
                {!['music', 'sparkles'].includes(tag.icon) && <span>{tag.icon}</span>}
                <span className="text-sm">{tag.label}</span>
              </div>
            ))}
          </div>
          
          {/* Event Info */}
          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <p className="text-xs text-purple-300 mb-1">참여중인 이벤트</p>
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>{profile.event}</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-4 pt-4 relative z-10">
        <button 
          onClick={() => onNavigate(4)}
          className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center soft-shadow">
          <X className="w-7 h-7 text-white/70" />
        </button>
        
        <button 
          onClick={() => onNavigate(6)}
          className="flex-1 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 neon-glow-purple flex items-center justify-center gap-2 soft-shadow">
          <Heart className="w-6 h-6" />
          <span className="text-lg">좋아요</span>
        </button>
        
        <button 
          onClick={() => onNavigate(7)}
          className="w-16 h-16 rounded-full bg-emerald-400/20 backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center soft-shadow neon-glow-mint">
          <MessageCircle className="w-7 h-7 text-emerald-400" />
        </button>
      </div>
    </div>
  );
}