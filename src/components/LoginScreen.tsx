import { User, ArrowRight, Mail } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export default function LoginScreen({ onNavigate }: { onNavigate: (screen: number) => void }) {
  const handleKakaoLogin = async () => {
    try {
      const supabase = createClient(
        `https://${projectId}.supabase.co`,
        publicAnonKey
      );
      
      // Kakao OAuth 로그인 시작
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'kakao',
        options: {
          redirectTo: window.location.href,
        }
      });
      
      if (error) {
        console.error('카카오 로그인 에러:', error);
        alert('카카오 로그인에 문제가 발생했습니다. Supabase에서 Kakao OAuth를 설정해주세요.');
      }
    } catch (err) {
      console.error('로그인 오류:', err);
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#0a0e27] via-[#1a0f2e] to-[#2d1b4e] p-6 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
      
      {/* Logo */}
      <div className="relative z-10 mt-12 mb-6">
        <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 neon-glow-purple flex items-center justify-center mb-3">
          <span className="text-3xl">✨</span>
        </div>
        <h1 className="text-3xl mb-1">키읔</h1>
        <p className="text-purple-300">페스티벌에서 만나는 새로운 인연</p>
      </div>
      
      {/* Login Form */}
      <div className="flex-1 flex flex-col justify-start relative z-10 pb-6">
        <h2 className="text-xl mb-4">시작하기</h2>
        
        {/* Email Input */}
        <div className="mb-3">
          <label className="text-purple-300 mb-2 block text-sm">이메일</label>
          <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 soft-shadow">
            <Mail className="w-5 h-5 text-purple-400" />
            <input 
              type="email" 
              placeholder="example@email.com"
              className="flex-1 bg-transparent outline-none placeholder:text-white/30"
            />
          </div>
        </div>
        
        {/* Name Input */}
        <div className="mb-4">
          <label className="text-purple-300 mb-2 block text-sm">이름</label>
          <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 soft-shadow">
            <User className="w-5 h-5 text-pink-400" />
            <input 
              type="text" 
              placeholder="이름을 입력하세요"
              className="flex-1 bg-transparent outline-none placeholder:text-white/30"
            />
          </div>
        </div>
        
        {/* Continue Button */}
        <button 
          onClick={() => onNavigate(3)}
          className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 neon-glow-purple flex items-center justify-center gap-2 soft-shadow mb-3">
          <span>계속하기</span>
          <ArrowRight className="w-5 h-5" />
        </button>
        
        {/* Divider */}
        <div className="flex items-center gap-4 mb-3">
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="text-sm text-white/40">또는</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>
        
        {/* Kakao Login */}
        <button 
          onClick={handleKakaoLogin}
          className="w-full py-3.5 rounded-2xl bg-[#FEE500] flex items-center justify-center gap-3 soft-shadow mb-4 transition-transform active:scale-95">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 3C6.5 3 2 6.6 2 11C2 13.8 3.8 16.3 6.5 17.8L5.5 21.5L9.5 19.3C10.3 19.5 11.1 19.5 12 19.5C17.5 19.5 22 15.9 22 11.5C22 6.6 17.5 3 12 3Z" fill="#3C1E1E"/>
          </svg>
          <span className="text-[#3C1E1E]">카카오로 3초만에 시작하기</span>
        </button>
        
        {/* Terms */}
        <p className="text-center text-xs text-white/40">
          가입하면 <span className="text-purple-400">이용약관</span> 및 <span className="text-purple-400">개인정보처리방침</span>에<br />동의하는 것으로 간주됩니다
        </p>
      </div>
    </div>
  );
}