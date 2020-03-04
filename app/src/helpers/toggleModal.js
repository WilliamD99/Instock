import $ from "jquery";

let cancel = event => {
  event.preventDefault();
  let modal = $("#modal");
  modal.fadeOut("slow", () => {
    modal.css("display", "none");
  });
};
export default cancel;
