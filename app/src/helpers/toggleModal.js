import $ from "jquery";

export const cancel = event => {
  let modal = $("#modal");
  let modalWraper = $(".modal-wraper");
  event.preventDefault();
  modal.fadeOut("slow", () => {
    modal.css("display", "none");
  });
  modalWraper.fadeOut("slow", () => {
    modalWraper.css("background-color", "initial");
  });
};

export const revealModal = () => {
  let modal = $("#modal");
  let modalWraper = $(".modal-wraper");
  modal.fadeIn("fast", () => {
    modal.css({ display: "flex", "flex-direction": "column" });
  });
  modalWraper.fadeIn("fast", () => {
    modalWraper.css("background-color", "rgba(0, 0, 0, 0.7)");
  });
};
