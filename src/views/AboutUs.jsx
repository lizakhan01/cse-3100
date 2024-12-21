
export default function AboutUs() {
    return (
        <section className="text-center mt-4 px-6 lg:px-16">
            <h2 className="text-4xl font-bold mb-8 text-blue-600">About Us</h2>
            <p className="text-lg mb-12 text-gray-700 leading-relaxed">
                Welcome to <span className="font-semibold">Purrfect Adoption</span>! We are a passionate organization dedicated to helping cats find their forever homes. Our mission is to connect loving
                families with adorable felines who need a safe and caring environment. Every cat deserves a chance for a better life, and we strive to make that
                happen every day.
            </p>

            <div className="grid gap-8">
                {/* Mission Section */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-3xl font-semibold mb-4 text-teal-600">Our Mission</h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                        At Purrfect Adoption, our mission is to ensure every cat finds a loving and safe home. We aim to raise awareness about cat adoption and
                        provide resources for families to make informed decisions about adopting and caring for their furry friends.
                    </p>
                </div>

                {/* History Section */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-3xl font-semibold mb-4 text-teal-600">Our History</h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                        Founded in 2010, Purrfect Adoption started as a small group of cat lovers determined to make a difference. Over the years, we have
                        grown into a network of volunteers, foster homes, and supporters who share the same vision of creating a better future for cats in
                        need.
                    </p>
                </div>

{/* Team Section */}
<div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-3xl font-semibold mb-8 text-teal-600">Our Team</h3>
    <div className="flex justify-between gap-8">
        {/* Team Member 1 */}
        <div className="bg-gray-50 rounded-lg p-6 shadow-md text-center w-1/3">
            <img src="https://www.investopedia.com/thmb/3iLbj8Bvy7rPyDNfS34C3e9lPGU=/150x0/filters:no_upscale():max_bytes(150000):strip_icc()/ProfilePhoto-b1e48e2bd8ac40099b2b7a4d21e9d648.jpg" alt="Team Member 1" className="w-28 h-28 mx-auto rounded-full border-4 border-gray-300 shadow-lg mb-4 object-cover" />
            <div className="team-member-info space-y-2">
                <h4 className="text-xl font-semibold">Jane Weasley</h4>
                <p className="text-gray-600">Cat Whisperer</p>
                <a href="mailto:jane.doe@example.com" className="text-blue-500">jane.doe@example.com</a>
            </div>
        </div>
        {/* Team Member 2 */}
        <div className="bg-gray-50 rounded-lg p-6 shadow-md text-center w-1/3">
            <img src="data:image/jpeg;base64,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" alt="Team Member 2" className="w-28 h-28 mx-auto rounded-full border-4 border-gray-300 shadow-lg mb-4 object-cover" />
            <div className="team-member-info space-y-2">
                <h4 className="text-xl font-semibold">John Granger</h4>
                <p className="text-gray-600">Foster Coordinator</p>
                <a href="mailto:john.smith@example.com" className="text-blue-500">john.smith@example.com</a>

            </div>
        </div>
        {/* Team Member 3 */}
        <div className="bg-gray-50 rounded-lg p-6 shadow-md text-center w-1/3">
            <img src="https://storage.googleapis.com/blogs-images-new/ciscoblogs/1/2023/01/IL20230118012008-ekasman-150x150.jpeg"/>
            <div className="team-member-info space-y-2">
                <h4 className="text-xl font-semibold">Emily Greengrass</h4>
                <p className="text-gray-600">Veterinarian</p>
                <a href="mailto:emily.brown@example.com" className="text-blue-500">emily.brown@example.com</a>
                
            </div>
        </div>
    </div>
</div>

                {/* Get Involved Section */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-3xl font-semibold mb-4 text-teal-600">Get Involved</h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                        Join us in making a difference! Whether you want to adopt, volunteer, foster, or donate, your support is invaluable. Together, we can
                        create a brighter future for countless cats in need.
                    </p>
                </div>

                {/* Why Choose Section */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-3xl font-semibold mb-4 text-teal-600">Why Choose Purrfect Adoption?</h3>
                    <ul className="list-disc list-inside text-left max-w-md mx-auto text-gray-600">
                        <li className="mb-2">Comprehensive support for adopters</li>
                        <li className="mb-2">Thorough health and behavior assessments for all cats</li>
                        <li>Dedicated post-adoption care and resources</li>
                    </ul>
                </div>
            </div>

            {/* Buttons Section */}
            <div className="mt-12 flex justify-center gap-6">
                <button
                    className="bg-teal-500 text-black py-3 px-6 rounded-lg shadow-md hover:bg-teal-600 transition"
                    onClick={() => window.location.href = '/available-cats'}>
                    Meet Our Cats
                </button>
                <button className="bg-gray-500 text-black py-3 px-6 rounded-lg shadow-md hover:bg-gray-600 transition">Support Us</button>
            </div>
        </section>
    );
}

