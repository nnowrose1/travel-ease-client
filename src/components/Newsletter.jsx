import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

const Newsletter = () => {
    const [subscribed, setSubscribed] = useState(false);
    const [email, setEmail] = useState('')
    const handleSubscribe = (e) => {
        e.preventDefault();

        if(!email){
            toast.error("Please enter your email");
            return;
        }

        if(!subscribed){
        setSubscribed(true);
        toast.success('Subscribed');
        }
        else{
            setSubscribed(false);
        toast.success('Unsubscribed'); 
        }

        setEmail('')
    }
  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-lg p-10 md:p-14 max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-accent mb-4">
            Stay in the Loop 🚗
          </h2>
          <p className="text-primary mb-8">
            Subscribe to our newsletter and get the latest updates, offers, and
            new vehicle arrivals straight to your inbox.
          </p>

          <form onSubmit={handleSubscribe}
           className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email address"
              className="
                w-full sm:w-auto flex-1 border border-gray-300 rounded-full px-6 py-3 
                focus:outline-none focus:ring-2 focus:ring-orange-400
              "
            />
            <button
              type="submit"
            
              className="
                bg-linear-to-r from-orange-500 to-orange-300 hover:bg-orange-600 text-white font-semibold 
                px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300
              "
            >
              {subscribed ? "Unsubscribe" : "Subscribe"}
            </button>
          </form>

          <p className="text-xs text-gray-400 mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
