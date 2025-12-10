import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');

    emailjs.sendForm('service_io6m844', 'template_jef7zto', form.current, 'ewdfmOcUsr1Yuc1Tq')
      .then((result) => {
        setStatus('success');
        form.current?.reset();
        setTimeout(() => setStatus('idle'), 3000);
      }, (error) => {
        setStatus('error');
        console.error(error);
        setTimeout(() => setStatus('idle'), 3000);
      });
  };

  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I&apos;m currently open to new opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-primary-50 dark:bg-primary-900/10 p-10 rounded-3xl border border-primary-100 dark:border-primary-900/50">
              <h3 className="font-heading text-2xl font-bold text-primary-900 dark:text-primary-100 mb-6">
                Let&apos;s Collaborate
              </h3>
              <p className="text-primary-800 dark:text-primary-200 leading-relaxed mb-8 text-lg">
                I&apos;m always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
              <a 
                href="mailto:spandansehgal@gmail.com" 
                className="inline-block text-2xl font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors border-b-2 border-primary-600 dark:border-primary-400 pb-1"
              >
                spandansehgal@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-card p-8 md:p-10 rounded-3xl shadow-xl dark:shadow-2xl dark:shadow-primary-900/5 border border-gray-100 dark:border-gray-800"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all font-medium"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="user_email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all font-medium"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all font-medium resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-8 py-4 rounded-xl bg-gray-900 dark:bg-primary-600 text-white font-bold text-lg hover:bg-gray-800 dark:hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                   <span>Sending...</span>
                ) : status === 'success' ? (
                   <span>Message Sent!</span>
                ) : (
                   <>
                     <span>Send Message</span>
                     <FaPaperPlane className="text-sm ml-2" />
                   </>
                )}
              </button>
              
              {status === 'error' && (
                <p className="text-red-500 text-sm text-center font-medium">Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;