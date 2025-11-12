export default function FormSelect({ label, value, onChange, options }) {
  return (
    <>
      <label className="form-select__label">{label}</label>
      <select
        className="form-select__select"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}
