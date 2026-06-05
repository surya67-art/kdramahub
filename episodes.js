const params =
  new URLSearchParams(window.location.search);

const drama =
  params.get("drama");

fetch("dramas.json")
  .then(response => response.json())
  .then(data => {

    document.getElementById("title")
      .textContent =
      drama.replaceAll("-", " ");

    const episodeList =
      document.getElementById("episodeList");



    if (!data[drama]) {
      document.getElementById("episodeList").innerHTML =
        "<h2>Episodes not found.</h2>";
      return;
    }
    data[drama].forEach(ep => {

      episodeList.innerHTML += `
        <div class="episode-card">

          <h3>${ep.title}</h3>

          <a href="${ep.link}"
   target="_blank"
   class="watch-btn">

   Watch



          </a>

        </div>
      `;

    });

  });