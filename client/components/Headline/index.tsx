"use client";

import { ChangeEvent, useState } from "react";
import IconedInput from "../Fields/IconedInput";
import "./Headline.css";
import { SearchIcon } from "../Icons";

export default function Headline(): JSX.Element {
    const [search, setSearch] = useState<string>("");

    return (
        <div className="headline">
            <div className="date">
                <h1>MONDAY</h1>
                <h3>13 September 2023</h3>
            </div>

            <IconedInput
                icon={<SearchIcon />}
                value={search}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setSearch(event.target.value)
                }
                placeholder="Search"
            />
        </div>
    );
}
