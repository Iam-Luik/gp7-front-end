import "./style.css";

function GeneralInput({ label }) {
  return (
    <>
      <div class="group">
        <input type="text" required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>{label}</label>
      </div>
    </>
  );
}

export default GeneralInput;
