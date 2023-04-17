function getPathTo(element: HTMLElement): string {
    if (element.id !== '') {
        return 'id("'+element.id+'")'
    } else if (element === document.body) {
        return element.tagName
    } else {
        var ix = 0;
        var siblings = element.parentNode?.childNodes ?? []

        if (siblings.length > 0) {
            for (var i = 0; i < siblings?.length; i++) {
                var sibling = siblings[i] as HTMLElement
                if (sibling === element && element.parentNode) {
                    return getPathTo(element.parentNode as HTMLElement) + '/' + element.tagName + '[' + (ix + 1) + ']';
                } else if (sibling.nodeType===1 && sibling.tagName === element.tagName)
                    ix++;
            }
        }
    }

    return ''
}

export { getPathTo }