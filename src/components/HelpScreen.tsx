import { ArrowLeft, HelpCircle, Mail, MessageCircle } from 'lucide-react';

export default function HelpScreen({ onNavigate }: { onNavigate: (screen: number) => void }) {
  const faqs = [
    {
      q: '키읔은 어떻게 사용하나요?',
      a: '페스티벌 현장에서 QR 코드를 스캔하면 바로 시작할 수 있어요. 주변의 다른 참가자들과 연결되고 매칭을 시작할 수 있습니다.'
    },
    {
      q: '매칭은 어떻게 이루어지나요?',
      a: '같은 페스티벌에 참가 중인 사람들 중에서 서로 좋아요를 누르면 매칭이 성사됩니다. 매칭되면 바로 채팅을 시작할 수 있어요.'
    },
    {
      q: '안전하게 사용하려면?',
      a: '항상 공개된 장소에서 만나고, 개인정보는 신중하게 공유하세요. 불편한 사용자는 즉시 신고해주세요.'
    },
    {
      q: '계정을 삭제하려면?',
      a: '설정 > 개인정보 > 계정 삭제에서 진행할 수 있습니다. 삭제된 데이터는 복구할 수 없으니 신중하게 결정해주세요.'
    },
  ];
  
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#0a0e27] via-[#1a0f2e] to-[#2d1b4e] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      
      {/* Header */}
      <div className="relative z-10 flex items-center gap-3 p-4 pt-16 border-b border-white/5">
        <button 
          onClick={() => onNavigate(9)}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg">도움말</h2>
      </div>
      
      {/* Content */}
      <div className="flex-1 overflow-auto p-6 relative z-10">
        {/* FAQ Section */}
        <div className="mb-8">
          <h3 className="text-sm text-purple-300 mb-4">자주 묻는 질문</h3>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="flex items-start gap-3 mb-3">
                  <HelpCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">{faq.q}</p>
                </div>
                <p className="text-xs text-purple-300 opacity-70 ml-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Contact Section */}
        <div>
          <h3 className="text-sm text-purple-300 mb-4">문의하기</h3>
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30">
              <div className="w-10 h-10 rounded-xl bg-purple-400/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-purple-400" />
              </div>
              <div className="flex-1 text-left">
                <p className="mb-1">이메일 문의</p>
                <p className="text-xs text-purple-300 opacity-70">support@kieuk.com</p>
              </div>
            </button>
            
            <button className="w-full flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-400/30">
              <div className="w-10 h-10 rounded-xl bg-pink-400/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-pink-400" />
              </div>
              <div className="flex-1 text-left">
                <p className="mb-1">카카오톡 문의</p>
                <p className="text-xs text-purple-300 opacity-70">평일 10:00 - 18:00</p>
              </div>
            </button>
          </div>
        </div>
        
        <div className="mt-8 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-400/30">
          <p className="text-xs text-emerald-300 text-center">
            더 궁금한 사항이 있으신가요?<br />
            언제든지 문의해주세요!
          </p>
        </div>
      </div>
    </div>
  );
}
