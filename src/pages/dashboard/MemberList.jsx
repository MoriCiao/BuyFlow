import React, { memo, useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const STYLE = {
  member_list: `member-list flex h-full w-full flex-col gap-4 text-center`,

  member_list_search: `member-list-search h-[2rem] w-full rounded-md border indent-[0.5rem]`,
};

const tableHeaderMap = [
  { key: "no", label: "No." },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "role", label: "Role" },
];

const TableHeaders = () => (
  <thead>
    <tr className="border">
      {tableHeaderMap.map((header) => (
        <th key={header.key} className="border">
          {header.label}
        </th>
      ))}
    </tr>
  </thead>
);

const TableRow = memo(({ member, index }) => (
  <motion.tr
    whileHover={{
      backgroundColor: "#333533",
      color: "#e8eddf",
    }}
    transition={{ duration: 0.5 }}
    className="h-[2rem] border"
  >
    <td className="border">{index + 1}</td>
    <td className="border">{member.name}</td>
    <td className="border">{member.email}</td>
    <td className="border">{member.role}</td>
  </motion.tr>
));

const MemberTable = memo(({ members }) => (
  <table className="w-full min-w-[600px] border-collapse border">
    <TableHeaders />

    <tbody>
      {members.map((member, index) => (
        <TableRow
          key={member.id || member.email}
          member={member}
          index={index}
        />
      ))}
    </tbody>
  </table>
));

const RenderSearch = ({ keyword, onChange }) => (
  <div className="w-full p-1 lg:w-auto">
    <input
      type="text"
      className={STYLE.member_list_search}
      placeholder="搜尋會員姓名..."
      value={keyword}
      onChange={onChange}
    />
  </div>
);

const RenderContent = ({ filtered, currentUser }) => {
  if (filtered.length === 0) {
    return <p className="my-8 text-center text-2xl">查無此會員</p>;
  }
  return <MemberTable members={currentUser} />;
};

const MemberList = () => {
  const { userList } = useSelector((state) => state.user);
  const { animate_I } = useSelector((state) => state.ui);
  const location = useLocation();
  const memberFiltered = userList.filter((p) => p.role === "menber");

  const [keyword, setKeyWord] = useState("");

  const handleKeywordChange = useCallback((e) => {
    setKeyWord(e.target.value);
  }, []);

  const filtered = useMemo(() => {
    const searchKeyword = keyword.toLowerCase().trim();
    return memberFiltered.filter((p) => {
      const userName = String(p.name).toLowerCase();
      const userEmail = String(p.email).toLowerCase();
      return (
        userName.includes(searchKeyword) || userEmail.includes(searchKeyword)
      );
    });
  }, [keyword, memberFiltered]);

  const currentUser = filtered.length === 0 ? memberFiltered : filtered;

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={location.pathname}
        {...animate_I}
        className={STYLE.member_list}
      >
        <RenderSearch keyword={keyword} onChange={handleKeywordChange} />

        <div className="overflow-x-auto">
          <RenderContent filtered={filtered} currentUser={currentUser} />
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default MemberList;
