import { ArrowLeft, Camera, User } from 'lucide-react';
import { useState } from 'react';

export default function ProfileEditScreen({ onNavigate }: { onNavigate: (screen: number) => void }) {
  const [name, setName] = useState('김하늘');
  const [age, setAge] = useState('23');
  const [bio, setBio] = useState('음악 페스티벌을 좋아해요 🎵\n새로운 사람들과의 만남을 즐깁니다!');
  
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#0a0e27] via-[#1a0f2e] to-[#2d1b4e] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      {/* Header */}
      <div className="relative z-10 flex items-center gap-3 p-4 pt-16 border-b border-white/5">
        <button 
          onClick={() => onNavigate(9)}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg">프로필 편집</h2>
      </div>
      
      {/* Content */}
      <div className="flex-1 overflow-auto p-6 relative z-10">
        {/* Profile Photo */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-3">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-5xl neon-glow-purple">
              👤
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center neon-glow-purple">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-purple-300">사진 변경</p>
        </div>
        
        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-purple-300 mb-2">이름</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 outline-none focus:border-purple-400/50 transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-sm text-purple-300 mb-2">나이</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 outline-none focus:border-purple-400/50 transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-sm text-purple-300 mb-2">자기소개</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 outline-none focus:border-purple-400/50 transition-colors resize-none h-32"
            />
            <p className="text-xs text-purple-300 opacity-50 mt-2">{bio.length}/150</p>
          </div>
          
          <div>
            <label className="block text-sm text-purple-300 mb-2">관심사</label>
            <div className="flex flex-wrap gap-2">
              {['🎵 음악', '🎨 아트', '🎭 공연', '📷 사진', '✈️ 여행', '⚽ 스포츠'].map((tag) => (
                <button
                  key={tag}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-sm"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Save Button */}
      <div className="p-6 relative z-10">
        <button 
          onClick={() => onNavigate(9)}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 neon-glow-purple soft-shadow">
          저장하기
        </button>
      </div>
    </div>
  );
}
