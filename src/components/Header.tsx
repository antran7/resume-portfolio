import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-indigo-600">My Portfolio</h1>
        <nav className="space-x-4 text-sm md:text-base">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/projects" className="text-gray-700 hover:text-indigo-600">Projects</Link>
          <Link href="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
}