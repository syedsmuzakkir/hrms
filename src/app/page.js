"use client";
import { Table } from "antd";
import React from "react";

import Link from "next/link";
import Image from "next/image";

import Plus from '../../public/assets/homeicons/Union.svg'

const page = () => {
  const columns = [
    {
      title: "Employee Name",
      dataIndex: "name",
    },
    {
      title: "Employee ID",
      dataIndex: "empId",
      sorter: {
        compare: (a, b) => a.empId - b.empId,
        multiple: 3,
      },
    },
    {
      title: "Email Address",
      dataIndex: "email",
      sorter: {
        compare: (a, b) => a.email - b.email,
        multiple: 2,
      },
    },
    {
      title: "Designation",
      dataIndex: "english",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      title: "Employee type",
      dataIndex: "english",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      title: "Start Date",
      dataIndex: "english",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      empId: "email@gmail.com",
      email: 60,
      english: 70,
    },
    {
      key: "2",
      name: "Jim Green",
      empId: "email@gmail.com",
      email: 66,
      english: 89,
    },
    {
      key: "3",
      name: "Joe Black",
      empId: "email@gmail.com",
      email: "email@gmail.com",
      english: 70,
    },
    {
      key: "4",
      name: "Jim Red",
      empId: 123526,
      email: "email@gmail.com",
      english: 89,
    },

    {
      key: "1",
      name: "John Brown",
      empId: 143414,
      email: "email@gmail.com",
      english: 70,
    },
    {
      key: "2",
      name: "Jim Green",
      empId: 2421432,
      email: "email@gmail.com",
      english: 89,
    },
    {
      key: "3",
      name: "Joe Black",
      empId: 3242,
      email: "email@gmail.com",
      english: 70,
    },
    {
      key: "4",
      name: "Jim Red",
      empId: 233244,
      email: "email@gmail.com",
      english: 89,
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div className="ml-3">
      {/* <header className='text-black w-full flex justify-center items-start'>
        Dashboard
       </header> */}
      <div className="w-full h-16">Dashboard</div>

      <div className="flex justify-between p-4">
        <h2>Employees</h2>
        <Link href={"/employees/addemp"}>
          <button className="bg-[#1890FF] text-white flex p-4 gap-3 justify-center items-center"> <Image src={Plus} />  Add New Employees </button>
        </Link>
      </div>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};

export default page;
