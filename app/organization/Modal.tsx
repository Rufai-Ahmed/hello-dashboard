"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = () => {
  const handleAction = (formData: FormData) => {
    const name = formData.get("name");
    const address = formData.get("address");
    const number = formData.get("number");

    const data = { name, address, number, id: Date.now() };

    fetch("http://localhost:4001/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res: Response) => {
        toast(`${name} organization created successfully`);
        document.getElementById("orgModal")?.close();
      })
      .catch((reason: any) => {
        toast(`Error encountered creating organization`);
      });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme="light"
      />

      <button
        className="btn bg-white text-[#a72036] border border-gray-50 shadow-md"
        onClick={() => document.getElementById("orgModal")?.showModal()}
      >
        Add Organization
      </button>
      <dialog id="orgModal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form action={handleAction}>
            <div>
              <label className="label-text text-[16px] font-semibold">
                Name
              </label>
              <input
                placeholder="Name"
                type="text"
                className="input border input-bordered h-[40px] w-full my-2"
                name="name"
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
              />
            </div>

            <div className="w-full flex justify-end mt-5">
              <button className="btn ">Submit</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
