import type { FC } from "react";
import { Box } from "@mui/material";
import Text from "../../components/Text";
import { Board } from "../../components/Board";
import {
  categoriesContainerSx,
  categoriesListContainerSx,
  containerSx,
  productListContainerSx,
  recomendedContainerSx,
  textContainerSx,
} from "./style";
import { CategoryCard } from "../../components/CategoryCard";
import { menu } from "../../components/Selector/menu";
import { ProductCard } from "../../components/ProductCard";
import { product } from "../../components/ProductCard/product";

export const Home: FC = () => {
  const items = Array.from({ length: 9 }, (_, i) => i + 1);
  return (
    <Box sx={containerSx}>
      <Board />
      <Box sx={categoriesContainerSx}>
        <Box sx={textContainerSx}>
          <Text preset="h3" text="Shop By Category" />
          <Text
            preset="support"
            text="Find exactly what you're looking for in our organised categories"
          />
        </Box>
        <Box sx={categoriesListContainerSx}>
          {menu.map((option, i) => (
            <CategoryCard key={i} label={option.name} icon={option.image} />
          ))}
        </Box>
      </Box>
      <Box sx={recomendedContainerSx}>
        <Box sx={textContainerSx}>
          <Text preset="h3" text="Recommended Listings" />
          <Text
            preset="support"
            text="Discover the most popular items in your area, based on your interests and search history. "
          />
        </Box>
        <Box sx={productListContainerSx}>
          {items.map((_, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
