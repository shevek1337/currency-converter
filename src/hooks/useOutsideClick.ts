import React from "react"

function useOutsideClick(
  elRef: { current: null | React.ElementRef<keyof JSX.IntrinsicElements> },
  handler: (e: Event) => unknown
): void {
  React.useEffect(() => {
    const listener = (event: MouseEvent): void => {
      if (event.target == null) return
      if (elRef.current == null) return
      if (elRef.current.contains(event.target as Node)) return
      if (event.target instanceof HTMLButtonElement) return

      handler(event)
    }
    document.addEventListener("mouseup", listener)
    return () => document.removeEventListener("mouseup", listener)
  }, [elRef, handler])
}

export default useOutsideClick
