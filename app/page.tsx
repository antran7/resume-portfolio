'use client';

import Image from 'next/image';

export default function HomePage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 space-y-12">
      <div className="flex flex-col items-center text-center">
        <Image
          src="/avatar.jpg"
          alt="My Avatar"
          width={150}
          height={150}
          className="rounded-full shadow-md mb-4"
        />
        <h1 className="text-3xl font-bold">Trần Thiên Ân</h1>
        <p className="text-gray-600 text-lg">Front-end Web Developer</p>
      </div>

      <div className="bg-[#f9fafb] p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out ring-1 ring-gray-300">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I'm a passionate web developer with experience in building responsive and interactive websites using modern technologies like React, Next.js, and TailwindCSS. I love solving problems and bringing ideas to life on the web.
        </p>
      </div>

      <div className="bg-[#f9fafb] p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out ring-1 ring-gray-300">
        <h2 className="text-2xl font-semibold mb-2">Interests</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>🎨 UI/UX Design</li>
          <li>📚 Learning new technologies</li>
          <li>🧩 Solving coding challenges</li>
          <li>
            <span className="inline-flex items-center space-x-2">
              <img src="https://leetcode.com/favicon.ico" alt="LeetCode" className="w-4 h-4" />
              <span><span className="text-[#FFA116] font-bold">Leetcode</span> Hunters (just kidding but i really wish it was like that~~ 😄)</span>
            </span>
          </li>
        </ul>
      </div>

      <div className="bg-[#f9fafb] p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out ring-1 ring-gray-300">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <div className="space-y-2">
          <div>
            <p className="font-medium">FPT University</p>
            <p className="text-sm text-gray-600">Software Engineering - 2022 to 2026</p>
          </div>
          <div>
            <p className="font-medium">FreeCodeCamp & Udemy</p>
            <p className="text-sm text-gray-600">Frontend Development - Online</p>
          </div>
        </div>
      </div>
    </section>
  );
}
