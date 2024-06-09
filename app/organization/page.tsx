// "use client";
import React, { use, useEffect } from "react";
import Modal from "./Modal";
import { getOrganization } from "./API";
import TableRow from "./TableRow";
import MemberModal from "./MembersModal";

const page = () => {
  const getOrganizations: Array<iOrganization> = use(getOrganization());

  // useEffect(() => {}, [getOrganizations]);

  return (
    <div className="">
      <Modal />

      <table className="table mt-10">
        <thead>
          <tr>
            <th>Name and ID</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Number of Members</th>
            <th>Add Member</th>
          </tr>
        </thead>

        <tbody className="border-[5px]">
          {getOrganizations.map((row: iOrganization, i: number) => (
            <TableRow id={row.id} key={i} {...row} />
          ))}
        </tbody>

        {getOrganizations.map((el: iOrganization, i: number) => (
          <MemberModal key={i} id={el.id} />
        ))}
      </table>
    </div>
  );
};

export default page;
