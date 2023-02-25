export const getItemId = (itemUrl) => {
  let input = itemUrl.split("/").reverse();
  let itemId = null;
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== "") {
      itemId = input[i];
      break;
    }
  }
  return itemId;
};
