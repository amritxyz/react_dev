import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <section className="py-16 bg-indigo-600 text-white text-center">
      <h2 className="text-3xl font-bold">Ready to Start Learning?</h2>
      <p className="mt-4">Join thousands of learners improving their skills every day.</p>
      <Link to="/courses" className="inline-block mt-6 px-6 py-3 bg-white text-indigo-600 rounded-md font-medium hover:bg-gray-100">
        Browse Courses
      </Link>
    </section>
  );
}
