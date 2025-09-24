import { Bounce } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const STYLE = {
  page404_container: `page404-container ralative flex h-full w-full cursor-pointer flex-col items-center justify-center overflow-hidden text-white select-none`,

  page404_ract: `page404-ract lg:text-10xl flex gap-2 p-20 text-6xl font-bold sm:text-8xl md:text-9xl`,
};

const MotionSpan = ({ text, delay }) => (
  <motion.span
    initial={{ y: 10, textShadow: "5px 5px 5px rgb(0, 0, 0)" }}
    animate={{
      y: [50, 0, 50],
      x: [50, 0, 50],
      textShadow: [
        "10px 10px 10px rgb(0, 0, 0)",
        "30px 30px 50px rgb(0, 0, 0)",
        "10px 10px 10px rgb(0, 0, 0)",
      ],
    }}
    transition={{ delay: delay, duration: 3, repeat: Infinity }}
    className="block"
  >
    {text}
  </motion.span>
);

// Page404
const Page404 = () => {
  const navigate = useNavigate();
  return (
    <section className={STYLE.page404_container}>
      <motion.div
        initial={{
          rotateX: 60,
          rotateY: 0,
          rotateZ: 45,
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={STYLE.page404_ract}
      >
        <Bounce cascade damping={0.2} triggerOnce={true}>
          <MotionSpan text="4" delay={1.5} />
          <MotionSpan text="0" delay={1.8} />
          <MotionSpan text="4" delay={2.1} />
          <MotionSpan text="P" delay={2.4} />
          <MotionSpan text="A" delay={2.7} />
          <MotionSpan text="G" delay={3.0} />
          <MotionSpan text="E" delay={3.3} />
        </Bounce>
      </motion.div>
      <div className="Page404-btn absolute bottom-20 cursor-pointer">
        <Button label="HomePage" onClick={() => navigate("/")} />
      </div>
    </section>
  );
};

export default Page404;
