import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  hsnCode: string;
  specifications: string[];
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg shadow-card"
            />
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">
                HSN Code
              </h4>
              <Badge variant="secondary" className="text-sm">
                {product.hsnCode}
              </Badge>
            </div>
            
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">
                Description
              </h4>
              <p className="text-sm leading-relaxed">
                {product.description}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">
                Key Specifications
              </h4>
              <ul className="space-y-2">
                {product.specifications.map((spec, index) => (
                  <li key={index} className="text-sm flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;