import { motion } from "framer-motion";
import { ArrowRight, Eye, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import GalaxyBackground from "@/components/GalaxyBackground";

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      <GalaxyBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="p-4 rounded-full bg-gradient-glow shadow-glow-strong"
              >
                <Eye className="w-16 h-16 text-white" />
              </motion.div>
            </div>
            
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold font-['Orbitron'] mb-4 glow-text"
            >
              EYEQ
            </motion.h1>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-2"
            >
              Computer Vision Club
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-8"
            >
              Innovating with Vision & Vibe Coding
            </motion.div>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
            >
              SIMATS - Where innovation meets vision. Join us in exploring the future of computer vision and artificial intelligence.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-gradient-glow text-white font-semibold text-lg shadow-glow-strong flex items-center gap-2 group"
              >
                Explore EYEQ
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <Link to="/events">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl border-2 border-primary text-foreground font-semibold text-lg hover:bg-primary/10 flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Upcoming Events
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
