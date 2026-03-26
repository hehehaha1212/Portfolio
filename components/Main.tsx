
import { ArrowRight, Lightbulb, Shield, Zap } from "lucide-react";
import { Button } from "./ui/button"
import { Brain } from "lucide-react";



const Main = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">What is Nubien?</h2>
                        <p className="text-muted-foreground text-lg mb-4">
                            Built on creativity, collaboration, and excellence, Nubien is a dynamic team of industry experts committed to achieving exceptional results.
                        </p>
                        <p className="text-muted-foreground text-lg mb-8">
                            We specialize in cutting-edge AI solutions that transform businesses and drive innovation forward.
                        </p>
                        <Button className="rounded-full">Book an Appointment</Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-background rounded-lg p-6 border border-border">
                            <Brain className="w-8 h-8 text-accent mb-4" />
                            <h3 className="font-semibold mb-2">Intelligent</h3>
                            <p className="text-sm text-muted-foreground">AI-powered solutions</p>
                        </div>
                        <div className="bg-background rounded-lg p-6 border border-border">
                            <Zap className="w-8 h-8 text-accent mb-4" />
                            <h3 className="font-semibold mb-2">Fast</h3>
                            <p className="text-sm text-muted-foreground">Real-time processing</p>
                        </div>
                        <div className="bg-background rounded-lg p-6 border border-border">
                            <Shield className="w-8 h-8 text-accent mb-4" />
                            <h3 className="font-semibold mb-2">Secure</h3>
                            <p className="text-sm text-muted-foreground">Enterprise-grade security</p>
                        </div>
                        <div className="bg-background rounded-lg p-6 border border-border">
                            <Lightbulb className="w-8 h-8 text-accent mb-4" />
                            <h3 className="font-semibold mb-2">Innovative</h3>
                            <p className="text-sm text-muted-foreground">Cutting-edge technology</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Main;