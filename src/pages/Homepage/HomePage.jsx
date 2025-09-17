import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, easeInOut, easeIn } from "framer-motion";
import Button from "../../components/Button/Button";
import HomepageCarousel from "./HomepageCarousel";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: easeIn }}
      className="homepage"
    >
      <HomepageCarousel />

      <div className="absolute bottom-5 left-1/2 z-100 -translate-x-1/2 -translate-y-1/2 md:bottom-10">
        <Button
          label="Enter the mall"
          size="lg"
          onClick={() => navigate("/products")}
        />
      </div>
    </motion.section>
  );
};

export default HomePage;
