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
  email: "jenaleetngu@gmail.com",
  socialLinks: {
    github: "https://github.com/jnguy405",
    linkedin: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
  },
  location: "Santa Cruz, CA",
};

// EmailJS Configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_8anq6k3',      
  TEMPLATE_ID: 'template_tpzzq5g',    
  PUBLIC_KEY: 'HKqQ-KFEQ-wlkfGzP',   
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
        className="bg-primary text-primary-foreground py-12 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="ml-[2%]">
            <div className="max-w-2xl">
              <h1 className="mb-4">Get in Touch</h1>
              <p className="text-xl opacity-90 mb-4">
                I'd like to hear from you!
              </p>
              <p className="text-lg opacity-80">
                If you have any inquiries or just want to say hi, please use the contact form!
              </p>
              
              {/* Contact Information */}
              <div className="mt-6 pt-6 border-t border-accent/20 space-y-4">
                {/* Email Link */}
                <div>
                  <a 
                    href={`mailto:${CONTACT_DATA.email}`} 
                    className="inline-flex items-center gap-2 text-lg hover:text-accent transition-colors"
                  >
                    <span className="opacity-80">📧</span>
                    <span className="underline decoration-accent/50 hover:decoration-accent">
                      {CONTACT_DATA.email}
                    </span>
                  </a>
                </div>

                {/* Social Links */}
                {CONTACT_DATA.socialLinks && (
                  <div className="pt-4 flex gap-4">
                    {CONTACT_DATA.socialLinks.github && (
                      <a 
                        href={CONTACT_DATA.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-base hover:text-accent transition-colors"
                      >
                        <span>GitHub</span>
                      </a>
                    )}
                    {CONTACT_DATA.socialLinks.linkedin && (
                      <a 
                        href={CONTACT_DATA.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-base hover:text-accent transition-colors"
                      >
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Form Section */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <AnimatedSection
          delay={100}
          fromTransform="translateY(30px)"
          className="max-w-2xl"
        >
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-fade-in">
              {statusMessage}
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg animate-fade-in">
              {statusMessage}
            </div>
          )}

          <form 
            ref={formRef} 
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label 
                  htmlFor="firstName" 
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="from_name"
                  className="w-full px-4 py-3 bg-background border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Enter your first name"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label 
                  htmlFor="lastName" 
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="last_name"
                  className="w-full px-4 py-3 bg-background border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Enter your last name"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-foreground mb-2"
              >
                Email <span className="text-accent">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="reply_to"
                className="w-full px-4 py-3 bg-background border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="you@example.com"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 bg-background border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Type your message here..."
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary disabled:active:scale-100"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"></span>
                    Sending...
                  </span>
                ) : (
                  "Send"
                )}
              </button>
            </div>
          </form>
        </AnimatedSection>
      </main>
    </AnimatedPageWrapper>
  );
}