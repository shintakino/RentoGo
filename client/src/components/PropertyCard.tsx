import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Bed, Bath, Maximize, MapPin } from "lucide-react";

interface Location {
  address: string;
  city: string;
}

interface Property {
  photoUrls: string[];
  name: string;
  pricePerMonth: number;
  location: Location;
  beds: number;
  baths: number;
  squareFeet: number;
  highlights: string[];
}

interface PropertyCardProps {
  property: Property;
  onFavoriteClick?: () => void;
  isFavorite?: boolean;
}

export const PropertyCard = ({ 
  property, 
  onFavoriteClick,
  isFavorite = false 
}: PropertyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-shadow duration-300"
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.photoUrls[0] || '/placeholder.jpg'} // Fallback image
          alt={property.name}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.jpg';
          }}
        />
        
        {/* Price Tag */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
          <p className="text-gray-900 font-semibold">
            ${(property.pricePerMonth || 0).toLocaleString()}
            <span className="text-gray-500 text-sm font-normal">/mo</span>
          </p>
        </div>

        {/* Favorite Button */}
        {onFavoriteClick && (
          <button 
            onClick={(e) => {
              e.preventDefault();
              onFavoriteClick();
            }}
            className="absolute top-4 right-4 p-2 bg-white/95 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors group/fav"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart 
              className={`w-5 h-5 transition-colors ${
                isFavorite 
                  ? "text-red-500 fill-red-500" 
                  : "text-gray-400 group-hover/fav:text-red-500"
              }`} 
            />
          </button>
        )}

        {/* Location Badge */}
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-white/70" />
            <p className="text-white text-sm">
              {property.location?.city || 'Location unavailable'}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-4">
        {/* Title */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1 group-hover:text-primary-600 transition-colors">
            {property.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-1">
            {property.location?.address}
          </p>
        </div>

        {/* Features */}
        <div className="flex items-center gap-6 py-3 border-y border-gray-100">
          <div className="flex items-center gap-2 text-gray-600">
            <Bed className="w-4 h-4" />
            <span className="text-sm">{property.beds || 0} beds</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Bath className="w-4 h-4" />
            <span className="text-sm">{property.baths || 0} baths</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Maximize className="w-4 h-4" />
            <span className="text-sm">{property.squareFeet || 0} sq ft</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2">
          {(property.highlights || []).slice(0, 3).map((highlight, index) => (
            <motion.span
              key={highlight}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors"
            >
              {highlight}
            </motion.span>
          ))}
          {(property.highlights?.length || 0) > 3 && (
            <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-50 text-gray-600">
              +{property.highlights.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}; 