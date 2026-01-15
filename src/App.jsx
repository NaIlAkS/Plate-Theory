import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Clock, MapPin, Flame, Utensils } from 'lucide-react';

// This is your entire app in one file!
const App = () => {
  const menuItems = [
    {
      id: 1,
      name: "Chicken Tandoori Pizza",
      price: "₹14.99",
      img: "https://www.tasteofhome.com/wp-content/uploads/2025/03/48-Homemade-Pizza-Recipes_FT23_376_EC_120123_1_FT.jpg",
      tag: "Best Seller"
    },
    {
      id: 2,
      name: "Classic Steakhouse Burger",
      price: "₹12.50",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOX2YyS0W1LnrD5eyd-7Q9kvO1JGvE80AXXA&s",
      tag: "Trending"
    },
    {
      id: 3,
      name: "Traditional Chicken Mandi",
      price: "₹18.00",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmkmf2VERcbMJfqfJW--XOzN42DA4QEXefQ&s",
      tag: "Chef's Special"
    },
    {
      id: 4,
      name: "Velvet Chocolate Cake",
      price: "₹8.99",
      img: "https://www.tasteofhome.com/wp-content/uploads/2017/09/exps21585_THCA153054D10_15_4b.jpg",
      tag: "Sweet Treat"
    }
  ];

  return (
    <div className="app-wrapper">
      {/* INJECTED CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap');

        .app-wrapper {
          font-family: 'Poppins', sans-serif;
          background-color: #0a0a0a;
          color: white;
          min-height: 100vh;
        }

        /* Navbar */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 8%;
          background: rgba(0,0,0,0.9);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 1000;
          border-bottom: 1px solid #333;
        }

        .logo-text {
          color: #ff4757;
          font-size: 1.5rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .nav-links { display: flex; gap: 30px; align-items: center; }
        .nav-links span { cursor: pointer; font-weight: 500; transition: 0.3s; }
        .nav-links span:hover { color: #ff4757; }

        /* Hero Section */
        .hero {
          height: 70vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
                      url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1500&q=80');
          background-size: cover;
          background-position: center;
          padding: 0 20px;
        }

        .sponsor-badge {
          background: #ff4757;
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 0.75rem;
          letter-spacing: 1px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .hero h1 { font-size: clamp(2.5rem, 5vw, 4rem); margin: 0; line-height: 1.2; }
        .hero p { color: #ccc; max-width: 600px; margin: 20px 0; }

        .cta-btn {
          background: #ff4757;
          color: white;
          border: none;
          padding: 15px 40px;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          font-size: 1rem;
        }

        /* Menu Grid */
        .menu-container { padding: 60px 8%; }
        .section-header { margin-bottom: 40px; }
        .section-header h2 { font-size: 2.5rem; margin-bottom: 10px; }
        .underline { width: 60px; height: 4px; background: #ff4757; border-radius: 2px; }

        .food-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .card {
          background: #1a1a1a;
          border-radius: 24px;
          overflow: hidden;
          transition: transform 0.4s ease;
          border: 1px solid #333;
        }

        .img-box { position: relative; height: 220px; }
        .img-box img { width: 100%; height: 100%; object-fit: cover; }
        
        .tag-pill {
          position: absolute;
          top: 15px;
          left: 15px;
          background: white;
          color: black;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 800;
        }

        .details { padding: 25px; }
        .details h3 { margin: 10px 0; font-size: 1.25rem; }
        
        .price-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
        }

        .price-text { font-size: 1.4rem; font-weight: 700; color: #ff4757; }
        
        .add-circle {
          background: white;
          color: black;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          cursor: pointer;
        }

        /* Footer */
        .footer {
          padding: 40px 8%;
          text-align: center;
          background: #000;
          border-top: 1px solid #222;
          color: #666;
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo-text">
          <Utensils color="#ff4757" />
          Plate Theory
        </div>
        <div className="nav-links">
          <span>Menu</span>
          <span>Orders</span>
          <ShoppingCart size={22} />
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="sponsor-badge">Sandra Sponsored</span>
          <h1>Gourmet Flavors,<br/>Fast Delivery.</h1>
          <p>The Plate Theory brings you world-class cuisine made with locally sourced magic ingredients.</p>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cta-btn"
          >
            Explore Menu
          </motion.button>
        </motion.div>
      </header>

      {/* MENU */}
      <main className="menu-container">
        <div className="section-header">
          <h2>Popular Dishes</h2>
          <div className="underline"></div>
        </div>

        <div className="food-grid">
          {menuItems.map((item, idx) => (
            <motion.div 
              key={item.id}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="img-box">
                <img src={item.img} alt={item.name} />
                <div className="tag-pill">{item.tag}</div>
              </div>
              <div className="details">
                <div style={{ display: 'flex', gap: '4px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < 4 ? "#ffb800" : "none"} color="#ffb800" />
                  ))}
                </div>
                <h3>{item.name}</h3>
                <div className="price-row">
                  <span className="price-text">{item.price}</span>
                  <motion.div whileTap={{ scale: 0.8 }} className="add-circle">+</motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Plate Theory | Exclusive Sandra Sponsorship , website created by Naila</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px' }}>
          <small><Clock size={12} /> 15 min Delivery</small>
          <small><Flame size={12} /> Hot & Fresh</small>
        </div>
      </footer>
    </div>
  );
};

export default App;
