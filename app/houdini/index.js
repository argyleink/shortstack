const registrar = new Set([
  { name: 'Painty', path: 'painty.worklet.js'}
])

if ('paintWorklet' in CSS) 
  registrar.forEach(({path}) =>
    CSS.paintWorklet.addModule(`/houdini/${path}`))
else
  console.warn('Paint worklet not supported')