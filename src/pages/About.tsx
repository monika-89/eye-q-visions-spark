import { motion } from "framer-motion";
import { Target, Eye, Users, Lightbulb } from "lucide-react";
import GalaxyBackground from "@/components/GalaxyBackground";
import { Card } from "@/components/ui/card";

const About = () => {
  const bearers = [
    { name: "Priya Sharma", role: "President", image: "👤" },
    { name: "Arjun Patel", role: "Vice President", image: "👤" },
    { name: "Meera Krishnan", role: "Technical Lead", image: "👤" },
    { name: "Rohit Kumar", role: "Creative Head", image: "👤" },
  ];

  const timeline = [
    { year: "2020", event: "EYEQ Founded" },
    { year: "2021", event: "First Hackathon" },
    { year: "2022", event: "AI Workshop Series" },
    { year: "2023", event: "National Recognition" },
    { year: "2024", event: "100+ Members" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <GalaxyBackground />
      
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-['Orbitron'] mb-4 glow-text">
            About EYEQ
          </h1>
          <p className="text-xl text-muted-foreground">
            Pioneering the future of Computer Vision
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all h-full">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4 font-['Orbitron']">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower students with cutting-edge computer vision knowledge and skills, 
                fostering innovation and creativity in AI-driven solutions that shape the future.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/50 transition-all h-full">
              <Eye className="w-12 h-12 text-secondary mb-4" />
              <h2 className="text-2xl font-bold mb-4 font-['Orbitron']">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading hub for computer vision innovation in India, creating 
                a community of visionaries who revolutionize how machines see and understand the world.
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Meet Our Bearers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <Users className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-4xl font-bold font-['Orbitron'] glow-text mb-2">
              Meet Our Bearers
            </h2>
            <p className="text-muted-foreground">Leading EYEQ to new heights</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bearers.map((bearer, index) => (
              <motion.div
                key={bearer.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all text-center group">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-glow flex items-center justify-center text-4xl shadow-glow"
                  >
                    {bearer.image}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-1">{bearer.name}</h3>
                  <p className="text-primary text-sm">{bearer.role}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold font-['Orbitron'] glow-text mb-2">
              Our Journey
            </h2>
            <p className="text-muted-foreground">Milestones that define us</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <Card className="inline-block p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all">
                      <div className="text-3xl font-bold font-['Orbitron'] text-primary mb-2">
                        {item.year}
                      </div>
                      <div className="text-lg">{item.event}</div>
                    </Card>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-primary shadow-glow z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
