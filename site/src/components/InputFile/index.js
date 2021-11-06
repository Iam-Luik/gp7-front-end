import "./style.js";


function InputFile({ label, value, handleChange }) {
  return (
    <>
      <div class="group">
        <input value={value} type="file" onChange={handleChange} required/>
      </div>
    </>
  );
}

export default InputFile;
