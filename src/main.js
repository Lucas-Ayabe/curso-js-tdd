module.exports = {
  sum(x, y) {
    return x + y;
  },
  sub(x, y) {
    return x - y;
  },
  mul(x, y) {
    return x * y;
  },
  div(x, y) {
    return y !== 0 ? x / y : "Não é possível divisão por zero!";
  },
};
