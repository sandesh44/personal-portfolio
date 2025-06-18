'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'TechCorp Solutions',
    period: '2022 - Present',
    description: 'Led development of responsive web applications using React and Next.js. Collaborated with design teams to implement pixel-perfect UI components.',
    achievements: [
      'Improved page load speed by 40%',
      'Led team of 3 junior developers',
      'Implemented automated testing resulting in 25% fewer bugs'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2021 - 2022',
    description: 'Built and maintained full-stack applications using MERN stack. Worked in agile environment with cross-functional teams.',
    achievements: [
      'Developed 5+ full-stack applications',
      'Reduced API response time by 60%',
      'Mentored 2 intern developers'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'WebAgency Pro',
    period: '2020 - 2021',
    description: 'Created responsive websites and web applications for various clients. Focused on performance optimization and user experience.',
    achievements: [
      'Delivered 15+ client projects',
      'Achieved 98% client satisfaction rate',
      'Implemented accessibility best practices'
    ]
  }
];

const certifications = [
  'AWS Certified Developer Associate',
  'Google Analytics Certified',
  'React Professional Certification',
  'MongoDB Certified Developer'
];

export default function ResumeSection() {
  const handleDownloadResume = () => {
    // In a real application, this would trigger a download of the actual resume PDF
    const link = document.createElement('a');
    link.href = '/resume-john-doe.pdf'; // This would be the path to your actual resume
    link.download = 'John-Doe-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            My professional journey, experiences, and qualifications at a glance.
          </p>
          <Button
            onClick={handleDownloadResume}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Work Experience */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-primary" />
                Work Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-semibold text-primary">
                              {exp.title}
                            </h4>
                            <p className="text-lg font-medium">{exp.company}</p>
                          </div>
                          <Badge variant="outline" className="mt-2 md:mt-0">
                            {exp.period}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        <div className="space-y-2">
                          <h5 className="font-medium text-sm">Key Achievements:</h5>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-primary" />
                Education
              </h3>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary">Bachelor of Computer Science</h4>
                    <p className="font-medium">University of Technology</p>
                    <Badge variant="outline" className="mt-2">2020 - 2024</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Specialized in Software Engineering and Web Development. 
                    Graduated Magna Cum Laude with a 3.8 GPA.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-primary" />
                Certifications
              </h3>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={cert}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-sm font-medium">{cert}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button
                onClick={handleDownloadResume}
                variant="outline"
                className="w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Full Resume
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}