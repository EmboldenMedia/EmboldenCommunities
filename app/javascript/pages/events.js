import { Dropzone } from "dropzone";
import Datepicker from "../../../vendor/js/datepicker/datepicker";

document.addEventListener("DOMContentLoaded", function () {
  let dropzone;

  if (document.querySelector(".dropzone")) {
    dropzone = new Dropzone(".dropzone", {
      url: "/events",
      paramName: "event_image",
      maxFiles: 4,
      autoProcessQueue: false,
      acceptedFiles: "image/*",
      addRemoveLinks: true,
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

  if (document.querySelector("#new_event")) {
    const authenticityToken = document.querySelector(
      "input[name='authenticity_token']"
    ).value;

    document.getElementById("new_event").addEventListener("submit", (event) => {
      event.preventDefault();

      fetch(`/events?authenticity_token=${authenticityToken}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: document.querySelector("input[name='name']").value,
          event_date: document.querySelector("input[name='event_date']").value,
          total_spots_remaining: document.querySelector(
            "input[name='total_spots_remaining']"
          ).value,
          cost: document.querySelector("input[name='cost']").value,
          description: document.querySelector("textarea[name='description']")
            .value,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Error processing new event");
          }

          return res.json();
        })
        .then((res) => {
          dropzone.options.url = `/events/${res.id}/upload?authenticity_token=${authenticityToken}`;

          dropzone.processQueue();

          window.location.href = "/events";
        });
    });
  }

  if (dropzone) {
    const eventPhotosError = document.getElementById("event-photos-error");

    dropzone.on("maxfilesexceeded", (file) => {
      eventPhotosError.innerHTML =
        "<i class='fa fa-exclamation-triangle'></i> You can only upload a maximum of 4 photos";
      eventPhotosError.classList.remove("d-none");

      dropzone.removeFile(file);
    });
  }
});
