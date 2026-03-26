'use client'


import { Zap, Brain, Shield, Lightbulb, MessageSquare, Eye } from 'lucide-react'

const Main2 = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Packed with Innovation</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Nubien is packed with cutting-edge features designed to elevate your agency or portfolio.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: MessageSquare, title: 'AI Chatbots', desc: '24/7 Customer Support with instant AI-powered responses' },
                        { icon: Eye, title: 'Vision Capabilities', desc: 'AI-powered image and video recognition' },
                        { icon: Zap, title: 'Real-Time Data', desc: 'Instant insights for faster decision-making' },
                        { icon: Brain, title: 'Predictive Analytics', desc: 'Make data-driven decisions with AI insights' },
                        { icon: Shield, title: 'Trusted Authentication', desc: 'Quickly integrate with major platforms' },
                        { icon: Lightbulb, title: 'Smart Automation', desc: 'Automate tasks and reduce costs' }
                    ].map((feature, i) => (
                        <div key={i} className="group p-6 rounded-lg bg-card border border-border hover:border-accent transition-colors">
                            <feature.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Main2;