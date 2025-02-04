"use client";
import styles from "./page.module.css";
import { useRef, useEffect, useState } from "react";
import WelderSVG from "../SVGs/WelderSVG";
import AdminUserLinks from "../AdminUserLinks/AdminUserLinks";

const TitleLineWelderSVG = () => {
  const [hoverline, setHoverline] = useState(false);

  const path = useRef<HTMLDivElement>(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId = null;

  useEffect(() => {
    setPath(progress);
  }, []);

  const setPath = (progress: number) => {
    const width = window.innerWidth * 0.7;
    path.current?.setAttributeNS(
      null,
      "d",
      `M0 250 Q${width * x} ${250 + progress}, ${width} 250`
    );
  };

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const manageMouseEnter = () => {
    if (reqId) {
      cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  const manageMouseMove = (e) => {
    setHoverline((prev) => true);
    const { movementY, clientX } = e;
    const pathBound = path.current?.getBoundingClientRect();
    x = (clientX - pathBound.left) / pathBound.width;
    progress += movementY;
    setPath(progress);
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time += 0.2;
    setPath(newProgress);
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };
  return (
    <>
      <div className="  flex items-center justify-around w-[80%]">
        {!hoverline ? (
          <ul className=" marker:text-white list-disc text-lg ">
            <li className=" ">
              Are you wondering where this or that part is used ?
            </li>
            <li>Are you interested in common mistakes ?</li>
            <li>
              Are you wondering what the purpose of the part is and where the
              welding is important ?
            </li>
            <li> and more ?</li>
            <li className=" marker:text-red-700 list-disc font-semibold">
              <span className=" text-[#E20816]">Okay</span> let's hover on white
              line and start your journey.
            </li>
          </ul>
        ) : (
          <AdminUserLinks />
        )}

        <WelderSVG anim={hoverline} />
      </div>
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.line}>
            <div
              onMouseEnter={() => {
                manageMouseEnter();
              }}
              onMouseMove={(e) => {
                manageMouseMove(e);
              }}
              onMouseLeave={() => {
                manageMouseLeave();
              }}
              className={styles.box}
            ></div>
            <svg>
              <path ref={path}></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleLineWelderSVG;
