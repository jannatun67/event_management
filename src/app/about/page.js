export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          
          {/* Image Banner */}
          <div
            className="h-64 bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About EventHub
            </h1>

            <p className="text-gray-600 text-lg mb-6">
              EventHub is a platform dedicated to connecting people with amazing events and experiences.
            </p>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-6">
                We believe that everyone should have access to exciting events and cultural experiences.
                Our platform makes it easy to discover, book, and manage events all in one place.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                What We Offer
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Curated selection of high-quality events</li>
                <li>Easy booking and ticket management</li>
                <li>Real-time availability and pricing</li>
                <li>Secure payment processing</li>
                <li>24/7 customer support</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Our Values
              </h2>
              <p className="text-gray-600 mb-6">
                We are committed to providing the best possible experience for both event organizers and attendees.
                Innovation, reliability, and customer satisfaction are at the core of everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}