import { motion } from "framer-motion";
import { Trophy, Medal, Award, TrendingUp } from "lucide-react";
import GalaxyBackground from "@/components/GalaxyBackground";
import { Card } from "@/components/ui/card";

const Leaderboard = () => {
  const leaders = [
    { rank: 1, name: "Aditya Verma", points: 2850, projects: 12, badge: "🥇" },
    { rank: 2, name: "Sneha Reddy", points: 2720, projects: 11, badge: "🥈" },
    { rank: 3, name: "Karthik Nair", points: 2680, projects: 10, badge: "🥉" },
    { rank: 4, name: "Divya Iyer", points: 2540, projects: 9, badge: "⭐" },
    { rank: 5, name: "Rahul Singh", points: 2420, projects: 8, badge: "⭐" },
    { rank: 6, name: "Ananya Gupta", points: 2350, projects: 8, badge: "⭐" },
    { rank: 7, name: "Vivek Kumar", points: 2280, projects: 7, badge: "⭐" },
    { rank: 8, name: "Priya Menon", points: 2150, projects: 7, badge: "⭐" },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <TrendingUp className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <GalaxyBackground />
      
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Trophy className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
          <h1 className="text-5xl md:text-6xl font-bold font-['Orbitron'] mb-4 glow-text">
            Leaderboard
          </h1>
          <p className="text-xl text-muted-foreground">
            Top performers of EYEQ - compete, learn, and grow together
          </p>
        </motion.div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
          {leaders.slice(0, 3).map((leader, index) => {
            const order = [1, 0, 2]; // Second, First, Third
            const actualLeader = leaders[order[index]];
            const height = index === 1 ? "h-40" : "h-32";
            
            return (
              <motion.div
                key={actualLeader.rank}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col items-center ${index === 1 ? "order-2" : ""}`}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-6xl mb-2"
                >
                  {actualLeader.badge}
                </motion.div>
                <Card className={`${height} w-full bg-gradient-glow p-4 flex flex-col items-center justify-end shadow-glow-strong`}>
                  <div className="text-2xl font-bold mb-1">{actualLeader.rank}</div>
                  <div className="text-sm font-medium text-center">{actualLeader.name}</div>
                  <div className="text-xs text-white/80 mt-1">{actualLeader.points} pts</div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Full Leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-3"
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.rank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.05 }}
              whileHover={{ x: 10 }}
            >
              <Card className={`p-4 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all ${
                leader.rank <= 3 ? "border-primary shadow-glow" : ""
              }`}>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted">
                    {getRankIcon(leader.rank)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl font-bold font-['Orbitron'] text-primary">
                        #{leader.rank}
                      </span>
                      <span className="text-lg font-semibold">{leader.name}</span>
                      <span className="text-2xl">{leader.badge}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{leader.projects} Projects</span>
                      <span>•</span>
                      <span className="text-primary font-medium">{leader.points} Points</span>
                    </div>
                  </div>

                  <motion.div
                    className="w-20 h-20 rounded-full bg-gradient-glow flex items-center justify-center shadow-glow"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-2xl font-bold text-white">
                      {leader.points}
                    </span>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-center"
        >
          <Card className="inline-block p-6 bg-card/50 backdrop-blur-sm border-primary/20">
            <h3 className="text-xl font-bold font-['Orbitron'] mb-2">
              How to earn points?
            </h3>
            <p className="text-muted-foreground text-sm max-w-md">
              Complete projects, attend events, contribute to open source, and participate in hackathons to climb the leaderboard!
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Leaderboard;
