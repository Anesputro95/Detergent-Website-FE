import Image from 'next/image';
import AboutUs2 from '../AboutUs2/page';

export default function AboutUs() {
    return (
        <><main className="flex min-h-screen items-center justify-center px-4 sm:px-8">
            <section className="w-full max-w-6xl mx-auto p-6">
                <div className="rounded-lg p-8 gap-16 flex flex-col">
                    {/* Heading */}
                    <header className="text-center mb-8">
                        <h2 className="font-bold font-lato text-2xl sm:text-3xl lg:text-4xl text-gray-700">
                            We Create Laundry Softergent
                            <br />
                            With Scent That Stays With You
                        </h2>
                    </header>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-14 items-stretch h-80">
                        <article className="bg-[#FFFCF4] rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] py-8 px-10 flex flex-col gap-8">
                            <div className="w-24 h-24 rounded-md flex items-center justify-center relative right-4">
                                <Image
                                    src="/Icon.png"
                                    alt="Point 1 Icon"
                                    width={96}
                                    height={96} />
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="font-semibold text-gray-800">Point 1</h3>
                                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                        </article>

                        <article className="bg-[#DCA18B] rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] py-8 px-10 flex flex-col gap-8">
                            <div className="w-24 h-24 rounded-md flex items-center justify-center relative right-4">
                                <Image
                                    src="/Icon.png"
                                    alt="Point 1 Icon"
                                    width={96}
                                    height={96} />
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="font-semibold text-gray-800">Point 2</h3>
                                <p className="text-sm text-gray-500">Nullam iaculis dapibus pellentesque. Suspendisse potenti. Donec facilisis ex magna, in tempor velit ultricies ac.</p>
                            </div>
                        </article>

                        <article className="bg-[#FFFCF4] rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] py-8 px-10 flex flex-col gap-8">
                            <div className="w-24 h-24 rounded-md flex items-center justify-center relative right-4">
                                <Image
                                    src="/Icon.png"
                                    alt="Point 1 Icon"
                                    width={96}
                                    height={96} />
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="font-semibold text-gray-800">Point 3</h3>
                                <p className="text-sm text-gray-500">Ut eget magna faucibus, finibus dolor gravida, imperdiet urna. In posuere vestibulum bibendum. Fusce maximus neque eros, a euismod ligula congue bibendum.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </main><AboutUs2 /></>
    )
}