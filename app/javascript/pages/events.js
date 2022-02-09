import { Dropzone } from "dropzone";
import Datepicker from "../../../vendor/js/datepicker/datepicker";

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".dropzone")) {
    const authenticityToken = document.querySelector(
      "input[name='authenticity_token']"
    ).value;

    const dropzone = new Dropzone(".dropzone", {
      url: `/events?authenticity_token=${authenticityToken}`,
      maxFiles: 4,
    });
  }

  if (document.querySelector(".datepicker")) {
    const datepicker = new Datepicker(".datepicker", {
      time: true,
      onChange: (dateTime) => {
        if (dateTime) {
          const isoDate = new Date(dateTime).toISOString();

          document.querySelector("input[name='event_date']").value = isoDate;
        }
      },
    });
  }
});
