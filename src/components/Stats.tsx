
const Stats = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Discover India Like Never Before
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
          Join thousands of travelers exploring the beauty and culture of India
        </p>

        <dl className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="glass-card hover-scale rounded-xl px-6 py-10">
            <dt className="text-base leading-7 text-gray-600">Active Travelers</dt>
            <dd className="text-4xl font-bold tracking-tight text-primary mt-2">
              50,000+
            </dd>
          </div>
          <div className="glass-card hover-scale rounded-xl px-6 py-10">
            <dt className="text-base leading-7 text-gray-600">Destinations</dt>
            <dd className="text-4xl font-bold tracking-tight text-secondary mt-2">
              1,000+
            </dd>
          </div>
          <div className="glass-card hover-scale rounded-xl px-6 py-10">
            <dt className="text-base leading-7 text-gray-600">Travel Stories</dt>
            <dd className="text-4xl font-bold tracking-tight text-accent mt-2">
              100,000+
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Stats;
