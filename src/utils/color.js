const color = ['orange', 'cyan', 'blue', 'red', 'green', 'purple'];
let index = 0;

const getColor = () => {
  index++;
  if (index >= color.length) {
    index = 0;
  }

  return color[index];
};

export { color, getColor };
