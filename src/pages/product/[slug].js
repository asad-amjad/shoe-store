import React from "react";
import ReactMarkdown from "react-markdown";

import ProductDetailsCarousel from "../../../components/ProductDetailsCarousel";
import RelatedProducts from "../../../components/RelatedProducts";
import Wrapper from "../../../components/Wrapper";

import "react-toastify/dist/ReactToastify.css";
import { IoMdHeartEmpty } from "react-icons/io";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column  */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel images={[]} />
          </div>

          {/* right column start */}
          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              TITLE
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="text-lg font-semibold mb-5">subtitle</div>

            {/* PRODUCT PRICE */}
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">MRP : &#36;p.price</p>

              <>
                <p className="text-base  font-medium line-through">
                  &#36; original_price
                </p>
                <p className="ml-auto text-base font-medium text-green-500">
                  20 % off
                </p>
              </>
            </div>

            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

            {/* PRODUCT SIZE RANGE START */}
            <div className="mb-10">
              {/* HEADING START */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* HEADING END */}

              {/* SIZE START */}
              <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                <div
                  className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer`}
                >
                  UK-6
                </div>
                <div
                  className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer`}
                >
                  UK-7
                </div>
                <div
                  className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer`}
                >
                  UK-8
                </div>{" "}
                <div
                  className={`border rounded-md text-center py-3 font-medium hover:border-black  cursor-not-allowed bg-black/[0.1] opacity-50`}
                >
                  UK-8
                </div>
              </div>
              {/* SIZE END */}

              {/* SHOW ERROR START */}

              <div className="text-red-600 mt-1">
                Size selection is required
              </div>

              {/* SHOW ERROR END */}
            </div>
            {/* PRODUCT SIZE RANGE END */}

            {/* ADD TO CART BUTTON START */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to Cart
            </button>
            {/* ADD TO CART BUTTON END */}

            {/* WHISHLIST BUTTON START */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* WHISHLIST BUTTON END */}

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="markdown text-md mb-5">
                <ReactMarkdown>description</ReactMarkdown>
              </div>
            </div>
          </div>
          {/* right column end */}
        </div>

        <RelatedProducts />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
