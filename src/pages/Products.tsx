import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ProductModal from "@/components/ProductModal";
import { Eye } from "lucide-react";

// Import product images
import flourMillImage from "@/assets/flour-mill.jpg";
import drumSealImage from "@/assets/drum-seal.jpg";
import emeryMachineImage from "@/assets/emery-machine.jpg";
import aataChakkiImage from "@/assets/aata-chakki.jpg";
import grainCleaningImage from "@/assets/grain-cleaning.jpg";
import riceMillImage from "@/assets/rice-mill.jpg";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    {
      id: "1",
      name: "Flour Mill Machine",
      image: flourMillImage,
      hsnCode: "84378090",
      description: "High-capacity flour milling equipment designed for commercial and industrial applications. Features precision grinding mechanisms and efficient power transmission systems.",
      specifications: [
        "Capacity: 100-500 kg/hour",
        "Power: 5-25 HP motor",
        "Material: Mild steel construction",
        "Output: Fine to coarse flour grades"
      ]
    },
    {
      id: "2",
      name: "Drum Seal",
      image: drumSealImage,
      hsnCode: "84379010",
      description: "Industrial drum sealing systems for secure containment and processing applications. Ensures leak-proof operations in manufacturing environments.",
      specifications: [
        "Material: Stainless steel",
        "Temperature range: -20°C to 200°C",
        "Pressure rating: Up to 10 bar",
        "Compliance: Food grade standards"
      ]
    },
    {
      id: "3",
      name: "Emery Machine",
      image: emeryMachineImage,
      hsnCode: "84609000",
      description: "Precision grinding and finishing machine for industrial applications. Ideal for surface preparation and component finishing in manufacturing processes.",
      specifications: [
        "Grinding wheel: 150-300mm diameter",
        "Motor: 1-5 HP variable speed",
        "Precision: ±0.01mm tolerance",
        "Safety: Emergency stop systems"
      ]
    },
    {
      id: "4",
      name: "Aata Chakki Plant",
      image: aataChakkiImage,
      hsnCode: "84378090",
      description: "Traditional stone-based flour grinding system modernized with industrial efficiency. Perfect for producing authentic whole wheat flour with traditional taste.",
      specifications: [
        "Stone size: 24-36 inches diameter",
        "Capacity: 50-200 kg/hour",
        "Power: 3-15 HP motor",
        "Features: Auto feeding system"
      ]
    },
    {
      id: "5",
      name: "Grain Cleaning Machine",
      image: grainCleaningImage,
      hsnCode: "84378090",
      description: "Advanced grain cleaning and sorting equipment for removing impurities and foreign particles. Essential for food processing quality control.",
      specifications: [
        "Cleaning efficiency: 99.5%",
        "Capacity: 1-10 tons/hour",
        "Separation: Dust, stones, light particles",
        "Operation: Continuous processing"
      ]
    },
    {
      id: "6",
      name: "Rice Mill Machinery",
      image: riceMillImage,
      hsnCode: "84378090",
      description: "Complete rice processing solution including hulling, polishing, and grading systems. Designed for maximum yield and minimal breakage.",
      specifications: [
        "Processing: Paddy to polished rice",
        "Capacity: 500-2000 kg/hour",
        "Yield: 65-70% recovery rate",
        "Quality: Premium rice output"
      ]
    }
  ];

  const handleViewDetails = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Products & Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of food processing machines and industrial equipment 
            designed for maximum efficiency and reliability.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-hero transition-all duration-300 border-2 border-transparent hover:border-accent/20">
              <CardContent className="p-6">
                <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {product.name}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      HSN: {product.hsnCode}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {product.description}
                  </p>
                  
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => handleViewDetails(product)}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Products Table */}
        <div className="bg-gradient-card p-8 rounded-2xl shadow-card border border-border">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Product Specifications Table
          </h2>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product Photo</TableHead>
                  <TableHead>HSN Code</TableHead>
                  <TableHead>Product Name</TableHead>
                  <TableHead>Short Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id} className="hover:bg-muted/50">
                    <TableCell>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{product.hsnCode}</Badge>
                    </TableCell>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell className="max-w-xs">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {product.description}
                      </p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Products;