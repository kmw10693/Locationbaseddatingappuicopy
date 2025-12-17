import { ArrowLeft, FileText } from 'lucide-react';

export default function TermsScreen({ onNavigate }: { onNavigate: (screen: number) => void }) {
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
        <h2 className="text-lg">이용약관</h2>
      </div>
      
      {/* Content */}
      <div className="flex-1 overflow-auto p-6 relative z-10">
        <div className="space-y-6">
          {/* Introduction */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/30">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-purple-400" />
              <h3 className="text-base">키읔 서비스 이용약관</h3>
            </div>
            <p className="text-xs text-purple-300 opacity-80">
              본 약관은 키읔(이하 "서비스")을 이용하는 모든 사용자에게 적용되며, 서비스 이용 시 동의한 것으로 간주됩니다.
            </p>
          </div>
          
          {/* Section 1 */}
          <div>
            <h4 className="text-sm mb-2 text-purple-300">제1조 (목적)</h4>
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-xs text-white/80 leading-relaxed">
                본 약관은 키읔이 제공하는 페스티벌 기반 위치 데이팅 서비스의 이용과 관련하여 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
              </p>
            </div>
          </div>
          
          {/* Section 2 */}
          <div>
            <h4 className="text-sm mb-2 text-purple-300">제2조 (서비스의 제공)</h4>
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-xs text-white/80 leading-relaxed mb-3">
                회사는 다음과 같은 서비스를 제공합니다:
              </p>
              <ul className="text-xs text-white/70 space-y-2 ml-4">
                <li>• 페스티벌 현장 기반 위치 매칭 서비스</li>
                <li>• QR 코드를 통한 빠른 접근 서비스</li>
                <li>• 채팅 및 프로필 공유 기능</li>
                <li>• 안전 가이드 및 신고 기능</li>
              </ul>
            </div>
          </div>
          
          {/* Section 3 */}
          <div>
            <h4 className="text-sm mb-2 text-purple-300">제3조 (이용자의 의무)</h4>
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-xs text-white/80 leading-relaxed mb-3">
                이용자는 다음 행위를 하여서는 안됩니다:
              </p>
              <ul className="text-xs text-white/70 space-y-2 ml-4">
                <li>• 타인의 개인정보를 도용하는 행위</li>
                <li>• 욕설, 성희롱, 스팸 등 부적절한 콘텐츠 게시</li>
                <li>• 상업적 목적의 광고 및 홍보</li>
                <li>• 미성년자의 서비스 이용</li>
                <li>• 허위 프로필 또는 정보 등록</li>
              </ul>
            </div>
          </div>
          
          {/* Section 4 */}
          <div>
            <h4 className="text-sm mb-2 text-purple-300">제4조 (개인정보 보호)</h4>
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-xs text-white/80 leading-relaxed">
                회사는 이용자의 개인정보를 보호하기 위해 최선을 다하며, 개인정보 처리방침에 따라 안전하게 관리합니다. 수집된 정보는 서비스 제공 목적으로만 사용됩니다.
              </p>
            </div>
          </div>
          
          {/* Section 5 */}
          <div>
            <h4 className="text-sm mb-2 text-purple-300">제5조 (면책조항)</h4>
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-xs text-white/80 leading-relaxed">
                회사는 이용자 간 발생한 분쟁, 만남으로 인한 피해, 또는 서비스를 통해 제공된 정보의 정확성에 대해 책임을 지지 않습니다. 모든 만남은 공개된 장소에서 이루어질 것을 권장합니다.
              </p>
            </div>
          </div>
          
          {/* Section 6 */}
          <div>
            <h4 className="text-sm mb-2 text-purple-300">제6조 (계약 해지)</h4>
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-xs text-white/80 leading-relaxed">
                이용자는 언제든지 계정을 삭제하여 서비스 이용을 중단할 수 있습니다. 계정 삭제 시 모든 데이터는 영구적으로 삭제되며 복구할 수 없습니다.
              </p>
            </div>
          </div>
          
          {/* Footer */}
          <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-400/30">
            <p className="text-xs text-purple-300 text-center">
              시행일: 2024년 12월 10일<br />
              본 약관에 대한 문의: support@kieuk.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
