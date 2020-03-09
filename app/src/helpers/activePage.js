export const activeInventory = () => {
  let inventory = document.getElementById("inventory");
  let locations = document.getElementById("locations");

  if (inventory.classList.value.indexOf("active") === -1) {
    inventory.classList.add("active");
  } else {
    inventory.classList.remove("active");
  }
  if (locations.classList.value.indexOf("active") === -1) {
    locations.classList.add("active");
  } else {
    locations.classList.remove("active");
  }
};
