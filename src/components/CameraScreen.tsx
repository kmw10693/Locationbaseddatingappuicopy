import { X, Camera, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CameraScreen({ onNavigate }: { onNavigate: (screen: number) => void }) {
  const [isScanning, setIsScanning] = useState(true);
  const [scanSuccess, setScanSuccess] = useState(false);

  useEffect(() => {
    // Simulate QR code detection after 2 seconds
    const timer = setTimeout(() => {
      setIsScanning(false);
      setScanSuccess(true);
      
      // Navigate to login after showing success
      setTimeout(() => {
        onNavigate(2);
      }, 1500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onNavigate]);

  return (
    <div className="w-full h-full flex flex-col bg-black relative overflow-hidden">
      {/* Camera View Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black/30 to-gray-900/50"></div>
      
      {/* Header */}
      <div className="flex items-center justify-between p-6 relative z-20">
        <button 
          onClick={() => onNavigate(1)}
          className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm border border-white/20">
          <X className="w-5 h-5 text-white" />
        </button>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
          <Camera className="w-4 h-4 text-white" />
          <span className="text-white">QR 스캔 중...</span>
        </div>
        <div className="w-10"></div>
      </div>
      
      {/* QR Scan Frame */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10">
        {/* Scanning Frame */}
        <div className="relative w-80 h-80 mb-8">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-purple-400 rounded-tl-3xl neon-glow-purple"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-purple-400 rounded-tr-3xl neon-glow-purple"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-pink-400 rounded-bl-3xl neon-glow-pink"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-pink-400 rounded-br-3xl neon-glow-pink"></div>
          
          {/* Scanning line animation */}
          {isScanning && (
            <div 
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
              style={{
                animation: 'scan 2s ease-in-out infinite',
              }}
            ></div>
          )}
          
          {/* Success indicator */}
          {scanSuccess && (
            <div className="absolute inset-0 flex items-center justify-center animate-in fade-in zoom-in duration-500">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 neon-glow-purple flex items-center justify-center">
                <CheckCircle className="w-16 h-16 text-white" />
              </div>
            </div>
          )}
        </div>
        
        {/* Instructions */}
        <div className="text-center">
          {isScanning ? (
            <>
              <h3 className="text-2xl mb-3 text-white">QR 코드를 프레임 안에 위치시키세요</h3>
              <p className="text-purple-300 max-w-xs opacity-80">
                자동으로 인식됩니다
              </p>
            </>
          ) : (
            <>
              <h3 className="text-2xl mb-3 text-white">스캔 완료!</h3>
              <p className="text-purple-300 max-w-xs opacity-80">
                잠시만 기다려주세요...
              </p>
            </>
          )}
        </div>
      </div>
      
      {/* Overlay gradient at bottom */}
      <div className="h-32 bg-gradient-to-t from-black/80 to-transparent relative z-10"></div>

      <style>{`
        @keyframes scan {
          0% {
            top: 0;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}