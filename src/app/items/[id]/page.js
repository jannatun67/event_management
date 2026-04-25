'use client';

import { useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { getItems } from '@/lib/items';

export default function ItemDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const itemData = useMemo(() => {
    const items = getItems();
    const currentItem = items.find(i => i.id === parseInt(params.id));
    if (currentItem) {
      const related = items
        .filter(i => i.id !== currentItem.id && i.category === currentItem.category)
        .slice(0, 3);
      return { item: currentItem, related };
    }
    return { item: null, related: [] };
  }, [params.id]);

  const item = itemData.item;
  const relatedItems = itemData.related;

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => router.back()}
          className="mb-6 text-indigo-600 hover:text-indigo-700 font-medium"
        >
          ← Back to Events
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="h-96 bg-linear-to-br from-indigo-400 to-purple-400"></div>
          
          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold text-gray-900">{item.title}</h1>
              <span className="text-2xl font-bold text-indigo-600">{item.price}</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-2">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-600 mb-6">{item.fullDescription}</p>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Specifications</h2>
                <ul className="space-y-2">
                  <li className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Date</span>
                    <span className="font-medium">{item.date}</span>
                  </li>
                  <li className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Location</span>
                    <span className="font-medium">{item.location}</span>
                  </li>
                  <li className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Category</span>
                    <span className="font-medium">{item.category}</span>
                  </li>
                  <li className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Capacity</span>
                    <span className="font-medium">{item.capacity} people</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-6 h-fit">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Information</h3>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">📅 {item.date}</p>
                  <p className="text-sm text-gray-600">📍 {item.location}</p>
                  <p className="text-sm text-gray-600">🎟️ {item.category}</p>
                </div>
                <button className="w-full mt-6 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  Get Tickets
                </button>
              </div>
            </div>

            {relatedItems.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedItems.map((related) => (
                    <Link href={`/items/${related.id}`} key={related.id}>
                      <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-all">
                        <h3 className="font-semibold text-gray-900 mb-2">{related.title}</h3>
                        <p className="text-sm text-gray-600">{related.date}</p>
                        <p className="text-indigo-600 font-semibold mt-2">{related.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}