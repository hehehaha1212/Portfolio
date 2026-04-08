"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What services do you offer?",
        answer:
            "We provide AI-powered development, chatbots, and predictive analytics solutions tailored to your business.",
    },
    {
        question: "How long does a project take?",
        answer:
            "Project timelines vary, but most solutions are delivered within 2–6 weeks depending on complexity.",
    },
    {
        question: "Do you offer ongoing support?",
        answer:
            "Yes, we offer 24/7 support and maintenance to ensure everything runs smoothly.",
    },
    {
        question: "Can you customize solutions?",
        answer:
            "Absolutely. Every solution is tailored to your specific business needs and goals.",
    },
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-black text-white py-20 px-6">
            <div className="max-w-3xl mx-auto">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-center">
                    Frequently Asked Questions
                </h2>

                <h4 className="text-2xl md:text-2xl font-sm mt-0 mb-14 text-center">
                    Find Some quick answers to the most common questions.
                </h4>
                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className="border border-white/10 rounded-xl bg-white/5 backdrop-blur"
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                                >
                                    <span className="font-medium">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {/* Answer */}
                                <div
                                    className={`px-6 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="text-white/60 text-sm">{faq.answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <p className="text-md md:text-2xl font-sm mt-5 mb-14 pt-5 text-center">Feel free to mail us for any enquiries :  <a className="framer-text framer-styles-preset-1snln9b" data-styles-preset="CO_HimyHZ" href="mailto:maxx88461@gmail.com" target="_blank" rel="noopener">maxx88461@gmail.com</a></p>
            </div>
        </section>
    );
}