import "./RoundedCheckbox.css";

interface RoundedCheckboxProps {
    checked: boolean;
    setChecked: (checked: boolean) => void;
}

export default function RoundedCheckbox({
    checked,
    setChecked,
}: RoundedCheckboxProps): JSX.Element {
    return (
        <div
            onClick={() => setChecked(!checked)}
            className={`checkbox ${checked ? "checked" : ""}`}
        ></div>
    );
}
