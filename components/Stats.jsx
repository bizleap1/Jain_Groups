export default function Stats({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-3xl font-extrabold text-blue-600">{stat.number}</h3>
          <p className="mt-2 text-gray-700">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
