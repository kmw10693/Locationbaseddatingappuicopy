import { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import QRScanScreen from './components/QRScanScreen';
import LoginScreen from './components/LoginScreen';
import LocationPermissionScreen from './components/LocationPermissionScreen';
import MapScreen from './components/MapScreen';
import ProfileCardScreen from './components/ProfileCardScreen';
import MatchSuccessScreen from './components/MatchSuccessScreen';
import ChatScreen from './components/ChatScreen';
import SafetyReportScreen from './components/SafetyReportScreen';
import SettingsScreen from './components/SettingsScreen';
import CameraScreen from './components/CameraScreen';
import LikesScreen from './components/LikesScreen';
import ReportUserScreen from './components/ReportUserScreen';
import ProfileEditScreen from './components/ProfileEditScreen';
import PersonalInfoScreen from './components/PersonalInfoScreen';
import NotificationSettingsScreen from './components/NotificationSettingsScreen';
import HelpScreen from './components/HelpScreen';
import TermsScreen from './components/TermsScreen';
import ChatListScreen from './components/ChatListScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [selectedProfile, setSelectedProfile] = useState<any>(null);
  
  const handleNavigate = (screenIndex: number, profileData?: any) => {
    setCurrentScreen(screenIndex);
    if (profileData) {
      setSelectedProfile(profileData);
    }
  };
  
  const screens = [
    { name: '1. Splash', component: <SplashScreen onNavigate={handleNavigate} /> },
    { name: '2. QR Scan', component: <QRScanScreen onNavigate={handleNavigate} /> },
    { name: '3. Login', component: <LoginScreen onNavigate={handleNavigate} /> },
    { name: '4. Location Permission', component: <LocationPermissionScreen onNavigate={handleNavigate} /> },
    { name: '5. Map View', component: <MapScreen onNavigate={handleNavigate} /> },
    { name: '6. Profile Card', component: <ProfileCardScreen onNavigate={handleNavigate} profileData={selectedProfile} /> },
    { name: '7. Match Success', component: <MatchSuccessScreen onNavigate={handleNavigate} /> },
    { name: '8. Chat', component: <ChatScreen onNavigate={handleNavigate} /> },
    { name: '9. Safety & Report', component: <SafetyReportScreen onNavigate={handleNavigate} /> },
    { name: '10. Settings', component: <SettingsScreen onNavigate={handleNavigate} /> },
    { name: '11. Camera Scan', component: <CameraScreen onNavigate={handleNavigate} /> },
    { name: '12. Likes', component: <LikesScreen onNavigate={handleNavigate} /> },
    { name: '13. Report User', component: <ReportUserScreen onNavigate={handleNavigate} /> },
    { name: '14. Profile Edit', component: <ProfileEditScreen onNavigate={handleNavigate} /> },
    { name: '15. Personal Info', component: <PersonalInfoScreen onNavigate={handleNavigate} /> },
    { name: '16. Notifications', component: <NotificationSettingsScreen onNavigate={handleNavigate} /> },
    { name: '17. Help', component: <HelpScreen onNavigate={handleNavigate} /> },
    { name: '18. Terms', component: <TermsScreen onNavigate={handleNavigate} /> },
    { name: '19. Chat List', component: <ChatListScreen onNavigate={handleNavigate} /> },
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a0f2e] to-[#2d1b4e] flex items-center justify-center p-4">
      {/* Mobile Frame */}
      <div className="relative w-full max-w-[393px]">
        {/* Screen Info */}
        <div className="mb-4 text-center">
          <h2 className="text-2xl mb-2 gradient-text">키읔</h2>
          <p className="text-sm text-purple-300">{screens[currentScreen].name}</p>
        </div>
        
        {/* iPhone Frame */}
        <div className="relative">
          {/* Phone Border */}
          <div className="w-full h-[852px] rounded-[60px] bg-black p-3 shadow-2xl border-8 border-gray-900">
            {/* Screen */}
            <div className="w-full h-full rounded-[48px] overflow-hidden bg-black relative">
              {/* Dynamic Island */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-b-3xl z-50"></div>
              
              {/* Screen Content */}
              <div className="w-full h-full overflow-y-auto">
                {screens[currentScreen].component}
              </div>
            </div>
          </div>
        </div>
        
        {/* Screen Indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {screens.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentScreen(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentScreen
                  ? 'w-8 bg-gradient-to-r from-purple-500 to-pink-500 neon-glow-purple'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
        
        {/* Helper text */}
        <p className="mt-4 text-center text-xs text-purple-300/50">
          클릭하여 프로토타입 탐색 • 버튼들이 작동합니다
        </p>
      </div>
    </div>
  );
}