import React from 'react';
import { SectionId } from '../types';

export const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          
          <div className="mb-12 lg:mb-0 text-center lg:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold mb-4">
              군산 대표 탁구장
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              즐거운 탁구 생활,<br />
              <span className="text-brand-600">코리아탁구교실</span>에서<br />
              시작하세요!
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              최신 로봇 머신 완비, 넓고 쾌적한 시설. <br className="hidden sm:block" />
              남녀노소 누구나 즐겁게 운동할 수 있는 최고의 공간입니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById(SectionId.PRICING)?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-brand-600 text-white font-bold rounded-xl shadow-lg hover:bg-brand-700 transition-all transform hover:-translate-y-1"
              >
                이용요금 보기
              </button>
              <button 
                 onClick={() => document.getElementById(SectionId.LOCATION)?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-white text-brand-600 border-2 border-brand-100 font-bold rounded-xl hover:bg-brand-50 transition-all"
              >
                오시는 길
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                src="/img/image_main1.jpeg" 
                alt="코리아탁구교실 내부 전경" 
                className="w-full h-auto object-cover aspect-video"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                <p className="font-bold text-xl">"넓고 쾌적한 탁구장에서 한 게임!"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};