import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, User, ExternalLink, Clock, Building } from "lucide-react";

const Contact = () => {
  const addresses = [
    {
      type: "Factory Address",
      address: "PLOT NO.05, BEETA INDUSTRIAL PARK, OPP. AURBINDO HOSPITAL, VILLAGE - BHANGYA, INDORE",
      city: "Indore-453555, Madhya Pradesh, India",
      icon: Building
    },
    {
      type: "Office Address", 
      address: "Shop No. 49-B, Sharda Shree Colony, MR-9",
      city: "452001, Indore, Madhya Pradesh, India",
      icon: Building
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get in touch with us for all your food processing machinery needs. 
            We're here to help you find the perfect solution for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-card shadow-card border-2 border-accent/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <User className="mr-3 h-6 w-6 text-accent" />
                  Contact Person
                </h2>
                <div className="space-y-4">
                  <div className="p-4 bg-background rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-primary">Suresh Jangid</h3>
                    <p className="text-accent font-medium">Owner</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      With over 40 years of industry experience, Mr. Jangid leads our commitment to quality and innovation.
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                    <Phone className="h-5 w-5 text-accent" />
                    <span className="text-sm text-muted-foreground">
                      Phone number will be provided upon inquiry
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                    <Mail className="h-5 w-5 text-accent" />
                    <span className="text-sm">info@jangidenterprises.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <Clock className="mr-3 h-5 w-5 text-accent" />
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Addresses */}
          <div className="space-y-8">
            {addresses.map((location, index) => (
              <Card key={index} className="bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                    <location.icon className="mr-3 h-5 w-5 text-accent" />
                    {location.type}
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="leading-relaxed">{location.address}</p>
                        <p className="font-medium text-primary mt-1">{location.city}</p>
                      </div>
                    </div>
                    
                    {index === 0 && (
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => window.open('https://www.google.co.in/maps/dir//22.78199000,75.91072000', '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Get Directions
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Map Integration Placeholder */}
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Find Us on Map
                </h3>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-accent mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">
                      Interactive map will be loaded here
                    </p>
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className="mt-3"
                      onClick={() => window.open('https://www.google.co.in/maps/dir//22.78199000,75.91072000', '_blank')}
                    >
                      Open in Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <Card className="bg-gradient-hero shadow-hero border-2 border-accent/30">
            <CardContent className="p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Contact us today for a customized solution that meets your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Request Quote
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;