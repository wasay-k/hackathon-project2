import React, { useRef, useEffect } from "react";

type TextBoxProps = {
  defaultText: string;
  setStateVariable?: React.Dispatch<React.SetStateAction<string>>;
  onTextChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean
};

export default function TextBox({
  defaultText,
  onTextChange,
  setStateVariable,
  disabled
}: TextBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (setStateVariable) {
      setStateVariable(inputValue);
    }

    if (onTextChange) {
      onTextChange(event);
    }
  };

  return (
    <div className={"form-control w-full max-w-xs"}>
      <label className="label">
        <span className="label-text">{defaultText}</span>
      </label>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type here"
        className={disabled ? "input input-bordered w-full max-w-xs disabled" : "input input-bordered w-full max-w-xs"}
        onChange={handleChange}
      />
    </div>
  );
}
