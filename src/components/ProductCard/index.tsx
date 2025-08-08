import { useState, type FC } from "react";
import { Box } from "@mui/material";

import Text from "../Text";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./ProductCard.css";
import { Pagination } from "swiper/modules";
import { HouseIcon } from "../../assets/icons/House";
import { BedroomIcon } from "../../assets/icons/Bedroom";
import { BathroomIcon } from "../../assets/icons/Bathroom";
import { ToiletIcon } from "../../assets/icons/Toilet";
import { PriceIcon } from "../../assets/icons/Price";
import { StartIcon } from "../../assets/icons/Start";
import { LocationSmallIcon } from "../../assets/icons/LocationSmall";
import { DateIcon } from "../../assets/icons/Date";
import { useNavigate } from "react-router-dom";
import { LikeIcon } from "../../assets/icons/Like";
import { ShareIcon } from "../../assets/icons/Share";
import { CameraIcon } from "../../assets/icons/Camera";
import { VideoIcon } from "../../assets/icons/Video";

interface IProductCard {
  images: string[];
  price: string;
  rating: number;
  title: string;
  location: string;
  posted: string;
  type: string;
  beds: number;
  baths: number;
  toilets: number;
}

interface Props {
  product: IProductCard;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState<boolean>(false);
  return (
    <Box
      sx={{
        width: {
          xs: "80%",
          sm: 300,
          md: 350,
          lg: 400,
        },
        borderRadius: "5px",
        overflow: "hidden",
        border: "1px solid #eee",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
        fontFamily: "Montserrat, sans-serif",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        pb: "16px",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Swiper
          modules={[Pagination]}
          loop={true}
          spaceBetween={5}
          pagination={{ clickable: true }}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {product.images.map((slide) => (
            <SwiperSlide key={slide}>
              <Box
                onClick={() => navigate("/soon")}
                component="img"
                src={slide}
                alt={"Product"}
                sx={{
                  cursor: "pointer",
                  width: "100%",
                  height: {
                    xs: 180,
                    sm: 240,
                    md: 280,
                    lg: 319,
                  },
                  objectFit: "cover",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Box
          sx={{
            position: "absolute",
            top: 16,
            left: 8,
            background: "#fff",
            borderRadius: "20px",
            zIndex: 10,
            paddingY: "2px",
            paddingX: "6px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Text preset={"sxReg"} text="Verified Seller" />
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            display: "flex",
            gap: 1,
            zIndex: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              width: "30px",
              height: "30px",
              borderRadius: "20px",
              backgroundColor: "#FFFFFFB2",
              opacity: 0.7,
            }}
          >
            <ShareIcon />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              width: "30px",
              height: "30px",
              borderRadius: "20px",
              backgroundColor: "#FFFFFFB2",
              opacity: 0.7,
            }}
            onClick={() => setIsLiked((prev) => !prev)}
          >
            <LikeIcon fill={isLiked ? "red" : "#4B4646"} />
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: 15,
            right: 8,
            display: "flex",
            zIndex: 10,
            backgroundColor: "#000001",
            opacity: 0.54,
            padding: "2px",
            gap: "4px",
            borderRadius: "4px",
          }}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            padding={"2px"}
            gap={"2px"}
          >
            <CameraIcon />
            <Text preset="sxReg" text="4" style={{ color: "white" }} />
          </Box>
          <Box
            display={"flex"}
            padding={"2px"}
            gap={"2px"}
            alignItems={"center"}
          >
            <VideoIcon />
            <Text preset="sxReg" text="1" style={{ color: "white" }} />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          px: "16px",
        }}
      >
        <Box display={"flex"} flexDirection={"column"} gap={"8px"}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Text preset="pReg">{product.price}</Text>
              <PriceIcon />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "3px",
              }}
            >
              <div
                onClick={() => navigate("/soon")}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  textTransform: "none",
                  borderRadius: "20px",
                  padding: "0px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  backgroundColor: "#FF7E70",
                  color: "white",
                }}
              >
                <Text
                  preset="smallReg"
                  text="Contact"
                  style={{ color: "white" }}
                />
              </div>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                }}
              >
                <StartIcon />
                <Text preset="smallReg">{product.rating.toFixed(2)}</Text>
              </Box>
            </Box>
          </Box>

          <Box display={"flex"} flexDirection={"column"} gap={"8px"}>
            <Text preset="support">{product.title}</Text>

            <Box
              sx={{
                display: "flex",
                gap: "16px",
              }}
            >
              <Box sx={{ display: "flex", gap: "3px" }}>
                <LocationSmallIcon />
                <Text preset="smallReg" style={{ color: "#797474" }}>
                  {product.location}
                </Text>
              </Box>
              <Box sx={{ display: "flex", gap: "3px" }}>
                <DateIcon />
                <Text preset="smallReg" style={{ color: "#797474" }}>
                  {product.posted}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <HouseIcon />
            <Text preset="small">{product.type}</Text>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <BedroomIcon />
            <Text preset="small">{product.beds}</Text>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <BathroomIcon />
            <Text preset="small">{product.baths}</Text>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <ToiletIcon />
            <Text preset="small">{product.toilets}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
