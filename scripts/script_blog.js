function Blog(title, date, description, media) {
    this.media = media;
    this.title = title;
    this.date = date;
    this.description = description;
}

const feed_container = document.getElementById("feed_container");
const blog_feed = [
    new Blog(
        "Centerstage Ontario Provincials",
        "February 10, 2024",
        "At St. Lawrence College in Kingston, Ontario, our team faced a crucial moment at the Ontario Provincial Championship. Months of preparation had led to this event, where we aimed to secure a spot at the World Championship. Stepping onto the competition grounds, surrounded by anticipation, we felt the weight of the challenge. Despite the pressure, our team remained determined, driven by our shared commitment to excellence in robotics. As the competition progressed, we faced each challenge with resolve and teamwork, bolstered by our camaraderie. Our efforts paid off when we were awarded the Inspire Award 2nd Place, earning us a spot at the World Championship in Houston, United States. This achievement not only recognized our team's perseverance but also highlighted the support of our mentors and the unity within our group. Looking ahead, we are grateful for the opportunity to represent Ontario on the global stage and are excited to showcase our dedication and innovation as we continue our robotics journey.",
        `<img src="https://res.cloudinary.com/dfcuj6dei/image/upload/v1709760538/Blog/jpkjdokjpurqsysrthc7.webp">`
    ),
    new Blog(
        "Centerstage Bethune North Scarborough Qualifier",
        "January 14, 2024",
        `At Dr. Norman Bethune Collegiate Institute in Toronto, Ontario, the ON FIRST Tech Challenge North Scarborough Qualifier took place. Surrounded by teams and robots, our team entered the event with excitement and a drive to innovate. We demonstrated our technical skills and worked together closely, making a memorable impact on the competition. As the day unfolded, our efforts were recognized with two prestigious awards: the Finalist Alliance 1st Pick and the First Innovate Award. These honors underscored not only our team's exceptional performance but also our commitment to pushing the boundaries of innovation within the robotics community. With gratitude for the support of mentors, fellow teams, volunteers, and sponsors, we departed from the North Scarborough Qualifier with a renewed sense of purpose and determination, eager to continue our journey of excellence in robotics.`,
        `<img src="/gallery/dev_team9.png">`
    ),
    new Blog(
        "First Nations Workshop at Kapapamahchakwew Wandering Spirit School",
        " February 5, 2024",
        `Our team recently had the privilege of hosting a workshop at Kapapamahchakwew Wandering Spirit School, an Indigenous First Nation school on February 5th, where we engaged with approximately 30 enthusiastic students. Over the course of the workshop, we immersed the students in the world of robotics and coding, introducing them to LEGO EV3 robots for both building and programming, as well as the p5.js coding language. Witnessing the students' excitement as they brought their creations to life and explored the creative potential of coding was truly inspiring.
    </br>As the workshop concluded, the atmosphere was brimming with enthusiasm and accomplishment. We departed with a deep sense of gratitude for the opportunity to share our passion for robotics and coding with the students of Kapapamahchakwew - Wandering Spirit School, knowing that we had made a meaningful impact on their educational journey. This experience reinforced our belief in the transformative power of STEM education and the importance of providing equitable access to such opportunities for all communities.`,
        `<img src="https://res.cloudinary.com/dfcuj6dei/image/upload/v1709760622/Blog/ml0w23fe9c5mdtgl7jct.webp"><img src="https://res.cloudinary.com/dfcuj6dei/image/upload/v1709760623/Blog/b7wpzlsmmqeobpibo2az.webp">`
    ),
    new Blog(
        "Centerstage Mississauga Qualifier",
        "December 9, 2023",
        `At Rick Hansen Secondary School in Mississauga, Ontario, Devolotics participated in the ON FIRST Tech Challenge Mississauga Qualifier. Among many teams, we stood out not just for our technical skills but for our dedication to inspiring others. Throughout the day, we showcased innovation, teamwork, and dedication both in and out of the competition. By working with other teams and reaching out to the community, we embodied the spirit of FIRST, showing that success isn't just about winning but also about making a positive impact. After a day of intense competition, we were honored to receive the INSPIRE FIRST AWARD, recognizing our commitment to inclusion, creativity, and innovation. This win validated our skills and strengthened our resolve to keep making a difference. Looking back on the event, we're grateful for the support of our mentors, fellow teams, volunteers, and sponsors. The ON FIRST Tech Challenge Mississauga Qualifier will always be special to us, reminding us of the importance of inspiration and teamwork as we continue our journey in robotics.`,
        `<img src="/gallery/dev_team2.jpg">`
    ),
    new Blog(
        "Awakening Of The New Robot",
        "September 22, 2023",
        "In the world of competitive robotics, where innovation meets precision engineering, the foundation of a successful robot often lies in its drive train. Our dedicated team participating in the First Tech Challenge (FTC) embarked on a remarkable journey to craft an exceptional drive train. We began by pooling our collective creativity and technical prowess to design the perfect system - brainstorming, debating, and finally settling on a holonomic drive for its unparalleled maneuverability. Our design sessions stretched into late nights and weekends, fueled by the sheer determination to make something exceptional. The assembly process was painstaking, with motors, wheels, gearboxes, and encoders coming together meticulously. Our coding efforts were equally relentless as we fine-tuned control algorithms to ensure our robot's precise movements on the competition field. The countless hours of testing, debugging, and refining paid off in the end. As the competition date approached, our drive train proved to be the mechanical marvel we had envisioned. It powered our robot to gracefully navigate the field, executing tasks with unmatched precision and agility. What was once just a vision on paper had transformed into the mechanical heart of a champion, a testament to our unwavering teamwork, dedication, and passion for robotics, ultimately leading us to achieve greatness in the world of FTC robotics.",
        `<img src="https://res.cloudinary.com/dfcuj6dei/image/upload/v1709760904/Blog/hmljybnmhrx37yn6fnza.webp">`
    ),
    new Blog(
        "Workshop at Agnes Macphail Summer Camp",
        "August 16, 2023",
        "Another workshop was held at Agnes Macphail Elementary School by the SSA. The school was alive with excitement as 35 eager students gathered for a fantastic experience - the Lego EV3 Workshop. This was no ordinary workshop; it was an immersive experience meticulously orchestrated by dedicated organizers who understood the joy of learning through hands-on exploration. Laughter rang out as young minds set about creating their own robot companions. But it was more than just putting together robots; it was about instilling a love of robotics that spread like wildfire. Their faces lit up with understanding and pride as the day progressed, eager to show off their creations to family and friends. Aside from the robots, the workshop sparked ideas for future projects and competitions.",
        `<img src="https://res.cloudinary.com/dfcuj6dei/image/upload/v1709760974/Blog/dnqji6zi7ycjzuo4kteu.webp">`
    ),
    new Blog(
        "Workshop At Stephen Leacock CRC",
        "August 11, 2023",
        "Friday morning, the Stephen Leacock Community Recreation Centre has a lively vibe. The excitement was clear as 50 eager children came for the Lego EV3 Workshop. This was more than simply a workshop; it was an expedition specifically planned by enthusiastic organizers who recognised the importance of hands-on learning. The room was filled with laughter and enthusiasm as young brains took on the task of making their own EV3 robot. The session sparked a flame of imagination, growing an infectious enthusiasm for robots. The youngsters' face lighted up with pleasure with each passing instant. When it was all said and done, the sense of success was overwhelming. Beyond the workshop's conclusion, it left a legacy of inspiration, with children already planning future initiatives.",
        `<img src="https://res.cloudinary.com/dfcuj6dei/image/upload/v1709761402/Blog/gch0lki8gsphzurx773r.webp">`
    ),
    new Blog(
        "Summer Bot Camp At Forest Manor: Week 3",
        "July 21, 2023",
        "With the competition just a week away. The students were hard at work. Building attachments and programming them to complete different missions on the field. They learned more advanced programming concepts with EV3 Classroom to help with their success in the competition. The students were working hard to finalize their innovation project making sure it tied back to the theme of ENERGY. With the help of teachers and mentors the students were able to come up with several creative ideas for their projects and robots.",
        `<img src="https://res.cloudinary.com/dfcuj6dei/image/upload/v1709761818/Blog/djfhteevowlh2nwpqaf3.webp">`
    ),
    new Blog(
        "Summer Bot Camp At Forest Manor: Week 2",
        "July 14, 2023",
        "Our summer robotics camp at Forest Manor Public School is an immersive experience for students in grades 2-8. Throughout the camp, students engaged in hands-on activities, learning the fundamentals of programming, building, and designing lego EV3 robots. With our guidance and many volunteers , they will continue to develop problem-solving skills, teamwork, and creativity. This camp is a unique opportunity for students to explore the exciting world of robotics and discover their passion for STEM.  After the first couple of weeks the students were finished building their base bots and well on their way learning different sensors and plotting strategies for the up-coming tournament.",
        `<img src="https://res.cloudinary.com/dfcuj6dei/image/upload/v1709761874/Blog/yylyjpqh8bktikgltcp7.webp">`
    ),
    new Blog(
        "Summer Bot Camp At Forest Manor: The Kickoff",
        "July 7, 2023",
        "Today marked the exciting start of our robotics summer camp at Forest Manor Public School. Over 500 students in grades 2-8 came to join in the robotic fun and learn about the power of technology and STEM. We were thrilled to see so many eager minds, ready to embrace the opportunities and challenges that robotics can offer. It was an incredible sight to behold, and we can't wait to see what these students come up with during these 4 weeks!",
        `<img src="https://res.cloudinary.com/dfcuj6dei/image/upload/v1709761931/Blog/cgtawclpxeomcgss34f3.webp">`
    ),
];

document.addEventListener("DOMContentLoaded", function () {
    blog_feed.forEach((blog) => {
        const element_blogContainer = document.createElement("div");
        const element_blogLeft = document.createElement("div");
        const element_blogRight = document.createElement("div");
        const element_title = document.createElement("h1");
        const element_date = document.createElement("p");
        const element_description = document.createElement("p");

        element_blogContainer.className = "blog_container";
        element_blogLeft.className = "blog_left";
        element_blogRight.className = "blog_right";
        element_title.className = "blog_title";
        element_date.className = "blog_date";
        element_description.className = "blog_description";

        element_title.innerHTML = blog.title;
        element_date.innerHTML = blog.date;
        element_description.innerHTML = blog.description;

        element_blogRight.appendChild(element_title);
        element_blogRight.appendChild(element_date);
        element_blogRight.appendChild(element_description);
        if (blog.media) {
            element_blogLeft.innerHTML = blog.media;
            element_blogContainer.appendChild(element_blogLeft);
        }
        element_blogContainer.appendChild(element_blogRight);
        feed_container.appendChild(element_blogContainer);
    });
});
