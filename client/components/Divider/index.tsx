import "./Divider.css";

import React from "react";

interface DividerProps {
    direction?: "x" | "y";
}

/**
 * Компонент разделителя
 *
 * @param {DividerProps} props параметры компонента
 * @return {JSX.Element}
 */
export default function Divider({
    direction = "y",
}: DividerProps): JSX.Element {
    return <span className={`divider ${direction}`} />;
}
