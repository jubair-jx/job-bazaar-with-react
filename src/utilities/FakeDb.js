//add to local Storage
let applyJob = {};
const addToDb = (id) => {
  const storeJob = localStorage.getItem("apply-job");
  if (storeJob) {
    applyJob = JSON.parse(storeJob);
  }
  let jobQuantity = applyJob[id];
  if (jobQuantity) {
    let newJobQuantity = jobQuantity + 1;
    applyJob[id] = newJobQuantity;
  } else {
    applyJob[id] = 1;
  }

  localStorage.setItem("apply-job", JSON.stringify(applyJob));
};

const getApplyJobFromLocalStr = () => {
  const storeJob = localStorage.getItem("apply-job");
  if (storeJob) {
    applyJob = JSON.parse(storeJob);
  }
  return applyJob;
};
export { addToDb, getApplyJobFromLocalStr };
