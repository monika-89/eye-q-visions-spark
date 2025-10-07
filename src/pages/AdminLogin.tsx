import { motion } from "framer-motion";
import { ShieldCheck, Lock, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import GalaxyBackground from "@/components/GalaxyBackground";

const AdminLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <GalaxyBackground />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="p-8 bg-card/80 backdrop-blur-xl border-primary/30 shadow-glow">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-glow shadow-glow mb-4"
            >
              <ShieldCheck className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold font-['Orbitron'] mb-2 glow-text">
              Admin Access
            </h1>
            <p className="text-muted-foreground">
              Secure portal for EYEQ administrators
            </p>
          </motion.div>

          <motion.form
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                Admin Email
              </label>
              <Input
                type="email"
                placeholder="admin@eyeq.com"
                className="bg-background/50 border-primary/30 focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                Password
              </label>
              <Input
                type="password"
                placeholder="••••••••"
                className="bg-background/50 border-primary/30 focus:border-primary transition-colors"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-glow text-white font-semibold shadow-glow transition-all"
            >
              Sign In as Admin
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-center"
          >
            <a href="/members-login" className="text-sm text-primary hover:text-primary-glow transition-colors">
              Not an admin? Login as member →
            </a>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
