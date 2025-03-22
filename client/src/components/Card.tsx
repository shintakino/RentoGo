import { Bath, Bed, Heart, House, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Card = ({
  property,
  isFavorite,
  onFavoriteToggle,
  showFavoriteButton = true,
  propertyLink,
}: CardProps) => {
  const [imgSrc, setImgSrc] = useState(
    property.photoUrls?.[0] || "/placeholder.jpg"
  );

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 w-full mb-5">
      <div className="relative">
        <div className="w-full h-56 relative overflow-hidden">
          <Image
            src={imgSrc}
            alt={property.name}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImgSrc("/placeholder.jpg")}
          />
        </div>
        
        {/* Tags */}
        <div className="absolute bottom-4 left-4 flex gap-2">
          {property.isPetsAllowed && (
            <span className="bg-white/95 backdrop-blur-sm text-primary-700 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
              🐾 Pets Allowed
            </span>
          )}
          {property.isParkingIncluded && (
            <span className="bg-white/95 backdrop-blur-sm text-primary-700 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
              🚗 Parking
            </span>
          )}
        </div>

        {/* Favorite Button */}
        {showFavoriteButton && (
          <button
            className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm hover:bg-white rounded-full p-2.5 cursor-pointer shadow-sm transition-all duration-300 hover:scale-110"
            onClick={onFavoriteToggle}
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isFavorite ? "text-red-500 fill-red-500" : "text-gray-600"
              }`}
            />
          </button>
        )}
      </div>

      <div className="p-6">
        {/* Title and Location */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            {propertyLink ? (
              <Link
                href={propertyLink}
                className="hover:text-primary-600 transition-colors"
                scroll={false}
              >
                {property.name}
              </Link>
            ) : (
              property.name
            )}
          </h2>
          <p className="text-gray-600">
            {property?.location?.address}, {property?.location?.city}
          </p>
        </div>

        {/* Rating and Price */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="bg-yellow-50 rounded-full px-3 py-1 flex items-center">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <span className="font-semibold text-gray-900">
                {property.averageRating.toFixed(1)}
              </span>
              <span className="text-gray-500 ml-1">
                ({property.numberOfReviews})
              </span>
            </div>
          </div>
          <p className="text-xl font-bold text-primary-600">
            ${property.pricePerMonth.toFixed(0)}
            <span className="text-gray-500 text-base font-normal"> /month</span>
          </p>
        </div>

        {/* Amenities */}
        <div className="flex justify-between items-center gap-4 text-gray-600 pt-4 border-t border-gray-100">
          <span className="flex items-center bg-gray-50 rounded-lg px-3 py-2">
            <Bed className="w-5 h-5 mr-2 text-gray-500" />
            <span className="font-medium">{property.beds}</span> Beds
          </span>
          <span className="flex items-center bg-gray-50 rounded-lg px-3 py-2">
            <Bath className="w-5 h-5 mr-2 text-gray-500" />
            <span className="font-medium">{property.baths}</span> Baths
          </span>
          <span className="flex items-center bg-gray-50 rounded-lg px-3 py-2">
            <House className="w-5 h-5 mr-2 text-gray-500" />
            <span className="font-medium">{property.squareFeet}</span> sq ft
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
