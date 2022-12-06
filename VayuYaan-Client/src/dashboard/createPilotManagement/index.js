import React, { useEffect, useMemo, useState } from "react";
import Header from "../../components/header";
import AddModal from "./Modal";
import styles from "./pilot.module.scss";
import PilotTable from "./Table";
import ViewModal from "./ViewModal";

const CreatePilotManagement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleView, setIsVisibleView] = useState(false);

  const [fromValues, setFromValues] = useState({
    fullName: "",
    pilotId: "",
    email: "",
    phoneNumber: "",
    sEmail: "",
    password: "",
    dob: "",
    gender: "",
    address: "",
    id: "",
  });
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [editId, setEditId] = useState("");

  const viewData = useMemo(() => {
    return data.find((data) => data.id === id);
  }, [id]);

  useEffect(() => {
    const editData = data.find((data) => data.id === editId);
    setFromValues({
      ...fromValues,
      ...editData,
    });
  }, [editId]);

  return (
    <>
      <Header />
      <div className={styles.droneDetailSection}>
        <div className={styles.simulatedDrone}>
          <div className={styles.simulatedDroneSec}>Catalog Manaagement</div>
          <div className={styles.simulatedDroneSec}>Booking Schedules</div>
          <div className={styles.simulatedDroneSec}>Mission Planner</div>
          <div className={styles.simulatedDroneSec}>Pilot Management</div>
        </div>
      </div>
      <div className={styles.des}>Assign or remove pilots from bookings</div>
      <div className={styles.searchInput}>
        <input placeholder="search" />
        <div>Search</div>
      </div>
      <div className={styles.addHead}>
        <div className={styles.title}>Pilots</div>
        <div
          className={styles.addBtn}
          onClick={() => {
            setIsVisible(true);
            setFromValues({
              fullName: "",
              pilotId: "",
              email: "",
              phoneNumber: "",
              sEmail: "",
              password: "",
              dob: "",
              gender: "",
              address: "",
              id: "",
            });
          }}
        >
          Create Pilot
        </div>
      </div>
      <div className={styles.table}>
        <PilotTable
          data={data}
          setData={setData}
          setId={setId}
          id={id}
          setEditId={setEditId}
          setIsVisible={setIsVisible}
          setIsVisibleView={setIsVisibleView}
        />
      </div>
      <AddModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        fromValues={fromValues}
        setFromValues={setFromValues}
        data={data}
        editId={editId}
        setData={setData}
        setEditId={setEditId}
      />
      <ViewModal
        isVisibleView={isVisibleView}
        setIsVisibleView={setIsVisibleView}
        viewData={viewData}
        setId={setId}
      />
    </>
  );
};

export default CreatePilotManagement;
