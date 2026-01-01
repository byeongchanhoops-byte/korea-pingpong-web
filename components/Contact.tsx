import React from 'react';
import { SectionId } from '../types';
import { MapPin, Phone, Clock, Megaphone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id={SectionId.LOCATION} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Info Side */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">오시는 길 & 문의</h2>
            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">주소</h3>
                  <p className="text-gray-600">전북 군산시 진포3길 48</p>
                  <p className="text-sm text-gray-500 mt-1">※ 건물 뒷편 전용 주차장 무료 이용 가능</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">전화 문의</h3>
                  <p className="text-gray-600 text-lg font-medium">010-5237-8570</p>
                  <a href="tel:01052378570" className="text-sm text-brand-600 hover:underline mt-1 inline-block">
                    지금 바로 전화걸기 &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">운영 시간</h3>
                  <p className="text-gray-600">평일 10:00 - 23:00</p>
                  <p className="text-gray-600">주말 10:00 - 21:00</p>
                  <p className="text-sm text-brand-600 font-bold mt-1">※ 365일 연중무휴 (명절 등 공휴일도 정상영업)</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Megaphone size={20} className="text-red-500"/>
                공지사항
              </h3>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2 items-start">
                    <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-xs font-bold shrink-0 mt-0.5">운영</span>
                    <span className="text-gray-700">저희 탁구장은 쉬는 날 없이 365일 언제나 열려있습니다!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="h-full min-h-[400px] bg-gray-200 rounded-2xl overflow-hidden relative shadow-md border border-gray-100 group">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 bg-gray-100">
                <img 
                    src="https://picsum.photos/800/600?grayscale" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity"
                    alt="지도 배경"
                />
               <div className="relative z-10 bg-white p-6 rounded-xl shadow-xl text-center max-w-xs w-full">
                    <MapPin className="w-10 h-10 text-brand-600 mx-auto mb-2" />
                    <p className="font-bold text-lg mb-4">군산 코리아탁구교실</p>
                    <div className="flex flex-col gap-2">
                        <a 
                          href="https://map.naver.com/v5/search/군산 코리아탁구교실" 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-full px-4 py-2.5 bg-[#03C75A] text-white rounded-lg text-sm font-bold hover:bg-[#02b351] transition-colors flex items-center justify-center gap-2"
                        >
                          네이버 지도로 보기
                        </a>
                        <a 
                          href="https://www.google.com/maps/search/군산 코리아탁구교실" 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-full px-4 py-2.5 bg-[#4285F4] text-white rounded-lg text-sm font-bold hover:bg-[#3367d6] transition-colors flex items-center justify-center gap-2"
                        >
                          구글 지도로 보기
                        </a>
                    </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};