export default function checkStatus(status) {
  let mess;
  if (status === true) {
    mess = "In stock";
  } else {
    mess = "Out of stock";
  }
  return mess;
}
