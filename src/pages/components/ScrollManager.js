

// import { useScroll } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { gsap } from "gsap";
// import { useEffect, useRef } from "react";

// const ScrollManager = (props) => {
//   const { section, onSectionChange } = props;

//   const data = useScroll();
//   const lastScroll = useRef(0);
//   const isAnimating = useRef(false);
//   const sections = data.pages
//   data.fill.classList.add("top-0");
//   data.fill.classList.add("absolute");

//   useEffect(() => {
//     gsap.to(data.el, {
//       duration: 1,
//       scrollTop: section * data.el.clientHeight,
//       onStart: () => {
//         isAnimating.current = true;
//       },
//       onComplete: () => {
//         isAnimating.current = false;
//       },
//     });
//   }, [section]);

//   useFrame(() => {
//     if (isAnimating.current) {
//       lastScroll.current = data.scroll.current;
//       return;
//     }

//     const curSection = Math.floor(data.scroll.current * sections);
//     const prevSection = Math.floor(lastScroll.current * sections);
// // console.log(curSection, prevSection)
//     if (curSection !== prevSection) {
//       onSectionChange(curSection);
//     }

//     lastScroll.current = data.scroll.current;
//   });

//   return null;
// };

// export default ScrollManager

import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const ScrollManager = (props) => {
  const { section, onSectionChange } = props;

  const data = useScroll();
  const lastScroll = useRef(data.scroll.current);
  const isAnimating = useRef(false);

  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");

  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
    console.log(section)
  }, [section]);

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;
      return;
    }

    const curSection = Math.floor(data.scroll.current * data.pages);
    const prevSection = Math.floor(lastScroll.current * data.pages)
    if (data.scroll.current > lastScroll.current && curSection !== prevSection) {
      onSectionChange(curSection);
    } 
    if (data.scroll.current > lastScroll.current && curSection === 0) {
      onSectionChange(1);
    } 
    if (
      data.scroll.current < lastScroll.current && curSection !== prevSection
    ) {
      onSectionChange(curSection);
    }
    lastScroll.current = data.scroll.current;
  });

  return null;
};

export default ScrollManager