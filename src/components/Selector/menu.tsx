import vehicleImage from "../../assets/images/category/vehicle.png";
import propertyImage from "../../assets/images/category/property.png";
import phoneImage from "../../assets/images/category/phones.png";
import gadgetImage from "../../assets/images/category/gadget.png";
import homeImage from "../../assets/images/category/home.png";
import careImage from "../../assets/images/category/care.png";
import clothesImage from "../../assets/images/category/clothes.png";
import sportsImage from "../../assets/images/category/sports.png";
import serviceImage from "../../assets/images/category/service.png";
import jobImage from "../../assets/images/category/job.png";
import jobsImage from "../../assets/images/category/jobs.png";
import babyImage from "../../assets/images/category/baby.png";
import petsImage from "../../assets/images/category/pets.png";
import foodImage from "../../assets/images/category/food.png";
import businessImage from "../../assets/images/category/business.png";
import repairImage from "../../assets/images/category/repair.png";

import type { ReactNode } from "react";
import { VehicleIcon } from "../../assets/icons/category/vehicle";
import { PropertyIcon } from "../../assets/icons/category/property";
import { PhoneIcon } from "../../assets/icons/category/phone";
import { GadgetIcon } from "../../assets/icons/category/gadget";
import { HomeIcon } from "../../assets/icons/category/home";
import { CareIcon } from "../../assets/icons/category/personalCare";
import { ClosthingIcon } from "../../assets/icons/category/clothing";
import { SportsIcon } from "../../assets/icons/category/sports";
import { ServicesIcon } from "../../assets/icons/category/services";
import { JobIcon } from "../../assets/icons/category/jobSeeking";
import { JobsIcon } from "../../assets/icons/category/jobs";
import { BabiesIcon } from "../../assets/icons/category/babies";
import { PetsIcon } from "../../assets/icons/category/pets";
import { FoodIcon } from "../../assets/icons/category/food";
import { BusinessIcon } from "../../assets/icons/category/business";
import { RepairIcon } from "../../assets/icons/category/repair";

interface ISubMenuOption {
  name: string;
  icon: ReactNode;
}

interface IMenuOption {
  name: string;
  image: string;
  icon: ReactNode;
  subMenu: ISubMenuOption[];
}

