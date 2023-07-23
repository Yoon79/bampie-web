import Image from 'next/image';
import React from "react";

export default function Main() {
    return (
        <section className="bg-bam py-8">
            <div className="container mx-auto font-notosanskr">
                <h1 className="text-white text-4xl font-bold text-center font-mono mb-8">
                Release
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 font-mono">
                    {/* Album Item 1 */}
                    <div
                        className="bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer"
                        key="album1"
                    >
                        <Image
                            src="/album1.jpg"
                            alt="Album1"
                            className="w-64 h-64 object-cover rounded-t-lg"
                            width="300"
                            height="300"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Album 1</h2>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                volutpat odio quis nunc cursus, vel iaculis mi interdum.
                            </p>
                            <a href="#" className="text-gray-600 font-bold mt-2 inline-block">
                                Read More ..
                            </a>
                        </div>
                    </div>

                    {/* Album Item 2 */}
                    <div
                        className="bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer"
                        key="album2"
                    >
                        <img
                            src="/album2.jpg"
                            alt="Album 2"
                            className="w-64 h-64 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Album 2</h2>
                            <p className="text-gray-600">
                                Sed convallis elit a sagittis pharetra. Cras vel tellus non elit
                                dignissim tincidunt. Fusce efficitur aliquam mauris id tempus.
                            </p>
                            <a href="#" className="text-gray-600 font-bold mt-2 inline-block">
                                Read More ..
                            </a>
                        </div>
                    </div>

                    {/* Album Item 3 */}
                    <div
                        className="bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer"
                        key="album3"
                    >
                        <img
                            src="/album3.jpg"
                            alt="Album 3"
                            className="w-64 h-64 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Album 3</h2>
                            <p className="text-gray-600">
                                Integer vitae turpis in erat gravida gravida. Duis euismod pharetra
                                arcu ut elementum. Quisque varius scelerisque velit.
                            </p>
                            <a href="#" className="text-gray-600 font-bold mt-2 inline-block">
                                Read More ..
                            </a>
                        </div>
                    </div>

                    {/* Album Item 4 */}
                    <div
                        className="bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer"
                        key="album4"
                    >
                        <img
                            src="/album4.jpg"
                            alt="Album 4"
                            className="w-64 h-64 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Album 4</h2>
                            <p className="text-gray-600">
                                Proin ultricies turpis a lectus gravida, ut feugiat ex pharetra.
                                Vivamus vel odio consequat, blandit neque sit amet, vehicula nulla.
                            </p>
                            <a href="#" className="text-gray-600 font-bold mt-2 inline-block">
                                Read More ..
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
