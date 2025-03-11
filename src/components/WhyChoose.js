import { motion } from "framer-motion";

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white px-6 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-slate-800">Why Choose Us?</h2>
          <p className="mt-4 text-lg text-gray-600">
            We provide dispatching services truckers trust in because we are
            professionals with years of experience in the brokerage and deep
            knowledge of ins and outs. We know the specifics of the equipment
            along with federal and local regulations. Our dispatcher company
            constantly monitors freight rates, load boards, brokers, and
            shippers to spot the best deals for our clientage.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Unlike many other truck dispatch companies, Resolute Logistics
            focuses on a comprehensive approach and provides end-to-end services
            to relieve drivers from the stress of hunting for loads, making
            calls, doing paperwork, or struggling for payment. Our truck
            dispatch service ensures ongoing training for dispatchers and
            encourages them to anticipate problems before they arise.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            We foster agility, effective teamwork, and a responsible attitude to
            drivers under our care. Our aim is to keep your trucks busy and
            smooth the way for your growth!
          </p>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li>✔️ 24/7 Dispatching</li>
            <li>✔️ Advanced GPS Tracking</li>
            <li>✔️ Fast & Reliable Service</li>
          </ul>
        </div>

        {/* Animated Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center mt-10 md:mt-0"
        >
          <img
            src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg"
            alt="Why Choose Us"
            className="w-[600px] h-[400px] object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
