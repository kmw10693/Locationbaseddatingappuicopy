import { ArrowLeft, Flag, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function ReportUserScreen({ onNavigate }: { onNavigate: (screen: number) => void }) {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const reportReasons = [
    { id: 'inappropriate', label: '부적절한 행동', description: '스팸, 욕설, 성희롱 등' },
    { id: 'fake', label: '가짜 프로필', description: '사진 도용, 허위 정보' },
    { id: 'minor', label: '미성년자', description: '19세 미만으로 의심됨' },
    { id: 'scam', label: '사기 의심', description: '금전 요구, 피싱 등' },
    { id: 'harassment', label: '괴롭힘', description: '지속적인 불쾌한 행동' },
    { id: 'other', label: '기타', description: '다른 이유' },
  ];
  
  const handleSubmit = () => {
    if (selectedReason) {
      setIsSubmitted(true);
      setTimeout(() => {
        onNavigate(8);
      }, 2000);
    }
  };
  
  if (isSubmitted) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0e27] via-[#1a0f2e] to-[#2d1b4e] p-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-purple-500 flex items-center justify-center neon-glow-mint mb-6 animate-pulse">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h2 className="text-2xl mb-3 text-center">신고가 접수되었습니다</h2>
        <p className="text-sm text-purple-300 text-center opacity-80 mb-6">
          검토 후 적절한 조치를 취하겠습니다.<br />
          안전한 서비스 이용을 위해 노력하겠습니다.
        </p>
        <div className="w-full max-w-xs h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" style={{width: '100%'}}></div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#0a0e27] via-[#1a0f2e] to-[#2d1b4e] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      
      {/* Header */}
      <div className="relative z-10 flex items-center gap-3 p-4 pt-16 border-b border-white/5">
        <button 
          onClick={() => onNavigate(8)}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg">사용자 신고하기</h2>
      </div>
      
      {/* Content */}
      <div className="flex-1 overflow-auto p-6 relative z-10">
        {/* User Info */}
        <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-6 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
            🎸
          </div>
          <div>
            <p className="mb-1">신고 대상 사용자</p>
            <p className="text-sm text-purple-300">지우, 23세</p>
          </div>
        </div>
        
        {/* Warning */}
        <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-400/30 mb-6">
          <p className="text-sm text-orange-300 text-center">
            허위 신고는 제재 대상이 될 수 있습니다
          </p>
        </div>
        
        {/* Reason Selection */}
        <div className="mb-6">
          <h3 className="text-sm text-purple-300 mb-3">신고 사유를 선택해주세요</h3>
          <div className="space-y-2">
            {reportReasons.map((reason) => (
              <button
                key={reason.id}
                onClick={() => setSelectedReason(reason.id)}
                className={`w-full flex items-start gap-3 p-4 rounded-2xl backdrop-blur-sm border transition-all ${
                  selectedReason === reason.id
                    ? 'bg-gradient-to-r from-red-500/20 to-orange-500/20 border-red-400/50 neon-glow-pink'
                    : 'bg-white/5 border-white/10 hover:border-red-400/30'
                }`}
              >
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  selectedReason === reason.id
                    ? 'border-red-400 bg-red-400'
                    : 'border-white/30'
                }`}>
                  {selectedReason === reason.id && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
                <div className="flex-1 text-left">
                  <p className="mb-1">{reason.label}</p>
                  <p className="text-xs text-purple-300 opacity-70">{reason.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mb-6">
          <h3 className="text-sm text-purple-300 mb-3">추가 정보 (선택)</h3>
          <textarea
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            placeholder="신고 내용을 자세히 설명해주세요..."
            className="w-full p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 outline-none placeholder:text-white/30 resize-none h-32"
          />
          <p className="text-xs text-purple-300 opacity-50 mt-2">
            {additionalInfo.length}/500
          </p>
        </div>
      </div>
      
      {/* Submit Button */}
      <div className="p-6 relative z-10">
        <button 
          onClick={handleSubmit}
          disabled={!selectedReason}
          className={`w-full py-4 rounded-2xl flex items-center justify-center gap-2 soft-shadow transition-all ${
            selectedReason
              ? 'bg-gradient-to-r from-red-500 to-orange-500 hover:scale-[1.02] neon-glow-pink'
              : 'bg-white/10 opacity-50 cursor-not-allowed'
          }`}
        >
          <Flag className="w-5 h-5" />
          <span>신고 접수하기</span>
        </button>
      </div>
    </div>
  );
}
