
type DropdownProps = {
    displayText: string;
    options: string[];
    selectedOption: string;
    changeEvent: (selectedOption: string) => void;
    disabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ displayText, options, selectedOption, changeEvent, disabled }) => {



    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        //const selectedOption = event.target.value;
        //setText(selectedOption);
        changeEvent(event.target.value);
    }

    return (
        <div>
            <label className="label">
                <span className="label-text">{displayText}</span>
            </label>
            <select className="select select-primary w-full max-w-xs" onChange={handleOptionChange} disabled={disabled}>
                <option disabled selected>{selectedOption === "" ? displayText : selectedOption}</option>
                {options.map((option) => {
                    return (
                        <option key={option} value={option}>{option}</option>
                    )
                })}
            </select>
        </div>

    )
}

export default Dropdown;