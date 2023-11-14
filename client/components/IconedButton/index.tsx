import { MouseEvent, ReactNode } from "react";
import "./IconedButton.css";

interface IconedButtonProps {
    icon: ReactNode;
    onClick: VoidFunction;
}

export default function IconedButton({
    icon,
    onClick,
}: IconedButtonProps): JSX.Element {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (onClick) onClick();
    };

    return (
        <button className="iconed-button" onClick={onClick}>
            {icon}
        </button>
    );
}
