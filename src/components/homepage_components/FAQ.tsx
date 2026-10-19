
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "What are the standard check-in and check-out times?",
        answer:
            "Check-in is typically at 12:00 PM and check-out is at 10:00 AM. Early check-in or late check-out can be requested based on availability.",
    },
    {
        question: "Are meals provided during the stay?",
        answer:
            "Our properties feature kitchenettes where you can cook, and local food delivery apps like Zomato and Swiggy are fully operational at our Navi Mumbai locations.",
    },
    {
        question: "Are the properties pet-friendly?",
        answer:
            "No, our properties are not pet-friendly.",
    },
    {
        question: "How can I contact the host during my stay?",
        answer:
            "You can reach us directly at +91 98205 46707 via call or WhatsApp, or email us at bluedoorhomesforyou@gmail.com.",
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setActiveIndex((prevIndex) =>
            prevIndex === index ? null : index
        );
    };

    return (
        <section className="py-12 sm:py-16 lg:py-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Section Heading */}
                <div className="text-center mb-10">
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
                        FAQs
                    </p>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                        Frequently Asked Questions
                    </h2>

                    <p className="mt-3 text-sm sm:text-base text-gray-600">
                        Find answers to common questions about our services.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqData.map((faq, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div
                                key={faq.question}
                                className={`border rounded-xl transition-all duration-300 ${isOpen
                                        ? "border-primary shadow-md"
                                        : "border-gray-200 hover:border-gray-300"
                                    }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${index}`}
                                    id={`faq-question-${index}`}
                                    className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left"
                                >
                                    <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                                        {faq.question}
                                    </span>

                                    <span className="shrink-0 text-primary">
                                        {isOpen ? (
                                            <FaMinus size={14} />
                                        ) : (
                                            <FaPlus size={14} />
                                        )}
                                    </span>
                                </button>

                                <div
                                    id={`faq-answer-${index}`}
                                    role="region"
                                    aria-labelledby={`faq-question-${index}`}
                                    hidden={!isOpen}
                                    className="px-4 sm:px-5 pb-5"
                                >
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;