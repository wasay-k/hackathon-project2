
type CheckboxProps = {
    checked: boolean;
    onClick: (params?: any) => any;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onClick }) => {

    return (
        <input type="checkbox" checked={checked} className="checkbox" onChange={() => { onClick() }} />
    )
}

export default Checkbox;