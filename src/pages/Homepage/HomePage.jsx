import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, easeInOut, easeIn } from "framer-motion";

import HomepageCarousel from "./HomepageCarousel";
import Featured from "../../components/Featured/Featured";
import SortProduct from "../../components/SortProduct/SortProduct";
import Button from "../../components/Button/Button";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: easeIn }}
      className="homepage"
    >
      <HomepageCarousel>
        <Button
          label="Enter the mall"
          size="lg"
          onClick={() => navigate("/products")}
        />
      </HomepageCarousel>
      <Featured />
      <SortProduct />
    </motion.section>
  );
};

export default HomePage;
