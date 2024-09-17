import React from "react";

interface FilterInputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterInput: React.FC<FilterInputProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <div>
      <label>
        {label}:
        <input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default FilterInput;
