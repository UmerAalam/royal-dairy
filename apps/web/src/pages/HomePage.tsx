import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const HomePage = () => {
  return (
    <div className="bg-green-50 text-gray-800 font-sans">
      {/* ================= HEADER ================= */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-green-700">
            🐄 Royal Dairy Farm
          </h1>
          <nav className="space-x-6 hidden md:block">
            <a href="#about" className="hover:text-green-600">
              About
            </a>
            <a href="#products" className="hover:text-green-600">
              Products
            </a>
            <a href="#gallery" className="hover:text-green-600">
              Gallery
            </a>
            <a href="#contact" className="hover:text-green-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1500595046743-cd271d694d30')] bg-cover bg-center text-white text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-black/50 p-10 rounded-2xl"
        >
          <h2 className="text-5xl font-bold mb-4">Fresh • Organic • Healthy</h2>
          <p className="mb-6 text-lg">
            Delivering farm-fresh milk and dairy products straight to your home.
          </p>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            View Products
          </button>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <motion.section
        id="about"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-6 max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1598514982891-9f3f9c6e7a4b"
            alt="Farm"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h3 className="text-3xl font-bold text-green-700 mb-4">
              About Royal Dairy Farm
            </h3>
            <p className="mb-4">
              Royal Dairy Farm is committed to producing high-quality organic
              dairy products. With 250+ healthy cows and modern milking systems,
              we ensure freshness in every drop.
            </p>
            <ul className="space-y-2">
              <li>✔ 100% Organic Feed</li>
              <li>✔ Veterinary Supervised</li>
              <li>✔ Hygienic Processing</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ================= PRODUCTS ================= */}
      <motion.section
        id="products"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white py-20 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-green-700 mb-10">
            Our Fresh Products
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Fresh Milk",
                img: "https://images.unsplash.com/photo-1563636619-e9143da7973b",
              },
              {
                name: "Butter",
                img: "https://images.unsplash.com/photo-1585238342028-4c0f17d3c29e",
              },
              {
                name: "Cheese",
                img: "https://images.unsplash.com/photo-1604908554007-6f1c9d35e5ad",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-green-50 rounded-2xl shadow-lg overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold">{item.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= STATS ================= */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-green-700 text-white text-center"
      >
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <h4 className="text-4xl font-bold">250+</h4>
            <p>Cows</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold">1200L</h4>
            <p>Milk / Day</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold">500+</h4>
            <p>Customers</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold">15</h4>
            <p>Farm Workers</p>
          </div>
        </div>
      </motion.section>

      {/* ================= GALLERY ================= */}
      <motion.section
        id="gallery"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-6 max-w-6xl mx-auto"
      >
        <h3 className="text-3xl font-bold text-center text-green-700 mb-10">
          Farm Gallery
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
            "https://images.unsplash.com/photo-1542834369-f10ebf06d3b6",
            "https://images.unsplash.com/photo-1568066992143-7b1e3b9e3f5c",
          ].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl shadow-lg"
            />
          ))}
        </div>
      </motion.section>

      {/* ================= CONTACT ================= */}
      <motion.section
        id="contact"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white py-20 px-6"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-green-700 mb-6">Contact Us</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg"
              rows="4"
            ></textarea>
            <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition">
              Send Message
            </button>
          </form>
        </div>
      </motion.section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-green-900 text-white text-center py-6">
        <p>© 2026 Royal Dairy Farm | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default HomePage;
