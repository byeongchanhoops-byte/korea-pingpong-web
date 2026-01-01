import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
                <h3 className="text-xl font-bold mb-4">코리아탁구교실</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    군산 최고의 시설과 서비스를 자랑하는 탁구장입니다.<br/>
                    건강과 즐거움이 함께하는 곳, 언제든 방문해주세요.
                </p>
            </div>
            <div>
                <h3 className="text-lg font-bold mb-4">Contact</h3>
                <ul className="text-gray-400 text-sm space-y-2">
                    <li>Tel: 010-5237-8570</li>
                    <li>Add: 전북 군산시 진포3길 48</li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-bold mb-4">Keywords</h3>
                <div className="flex flex-wrap gap-2">
                    {['군산탁구', '군산탁구장', '수송동탁구', '무료레슨', '탁구동호회'].map(tag => (
                        <span key={tag} className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-300">#{tag}</span>
                    ))}
                </div>
            </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Korea Table Tennis Class. All rights reserved.
        </div>
      </div>
    </footer>
  );
};