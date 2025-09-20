import { Building2, Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Jangid Enterprises</h3>
                <p className="text-sm text-muted-foreground">Food Processing Machines</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Leading manufacturer of high-quality food processing machines and industrial equipment with over 40 years of experience.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p>PLOT NO.05, BEETA INDUSTRIAL PARK</p>
                  <p>OPP. AURBINDO HOSPITAL, VILLAGE - BHANGYA</p>
                  <p>Indore-453555, Madhya Pradesh, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">Contact: Suresh Jangid (Owner)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">info@jangidenterprises.com</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-accent/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent/10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Jangid Enterprises. All rights reserved. | Designed for industrial excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;