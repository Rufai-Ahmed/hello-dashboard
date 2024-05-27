"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { useState } from "react";

const Modal = () => {
  const [img, setImg] = useState<string | StaticImport | undefined>(undefined);

  const addImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const uri = URL.createObjectURL(file);
      setImg(uri);
    }
  };

  return (
    <>
      <button
        className="btn bg-white text-[#a72036] border border-gray-50 shadow-md"
        onClick={() => document.getElementById("my_modal3")?.showModal()}
      >
        Add Dish
      </button>
      <dialog id="my_modal3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <div>
              <div className="label-text text-[16px] font-semibold">Title</div>
              <input
                placeholder="Title"
                type="text"
                className="input border input-bordered h-[40px] w-full mt-2"
                name="title"
              />
            </div>

            <div>
              <div className="label-text text-[16px] font-semibold mt-5">
                Price
              </div>
              <input
                placeholder="Price"
                type="text"
                className="input h-[40px] border input-bordered w-full my-2"
                name="price"
              />
            </div>

            <div>
              <div className="label-text text-[16px] font-semibold mt-5">
                Description
              </div>
              <input
                placeholder="Description"
                type="text"
                className="input h-[40px] border input-bordered w-full my-2"
                name="Description"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="label-text text-[16px] font-semibold mt-5">
                Upload Image
              </div>
              <input
                onChange={addImage}
                type="file"
                accept="image/png, image/jpg"
                className="hidden"
                id="img"
              />
              <label htmlFor="img" className="btn h-[40px]">
                Upload
              </label>
            </div>
            {img && (
              <div className="mt-4">
                <Image
                  src={img}
                  alt="Uploaded image"
                  width={500}
                  height={500}
                />
              </div>
            )}

            <div className="w-full flex justify-end mt-5">
              <button className="btn ">Submit</button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
