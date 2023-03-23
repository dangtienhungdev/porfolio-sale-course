export const useFomatDate = (data) => {
  const date = new Date(data);
  const time = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  return time;
};
