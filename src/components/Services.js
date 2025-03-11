import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  { 
    id: "boxtruck", 
    title: "Box Truck", 
    description: `Any type of 26'L+96"W*96"H(10K lbs+) trucks with LG.`, 
    image: "/images/Image1.jpg" 
  },
  { 
    id: "dryvan", 
    title: "Dry Van", 
    description: "Any type of 48'-53' trucks.", 
    image: "/images/Image2.jpg" 
  },
  { 
    id: "reefer", 
    title: "Reefer", 
    description: "Any type of trailer.", 
    image: "/images/Image3.jpg" 
  },
  {
    id: "poweronly", 
    title: "Power Only", 
    description: "Both Day Cabs and OTR units.", 
    image: "/images/Image4.jpg" 
  },
  { 
    id: "hotshot", 
    title: "Hotshot", 
    description: `Any type of 40'L+(15K lbs+) trucks.`, 
    image: "/images/Image5.jpg" 
  },
  { 
    id: "flatbed-stepdeck", 
    title: "Flat Bed / Step Deck", 
    description: `Any type of 48'-53'(45K lbs+) trucks.`, 
    image: "/images/Image6.jpg" 
  }
];

export default function Services() {
  return (
    <section className="py-20 px-6 bg-slate-100">
      <h2 className="text-4xl font-extrabold text-center text-slate-800">Our Services</h2>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map(service => (
          <motion.div 
            key={service.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-xl rounded-lg overflow-hidden transition duration-300"
          >
            <Image src={service.image} alt={service.title} width={500} height={300} className="w-full h-56 object-cover"/>

            <div className="p-6 flex flex-col justify-between h-[200px]">
              <h3 className="text-xl font-semibold text-slate-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>

              <div className="mt-6 flex gap-4">
                <Link href={`/services/${service.id}`}>
                  <button className="px-6 py-2 cursor-pointer bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
