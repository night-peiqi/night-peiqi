export default function clear() {
  return {
    name: 'clear',
    resolveId(source) {
      console.log('resolveId', source);
    },
    load(id) {
      console.log('load', id);
    },
  };
}
