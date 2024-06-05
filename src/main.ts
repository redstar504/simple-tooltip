import './style.css'

window.onload = () => {
    const body = document.querySelector('body')
    if (!body) return

    const tooltips = document.querySelectorAll<HTMLElement>('*[data-tooltip]')
    const tooltipContainer = document.createElement('div')
    tooltipContainer.id = 'tooltipContainer'
    body.appendChild(tooltipContainer)

    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mousemove', (e: MouseEvent) => {
            if (!e.target) return

            const elem = e.target as HTMLElement
            const toolTipText = elem.getAttribute('data-tooltip')

            if (!toolTipText) return

            tooltipContainer.style.display = 'block'
            tooltipContainer.style.top = `${e.clientY + 16}px`
            tooltipContainer.style.left = `${e.clientX + 16}px`
            tooltipContainer.innerText = toolTipText
        })

        tooltip.addEventListener('mouseleave', () => {
            tooltipContainer.style.display = 'none'
        })
    })
}