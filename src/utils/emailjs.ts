import emailjs from '@emailjs/browser';
import { ContactForm } from '../types';

// Initialize EmailJS with your public key
const initializeEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (publicKey) {
    emailjs.init(publicKey);
  }
};

export const sendEmail = async (formData: ContactForm): Promise<void> => {
  try {
    // Initialize EmailJS
    initializeEmailJS();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log('EmailJS Configuration Check:', {
      serviceId: serviceId ? '✓ Set' : '✗ Missing',
      templateId: templateId ? '✓ Set' : '✗ Missing',
      publicKey: publicKey ? '✓ Set' : '✗ Missing'
    });

    if (!serviceId || !templateId || !publicKey) {
      throw new Error('EmailJS configuration is missing. Please check your environment variables.');
    }

    // Template parameters that will be used in your EmailJS template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'saad.mhmoood@gmail.com', // Your email where you want to receive messages
      reply_to: formData.email,
    };

    const response = await emailjs.send(serviceId, templateId, templateParams);
    
    if (response.status === 200) {
      console.log('Email sent successfully!', response);
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};