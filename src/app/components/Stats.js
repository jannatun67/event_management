export default function Stats() {
  const stats = [
    { number: '500+', label: 'Events Hosted' },
    { number: '50K+', label: 'Happy Attendees' },
    { number: '100+', label: 'Cities Covered' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="py-16 bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-indigo-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}