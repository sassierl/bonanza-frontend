export default function FormInput({ label, value, onChange, placeholder }) {
  return (
    <>
      <label className="form-input__label">{label}</label>
      <input
        className="form-input__input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
}