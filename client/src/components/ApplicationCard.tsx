import { Mail, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const ApplicationCard = ({
  application,
  userType,
  children,
}: ApplicationCardProps) => {
  const [imgSrc, setImgSrc] = useState(
    application.property.photoUrls?.[0] || "/placeholder.jpg"
  );

  const statusConfig = {
    Approved: {
      color: "bg-green-100 text-green-700",
      icon: "🎉",
    },
    Denied: {
      color: "bg-red-100 text-red-700",
      icon: "❌",
    },
    Pending: {
      color: "bg-yellow-100 text-yellow-700",
      icon: "⏳",
    },
  };

  const statusStyle = statusConfig[application.status as keyof typeof statusConfig];
  const contactPerson = userType === "manager" ? application.tenant : application.manager;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 mb-6">
      <div className="flex flex-col lg:flex-row items-start lg:items-stretch justify-between p-6 gap-8">
        {/* Property Info Section */}
        <div className="flex flex-col lg:flex-row gap-6 w-full lg:w-auto">
          <div className="relative overflow-hidden rounded-xl w-full lg:w-[240px] h-[180px]">
            <Image
              src={imgSrc}
              alt={application.property.name}
              fill
              className="object-cover transform hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 240px"
              onError={() => setImgSrc("/placeholder.jpg")}
            />
          </div>
          
          <div className="flex flex-col justify-between flex-grow">
            <div>
              <h2 className="text-2xl font-display font-bold mb-3 text-gray-900">
                {application.property.name}
              </h2>
              <div className="flex items-center mb-3 text-gray-600">
                <MapPin className="w-5 h-5 mr-2 text-primary-500" />
                <span>{`${application.property.location.city}, ${application.property.location.country}`}</span>
              </div>
            </div>
            <div className="text-2xl font-bold text-primary-600">
              ${application.property.pricePerMonth}
              <span className="text-sm font-normal text-gray-500"> / month</span>
            </div>
          </div>
        </div>

        {/* Status Section */}
        <div className="flex flex-col justify-between w-full lg:w-72 py-2 bg-gray-50 rounded-xl p-4">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600 font-medium">Status</span>
              <span className={`px-4 py-1.5 ${statusStyle.color} rounded-full text-sm font-medium`}>
                {statusStyle.icon} {application.status}
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Start Date</span>
                <span className="font-medium">{new Date(application.lease?.startDate).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">End Date</span>
                <span className="font-medium">{new Date(application.lease?.endDate).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Next Payment</span>
                <span className="font-medium text-primary-600">{new Date(application.lease?.nextPaymentDate).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Person Section */}
        <div className="flex flex-col w-full lg:w-80 bg-gray-50 rounded-xl p-4">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {userType === "manager" ? "Tenant Details" : "Manager Details"}
            </h3>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-primary-100">
              <Image
                src="/landing-i1.png"
                alt={contactPerson.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex-grow space-y-3">
              <div className="font-semibold text-gray-900">{contactPerson.name}</div>
              <a href={`tel:${contactPerson.phoneNumber}`} 
                 className="text-sm flex items-center text-gray-600 hover:text-primary-600 transition-colors">
                <PhoneCall className="w-4 h-4 mr-2" />
                {contactPerson.phoneNumber}
              </a>
              <a href={`mailto:${contactPerson.email}`}
                 className="text-sm flex items-center text-gray-600 hover:text-primary-600 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                {contactPerson.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {children && (
        <>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <div className="p-6">
            {children}
          </div>
        </>
      )}
    </div>
  );
};

export default ApplicationCard;
