export function ReturnPromiseResponseRethinkDB(target, name, descriptor) {
  let fn = descriptor.value.bind(target);
  descriptor.value = () => {
      fn().then(result => {
        return result.data.changes[0].new_val;
      });
  }
  return descriptor;
}