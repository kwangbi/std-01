import React from "react"

const InputGroupComp = React.memo(({ label, type, value, name, changeCB }) => {
    return (
        <div className="input-group">
            <label className="input-label">
                <p>{label}</p>
            </label>
            <input className="input-default"
                type={type}
                value={value}
                onChange={changeCB}
                name={name}
            ></input>
        </div>
    )
})

InputGroupComp.displayName = "InputGroupComp"

export default React.memo(InputGroupComp);