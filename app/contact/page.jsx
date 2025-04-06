import React from "react";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { FaRegMessage } from "react-icons/fa6";

const Page = () => {
    return (
        <div className="container m-auto max-w-[1200px]">
            <div className="mt-40 mb-5 p-3">
                <h1 className="text-primary-200 text-center text-[clamp(2rem,5vw,4rem)] font-semibold">Contact US</h1>
                <div className="grid gap-5 md:grid-cols-2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29749.225124038956!2d72.86179988849106!3d21.245598798524476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f4fb5c0b087%3A0xb7aabd8a90da0679!2sMota%20Varachha%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1743943794727!5m2!1sen!2sin"
                        allowFullScreen=""
                        className="order-2 h-96 w-full rounded-lg border-0 md:order-1"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="order-1 md:order-2">
                        <div className="my-2 mb-5 flex h-fit items-center gap-1 rounded border border-gray-500/10 bg-indigo-500/5 pl-2">
                            <FiUser className="text-[#6B7280]" />
                            <input className="w-full bg-transparent py-2.5 outline-none" type="text" placeholder="Name" required />
                        </div>
                        <div className="my-2 mb-5 flex h-fit items-center gap-1 rounded border border-gray-500/10 bg-indigo-500/5 pl-2">
                            <MdOutlineEmail className="text-[#6B7280]" />
                            <input className="w-full bg-transparent py-2.5 outline-none" type="email" placeholder="Email" required />
                        </div>
                        <div className="my-2 mb-5 flex h-fit items-center gap-1 rounded border border-gray-500/10 bg-indigo-500/5 pl-2">
                            <MdOutlinePhone className="text-[#6B7280]" />
                            <input className="w-full bg-transparent py-2.5 outline-none" type="number" placeholder="Phone" required />
                        </div>
                        <div className="my-2 mb-5 flex h-fit items-center gap-1 rounded border border-gray-500/10 bg-indigo-500/5 pl-2">
                            <FaRegMessage className="text-[#6B7280]" />
                            <input className="w-full bg-transparent py-2.5 outline-none" type="text" placeholder="Message" required />
                        </div>

                        <button className="bg-primary-100 hover:bg-primary-100/90 mt-5 w-full rounded-sm py-2 text-white">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
