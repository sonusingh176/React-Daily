UseCallback Hook

what?
useCallback is a hook that will return a mwmoized version of the callback function that only changes if one of the dependencies has changed.

why?

It is useful when passing callbacks to optimized child components that rely on references equality to prevent unnecessary renders.
