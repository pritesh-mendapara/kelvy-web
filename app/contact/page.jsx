"use client";

import { useState } from "react";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { FaRegMessage } from "react-icons/fa6";

const Page = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://formspree.io/f/mldnbpzq", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (result.ok || result.success) {
            setStatus("SUCCESS");
            setFormData({ name: "", email: "", phone: "", message: "" });
        } else {
            setStatus("ERROR");
        }
    };
    return (
        <div className="container m-auto max-w-[1200px]">
            <div className="mt-40 mb-5 p-3">
                <h1 className="text-primary-200 text-center text-[clamp(2rem,5vw,4rem)] font-semibold">Contact Us</h1>
                <div className="grid gap-5 md:grid-cols-2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8566026589397!2d72.8827014747199!3d21.237534180576265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ffae94688ab%3A0x6342743ef4ba1eba!2sKelvy%20Overseas!5e0!3m2!1sen!2sin!4v1749744548074!5m2!1sen!2sin"
                        allowFullScreen=""
                        className="order-2 h-96 w-full rounded-lg border-0 md:order-1"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <form onSubmit={handleSubmit} className="order-1 md:order-2">
                        <div className="my-2 mb-5 flex h-fit items-center gap-1 rounded border border-gray-500/10 bg-indigo-500/5 pl-2">
                            <FiUser className="text-[#6B7280]" />
                            <input name="name" value={formData.name} onChange={handleChange} className="w-full bg-transparent py-2.5 outline-none" type="text" placeholder="Name" required />
                        </div>
                        <div className="my-2 mb-5 flex h-fit items-center gap-1 rounded border border-gray-500/10 bg-indigo-500/5 pl-2">
                            <MdOutlineEmail className="text-[#6B7280]" />
                            <input name="email" value={formData.email} onChange={handleChange} className="w-full bg-transparent py-2.5 outline-none" type="email" placeholder="Email" required />
                        </div>
                        <div className="my-2 mb-5 flex h-fit items-center gap-1 rounded border border-gray-500/10 bg-indigo-500/5 pl-2">
                            <MdOutlinePhone className="text-[#6B7280]" />
                            <input name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-transparent py-2.5 outline-none" type="tel" placeholder="Phone" required />
                        </div>
                        <div className="my-2 mb-5 flex h-fit items-center gap-1 rounded border border-gray-500/10 bg-indigo-500/5 pl-2">
                            <FaRegMessage className="text-[#6B7280]" />
                            <input name="message" value={formData.message} onChange={handleChange} className="w-full bg-transparent py-2.5 outline-none" type="text" placeholder="Message" required />
                        </div>

                        <button className="bg-primary-100 hover:bg-primary-100/90 mt-5 w-full rounded-sm py-2 text-white" type="submit">
                            Submit
                        </button>

                        {status === "SUCCESS" && <p className="mt-3 text-green-600">Thanks! Your message has been sent.</p>}
                        {status === "ERROR" && <p className="mt-3 text-red-600">Oops! Something went wrong.</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page;
