import { useRouter } from "next/router";

export default function ServicePage() {
  const router = useRouter();
  const { service } = router.query;
  console.log("🚀 ~ ServicePage ~ service:", service);

  const services = [
    {
      id: "boxtruck",
      title: "Box Truck",
      image: "/images/Image1.jpg",
      description: `Box truck is one of the most popular types of equipment in the trucking business. However, it's a time-devouring process to find a proper load that can bring you a desirable income. Having both knowledge and experience in the box-truck field, Resolute team can make your business journey easier and more profitable..`,
      details: `Sick and tired of struggling with paperwork and hunting for decent freight rates in between trips? Our box truck dispatch service will relieve you of all the common headaches truck drivers are forced to encounter daily.
No more clashes with greedy brokers or deadhead trips! Resolute Logistics' box truck dispatch service will ensure that your box truck is always loaded and keeps generating profit for you instead of burning money as well as time and gas. You drive, we care!`,
    },
    {
      id: "dryvan",
      title: "Dry Van Dispatch Service",
      image: "/images/Image2.jpg",
      description: `Dry vans are the most required truck types in the market. For a growing carrier company, the essential part is considered to have a guide in this rough market that allows you to grab the most profitable offer. Our dispatch service simplifies your work by keeping track of options across multiple loadboards to the max without you even leaving either the office or driver's seat.`,
      details: `If you are looking for ways to earn more money running your dry van business, Resolute Logistics has the solution. Thanks to 15 years of combined experience in freight brokerage, we know all those roadblocks on the flow of loads and shipping orders that keep your profits below your expectations. From a confusing amount of paperwork to lack of communication and hands-on support in emergency situations, our dry van dispatcher will fix every problem, boost your earnings, and ensure the steady growth of your business.`,
    },
    {
      id: "reefer",
      title: "Reefer",
      image: "/images/Image3.jpg",
      description: `Reefers are among the most in-demand truck types in today's logistics market, especially for transporting temperature-sensitive goods. For an expanding carrier company, having a strategic approach is crucial to securing the best-paying loads. Our dispatch service streamlines your operations by continuously monitoring multiple load boards for the most profitable reefer opportunities, so you can focus on driving while we handle the logistics from the office.`,
      details: `Reefer dispatch service is a specialized logistics and transportation management solution focused on coordinating loads that require refrigerated trailers to maintain specific temperature-controlled conditions. Our service helps truck drivers find suitable freight, plan routes, and manage schedules for perishable goods like food, pharmaceuticals, and chemicals. Our reefer truck dispatcher ensures that the right equipment and conditions are available to meet the strict temperature requirements throughout the shipment process.`,
    },
    {
      id: "poweronly",
      title: "Power Only",
      image: "/images/Image4.jpg",
      description: `Power only is a good type of equipment to start your business with because numerous shippers are eager to find carriers with this option available. As long as Power only has its certain features, our dispatch team knows how to provide you with a decent service so that your profit is going to be equally rated to a Dry Van. We provide dispatch services for trucking companies and owner operators in the USA.`,
      details: `Power only trucking is not more complicated than earning money with any other type of equipment. Yet, many power only carriers struggle to connect with right shippers and third-party logistics providers in a bid to pay off the investments and make a profit.
If you are one of them, Resolute Logistics offers a helping hand in power only dispatch service and ultimate support of your business, starting from searching for power unit only loads and ending with paperwork done on your behalf.`,
    },
    {
      id: "hotshot",
      title: "Hotshot",
      image: "/images/Image5.jpg",
      description: `Hotshot is a less-than-load truck type and obviously, it requires both more attention and much stronger dispatch support than any other type of equipment. However, if you entrust your business to us, our qualified team will do its best to keep your truck working for your pocket.`,
      details: `Hotshot trucking can bring you some of the highest rates per mile among all trucking equipment types since it almost always implies urgency. But urgency is exactly the thing that makes it difficult for drivers to keep track of offers and grab the best deals in between runs.

Hotshot dispatch services provided by Resolute Logistics remove the obstacle to your business development by undertaking all back-office functions and booking hotshot orders on your behalf.`,
    },
    {
      id: "flatbed-stepdeck",
      title: "Flat Bed / Step Deck",
      image: "/images/Image6.jpg",
      description: `Flatbed and stepdeck trucks require special attention and a deep understanding of the specifics. We understand this and our trucking dispatch services allow the driver to focus on ensuring the safety of cargo transportation. Any company that starts its way with such a complicated type of equipment should be aware of all obstacles that will occur. This is why Resolute brings a distinctive approach to any client and helps them to overcome all the possible issues. Moreover, our dispatch service has both knowledge and experience in obtaining all the necessary permits that have your company make money-flow increased by 20% up to 50% and even more.`,
      details: `Our company offers flatbed dispatch service and step decks dispatch service for owner operators and fleet owners. Here you can get some more information about features of receiving loads for the trucks with flatbed and step deck trailers.
As an owner of a Flatbed or Step Deck, you are sure to want your investment to recoup ASAP.
All you actually need to achieve this goal is to keep your vehicle running and carrying the best-paying Flatbed and Step Deck loads available in the USA, with downtime and deadhead trips reduced to the minimum.
Take all the advantages of our step deck or flatbed dispatch services.`,
    },
  ];
  const serviceType = service && services.find((srvc) => srvc.id === service);
  return (
    <>
      {serviceType ? (
        <div className="p-5 min-h-screen flex flex-col items-center justify-center bg-white">
          <div className="flex flex-col md:flex-row items-center md:items-start max-w-8xl w-full pt-10">
            <div className="md:w-1/2 w-full flex justify-center p-4">
              <img
                src={serviceType.image}
                alt={serviceType.title}
                className="rounded-lg shadow-lg w-full max-h-80 object-cover"
              />
            </div>

            <div className="md:w-1/2 w-full p-4">
              <h1 className="text-3xl font-bold capitalize text-gray-800">
                {serviceType.title}
              </h1>
              <p className="mt-2 text-gray-600">{serviceType.description}</p>
              <p className="mt-2 text-gray-600">{serviceType.details}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
