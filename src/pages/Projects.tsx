import { motion } from "framer-motion";
import { Code2, Brain, Camera, Cpu } from "lucide-react";
import GalaxyBackground from "@/components/GalaxyBackground";
import { Card } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "AI Face Recognition System",
      description: "Real-time face detection and recognition using deep learning models",
      icon: Camera,
      color: "primary",
      status: "In Progress",
    },
    {
      title: "Object Detection Framework",
      description: "Custom YOLO implementation for multiple object detection scenarios",
      icon: Brain,
      color: "secondary",
      status: "Completed",
    },
    {
      title: "Gesture Control Interface",
      description: "Hand gesture recognition for contactless device control",
      icon: Code2,
      color: "accent",
      status: "In Progress",
    },
    {
      title: "Medical Image Analysis",
      description: "AI-powered diagnosis assistance using computer vision",
      icon: Cpu,
      color: "primary",
      status: "Planning",
    },
    {
      title: "Autonomous Navigation",
      description: "Vision-based navigation system for mobile robots",
      icon: Camera,
      color: "secondary",
      status: "In Progress",
    },
    {
      title: "AR Vision Enhancement",
      description: "Augmented reality tools for visual data overlay",
      icon: Brain,
      color: "accent",
      status: "Completed",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-green-500";
      case "In Progress":
        return "text-yellow-500";
      case "Planning":
        return "text-blue-500";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <GalaxyBackground />
      
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-['Orbitron'] mb-4 glow-text">
            Team Projects
          </h1>
          <p className="text-xl text-muted-foreground">
            Innovation in action - our latest computer vision projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all h-full group">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-glow flex items-center justify-center mb-4 shadow-glow`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold mb-2 font-['Orbitron'] group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)} animate-pulse`} />
                    <span className={`text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="inline-block p-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <h3 className="text-2xl font-bold font-['Orbitron'] mb-4">
              Want to contribute?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Join our team and work on cutting-edge computer vision projects. 
              We're always looking for passionate developers and researchers.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl bg-gradient-glow text-white font-semibold shadow-glow"
            >
              Join the Team
            </motion.button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
