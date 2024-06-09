"use client";
import { FC, useState } from "react";
import { toast } from "react-toastify";
import { getOrganization, updateMember } from "./API";

const AddMember: FC<{ id: number }> = ({ id }) => {
  const handleAction = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const getOrganizations: Array<iOrganization> = await getOrganization();

    const ID: number = +JSON.parse(localStorage.getItem("id")!);
    const getOrganizationIndex: number = getOrganizations.findIndex(
      (el: iOrganization) => el.id === ID
    );

    const name = formData.get("name");
    const address = formData.get("address");
    const number = formData.get("number");

    const data: any = { name, address, number, id: Date.now() };

    if (getOrganizationIndex !== -1) {
      getOrganizations[getOrganizationIndex]?.members?.push(data!);

      await updateMember(
        ID,
        name!,
        JSON.stringify(getOrganizations[getOrganizationIndex])
      );
    } else {
      toast(`Organization not found`);
    }
  };

  return (
    <>
      <button
        className="w-full btn text-[29px] bg-[#a72036] text-white z-50"
        onClick={() => {
          document.getElementById("addMember")?.showModal();
          localStorage.setItem("id", JSON.stringify(id));
        }}
      >
        +
      </button>
      <dialog id="addMember" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form onSubmit={handleAction}>
            <div>
              <label className="label-text text-[16px] font-semibold">
                Name
              </label>
              <input
                placeholder="Name"
                type="text"
                className="input border input-bordered h-[40px] w-full my-2"
                name="name"
                required
              />
            </div>

            <div>
              <label className="label-text text-[16px] font-semibold">
                Address
              </label>
              <input
                placeholder="Address"
                type="text"
                className="input h-[40px] border input-bordered w-full my-2"
                name="address"
                required
              />
            </div>

            <div>
              <label className="label-text text-[16px] font-semibold">
                Phone Number
              </label>
              <input
                placeholder="Phone Number"
                type="text"
                className="input h-[40px] border input-bordered w-full my-2"
                name="number"
                required
              />
            </div>

            <div className="w-full flex justify-end mt-5">
              <button type="submit" className="btn ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default AddMember;
