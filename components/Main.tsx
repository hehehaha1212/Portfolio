
import { ArrowRight, Lightbulb, Shield, Zap } from "lucide-react";
import { Button } from "./ui/button"
import { Brain } from "lucide-react";



const Main = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">What is Nubien?</h2>
                        <p className="text-white/60 text-lg mb-4">
                            Built on creativity, collaboration, and excellence, Nubien is a dynamic team of industry experts committed to achieving exceptional results.
                        </p>
                        <p className="text-white/60 text-lg mb-8">
                            We specialize in cutting-edge AI solutions that transform businesses and drive innovation forward.
                        </p>
                        <Button className="rounded-full bg-purple-600 text-white hover:bg-purple-700">Book an Appointment</Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                            <Brain className="w-8 h-8 text-purple-400 mb-4" />
                            <h3 className="font-semibold mb-2">Intelligent</h3>
                            <p className="text-sm text-white/60">AI-powered solutions</p>
                        </div>
                        <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                            <Zap className="w-8 h-8 text-purple-400 mb-4" />
                            <h3 className="font-semibold mb-2">Fast</h3>
                            <p className="text-sm text-white/60">Real-time processing</p>
                        </div>
                        <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                            <Shield className="w-8 h-8 text-purple-400 mb-4" />
                            <h3 className="font-semibold mb-2">Secure</h3>
                            <p className="text-sm text-white/60">Enterprise-grade security</p>
                        </div>
                        <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                            <Lightbulb className="w-8 h-8 text-purple-400 mb-4" />
                            <h3 className="font-semibold mb-2">Innovative</h3>
                            <p className="text-sm text-white/60">Cutting-edge technology</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Main;