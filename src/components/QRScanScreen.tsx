import { QrCode, X, Camera } from 'lucide-react';

export default function QRScanScreen({ onNavigate }: { onNavigate: (screen: number) => void }) {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#0a0e27] via-[#1a0f2e] to-[#2d1b4e] relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-5 relative z-10">
        <button 
          onClick={() => onNavigate(0)}
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-lg">QR 스캔</h2>
        <div className="w-10"></div>
      </div>
      
      {/* QR Scan Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative">
        {/* Background glow */}
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        {/* QR Frame */}
        <div className="relative z-10 w-64 h-64 mb-6">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-purple-400 rounded-tl-3xl neon-glow-purple"></div>
          <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-purple-400 rounded-tr-3xl neon-glow-purple"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-pink-400 rounded-bl-3xl neon-glow-pink"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-pink-400 rounded-br-3xl neon-glow-pink"></div>
          
          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-sm flex items-center justify-center">
              <QrCode className="w-10 h-10 text-purple-300" />
            </div>
          </div>
          
          {/* Scanning line animation */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
        </div>
        
        {/* Instructions */}
        <h3 className="text-xl mb-2 text-center">이벤트 QR을 스캔하세요</h3>
        <p className="text-purple-300 text-center max-w-xs opacity-80 text-sm">
          행사장 입구의 QR 코드를 찍으면<br />바로 시작할 수 있어요
        </p>
      </div>
      
      {/* Bottom Button */}
      <div className="p-5 space-y-3 pb-6">
        <button 
          onClick={() => onNavigate(10)}
          className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 neon-glow-purple flex items-center justify-center gap-2 soft-shadow">
          <Camera className="w-5 h-5" />
          <span>카메라로 스캔하기</span>
        </button>
        <button 
          onClick={() => onNavigate(2)}
          className="w-full py-3.5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-purple-300 flex items-center justify-center gap-2">
          <span>QR 코드가 없나요?</span>
        </button>
      </div>
    </div>
  );
}