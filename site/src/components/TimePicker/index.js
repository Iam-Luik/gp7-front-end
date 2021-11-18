import "./style.css";

export default function TimePicker({ setTime }) {

  return (
    <>
      <form id="frmTime">
        <input onChange={e => setTime(e.target.value)}  type="time" id="time" />
      </form>
    </>
  );
}
