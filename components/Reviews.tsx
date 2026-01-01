
import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Reviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: "김**",
      role: "직장인 / 3개월차",
      content: "퇴근하고 매일 오는데 주차도 편하고 시설이 정말 깨끗해요. 관장님이 지나가다 한 번씩 자세 봐주시는 게 큰 도움이 됩니다!",
      rating: 5
    },
    {
      id: 2,
      name: "이**",
      role: "주부 / 1년차",
      content: "오전에 운동하러 오는데 분위기가 너무 좋아요. 초보자도 기계로 연습할 수 있어서 부담 없이 시작했습니다.",
      rating: 5
    },
    {
      id: 3,
      name: "박**",
      role: "학생 / 6개월차",
      content: "친구들이랑 내기하러 자주 와요. 로봇볼머신으로 연습하고 게임하니까 실력이 금방 늘어요. 사장님 짱 친절하심!",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            회원님들의 생생한 후기
          </h2>
          <p className="text-lg text-gray-600">
            코리아탁구교실과 함께 건강한 취미를 즐기는 분들의 이야기입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-brand-100 relative hover:-translate-y-1 transition-transform duration-300">
              <Quote className="absolute top-6 right-6 text-brand-100 w-10 h-10" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{review.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center text-brand-700 font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{review.name}</div>
                  <div className="text-xs text-gray-500">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
