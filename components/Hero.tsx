import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] md:min-h-screen bg-sun-yellow dark:bg-stone-950 flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
            {/* Background Video Support (Conditional/Placeholder for now) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                {/* <video autoPlay muted loop className="w-full h-full object-cover">
                    <source src="/_video_treatment_1080p_202602052344.mp4" type="video/video/mp4" />
                </video> */}
            </div>

            {/* Floating Artisanal Particles */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute animate-float-spin"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.5}s`,
                            opacity: 0.15,
                            transform: `scale(${0.5 + Math.random()})`
                        }}
                    >
                        <span className="text-4xl">🍿</span>
                    </div>
                ))}
            </div>

            {/* Background Shapes */}
            <div className="absolute top-20 -left-20 w-80 h-80 bg-berry-pink/20 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-10 -right-20 w-96 h-96 bg-mint-teal/20 rounded-full blur-3xl animate-blob [animation-delay:2s]" />

            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:grid lg:grid-cols-2 items-center gap-12 lg:gap-20 min-h-[85vh] py-28 lg:py-0 relative z-10">
                <div className="text-center lg:text-left z-20">
                    <span className="inline-block px-4 py-2 bg-lava-orange text-white font-brand font-bold text-sm rounded-full mb-8 uppercase tracking-widest animate-reveal">
                        Guilt-Free Goodness
                    </span>
                    <h1 className="hero-title text-6xl md:text-8xl font-brand font-bold mb-10 leading-[1.05] tracking-tight text-stone-900 dark:text-white">
                        Smarter <br />
                        <span className="text-berry-pink">Snacking,</span> <br />
                        Reimagined.
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-stone-700 dark:text-stone-300 mb-12 max-w-lg lg:ml-0 mx-auto animate-reveal [animation-delay:200ms]">
                        Experience the ultimate crunch with our premium popped lily seeds. Hand-picked, super healthy, and totally craveable.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start animate-reveal [animation-delay:300ms]">
                        <Link
                            href="/shop"
                            className="bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-brand font-bold px-12 py-6 rounded-2xl hover:scale-105 transition-all text-lg shadow-2xl shadow-stone-300 dark:shadow-none"
                        >
                            SHOP ALL FLAVORS
                        </Link>
                        <Link
                            href="/our-story"
                            className="bg-white dark:bg-stone-900 text-stone-900 dark:text-white border-2 border-stone-200 dark:border-stone-800 font-brand font-bold px-12 py-6 rounded-2xl hover:bg-stone-50 dark:hover:bg-stone-800 transition-all text-lg"
                        >
                            THE STORY
                        </Link>
                    </div>
                </div>

                <div className="relative w-full flex justify-center items-center z-10 mt-16 md:mt-24 lg:mt-0">
                    {/* Abstract Composition Background */}
                    <div className="absolute w-[140%] aspect-square max-w-[800px] pointer-events-none">
                        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-mint-teal rounded-full mix-blend-multiply opacity-20 blur-3xl animate-blob" />
                        <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-berry-pink rounded-full mix-blend-multiply opacity-20 blur-3xl animate-blob [animation-delay:2s]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-sun-yellow rounded-full mix-blend-multiply opacity-20 blur-3xl animate-blob [animation-delay:4s]" />
                    </div>

                    {/* Circular Frame for Product - SIGNIFICANTLY LARGER */}
                    <div className="relative w-full aspect-square max-w-[550px] lg:max-w-[700px] group flex items-center justify-center">
                        {/* Decorative Rings */}
                        <div className="absolute inset-0 border-2 border-white/30 rounded-full scale-110 animate-pulse" />
                        <div className="absolute inset-6 border border-white/20 rounded-full scale-105" />
                        <div className="absolute -inset-10 border border-white/10 rounded-full scale-110 opacity-50" />

                        {/* Abstract Backdrop Shape */}
                        <div className="absolute inset-8 bg-gradient-to-br from-mint-teal/40 to-sun-yellow/40 rounded-[40%_60%_70%_30%/40%_50%_60%_40%] animate-blob blur-2xl" />

                        <div className="relative w-[90%] h-[90%] animate-float flex items-center justify-center">
                            {/* Inner Morphing Blob Mask - Neo Artisanal Cut */}
                            <div className="relative w-full h-full animate-blob overflow-hidden border-8 border-white dark:border-stone-800 shadow-[0_30px_60px_rgba(0,0,0,0.15)] bg-white/20 backdrop-blur-sm">
                                <Image
                                    src="/makhana-hero-crave.png"
                                    alt="Premium Mithila Essence Craveable Makhana Selection"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 700px"
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                            </div>

                            {/* Outer Morphing Ring (Subtle) */}
                            <div className="absolute -inset-4 border-2 border-white/20 animate-blob [animation-duration:10s] -z-10" />

                            {/* Floating Badges (Outside the mask) */}
                            <div className="absolute -top-6 -right-10 bg-white p-5 rounded-2xl shadow-2xl rotate-12 animate-float [animation-delay:1s] hidden md:block border-2 border-stone-100 z-20">
                                <p className="font-brand font-black text-lava-orange uppercase text-[10px] tracking-widest">Artisanal Choice</p>
                                <p className="font-brand font-black text-stone-900 leading-none text-xl">Crunch Proof</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
