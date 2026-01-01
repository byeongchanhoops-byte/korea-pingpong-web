import React from 'react';
import { SectionId, Facility } from '../types';
import { MonitorPlay, Trophy, Coffee, Shirt, Zap, Car, Grid } from 'lucide-react';

export const Facilities: React.FC = () => {
  const facilities: Facility[] = [
    {
      id: 'interior',
      title: '넓은 실내',
      description: '총 12대의 탁구대가 설치된 넓고 쾌적한 경기장에서 여유롭게 운동하세요.',
      icon: 'grid',
      image: '/img/image_main2.jpeg'
    },
    {
      id: 'parking',
      title: '넓은 주차장',
      description: '건물 뒷편 전용 주차장 완비. 주차 걱정 없이 방문하세요.',
      icon: 'car',
      image: '/img/image_garbage.jpeg'
    },
    {
      id: 'robot',
      title: '레슨용 · 로봇볼머신',
      description: '레슨용 기계 1대와 로봇볼머신 2대로 혼자서도 연습 가능! 최신형 탁구 로봇으로 실력을 키우세요.',
      icon: 'zap',
      image: '/img/image_machin1.jpeg'
    },
    {
      id: 'rest',
      title: '일반 휴게실',
      description: '운동 후 쉴 수 있는 휴게실이 준비되어 있습니다',
      icon: 'coffee',
      image: '/img/image_room1.jpeg'
    },
    {
      id: 'rest',
      title: '장애인 전용 휴게실',
      description: '더 편안하게 쉴 수 있도록 장애인 전용 휴게 공간을 추가로 마련했습니다.',
      icon: 'coffee',
      image: '/img/image_room2.jpeg'
    },
    {
      id: 'locker',
      title: '남녀 탈의실',
      description: '편안하고 깨끗한 남자/여자 탈의실이 각각 완비되어 있습니다.',
      icon: 'shirt',
      image: '/img/image_wearroom.jpeg'
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'zap': return <Zap className="w-6 h-6 text-brand-600" />;
      case 'monitor': return <MonitorPlay className="w-6 h-6 text-brand-600" />;
      case 'shirt': return <Shirt className="w-6 h-6 text-brand-600" />;
      case 'coffee': return <Coffee className="w-6 h-6 text-brand-600" />;
      case 'car': return <Car className="w-6 h-6 text-brand-600" />;
      case 'grid': return <Grid className="w-6 h-6 text-brand-600" />;
      default: return <Trophy className="w-6 h-6 text-brand-600" />;
    }
  };

  return (
    <section id={SectionId.FACILITIES} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            최고의 시설을 경험하세요
          </h2>
          <p className="text-lg text-gray-600">
            쾌적한 환경에서 즐기는 탁구 한 판! 코리아탁구교실의 자랑입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((item) => (
            <div key={item.id} className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="h-48 overflow-hidden bg-gray-200">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-brand-100 rounded-lg">
                    {getIcon(item.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};