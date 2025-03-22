import { Bath, Bed, Heart, House, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CardCompact = ({
  property,
  isFavorite,
  onFavoriteToggle,
  showFavoriteButton = true,
  propertyLink,
}: CardCompactProps) => {
  const [imgSrc, setImgSrc] = useState(
    property.photoUrls?.[0] || "/placeholder.jpg"
  );

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 w-full flex h-44 mb-5">
      {/* Image Section */}
      <div className="relative w-2/5">
        <div className="h-full w-full relative overflow-hidden">
          <Image
            src={imgSrc}
            alt={property.name}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImgSrc("/placeholder.jpg")}
          />
        </div>
        
        {/* Property Tags */}
        <div className="absolute bottom-3 left-3 flex gap-1.5 flex-col">
          {property.isPetsAllowed && (
            <span className="bg-white/95 backdrop-blur-sm text-primary-700 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
              🐾 Pets
            </span>
          )}
          {property.isParkingIncluded && (
            <span className="bg-white/95 backdrop-blur-sm text-primary-700 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
              🚗 Parking
            </span>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="w-3/5 p-4 flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start gap-2">
            <h2 className="text-lg font-bold text-gray-900 line-clamp-1">
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
            {showFavoriteButton && (
              <button
                className="bg-gray-50 hover:bg-gray-100 rounded-full p-2 transition-colors"
                onClick={onFavoriteToggle}
              >
                <Heart
                  className={`w-4 h-4 transition-colors ${
                    isFavorite ? "text-red-500 fill-red-500" : "text-gray-400 hover:text-gray-600"
                  }`}
                />
              </button>
            )}
          </div>

          {/* Location & Rating */}
          <p className="text-gray-600 mb-2 text-sm line-clamp-1">
            {property?.location?.address}, {property?.location?.city}
          </p>
          <div className="inline-flex items-center bg-yellow-50 rounded-full px-2.5 py-1">
            <Star className="w-3.5 h-3.5 text-yellow-400 mr-1" />
            <span className="font-medium text-gray-700">
              {property.averageRating.toFixed(1)}
            </span>
            <span className="text-gray-500 text-sm ml-1">
              ({property.numberOfReviews})
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          {/* Amenities */}
          <div className="flex gap-3 text-gray-600 text-sm">
            <span className="flex items-center bg-gray-50 rounded-md px-2 py-1">
              <Bed className="w-3.5 h-3.5 mr-1 text-gray-500" />
              <span className="font-medium">{property.beds}</span>
            </span>
            <span className="flex items-center bg-gray-50 rounded-md px-2 py-1">
              <Bath className="w-3.5 h-3.5 mr-1 text-gray-500" />
              <span className="font-medium">{property.baths}</span>
            </span>
            <span className="flex items-center bg-gray-50 rounded-md px-2 py-1">
              <House className="w-3.5 h-3.5 mr-1 text-gray-500" />
              <span className="font-medium">{property.squareFeet}</span>
            </span>
          </div>

          {/* Price */}
          <p className="text-base font-bold text-primary-600">
            ${property.pricePerMonth.toFixed(0)}
            <span className="text-gray-500 text-xs font-normal"> /mo</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardCompact;
