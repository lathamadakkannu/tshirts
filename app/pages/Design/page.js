"use client"

import React, { useState ,useRef } from "react";
import Image from "next/image";
import { IoIosCloudUpload } from "react-icons/io";
import { RxText } from "react-icons/rx";
import { FaImage } from "react-icons/fa";
import { IoWater } from "react-icons/io5";
import { IoText } from "react-icons/io5";
import Navbar from "@/app/component/Navbar/page";
import Footer from "@/app/component/Footer/page";

import { MdOutlineKeyboardArrowLeft,  MdOutlineKeyboardArrowRight} from "react-icons/md";

const Designpage = () => {

  const designImages = [
    {label:"",src:"/image/design.png"},
    { label: "", src: "/image/Design1.png" },
    { label: "", src: "/image/Design2.png" },
    { label: "", src: "/image/Design3.png" },
    { label: "", src: "/image/Design4.png" },
  ];
   // States
   const [selectedImage, setSelectedImage] = useState(designImages[0].src); // Default image
   const [history, setHistory] = useState([designImages[0].src]); // History of selected images
   const [currentIndex, setCurrentIndex] = useState(0); // Pointer for selected image in the list
   const pointer = useRef(0); // Tracks position in the history
 
   // Update image and maintain history
   const updateImage = (src, index) => {
     const newHistory = history.slice(0, pointer.current + 1); // Remove future states if any
     setHistory([...newHistory, src]); // Add new selection to history
     pointer.current = newHistory.length; // Update pointer
     setSelectedImage(src);
     setCurrentIndex(index);
   };
 
   // Undo functionality
   const handleUndo = () => {
     if (pointer.current > 0) {
       pointer.current -= 1;
       setSelectedImage(history[pointer.current]);
     }
   };
 
   // Redo functionality
   const handleRedo = () => {
     if (pointer.current < history.length - 1) {
       pointer.current += 1;
       setSelectedImage(history[pointer.current]);
     }
   };
 
   // Navigate to previous image
   const handleLeftClick = () => {
     const prevIndex = (currentIndex - 1 + designImages.length) % designImages.length;
     updateImage(designImages[prevIndex].src, prevIndex);
   };
 
   // Navigate to next image
   const handleRightClick = () => {
     const nextIndex = (currentIndex + 1) % designImages.length;
     updateImage(designImages[nextIndex].src, nextIndex);
   };

  return (
    <div className="design">
      <div className="designContainer">
        <div className="designContainerContent">
          <Navbar />

           <div className="imageContainer">
      <div className="designSideContainer">
        <div className="directionContainer">
          <div className="directions" onClick={handleUndo}>
            <Image src="/image/Undo.png" alt="Undo" width={40} height={30} />
            <p>Undo</p>
          </div>
          <div className="directions" onClick={handleRedo}>
            <Image src="/image/Redo.png" alt="Redo" width={40} height={30} />
            <p>Redo</p>
          </div>
        </div>

        <div className="designPosition">
          {designImages.map(({ label, src }, index) => (
            <div
              key={index}
              className="smallImgDesigns"
              onClick={() => updateImage(src, index)}
            >
              <Image src={src} alt={label} width={40} height={40} />
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="backgroundImage">
        <div className="centeredImage">
          <Image
            src={selectedImage}
            alt="Selected Design"
            width={500}
            height={500}
            layout="intrinsic"
          />
          <MdOutlineKeyboardArrowLeft
            className="arrowIcon leftArrow"
            onClick={handleLeftClick}
          />
          <MdOutlineKeyboardArrowRight
            className="arrowIcon rightArrow"
            onClick={handleRightClick}
          />
        </div>

        <div className="imageContents">
          <div className="homeBtn">
            <button className="btn">Save & Share</button>
            <button className="btn">Get Price</button>
          </div>
        </div>
      </div>
    </div>
</div>


        <div className="thingsContainer">
          {/* Additional icons for Upload, Add Text, Add Image, etc. */}
          <div className="things">
            <div className="icons">
              <IoIosCloudUpload />
            </div>
            <div className="iconsName">
              <p>Upload</p>
            </div>
          </div>
          <div className="things">
            <div className="icons">
              <RxText />
            </div>
            <div className="iconsName">
              <p>Add Text</p>
            </div>
          </div>
          <div className="things">
            <div className="icons">
              <FaImage />
            </div>
            <div className="iconsName">
              <p>Add Image</p>
            </div>
          </div>
          <div className="things">
            <div className="icons">
              <IoWater />
            </div>
            <div className="iconsName">
              <p>Watermark</p>
            </div>
          </div>
          <div className="things">
            <div className="icons">
              <IoText />
            </div>
            <div className="iconsName">
              <p>Text</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="contentContainer">
          <div className="contents">
            <h3>Softstyle Jersey T-shirt </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor incididunt ut labore dolore. adipiscing elit, sed
              do eiusmod tempor consectetur.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed eiusmod tempor incididunt ut
              labore dolore.adipiscing elit, sed do eiusmod tempor consectetur
              sed eiusmod tempor incididunt ut
              labore dolore.adipiscing elit, sed do eiusmod tempor consectetur
            </p>
          </div>

          <div className="contents">
            <h3>Size & Fit Guide</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor incididunt ut labore dolore. adipiscing elit, sed
              do eiusmod tempor consectetur.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed eiusmod tempor incididunt ut
              labore dolore.adipiscing elit, sed do eiusmod tempor consectetur
              sed eiusmod tempor incididunt ut
              labore dolore.adipiscing elit, sed do eiusmod tempor consectetur
            </p>
          </div>

          <div className="contents">
            <h3>Shipping</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor incididunt ut labore dolore. adipiscing elit, sed
              do eiusmod tempor consectetur.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed eiusmod tempor incididunt ut
              labore dolore.adipiscing elit, sed do eiusmod tempor consectetur
              sed eiusmod tempor incididunt ut
              labore dolore.adipiscing elit, sed do eiusmod tempor consectetur
            </p>
          </div>

          <div className="contents">
            <h3>More Details</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedei usmod tempor incididunt ut labore dolore. adipiscing elit, sed
              do eiusmod tempor consectetur.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed eiusmod tempor incididunt ut
              labore dolore.adipiscing elit, sed do eiusmod tempor consectetur
              sed eiusmod tempor incididunt ut
              labore dolore.adipiscing elit, sed do eiusmod tempor consectetur
            </p>
          </div>
        </div>

        <div className="buySection">
          <h2>Buy More, Save More</h2>
          <div className="cardContainer">
            <div className="cardContents">
              <div className="cardsDemo">
                <div className="cardImg">
                  <Image
                    src="/image/designCollection.png"
                    alt="design"
                    width={250}
                    height={250}
                  ></Image>
                </div>
                <div className="cardDetailsDemo">
                  <p>Midweight 50/50</p>
                  <p> pullover Hoodie</p>
                </div>
                <div className="cartContainers">
                  <p>Add to Cart</p>
                </div>
              </div>
            </div>

            <div className="cardContents">
              <div className="cardsDemo">
                <div className="cardImg">
                  <Image
                    src="/image/designCollection.png"
                    alt="design"
                    width={250}
                    height={250}
                  ></Image>
                </div>
                <div className="cardDetailsDemo">
                  <p>Midweight 50/50</p>
                  <p> pullover Hoodie</p>
                </div>
                <div className="cartContainers">
                  <p>Add to Cart</p>
                </div>
              </div>
            </div>

            <div className="cardContents">
              <div className="cardsDemo">
                <div className="cardImg">
                  <Image
                    src="/image/designCollection.png"
                    alt="design"
                    width={250}
                    height={250}
                  ></Image>
                </div>
                <div className="cardDetailsDemo">
                  <p>Midweight 50/50</p>
                  <p> pullover Hoodie</p>
                </div>
                <div className="cartContainers">
                  <p>Add to Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Designpage;


