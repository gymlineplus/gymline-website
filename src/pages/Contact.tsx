
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("xkgjyddw");
  
  // Show success toast when form is successfully submitted
  React.useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
        duration: 3000,
      });
    }
  }, [state.succeeded, toast]);
  
  return (
    <>
      <Helmet>
        <title>Contact Us - Gymline</title>
        <meta name="description" content="Get in touch with our team for any questions about our fitness equipment or services." />
      </Helmet>

      <Navbar />

      <div className="container mx-auto px-4 md:px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Get in Touch</h1>
        <p className="text-center text-gymline-dark/70 mb-12">
          We would love to hear from you. Fill out the form below or reach out directly.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-xl font-bold mb-4">Send us a message</h2>
            <p className="text-gymline-dark/70 mb-6">
              Fill out the form below and we will get back to you as soon as possible.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <Input id="name" name="name" required placeholder="John Doe" />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Your Email
                </label>
                <Input id="email" name="email" type="email" required placeholder="john@example.com" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <Input id="subject" name="subject" required placeholder="How can we help you?" />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Your Message
                </label>
                <Textarea id="message" name="message" required rows={5} placeholder="Tell us about your requirements..." />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gymline-dark hover:bg-gymline-accent"
                disabled={state.submitting}
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </Button>
              
              {state.errors && (
                <div className="text-red-500 text-sm">
                  There was a problem submitting your form. Please check the fields and try again.
                </div>
              )}
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold mb-6">Contact Information</h2>
            <p className="text-gymline-dark/70 mb-8">
              Reach out to us directly through any of these channels.
            </p>
            
            <div className="space-y-8">
              <div className="flex">
                <MapPin className="h-6 w-6 text-gymline-accent mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gymline-dark/70">
                    Gymline Corporate Office<br />
                    A-95, DDA Shed, Okhla Phase II<br />
                    New Delhi, 110020
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <Phone className="h-6 w-6 text-gymline-accent mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gymline-dark/70">Customer Care: 8010998899</p>
                  <p className="text-gymline-dark/70">Whatsapp Helpine: 9311771888</p>
                </div>
              </div>
              
              <div className="flex">
                <Mail className="h-6 w-6 text-gymline-accent mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gymline-dark/70">
                    <a href="mailto:info@gymline.com" className="hover:text-gymline-accent transition-colors">
                      info@gymline.com
                    </a>
                  </p>
                  <p className="text-gymline-dark/70">
                    <a href="mailto:support@gymline.com" className="hover:text-gymline-accent transition-colors">
                      support@gymline.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <Clock className="h-6 w-6 text-gymline-accent mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Business Hours</h3>
                  <p className="text-gymline-dark/70">Monday - Saturday: 10:30 AM - 7:30 PM</p>
                  <p className="text-gymline-dark/70">Closed on Sundays</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
