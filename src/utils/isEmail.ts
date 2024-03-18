const isEmail = (str: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(str) ? true : false;
};

export default isEmail