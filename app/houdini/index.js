(async function() {
  const registrar = new Set([
    'painty.worklet.js',
  ])

  if (CSS['paintWorklet'] === undefined)
    await import('https://unpkg.com/css-paint-polyfill/dist/css-paint-polyfill.js')

  registrar.forEach(worklet =>
    CSS.paintWorklet.addModule(`/houdini/${worklet}`))
})()