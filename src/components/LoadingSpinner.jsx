const Spinner=()=>{
  return <div className="d-flex justify-content-center spinner">
  <div
    className="spinner-border"
    role="status"
    style={{ width: "6rem", height: "4rem" }}
  >
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
};

export default Spinner;