const sponsorsList = [
    {
        image_url:
            "https://www.bisecthosting.com/images/logo-dark-theme.svg?0b660e7978f5e193a95067f6258dcc5a",
        url: "https://www.bisecthosting.com/",
    },
    {
        image_url:
            "https://res.cloudinary.com/dfcuj6dei/image/upload/v1709739929/Sponsors/Logos/rizvielectronics.webp",
        url: "http://rizvielectronics.com/",
    },
    {
        image_url:
            "https://res.cloudinary.com/dfcuj6dei/image/upload/v1709739505/Sponsors/Logos/junkshark.webp",
        url: "https://www.junkshark.ca/",
    },
    {
        image_url:
            "https://res.cloudinary.com/dfcuj6dei/image/upload/v1709740312/Sponsors/Logos/tdsb.webp",
        url: "https://www.tdsb.on.ca/",
    },
    {
        image_url:
            "https://harrisandpartnersinc.com/wp-content/uploads/2023/08/logo.png.webp",
        url: "https://harrisandpartnersinc.com/",
    },
    {
        image_url:
            "https://res.cloudinary.com/dfcuj6dei/image/upload/v1709740624/Sponsors/Logos/studica.webp",
        url: "https://www.studica.ca/en/",
    },
    {
        image_url:
            "https://0901.nccdn.net/4_2/000/000/038/2d3/bnnr1_1.png#RDAMDAID17280428",
        url: "http://www.serosima.ca/",
    },
    {
        image_url:
            "https://images.squarespace-cdn.com/content/v1/60a27ebca81908067631e3a1/487408e3-ee7c-42e5-819f-05721a34cf75/gb_mint-01.png?format=1500w",
        url: "https://goodbehaviourto.ca/",
    },
    {
        image_url:
            "https://res.cloudinary.com/dfcuj6dei/image/upload/v1709740857/Sponsors/Logos/computertalk.webp",
        url: "https://www.computer-talk.com",
    },
    {
        image_url:
            "https://res.cloudinary.com/dfcuj6dei/image/upload/v1709740958/Sponsors/Logos/google.webp",
        url: "",
    },
    {
        image_url:
            "https://res.cloudinary.com/dfcuj6dei/image/upload/v1709741017/Sponsors/Logos/markvilletoyota.webp",
        url: "",
    },
    {
        image_url:
            "https://res.cloudinary.com/dfcuj6dei/image/upload/v1709741082/Sponsors/Logos/malfar.webp",
        url: "https://www.malfar.ca/",
    },
    {
        image_url:
            "https://res.cloudinary.com/dfcuj6dei/image/upload/v1708739881/Sponsors/Logos/1.png",
        url: "https://luckylins.ca",
    },
];

const sponsors_table = document.getElementById("sponsors_table");

for (let i = 0; i < sponsorsList.length; i += 4) {
    const row = document.createElement("tr");
    for (let j = 0; j < 4 && i + j < sponsorsList.length; j++) {
        const cell = document.createElement("td");
        const anchor = document.createElement("a");
        const img = document.createElement("img");

        anchor.className = "sponsor_box";
        anchor.href = sponsorsList[i + j].url;
        img.src = sponsorsList[i + j].image_url;

        anchor.appendChild(img);
        cell.appendChild(anchor);
        row.appendChild(cell);
    }
    sponsors_table.appendChild(row);
}
