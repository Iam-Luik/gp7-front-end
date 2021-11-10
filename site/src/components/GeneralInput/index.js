import "./style.css";

function GeneralInput({ label, onChange }) {
  return (
    <>
      <div class="group">
        <input type="text" required onChange={onChange}/>
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>{label}</label>
      </div>
    </>
  );
}

export default GeneralInput;
