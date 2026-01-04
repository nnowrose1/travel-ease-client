import { motion } from "framer-motion";

const categories = ["SUV", "VAN", "Sedan", "Hatchback"];

const Categories = () => {
  return (
    <section className="pt-12 bg-blue-50">
      <div className="container mx-auto px-6 text-center">
        <h2
          data-aos="fade-left"
          className="text-3xl md:text-4xl font-bold text-accent mb-4"
        >
          Browse by <span className="text-orange-400">Category</span>
        </h2>
        <p data-aos="fade-right" className="text-accent max-w-2xl mx-auto mb-8">
         Not sure what to choose? Explore our vehicle categories and quickly find the perfect ride that fits your trip, comfort, and budget.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="text-xl font-semibold text-accent mb-2
                bg-white border border-gray-200 rounded-2xl py-6 
                  shadow-sm 
                hover:shadow-md hover:border-orange-400 hover:text-orange-500 
                transition-all duration-300
              "
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
