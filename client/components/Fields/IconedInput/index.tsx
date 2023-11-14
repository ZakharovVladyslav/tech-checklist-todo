import "./IconedInput.css";
import { ChangeEventHandler, ReactNode } from "react";

type InputWidth = "default" | "full";

interface IconedInputProps {
    icon: ReactNode;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    width?: InputWidth;
}

export default function IconedInput({
    icon,
    value,
    onChange,
    placeholder,
    width,
}: IconedInputProps): JSX.Element {
    return (
        <div
            className={`iconed-input ${width === "full" ? "full" : ""}
        `}
        >
            {icon}

            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}