export const menu: IMenuOption[] = [
  {
    name: "Vehicle",
    image: vehicleImage,
    icon: <VehicleIcon />,
    subMenu: [
      {
        name: "All Vehicles",
        icon: <></>,
      },
      {
        name: "Cars",
        icon: <></>,
      },
      {
        name: "Passenger Busses",
        icon: <></>,
      },
      {
        name: "Construction Machinery",
        icon: <></>,
      },
      {
        name: "Motorbikes & Scooters",
        icon: <></>,
      },
      {
        name: "Trucks & Trailers",
        icon: <></>,
      },
      {
        name: "Auto Parts & Accessories",
        icon: <></>,
      },
      {
        name: "Boats & Marine",
        icon: <></>,
      },
      {
        name: "Car Services",
        icon: <></>,
      },
    ],
  },
  {
    name: "Property",
    image: propertyImage,
    icon: <PropertyIcon />,
    subMenu: [
      {
        name: "All Properties",
        icon: <></>,
      },
      {
        name: "New Construction",
        icon: <></>,
      },
      {
        name: "Houses & Flats for Rent",
        icon: <></>,
      },
      {
        name: "Houses & Flats for Sale",
        icon: <></>,
      },
      {
        name: "Land & Plots for Rent",
        icon: <></>,
      },
      {
        name: "Land & Plots for Sale",
        icon: <></>,
      },
      {
        name: "Commercial Properties for Rent ",
        icon: <></>,
      },
      {
        name: "Commercial Properties for Sale",
        icon: <></>,
      },
      {
        name: "Event Spaces & Shared Offices",
        icon: <></>,
      },
      {
        name: "Short-Term Rentals / Short-Let",
        icon: <></>,
      },
    ],
  },
  {
    name: "Phones & Tables",
    image: phoneImage,
    icon: <PhoneIcon />,
    subMenu: [
      {
        name: "All Phones & Tables",
        icon: <></>,
      },
      {
        name: "Mobile Phones",
        icon: <></>,
      },
      {
        name: "Phones, Tablets & Accessories",
        icon: <></>,
      },
      {
        name: "Wearable Electronic Devices",
        icon: <></>,
      },
      {
        name: "Tablet Devices",
        icon: <></>,
      },
    ],
  },
  {
    name: "Gadget & Devices",
    image: gadgetImage,
    icon: <GadgetIcon />,
    subMenu: [
      {
        name: "All Gadgets & Devices",
        icon: <></>,
      },
      {
        name: "Electronics Accessories",
        icon: <></>,
      },
      {
        name: "Laptops & Computers",
        icon: <></>,
      },
      {
        name: "TV & Media Players",
        icon: <></>,
      },
      {
        name: "Audio & Music Equipment",
        icon: <></>,
      },
      {
        name: "Computer Accessories",
        icon: <></>,
      },
      {
        name: "Computer Hardware",
        icon: <></>,
      },
      {
        name: "Monitors & Screens",
        icon: <></>,
      },
      {
        name: "Headphones",
        icon: <></>,
      },
      {
        name: "Internet & Networking",
        icon: <></>,
      },
    ],
  },
  {
    name: "Home & Furniture",
    image: homeImage,
    icon: <HomeIcon />,
    subMenu: [
      {
        name: "All Home & Furniture",
        icon: <></>,
      },
      {
        name: "Furniture",
        icon: <></>,
      },
      {
        name: "Gardening Tools",
        icon: <></>,
      },
      {
        name: "Decor & Home Accessories",
        icon: <></>,
      },
      {
        name: "Home Appliances",
        icon: <></>,
      },
      {
        name: "Kitchen Appliances",
        icon: <></>,
      },
      {
        name: "Pots, Pans & Utensils",
        icon: <></>,
      },
      {
        name: "Cleaning Supplies",
        icon: <></>,
      },
    ],
  },
  {
    name: "Personal Care",
    image: careImage,
    icon: <CareIcon />,
    subMenu: [
      {
        name: "All Personal Care",
        icon: <></>,
      },
      {
        name: "Bath & Body",
        icon: <></>,
      },
      {
        name: "Perfumes & Colognes",
        icon: <></>,
      },
      {
        name: "Hair Care",
        icon: <></>,
      },
      {
        name: "Make-up",
        icon: <></>,
      },
      {
        name: "Sexual Wellness",
        icon: <></>,
      },
      {
        name: "Skincare",
        icon: <></>,
      },
      {
        name: "Tobacco Accessories",
        icon: <></>,
      },
      {
        name: "Grooming Tools",
        icon: <></>,
      },
      {
        name: "Vitamins & Supplements",
        icon: <></>,
      },
    ],
  },
  {
    name: "Clothing & Accessories",
    image: clothesImage,
    icon: <ClosthingIcon />,
    subMenu: [
      {
        name: "All Clothing & Accessories",
        icon: <></>,
      },
      {
        name: "Bags",
        icon: <></>,
      },
      {
        name: "Clothing",
        icon: <></>,
      },
      {
        name: "Fashion Accessories",
        icon: <></>,
      },
      {
        name: "Jewellery",
        icon: <></>,
      },
      {
        name: "Footwear",
        icon: <></>,
      },
      {
        name: "Watches",
        icon: <></>,
      },
      {
        name: "Wedding Wear & Accessories",
        icon: <></>,
      },
    ],
  },

  {
    name: "Sports, Art & Autdoors",
    image: sportsImage,
    icon: <SportsIcon />,
    subMenu: [
      {
        name: "All Sports, Arts & Outdoors",
        icon: <></>,
      },
      {
        name: "Arts & Crafts",
        icon: <></>,
      },
      {
        name: "Books & Games",
        icon: <></>,
      },
      {
        name: "Camping Gear",
        icon: <></>,
      },
      {
        name: "CDs & DVDs",
        icon: <></>,
      },
      {
        name: "Musical Instruments & Gear",
        icon: <></>,
      },
      {
        name: "Sports Equipment",
        icon: <></>,
      },
    ],
  },
  {
    name: "Professional Services",
    image: serviceImage,
    icon: <ServicesIcon />,
    subMenu: [
      {
        name: "All Professional Services",
        icon: <></>,
      },
      {
        name: "Car Services",
        icon: <></>,
      },
      {
        name: "Building & Trade Services",
        icon: <></>,
      },
      {
        name: "Chauffeur & Airport Transfer Services",
        icon: <></>,
      },
      {
        name: "Child Care & Education Services",
        icon: <></>,
      },
      {
        name: "Classes & Courses",
        icon: <></>,
      },
      {
        name: "Cleaning Services",
        icon: <></>,
      },
      {
        name: "Computer & IT Services",
        icon: <></>,
      },
      {
        name: "DJ & Entertainment Services",
        icon: <></>,
      },
      {
        name: "Fitness & Personal Training Services",
        icon: <></>,
      },
      {
        name: "Health & Beauty Services",
        icon: <></>,
      },
    ],
  },
  {
    name: "Job Seeking",
    image: jobImage,
    icon: <JobIcon />,
    subMenu: [
      {
        name: "All Job Seeking",
        icon: <></>,
      },
      {
        name: "Accounting & Finance CVs",
        icon: <></>,
      },
      {
        name: "Advertising & Marketing CVs",
        icon: <></>,
      },
      {
        name: "Arts & Entertainment CVs",
        icon: <></>,
      },
      {
        name: "Childcare & Babysitting CVs",
        icon: <></>,
      },
      {
        name: "Clerical & Administrative CVs",
        icon: <></>,
      },
      {
        name: "Computing & IT CVs",
        icon: <></>,
      },
      {
        name: "Construction & Skilled Trade CVs",
        icon: <></>,
      },
      {
        name: "Consulting & Strategy CVs",
        icon: <></>,
      },
      {
        name: "Customer Services CVs",
        icon: <></>,
      },
      {
        name: "Driver CVs",
        icon: <></>,
      },
    ],
  },
  {
    name: "Jobs",
    image: jobsImage,
    icon: <JobsIcon />,
    subMenu: [
      {
        name: "All Jobs",
        icon: <></>,
      },
      {
        name: "Accounting & Finance Jobs",
        icon: <></>,
      },
      {
        name: "Advertising & Marketing Jobs",
        icon: <></>,
      },
      {
        name: "Arts & Entertainment Jobs",
        icon: <></>,
      },
      {
        name: "Childcare & Babysitting Jobs",
        icon: <></>,
      },
      {
        name: "Clerical & Administrative Jobs",
        icon: <></>,
      },
      {
        name: "Computing & IT Jobs",
        icon: <></>,
      },
      {
        name: "Construction & Skilled Trade Jobs",
        icon: <></>,
      },
      {
        name: "Consulting & Strategy Jobs",
        icon: <></>,
      },
      {
        name: "Customer Services Jobs",
        icon: <></>,
      },
      {
        name: "Driver Jobs",
        icon: <></>,
      },
    ],
  },
  {
    name: "Babies & Children",
    image: babyImage,
    icon: <BabiesIcon />,
    subMenu: [
      {
        name: "All Babies & Children",
        icon: <></>,
      },
      {
        name: "Baby & Children’s Accessories",
        icon: <></>,
      },
      {
        name: "Childcare Essentials",
        icon: <></>,
      },
      {
        name: "Children’s Clothing",
        icon: <></>,
      },
      {
        name: "Children’s Furniture",
        icon: <></>,
      },
      {
        name: "Children’s Safety Gear",
        icon: <></>,
      },
      {
        name: "Children’s Shoes",
        icon: <></>,
      },
      {
        name: "Maternity & Pregnancy",
        icon: <></>,
      },
      {
        name: "Playground Equipment",
        icon: <></>,
      },
      {
        name: "Pram & Stroller",
        icon: <></>,
      },
      {
        name: "Toys",
        icon: <></>,
      },
    ],
  },
  {
    name: "Pets & Animals",
    image: petsImage,
    icon: <PetsIcon />,
    subMenu: [
      {
        name: "All Pets & Animals",
        icon: <></>,
      },
      {
        name: "Pet Birds",
        icon: <></>,
      },
      {
        name: "Cats",
        icon: <></>,
      },
      {
        name: "Dogs",
        icon: <></>,
      },
      {
        name: "Fish",
        icon: <></>,
      },
      {
        name: "Pet Accessories",
        icon: <></>,
      },
      {
        name: "Other Animals",
        icon: <></>,
      },
    ],
  },
  {
    name: "Food & Farming",
    image: foodImage,
    icon: <FoodIcon />,
    subMenu: [
      {
        name: "All Food & Farming",
        icon: <></>,
      },
      {
        name: "Farming Equipment",
        icon: <></>,
      },
      {
        name: "Animal Feed & Seeds",
        icon: <></>,
      },
      {
        name: "Farm Animals",
        icon: <></>,
      },
      {
        name: "Food & Drinks",
        icon: <></>,
      },
    ],
  },
  {
    name: "Commercial Equipment",
    image: businessImage,
    icon: <BusinessIcon />,
    subMenu: [
      {
        name: "All Commercial Equipment",
        icon: <></>,
      },
      {
        name: "Heavy-Duty Ovens",
        icon: <></>,
      },
      {
        name: "Manufacturing Equipment",
        icon: <></>,
      },
      {
        name: "Manufacturing Materials & Tools",
        icon: <></>,
      },
      {
        name: "Medical Supplies & Equipment",
        icon: <></>,
      },
      {
        name: "Printing Equipment",
        icon: <></>,
      },
      {
        name: "Catering Equipment",
        icon: <></>,
      },
      {
        name: "Protective Gear",
        icon: <></>,
      },
      {
        name: "Beauty & Salon Equipment",
        icon: <></>,
      },
      {
        name: "Stage Lighting & Effects",
        icon: <></>,
      },
      {
        name: "Stationery",
        icon: <></>,
      },
      {
        name: "Store Equipment",
        icon: <></>,
      },
    ],
  },
  {
    name: "Repair & Construction",
    image: repairImage,
    icon: <RepairIcon />,
    subMenu: [
      {
        name: "All Repair & Construction",
        icon: <></>,
      },
      {
        name: "Construction Materials",
        icon: <></>,
      },
      {
        name: "Doors",
        icon: <></>,
      },
      {
        name: "Electrical Equipment",
        icon: <></>,
      },
      {
        name: "Electrical Hand Tools",
        icon: <></>,
      },
      {
        name: "Hand Tools",
        icon: <></>,
      },
      {
        name: "Measurement Tools",
        icon: <></>,
      },
      {
        name: "Plumbing Supplies",
        icon: <></>,
      },
      {
        name: "Solar Power Equipment",
        icon: <></>,
      },
      {
        name: "Windows",
        icon: <></>,
      },
      {
        name: "Other Repair & Construction Items",
        icon: <></>,
      },
    ],
  },
];
