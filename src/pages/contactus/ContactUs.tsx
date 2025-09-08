import CommonBanner from "../../components/commonComponents/banner/CommonBanner";
// import Homepage_Properties from "../../components/homepage_components/homepage_Properties/Homepage_Properties";
import img from '../../assets/HomePage_banner3.jpg';

import React, { useState } from "react";

import emailjs from '@emailjs/browser';

const ContactUs = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contactnumber: "",
        destination: "",
        description: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs
            .send(
                "service_zmdaupt",
                "template_e6d4izv",
                {
                    user_name: formData.name,
                    user_email: formData.email,
                    user_contactnumber: formData.contactnumber,
                    destination: formData.destination,
                    message: formData.description,
                },
                "8xpsPhryxv1U-pr1Z"
            )
            .then(
                (response: any) => {
                    console.log("SUCCESS!", response.status, response.text);
                    alert("Message sent successfully!");
                    setFormData({ name: "", email: "", contactnumber: "", destination: "", description: "" });
                },
                (error: any) => {
                    console.log("FAILED...", error);
                    alert("Failed to send message. Please try again.");
                }
            );
    };

    return (
        <section className=" py-20">
            {/* Banner */}
            <div>
                <CommonBanner image={img} PageName={'Contact Us'} />
            </div>

            {/* Contact Info Section */}
            <div className="flex flex-col md:flex-row gap-8 px-4 lg:px-20 py-8">
                {/* Left Section */}
                <div className="w-full text-lg leading-relaxed">
                    <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                    <p>
                        At <span className="text-orange-500 font-semibold">Blue Doors</span>, we care about making your stay seamless and memorable.
                        Whether you have questions about bookings, special arrangements, or need personalized assistance,
                        our team is always ready to help.
                    </p>
                    <p className="mt-4">
                        Reach out to us anytime through the contact details provided, or visit us to experience the warm
                        hospitality of <span className="text-orange-500 font-semibold">Blue Doors</span>. We look forward to welcoming you!
                    </p>
                </div>


                {/* Right Section */}
                {/* <div className="md:w-1/2 text-gray-800 text-lg leading-relaxed space-y-4">
                    {contactInfo.map((info, index) => (
                        <div key={index} className="flex items-start">
                            <span className="text-orange-500 mr-4">{info.icon}</span>
                            <span>{info.text}</span>
                        </div>
                    ))}
                </div> */}
            </div>
            {/* Contact Us form  */}
            <div className="max-w-md mx-auto p-6 py-8 border bg-white text-black rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold  text-center">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-md"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-md"
                    />
                    <input
                        type="number"
                        name="contactnumber"
                        placeholder="Your Contact Number"
                        value={formData.contactnumber}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-md"
                    />
                    {/* <select
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    >
                        <option value="">Select Destination</option>
                        <option value="Lonavala">Lonavala</option>
                        <option value="Dapoli">Dapoli</option>
                    </select> */}
                    <textarea
                        name="description"
                        placeholder="Your Message"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-md h-28"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Send
                    </button>
                </form>
            </div>

        </section>
    );
};

export default ContactUs;
