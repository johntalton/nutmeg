
async function onContentLoaded() {
	const canvas = document.getElementById('MainCanvas')
	if(canvas === null) { throw new Error('missing canvas') }
	if(!(canvas instanceof HTMLCanvasElement)) { throw new Error('canvas is not a canvas') }
	const context = canvas.getContext('2d', { colorSpace: 'display-p3' })
	if(context === null) { throw new Error('context invalid') }

	context.fillStyle = 'pink'
	context.fillRect(10, 10, 100, 100)
}

(document.readyState === 'loading') ?
	document.addEventListener('DOMContentLoaded', onContentLoaded) :
	onContentLoaded()