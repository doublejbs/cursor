export const setTimeoutUsingRequestAnimationFrame = (callback, delay) => {
  const start = new Date().getTime();
  const requestAnimationFrameCallback = () => {
    const current = new Date().getTime();
    if (current - start <= delay) {
      requestAnimationFrame(requestAnimationFrameCallback);
    } else {
      callback();
    }
  };
  requestAnimationFrame(requestAnimationFrameCallback);
};
