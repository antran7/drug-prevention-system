import { forwardRef } from "react"

export const SearchBar = forwardRef((props, ref) => {
    return (
        <input
            ref={ref}
            type={props.className}
            className={props.className}
            {...props}
        />
    );
})