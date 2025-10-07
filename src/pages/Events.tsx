import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight } from "lucide-react";
import GalaxyBackground from "@/components/GalaxyBackground";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

const Events = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 42,
    seconds: 30,
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      title: "AI Vision Hackathon 2024",
      date: "March 15-17, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "SIMATS Campus",
      attendees: "150+",
      description: "48-hour coding marathon focusing on computer vision solutions",
      status: "upcoming",
    },
    {
      title: "Deep Learning Workshop",
      date: "March 25, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Tech Lab 3",
      attendees: "80+",
      description: "Hands-on workshop on neural networks and CNN architectures",
      status: "upcoming",
    },
    {
      title: "Guest Lecture: Future of CV",
      date: "April 5, 2024",
      time: "4:00 PM - 6:00 PM",
      location: "Auditorium Hall",
      attendees: "200+",
      description: "Industry expert talk on latest trends in computer vision",
      status: "upcoming",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <GalaxyBackground />
      
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Calendar className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
          <h1 className="text-5xl md:text-6xl font-bold font-['Orbitron'] mb-4 glow-text">
            Upcoming Events
          </h1>
          <p className="text-xl text-muted-foreground">
            Join us for exciting workshops, hackathons, and tech talks
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <Card className="p-8 bg-gradient-glow shadow-glow-strong border-none">
            <h2 className="text-2xl font-bold font-['Orbitron'] text-white text-center mb-6">
              Next Event Starts In
            </h2>
            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-2">
                    <div className="text-4xl md:text-5xl font-bold text-white">
                      {String(item.value).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="text-sm text-white/80 font-medium uppercase">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Event Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative mb-16"
        >
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {events.map((event, index) => (
                <div key={index} className="min-w-full px-2">
                  <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all">
                    <div className="flex items-start gap-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-20 h-20 rounded-2xl bg-gradient-glow flex items-center justify-center shadow-glow flex-shrink-0"
                      >
                        <Calendar className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold font-['Orbitron'] mb-4">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 text-lg">
                          {event.description}
                        </p>
                        
                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center gap-3 text-muted-foreground">
                            <Calendar className="w-5 h-5 text-primary" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-3 text-muted-foreground">
                            <Clock className="w-5 h-5 text-secondary" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-3 text-muted-foreground">
                            <MapPin className="w-5 h-5 text-accent" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-3 text-muted-foreground">
                            <Users className="w-5 h-5 text-primary" />
                            <span>{event.attendees} Expected</span>
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 rounded-xl bg-gradient-glow text-white font-semibold shadow-glow"
                        >
                          Register Now
                        </motion.button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <div className="flex gap-2">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? "bg-primary w-8"
                      : "bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
