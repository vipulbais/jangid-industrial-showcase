import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background shadow-industrial border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo placeholder and company name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Building2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Jangid Enterprises</h1>
              <p className="text-xs text-muted-foreground">Food Processing Machines</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/">
              <Button
                variant={isActive("/") ? "default" : "ghost"}
                className="text-sm font-medium"
              >
                Home
              </Button>
            </Link>
            <Link to="/products">
              <Button
                variant={isActive("/products") ? "default" : "ghost"}
                className="text-sm font-medium"
              >
                Products & Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant={isActive("/contact") ? "default" : "ghost"}
                className="text-sm font-medium"
              >
                Contact Us
              </Button>
            </Link>
          </nav>

          {/* Mobile menu placeholder */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <span className="text-xs">Menu</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;