import React, { useState } from "react";
import Sresult from "./Sresult";

function Search() {

    const [img, setImg] = useState('');
    const inputEvent = (e) => {
        const data = e.target.value;
        setImg(data);
    }

    return(
        <>
            <div className="search__div">
                <input
                    type="text"
                    value={img}
                    placeholder="Search something"
                    onChange={inputEvent} />
            </div>
            <Sresult name={img} />
        </>
    )
}

export default Search;