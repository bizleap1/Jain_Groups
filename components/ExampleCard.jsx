export default function ExampleCard({ title, desc }) {
  return (
    <div className="rounded-2xl border p-5 shadow-sm hover:shadow transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}
