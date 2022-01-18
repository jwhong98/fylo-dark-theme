import React from "react";
import TestimonialCard from "../TestimonialCard";
import { testOne, testThree, testTwo } from "./testimonialData";
import { Test, Icon } from "./TestimonialsElements";
import img from "../../images/bg-quotes.png";

const Testimonials = () => {
  return (
    <Test>
      <Icon src={img} />
      <TestimonialCard {...testOne} />
      <TestimonialCard {...testTwo} />
      <TestimonialCard {...testThree} />
    </Test>
  );
};

export default Testimonials;
