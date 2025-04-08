'use client';

import { ExternalLink } from "lucide-react";

export default function ProjectsPage() {
    const projects = [
        {
            name: 'Claim Request System',
            description: 'A web app for managing employee claim requests with roles for user, admin, approver, and finance.',
            link: 'https://github.com/antran7/ClaimRequest_App.git',
        },
        {
            name: 'My Portfolio Website',
            description: 'Personal portfolio built with Next.js and TailwindCSS.',
            link: 'https://github.com/your-github/portfolio',
        },
        {
            name: 'Koi Ordering System',
            description: 'Online koi fish ordering system with product listings and booking features.',
            link: 'https://github.com/datd1412/SWP391-Front-End.git',
        },
        {
            name: 'My Calculator',
            description: 'Just a demo of normal calculator XD.',
            link: 'https://github.com/antran7/DemoCalculator.git',
        }
    ]

    return (
        <section className="max-w-4xl mx-auto px-4 py-8 space-y-6">
            <div className="text-center">
                <h2 className="text-3xl font-bold">My <span className="text-indigo-600 font-bold">Featured</span> Projects</h2>
                <p className="text-gray-600 mt-2">Some personal & learning projects {`I'm`} worked on</p>
            </div>

            <div className="space-y-4">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-[#f9fafb] p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out ring-1 ring-gray-300"
                    >
                        <div className="flex items-center justify-between mb-1">
                            <h3 className="text-xl font-semibold mb-1 hover:underline">🌐 {project.name}</h3>
                            <ExternalLink className="w-5 h-5 text-gray-500" />
                        </div>
                        <p className="text-gray-700">{project.description}</p>
                    </a>
                ))}
            </div>
        </section>
    );
}
