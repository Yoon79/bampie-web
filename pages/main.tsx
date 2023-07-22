import React, { useState } from "react";

export default function Main() {
    const [open, setOpen] = useState(false);
    {/* nav */}
    return (
        <section className="bg-gray-100 py-8">
            <div className="container mx-auto font-notosanskr">
                <h1 className="text-4xl font-bold text-center mb-8">
                    Musician Portfolio
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                    {/* Musician Item 1 */}
                    <div
                        className="bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer"
                        key="musician1"
                    >
                        <img
                            src="/musician1.jpg"
                            alt="Musician 1"
                            className="w-full h-64 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Musician 1</h2>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                volutpat odio quis nunc cursus, vel iaculis mi interdum.
                            </p>
                            <a href="#" className="text-blue-600 font-bold mt-2 inline-block">
                                Read More
                            </a>
                        </div>
                    </div>

                    {/* Musician Item 2 */}
                    <div
                        className="bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer"
                        key="musician2"
                    >
                        <img
                            src="/musician2.jpg"
                            alt="Musician 2"
                            className="w-full h-64 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Musician 2</h2>
                            <p className="text-gray-600">
                                Sed convallis elit a sagittis pharetra. Cras vel tellus non elit
                                dignissim tincidunt. Fusce efficitur aliquam mauris id tempus.
                            </p>
                            <a href="#" className="text-blue-600 font-bold mt-2 inline-block">
                                Read More
                            </a>
                        </div>
                    </div>

                    {/* Musician Item 3 */}
                    <div
                        className="bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer"
                        key="musician3"
                    >
                        <img
                            src="/musician3.jpg"
                            alt="Musician 3"
                            className="w-full h-64 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Musician 3</h2>
                            <p className="text-gray-600">
                                Integer vitae turpis in erat gravida gravida. Duis euismod pharetra
                                arcu ut elementum. Quisque varius scelerisque velit.
                            </p>
                            <a href="#" className="text-blue-600 font-bold mt-2 inline-block">
                                Read More
                            </a>
                        </div>
                    </div>

                    {/* Musician Item 4 */}
                    <div
                        className="bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer"
                        key="musician4"
                    >
                        <img
                            src="/musician4.jpg"
                            alt="Musician 4"
                            className="w-full h-64 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Musician 4</h2>
                            <p className="text-gray-600">
                                Proin ultricies turpis a lectus gravida, ut feugiat ex pharetra.
                                Vivamus vel odio consequat, blandit neque sit amet, vehicula nulla.
                            </p>
                            <a href="#" className="text-blue-600 font-bold mt-2 inline-block">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
