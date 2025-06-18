'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:sandesh.shrestha407@gmail.com', label: 'Email' }
];

export default function Footer() {
  return (
    <footer className="py-12 bg-muted/30 border-t">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="flex justify-center space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-background hover:bg-accent border border-border/50 transition-all duration-300 hover:shadow-lg"
              >
                <Icon className="w-5 h-5" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </div>

          <div className="space-y-2">
            <p className="text-muted-foreground">
              © 2025 Sandesh Shrestha. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}