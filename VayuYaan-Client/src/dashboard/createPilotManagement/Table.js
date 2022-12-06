import React from "react";
import { Space, Table, Tag } from "antd";
const { Column } = Table;

const PilotTable = ({
  data,
  setData,
  setId,
  setIsVisibleView,
  setIsVisible,
  setEditId,
}) => (
  <Table dataSource={data} style={{ width: "70vw" }}>
    <Column title="Pilot ID" dataIndex="pilotId" key="pilotId" />
    <Column title="Full Name" dataIndex="fullName" key="fullName" />
    <Column title="Email" dataIndex="email" key="email" />
    <Column title="Gender" dataIndex="gender" key="gender" />
    <Column title="Mobile" dataIndex="phoneNumber" key="phoneNumber" />
    <Column title="DOB" dataIndex="dob" key="dob" />
    <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <div
            onClick={() => {
              setId(record.id);
              setIsVisibleView(true);
            }}
            style={{ cursor: "pointer" }}
          >
            View
          </div>
          <div
            onClick={() => {
              setData((prev) => {
                return prev.filter((data) => data.id !== record.id);
              });
            }}
            style={{ cursor: "pointer" }}
          >
            Delete
          </div>
          <div
            onClick={() => {
              setEditId(record.id);
              setIsVisible(true);
            }}
            style={{ cursor: "pointer" }}
          >
            Edit
          </div>
        </Space>
      )}
    />
  </Table>
);
export default PilotTable;
