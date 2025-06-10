const filtredEvents = document.querySelector(".filtredEvents");

const selectDate = document.querySelector(".selectDate");
const selectType = document.querySelector(".selectType");
const selectDistance = document.querySelector(".selectDistance");
const selectCategory = document.querySelector(".selectCategory");

const eventsStore = [
  {
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    date: new Date(2024, 2, 23, 15),
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w ",
    type: "offline",
    attendees: 99,
    category: "Hobbies and Passions",
    distance: 50,
  },
  {
    title:
      "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
    description: "New York AI Users",
    date: new Date(2024, 2, 23, 11, 30),
    image:
      "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    type: "offline",
    attendees: 43,
    category: "Technology",
    distance: 25,
  },
  {
    title: "Book 40+ Appointments Per Month Using AI and Automation",
    description: "New Jersey Business Network",
    date: new Date(2024, 2, 16, 14),
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    category: "Technology",
    distance: 10,
  },
  {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2024, 2, 13, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 77,
    category: "Business",
    distance: 100,
  },
  {
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 74,
  },
  {
    title: "All Nations - Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "offline",
    category: "Health and Wellbeing",
    distance: 15,
  },
];

function eventsRender(eventsArray) {
  filtredEvents.innerHTML = "";

  eventsArray.forEach((event) => {
    const newElement = document.createElement("div");
    newElement.classList.add("filtredEventsElements");

    const elImage = document.createElement("img");
    elImage.classList.add("filtredEventImageStyles");
    elImage.src = event.image;
    elImage.alt = event.title;

    const cardsInfo = document.createElement("div");
    cardsInfo.classList.add("filteredCardsInfo");

    const elDate = document.createElement("p");
    elDate.classList.add("filteredEventDateInfo");
    elDate.textContent = event.date.toLocaleString();

    const elTitle = document.createElement("h3");
    elTitle.textContent = event.title;
    elTitle.classList.add("filteredEventTitle");

    const elCategory = document.createElement("p");
    elCategory.classList.add("eventCategory");
    elCategory.textContent = event.category;

    const elDistance = document.createElement("p");
    elDistance.classList.add("filteredEventDistance");
    elDistance.textContent = `${event.category} (${event.distance} km)`;

    cardsInfo.append(elDate, elTitle, elDistance);

    if (event.type === "online") {
      const cameraLogo = document.createElement("div");
      cameraLogo.classList.add("filtredCameraLogoEvents");

      const cameraImg = document.createElement("img");
      cameraImg.src = "svg_icons/camera.svg";
      cameraImg.alt = "Camera Icon";

      const cameraInfo = document.createElement("p");
      cameraInfo.textContent = "Online Event";

      cameraLogo.append(cameraImg, cameraInfo);

      const onlineMark = document.createElement("div");
      onlineMark.classList.add("filtredOnlineEvent");

      const onlineImg = document.createElement("img");
      onlineImg.src = "svg_icons/camera.svg";
      onlineImg.alt = "Camera Icon";

      const onlineInfo = document.createElement("p");
      onlineInfo.textContent = "Online Event";
      onlineInfo.classList.add("filteredOnlineText");

      onlineMark.append(onlineImg, onlineInfo);

      cardsInfo.append(cameraLogo, onlineMark);
    }

    if (event.attendees) {
      const elAtendees = document.createElement("p");
      elAtendees.classList.add("filteredAttendees");
      elAtendees.textContent = `${event.attendees} attendees`;
      cardsInfo.appendChild(elAtendees);
    }

    newElement.append(elImage, cardsInfo);
    filtredEvents.append(newElement);
  });
}
eventsRender(eventsStore);

/*========================filters==================*/

[selectDate, selectType, selectDistance, selectCategory].forEach((event) => {
  event.addEventListener("change", filterEvents);
});

function filterEvents() {
  const selectedDate = selectDate.value;
  const selectedType = selectType.value;
  const selectedDistance = selectDistance.value;
  const selectedCategory = selectCategory.value;

  let filtered = eventsStore;

  if (selectedDate !== "Any date" && selectedDate !== "") {
    filtered = filtered.filter((event) => {
      const eventDateStr = event.date.toISOString().split("T")[0];
      return eventDateStr === selectedDate;
    });
  }

  if (selectedType !== "Any type") {
    filtered = filtered.filter((event) => event.type === selectedType);
  }

  if (selectedDistance !== "Any distance") {
    const numDistance = parseInt(selectedDistance);
    filtered = filtered.filter((event) => event.distance <= numDistance);
  }
  if (selectedCategory !== "Any category") {
    filtered = filtered.filter((event) => event.category === selectedCategory);
  }

  eventsRender(filtered);
}
