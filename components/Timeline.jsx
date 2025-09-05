export default function Timeline({ milestones }) {
  return (
    <div className="relative max-w-6xl mx-auto px-4">
      <div className="border-l-4 border-blue-500 ml-4">
        {milestones.map((item, i) => (
          <div key={i} className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[9px] mt-2"></div>
            <h3 className="text-xl font-semibold text-blue-600">{item.year}</h3>
            <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
              {item.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
