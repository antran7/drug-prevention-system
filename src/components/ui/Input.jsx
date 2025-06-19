import { forwardRef } from "react"

export const Input = forwardRef((props, ref) => {
    return (
        <input
            ref={ref}
            type={props.type}
            className={props.className}
            {...props}
        />
    );
})