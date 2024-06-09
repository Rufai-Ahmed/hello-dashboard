import React, { FC, use } from "react";
import { getOrganization } from "./API";

const MemberModal: FC<iOrganization> = ({ id }) => {
  const getData: iOrganization | undefined = use(getOrganization()).find(
    (el: iOrganization) => el.id === id
  );

  return (
    <>
      <dialog id={`orgModal${id}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div>
            <h1 className="font-bold mb-5 text-[1.5vw] ">
              Organization Name: {getData?.name}
            </h1>

            <h1 className="font-bold mb-5 text-[30px] ">Members:</h1>

            {getData?.members?.map((el: iOrganization, i: number) => (
              <p key={i}>
                <span className="font-bold">{i + 1}.</span> {el.name} - ID:{" "}
                {el?.id}
              </p>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
};

export default MemberModal;
