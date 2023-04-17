
const calculateScroll = (element: HTMLElement | null): number[] => {
    if (element) {
        const [scrollTop, scrollLeft] = calculateScroll(element.parentElement)
        return [(element.scrollTop || 0) + scrollTop, (element.scrollLeft || 0) + scrollLeft]
    } else {
        return [0, 0]
    }
}

export { calculateScroll }