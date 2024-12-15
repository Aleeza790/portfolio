import Link from "next/link";

export default function Contact() {
    return (
        <div>
            <h4 className="bg bg-purple-500 font-bold text-center">Simple Resume</h4>
            <ul className="flex justify-center bg-blue-300">
                <Link href="/">
                    <li className="inline-block m-3">Home</li>
                </Link>
                <Link href="/about">
                    <li className="inline-block m-3">About</li>
                </Link>
                <Link href="/skills">
                    <li className="inline-block m-3">Skills</li>
                </Link>
                <Link href="/education">
                    <li className="inline-block m-3">Education</li>
                </Link>
                <Link href="/contact">
                    <li className="inline-block m-3">Contact</li>
                </Link>
            </ul>
            <h3 className="text-center font-bold text-pink-600 p-4 text-lg bg-gray-300">Contact Us</h3>
            <div className="border-4 border-solid border-black m-20 p-6 w-[300px] leading-relaxed">
                <h4><i>Email: aliza56@gmail.com</i></h4>
                <h4>Phone Numbers: 03178895347 | 03215678096</h4>
            </div>
        </div>
    );
}