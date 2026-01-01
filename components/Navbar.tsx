import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { SectionId } from '../types';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOperating, setIsOperating] = useState(false);

  useEffect(() => {
    const checkOperationTime = () => {
      const now = new Date();
      const hour = now.getHours();
      const day = now.getDay(); // 0 = Sunday, 6 = Saturday
      
      const isWeekend = day === 0 || day === 6;
      const closeHour = isWeekend ? 21 : 23;
      
      // Open from 10:00 to 21:00 (Weekends) or 23:00 (Weekdays)
      setIsOperating(hour >= 10 && hour < closeHour);
    };
    
    checkOperationTime();
    const interval = setInterval(checkOperationTime, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: '홈', id: SectionId.HOME },
    { label: '시설안내', id: SectionId.FACILITIES },
    { label: '이용요금', id: SectionId.PRICING },
    { label: '위치안내', id: SectionId.LOCATION },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer gap-3" onClick={() => scrollTo(SectionId.HOME)}>
            <div className="flex items-center">
              <div className="mr-2">
                <span className="font-bold text-xl">🏓</span>
              </div>
              <h1 className="font-bold text-xl text-gray-900 tracking-tight hidden sm:block">코리아탁구교실</h1>
              <h1 className="font-bold text-xl text-gray-900 tracking-tight sm:hidden">코리아탁구</h1>
            </div>
            {/* Status Badge */}
            <div className={`hidden sm:flex px-2 py-0.5 rounded-full text-xs font-bold border ${isOperating ? 'bg-green-50 text-green-700 border-green-200' : 'bg-gray-100 text-gray-500 border-gray-200'}`}>
              {isOperating ? '● 영업중' : '○ 영업종료'}
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-600 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:010-5237-8570"
              className="bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center transition-all shadow-md"
            >
              <Phone size={16} className="mr-2" />
              전화문의
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
             <div className={`flex px-2 py-0.5 rounded-full text-xs font-bold border ${isOperating ? 'bg-green-50 text-green-700 border-green-200' : 'bg-gray-100 text-gray-500 border-gray-200'}`}>
              {isOperating ? '영업중' : '종료'}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-600 hover:text-brand-600 hover:bg-brand-50 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                {item.label}
              </button>
            ))}
             <a
              href="tel:010-5237-8570"
              className="block w-full text-center bg-brand-600 text-white px-4 py-3 rounded-lg font-bold mt-4"
            >
              전화로 문의하기
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};