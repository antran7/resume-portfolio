import { Facebook, Github, Mail, Phone, Youtube } from "lucide-react";

export default function ContactPage() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-8 space-y-6">
            <div className="bg-[#f9fafb] p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 ease-in-out ring-1 ring-gray-300">
                <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
                <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center space-x-2">
                        <Mail className="w-5 h-5" />
                        <span className="font-semibold">Email:</span>
                        <a
                            href="mailto:tranthienan062004@gmail.com"
                            className="text-indigo-600 hover:underline"
                        >
                            tranthienan062004@gmail.com
                        </a>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Phone className="w-5 h-5" />
                        <span className="font-semibold">Phone:</span>
                        <a
                            href="tel:+84123456789"
                            className="text-indigo-600 hover:underline"
                        >
                            0365332421
                        </a>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Facebook className="w-5 h-5" />
                        <span className="font-semibold">Facebook:</span>
                        <a
                            href="https://facebook.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:underline"
                        >
                            Ân Thiên
                        </a>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Github className="w-5 h-5" />
                        <span className="font-semibold">GitHub:</span>
                        <a
                            href="https://github.com/antran7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:underline"
                        >
                            antran7
                        </a>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Youtube className="w-5 h-5" />
                        <span className="font-semibold">YouTube:</span>
                        <a
                            href="https://www.youtube.com/@kattoamv"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:underline"
                        >
                            Katto not catto
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}  