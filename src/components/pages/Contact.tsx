import { AnimatedSection } from "../animation/AnimatedSection";
import { AnimatedPageWrapper } from "../animation/AnimatedPageWrapper";
import { useState, useRef, FormEvent } from "react";
import emailjs from '@emailjs/browser';

// Define contact data structure
type ContactData = {
  email: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
  };
  location?: string;
};

const CONTACT_DATA: ContactData = {
  email: "jkim4869it@gmail.com",
  socialLinks: {
    github: "https://github.com/ASIANRAVIN",
    linkedin: "https://www.linkedin.com/in/asianravin",
  },
  location: "Santa Monica, CA",
};

// EmailJS Configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_g1rw9z8',      
  TEMPLATE_ID: 'template_cvynpen',    
  PUBLIC_KEY: 'Cnz4Ysbsw4xS4wFHt',   
};

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    if (!formRef.current) {
      setSubmitStatus('error');
      setStatusMessage('Form error. Please try again.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setStatusMessage('✓ Message sent successfully! I\'ll get back to you soon.');
        
        // Reset form on success
        formRef.current.reset();
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
          setStatusMessage('');
        }, 5000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setStatusMessage('✗ Failed to send message. Please try again or email me directly.');
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedPageWrapper>
      {/* Header Section */}
      <AnimatedSection
        as="header"
        delay={0}
        fromTransform="translateY(30px)"
        className="text-primary-foreground py-12 px-6"
        style={{ background: "var(--gradient-primary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="ml-[2%]">
            <div className="max-w-2xl">
              <div style={{ fontSize: '3.5rem', lineHeight: '1.2' }}>
                <h1 className="mb-6 font-bold">Get in Touch</h1>
              </div>
              <p className="text-xl md:text-2xl opacity-90 mb-4">
                I'd love to hear from you!
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Form Section */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Status Messages Card */}
        {submitStatus !== 'idle' && (
          <AnimatedSection
            delay={50}
            fromTransform="translateY(20px)"
            className="mb-8"
          >
            <div className={`p-6 rounded-lg border ${
              submitStatus === 'success' 
                ? "bg-green-100 border-green-400 text-green-700" 
                : "bg-red-100 border-red-400 text-red-700"
            }`}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{submitStatus === 'success' ? '✅' : '❌'}</span>
                <p className="font-medium">{statusMessage}</p>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Form Card */}
        <AnimatedSection
          delay={100}
          fromTransform="translateY(30px)"
        >
          <div className="glass-panel p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Send me a message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible
              </p>
            </div>

            <form 
              ref={formRef} 
              onSubmit={handleSubmit} 
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-foreground"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-accent">👤</span>
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-background border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:border-accent/30 text-foreground"
                    placeholder="Your full name"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-foreground"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-accent">✉️</span>
                      Email <span className="text-accent text-lg">*</span>
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-background border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:border-accent/30 text-foreground"
                    placeholder="you@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-medium text-foreground"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-accent">📋</span>
                    Subject
                  </span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-background border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:border-accent/30 text-foreground"
                  placeholder="What would you like to discuss?"
                  disabled={isSubmitting}
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-foreground"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-accent">💬</span>
                    Message
                  </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed hover:border-accent/30 text-foreground"
                  placeholder="Tell me about your project, question, or just say hello..."
                  required
                  disabled={isSubmitting}
                />
              </div>

            {/* Submit Button */}
            <div className="pt-6">
                <button
                type="submit"
                disabled={isSubmitting}
                style={{
                    padding: '12px 32px',
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    borderRadius: 'var(--radius)',
                    fontWeight: '500',
                    fontSize: '1rem',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                }}
                onMouseOver={e => e.currentTarget.style.opacity = '0.9'}
                onMouseOut={e => e.currentTarget.style.opacity = '1'}
                onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
                onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                {isSubmitting ? "Sending..." : "Send"}
                </button>
            </div>
            </form>
          </div>
        </AnimatedSection>
      </main>
    </AnimatedPageWrapper>
  );
}
