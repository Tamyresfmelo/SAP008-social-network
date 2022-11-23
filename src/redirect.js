// Responsável por alterar a hash na url

export const redirect = (hash) => {
  window.location.hash = hash;
};
