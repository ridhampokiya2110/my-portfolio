"use client";

import React from 'react';

// --- Custom SVG Icons (Zero Dependencies/Errors) ---
const GithubIcon = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
const LinkedinIcon = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const InstagramIcon = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const MailIcon = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const WhatsappIcon = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 3z"></path></svg>;
const DownloadIcon = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>;
const ExternalIcon = () => <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>;

export default function RidhamPortfolio() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf'; 
    link.download = 'Ridham_Pokiya_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const projects = [
    {
      title: "CloudLens: AI Image Auditor",
      tech: "AWS Lambda, Rekognition, S3",
      desc: "Event-driven serverless app for automated AI image analysis.",
      link: "https://d6rq0nk83y8qw.cloudfront.net/"
    },
    {
      title: "CloudQuest Trivia Game",
      tech: "API Gateway, DynamoDB, Lambda",
      desc: "Serverless quiz platform with automated CI/CD deployment.",
      link: "https://d3s7gaidpnlw9m.cloudfront.net/"
    },
    {
      title: "Serverless Cloud Resume API",
      tech: "CloudFront, S3, API Gateway",
      desc: "High-performance hosted resume with real-time visitor counter.",
      link: "https://dmtfynvyb5ngl.cloudfront.net/"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* Background Animated Mesh */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col items-center">
        
        {/* 1. Header & Profile Section */}
        <div className="flex flex-col items-center text-center space-y-6 mb-12">
          <div className="group relative">
            <div className="w-32 h-32 rounded-full border-2 border-cyan-500/30 p-1 overflow-hidden transition-all duration-500 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              <img src="/profile.jpg" alt="Ridham Pokiya" className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-cyan-500 p-1.5 rounded-full border-2 border-[#050505]">
              <DownloadIcon />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter transition-colors">RIDHAM POKIYA</h1>
            <p className="text-lg md:text-xl font-mono text-cyan-400 tracking-widest uppercase">DevOps & Cloud Engineer</p>
          </div>
        </div>

        {/* 2. Floating Certificates Box (Replaces Socials) */}
        <div className="relative w-full max-w-sm h-56 mb-12 flex items-center justify-center">
           <div className="absolute inset-0 border border-white/5 rounded-full scale-110 animate-[spin_20s_linear_infinite]" />
           <div className="absolute inset-0 border border-white/5 rounded-full scale-75 animate-[spin_15s_linear_infinite_reverse]" />
           
           <a 
             href="/certificate.pdf" 
             target="_blank" 
             rel="noopener noreferrer"
             className="z-10 bg-[#0a0a0a] border border-white/10 px-6 py-4 rounded-full shadow-2xl group transition-all hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
>
            <h3 className="text-sm font-bold tracking-[0.3em] text-gray-400 uppercase group-hover:text-cyan-400">
            20+ Certificates
            </h3>
          </a>

           <div className="absolute top-0 flex gap-6 -translate-y-4">
             <SocialIcon icon={<GithubIcon />} link="https://github.com/ridhampokiya2110" />
             <SocialIcon icon={<LinkedinIcon />} link="https://www.linkedin.com/in/ridham-pokiya-b7974a249" />
           </div>
           <div className="absolute bottom-0 flex gap-6 translate-y-4">
             <SocialIcon icon={<InstagramIcon />} link="https://www.instagram.com/___r._.p___" />
             <SocialIcon icon={<WhatsappIcon />} link="https://wa.me/919825954653" />
             <SocialIcon icon={<MailIcon />} link="mailto:ridhampokiya10@gmail.com" />
           </div>
        </div>

        {/* 3. Resume Download Button */}
        <button 
          onClick={handleDownload}
          className="group relative flex items-center gap-4 px-10 py-5 bg-white/5 border border-white/10 rounded-full hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all mb-20 active:scale-95"
        >
          <span className="font-bold tracking-[0.2em] text-sm">DOWNLOAD RESUME</span>
          <div className="animate-bounce"><DownloadIcon /></div>
        </button>

        {/* 4. Experience & Projects Section */}
        <div className="w-full space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Section title="EXPERIENCE">
              <ExpCard role="Cloud Club Core Member At PPSU" org="Cloud Engineer" date="2026 - Present" desc="Focused on serverless architecture and automated cloud literacy programs." />
              <ExpCard role="Data Analyst Intern" org="Unified Data Analysis" date="Internship" desc="Handled datasets for Netflix & PlayStore using SQL and Python." />
            </Section>
            
            <Section title="SKILLS">
              <div className="flex flex-wrap gap-3">
                {['AWS', 'GCP', 'Docker', 'Terraform','iam', 'Jenkins', 'Python', 'Java', 'Automation','github', 'Kubernetes', 'CI/CD','Cloud-Monitoring' , 'project-management', 'Prompt-Engineering'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-mono text-cyan-400 uppercase">{skill}</span>
                ))}
              </div>
            </Section>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold tracking-tighter flex items-center gap-4">
              PROJECTS <div className="h-[1px] flex-1 bg-white/10" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((p, i) => (
                <div key={i} className="group p-6 bg-white/[0.03] border border-white/5 rounded-3xl hover:border-cyan-500/30 transition-all hover:-translate-y-2">
                  <span className="text-[10px] font-mono text-cyan-500 tracking-widest">{p.tech}</span>
                  <h4 className="text-lg font-bold mt-2 mb-3">{p.title}</h4>
                  <p className="text-sm text-gray-500 mb-6">{p.desc}</p>
                  <a href={p.link} target="_blank" className="flex items-center justify-center gap-2 py-3 bg-white/5 rounded-xl text-[10px] font-bold tracking-widest hover:bg-cyan-500 hover:text-black transition-all">
                    LIVE PREVIEW <ExternalIcon />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>

      <footer className="py-12 border-t border-white/5 text-center text-[10px] font-mono text-gray-600 uppercase tracking-[0.5em]">
        Ridham Pokiya // Stable System © 2026
      </footer>
    </div>
  );
}

// Sub-components
function SocialIcon({ icon, link }: { icon: React.ReactNode, link: string }) {
  return (
    <a href={link} target="_blank" className="p-4 bg-[#0a0a0a] border border-white/10 rounded-full hover:border-cyan-500 hover:text-cyan-500 transition-all hover:scale-110 shadow-lg">
      {icon}
    </a>
  );
}

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] flex items-center gap-2">
        <span className="w-4 h-[1px] bg-cyan-500"></span> {title}
      </h2>
      {children}
    </div>
  );
}

function ExpCard({ role, org, date, desc }: { role: string, org: string, date: string, desc: string }) {
  return (
    <div className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-bold text-sm text-white">{role}</h4>
        <span className="text-[10px] font-mono text-cyan-600">{date}</span>
      </div>
      <p className="text-[11px] text-gray-400 mb-2">{org}</p>
      <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}