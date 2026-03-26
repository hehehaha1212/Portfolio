'use client'


import { ArrowRight, Link, } from "lucide-react";



const Main3 = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">AI-Powered Services</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Our cutting-edge AI solutions are designed to transform businesses and drive innovation.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: 'AI-Powered Development', desc: 'Smart websites that adapt to users and automation' },
                        { title: 'AI Chatbots', desc: 'Instant AI-powered chatbots that automate responses' },
                        { title: 'Predictive Analytics', desc: 'Leverage AI to analyze trends and predict outcomes' },
                        { title: 'Computer Vision', desc: 'AI-based facial recognition and image analysis' },
                        { title: 'Speech Recognition', desc: 'Develop voice assistants and transcriptions' },
                        { title: 'AI-Driven Automation', desc: 'Automate tasks and improve productivity' }
                    ].map((service, i) => (
                        <Link key={i} href="#" className="group">
                            <div className="p-6 rounded-lg bg-background border border-border group-hover:border-accent transition-colors h-full">
                                <h3 className="text-lg font-semibold mb-2 text-accent group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-muted-foreground mb-4">{service.desc}</p>
                                <div className="flex items-center text-accent text-sm font-medium">
                                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>

    )
}
export default Main3;