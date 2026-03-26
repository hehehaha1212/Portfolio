'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'


const Main4 = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Showcasing Your Best Work</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A portfolio is more than just projects—it&apos;s your story, vision, and expertise.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: 'Lemonide Tech', year: '2024', tags: ['AI Integration', 'Responsive Design'] },
                        { title: 'Viper Studio', year: '2025', tags: ['Modern Typography', 'User Friendly'] },
                        { title: 'Million One', year: '2025', tags: ['Easy Customization', 'High Performance'] }
                    ].map((project, i) => (
                        <Link key={i} href="#" className="group">
                            <div className="relative rounded-lg overflow-hidden bg-card border border-border aspect-square flex items-end p-6 group-hover:border-accent transition-colors">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-accent text-sm mb-3">{project.year}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, j) => (
                                            <span key={j} className="text-xs px-2 py-1 rounded-full bg-background border border-border">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Button variant="outline" className="rounded-full">
                        View More Works
                    </Button>
                </div>
            </div>
        </section>

    )
}
export default Main4;