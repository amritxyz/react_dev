export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      <img src={`https://picsum.photos/id/ ${course.id}/400/225`} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{course.title}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{course.description}</p>
        <span className="inline-block mt-2 px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-800">
          {course.category}
        </span>
      </div>
    </div>
  );
}
