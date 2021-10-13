import "./style.css";

function GeneralInputPssw({ label }) {
  return (
    <>
      <div class="group">
        <input type="password" required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>{label}</label>
      </div>
    </>
  );
}

export default GeneralInputPssw;
