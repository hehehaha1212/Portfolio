
import { Button } from "./ui/button"
const Contact = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
                <p className="text-lg text-white/60 mb-8">
                    Nubien comes with dedicated support to help you launch and maintain your site without friction.
                </p>
                <Button size="lg" className="rounded-full bg-accent-20 text-white hover:bg-purple-700">
                    Book a 15-min Call
                </Button>
            </div>
        </section>

    )
}
export default Contact;