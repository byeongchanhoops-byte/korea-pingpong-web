import React from 'react';
import { SectionId, PricingItem, MonthlyPricing } from '../types';

export const Pricing: React.FC = () => {
  const dailyPricing: PricingItem[] = [
    { category: '학생 단식', price30: '5,000원', price60: '8,000원' },
    { category: '학생 복식', price30: '7,000원', price60: '10,000원' },
    { category: '일반 단식', price30: '7,000원', price60: '10,000원' },
    { category: '일반 복식', price30: '9,000원', price60: '13,000원' },
  ];

  const monthlyPricing: MonthlyPricing[] = [
    { duration: '1개월', price: '70,000원' },
    { duration: '2개월', price: '130,000원' },
    { duration: '3개월', price: '180,000원' },
  ];

  return (
    <section id={SectionId.PRICING} className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            이용 요금 안내
          </h2>
          <p className="text-lg text-gray-600">
            부담 없는 가격으로 건강과 즐거움을 챙기세요.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Daily Pass */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-2 h-8 bg-brand-500 rounded-full mr-3"></span>
              일일 이용권
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-100">
                    <th className="py-4 text-sm font-semibold text-gray-600">구분</th>
                    <th className="py-4 text-sm font-semibold text-gray-600">30분</th>
                    <th className="py-4 text-sm font-semibold text-brand-600">60분</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {dailyPricing.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="py-4 font-medium text-gray-900">{item.category}</td>
                      <td className="py-4 text-gray-600">{item.price30}</td>
                      <td className="py-4 font-bold text-brand-600">{item.price60}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Monthly Pass */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-brand-500 rounded-full mr-3"></span>
                월 회원권
              </h3>
              <ul className="space-y-6">
                {monthlyPricing.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                    <span className="font-medium text-lg text-gray-700">{item.duration}</span>
                    <span className="text-2xl font-bold text-brand-600">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};