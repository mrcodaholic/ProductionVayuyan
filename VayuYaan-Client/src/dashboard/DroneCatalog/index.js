import React from "react";
import Layout from "../../components/layouts";

import styles from "./catalog.module.scss";
import Map from "../CouldDashboardMap/Map";

const DroneCatalog = () => {
  return (
    <>
      <div>
        <Layout>
          <div className={styles.couldDroneMap}>
            <div className={styles.homepageHeader}>Drone Booking</div>
            <div className={styles.droneDetailSection}>
              <div className={styles.simulatedDrone}>
                <div className={styles.simulatedDroneSec}>
                  Booking Schedules
                </div>
                <div className={styles.simulatedDroneSec}>Mission Planner</div>
                <div className={styles.simulatedDroneSec}>Pilot Management</div>
              </div>
            </div>
            <div className={styles.droneMap}>Mission Planner</div>
            <div className={styles.droneMap}>Drone ID #1</div>
            <div style={{ display: "flex", gap: "200px" }}>
              <div className={styles.leftPartDetail}>
                <div style={{ color: "#1A3447", fontWeight: "700" }}>
                  Service Details
                </div>
                <div>ID# 1144</div>
                <div>Mission Plan ID#: 200</div>
                <div>Status: Active</div>
                <div className={styles.details}>
                  Service Type: Rental - Data Collection
                </div>
                <div>Time Start: 06/29/2022 10:00 am</div>
                <div>Time End: 06/29/2022, 5:00 pm</div>
                <div>Land: West Plot A - Crop</div>
                <div>Drone ID #1: DJI Mini SE</div>
              </div>

              <div className={styles.rightPartDetails}>
                <div style={{ color: "#1A3447", fontWeight: "700" }}>
                  Drone Profile Details
                </div>
                <div>ID #1</div>
                <div>Model: DJI Mini SE</div>
              </div>
            </div>
            <div className={styles.open}>
              <div className={styles.part}>
                <div className={styles.mission}>Mission Plan</div>
                <div style={{ margin: "0 0 0 20px" }}>ID # 123</div>
              </div>
              <div className={styles.buttons}>
                <button>Open</button>
                <button>Save</button>
              </div>
            </div>

            <div style={{ margin: "10px 0  0 20px", width: "70vw" }}>
              <Map />
            </div>
            <div style={{ display: "flex", gap: "400px" }}>
              <div className={styles.back}>Back</div>
              <div className={styles.confirm}>Confirm</div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default DroneCatalog;
