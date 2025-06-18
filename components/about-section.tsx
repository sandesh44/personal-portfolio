'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python',
  'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'Figma'
];

const services = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces with modern frameworks and best practices.'
  },
  {
    icon: Rocket,
    title: 'Backend Development',
    description: 'Building scalable server-side applications and APIs with robust architecture.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Designing beautiful and intuitive user experiences that delight and engage users.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Working effectively in agile teams and mentoring junior developers.'
  }
];

const education = [
  {
    year: '2020-2024',
    degree: 'Bachelor of Computer Science',
    school: 'University of Technology',
    description: 'Specialized in Software Engineering and Web Development'
  },
  {
    year: '2023',
    degree: 'AWS Cloud Practitioner',
    school: 'Amazon Web Services',
    description: 'Certified in cloud computing fundamentals and AWS services'
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate full-stack developer with 3+ years of experience creating 
            digital solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Story</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  My journey into web development started during college when I built my first 
                  website. What began as curiosity quickly grew into a passion for creating 
                  digital experiences that solve real-world problems.
                </p>
                <p>
                  Over the years, I've worked with startups and established companies, helping 
                  them build modern web applications that are both beautiful and functional. 
                  I believe in writing clean, maintainable code and creating user interfaces 
                  that are intuitive and accessible.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing 
                  to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Skills & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">What I Do</h3>
            <div className="grid gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{service.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Education & Certifications</h3>
          <div className="max-w-3xl mx-auto">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 p-6 border-l-4 border-primary/20 bg-card rounded-r-lg mb-4 hover:shadow-md transition-shadow"
              >
                <div className="md:w-32 flex-shrink-0">
                  <Badge variant="outline" className="text-xs">{item.year}</Badge>
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold">{item.degree}</h4>
                  <p className="text-primary font-medium">{item.school}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}