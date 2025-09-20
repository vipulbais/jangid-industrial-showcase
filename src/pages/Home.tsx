import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Award, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-industrial.jpg";

const Home = () => {
  const certifications = [
    "ISO 9001:2015",
    "CE Certified",
    "Quality Assured",
    "Export Ready"
  ];

  const stats = [
    { icon: TrendingUp, label: "40+ Years Experience", value: "1984" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Award, label: "Products", value: "50+" },
    { icon: CheckCircle, label: "Projects Completed", value: "1000+" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Leading Manufacturer of
            <span className="block text-accent-light">Food Processing Machines</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Industrial Excellence. Proven Quality. Trusted Solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              About Jangid Enterprises
            </h2>
            <div className="bg-gradient-card p-8 md:p-12 rounded-2xl shadow-card border border-border">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Jangid Enterprises specializes in high-quality machines like flour mill machine, drum seal, 
                emery machine, aata chakki plant, flour processors, and grain cleaning machine. With over 40 
                years of experience, we deliver industry-leading manufacturing, component services, and customer support.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Our products ensure maximum production, labor cost reduction, and reliability for food 
                processors and farmers across India and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Certifications & Quality
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality is reflected in our certifications and industry recognition.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-background shadow-card hover:shadow-industrial transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    {cert}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card shadow-hero border-2 border-accent/20">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Trusted by Industry Leaders
                </h2>
                <p className="text-lg text-muted-foreground mb-8 italic">
                  "Jangid Enterprises has been our trusted partner for food processing machinery for over a decade. 
                  Their commitment to quality and customer service is unmatched in the industry."
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-primary">Industry Partner</p>
                    <p className="text-sm text-muted-foreground">Food Processing Sector</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;