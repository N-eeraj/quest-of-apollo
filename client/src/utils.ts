export function fromNameIdToTextValue(list: Array<{ id: string | number, name: string }> = []) {
  return list.map(({ id, name }) => ({
    value: id,
    text: name,
  }));
}
