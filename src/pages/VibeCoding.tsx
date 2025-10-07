import { motion } from "framer-motion";
import { Code, Zap, Sparkles } from "lucide-react";
import GalaxyBackground from "@/components/GalaxyBackground";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

const VibeCoding = () => {
  const tips = [
    "💡 Master NumPy arrays before diving into deep learning frameworks",
    "🚀 OpenCV is your best friend for real-time computer vision",
    "🎯 Always preprocess your images for better model accuracy",
    "⚡ GPU acceleration makes training 10x faster",
    "🔥 Data augmentation prevents overfitting in vision models",
    "🌟 Transfer learning saves time and improves results",
    "💻 Version control your datasets with DVC",
    "🎨 Visualize your model's predictions to debug faster",
    "🔧 Use TensorBoard for monitoring training progress",
    "📊 Always validate on unseen data to test generalization",
  ];

  const [currentTips, setCurrentTips] = useState([...tips, ...tips]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTips((prev) => {
        const newTips = [...prev];
        newTips.push(newTips.shift()!);
        return newTips;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const tools = [
    { name: "Python", icon: "🐍", description: "Primary language for CV" },
    { name: "TensorFlow", icon: "🧠", description: "Deep learning framework" },
    { name: "PyTorch", icon: "🔥", description: "Research-focused ML library" },
    { name: "OpenCV", icon: "👁️", description: "Computer vision library" },
    { name: "CUDA", icon: "⚡", description: "GPU acceleration" },
    { name: "Keras", icon: "🎯", description: "High-level neural networks API" },
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
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
          <h1 className="text-5xl md:text-6xl font-bold font-['Orbitron'] mb-4 glow-text">
            Vibe Coding
          </h1>
          <p className="text-xl text-muted-foreground">
            Daily tips, tools, and tricks for computer vision developers
          </p>
        </motion.div>

        {/* Scrolling Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16 overflow-hidden"
        >
          <Card className="p-6 bg-gradient-glow shadow-glow-strong border-none">
            <div className="flex items-center gap-4 mb-4">
              <Zap className="w-6 h-6 text-white flex-shrink-0" />
              <h2 className="text-xl font-bold font-['Orbitron'] text-white">
                Today's Coding Tips
              </h2>
            </div>
            <div className="relative overflow-hidden h-12">
              <motion.div
                className="flex flex-col gap-4"
                animate={{ y: -48 * (currentTips.length - 10) }}
                transition={{
                  duration: currentTips.length * 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {currentTips.map((tip, index) => (
                  <div
                    key={index}
                    className="text-white text-lg font-medium h-12 flex items-center"
                  >
                    {tip}
                  </div>
                ))}
              </motion.div>
            </div>
          </Card>
        </motion.div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <Code className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h2 className="text-4xl font-bold font-['Orbitron'] glow-text mb-2">
              Essential Tools
            </h2>
            <p className="text-muted-foreground">
              Master these tools to excel in computer vision
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all text-center group h-full">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-6xl mb-4"
                  >
                    {tool.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 font-['Orbitron'] group-hover:text-primary transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {tool.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <h2 className="text-3xl font-bold font-['Orbitron'] mb-6 text-center">
              Quick Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Learning Paths
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▸</span> Image Processing Basics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▸</span> Neural Networks Fundamentals
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▸</span> CNN Architectures
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▸</span> Object Detection Models
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  Popular Projects
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">▸</span> Face Recognition System
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">▸</span> Real-time Object Detection
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">▸</span> Image Classification App
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">▸</span> Pose Estimation Tool
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default VibeCoding;
