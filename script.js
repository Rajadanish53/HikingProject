let aboutbtn = document.querySelector(".aboutbtn");
let circle = document.querySelector(".circle");
aboutbtn.addEventListener("click", (e) => {
  circle.classList.toggle("changeskill");
  circle.classList.toggle("circle");
  circle.innerHTML = `<div class="allcontent container">
        <h1>What Is Hiking?</h1>
        <img src="hiking.jpg" alt="" />
        <h3>
          Hiking is a long, vigorous walk, usually on trails or footpaths in the
          countryside. Walking for pleasure developed in Europe during the
          eighteenth century. Religious pilgrimages have existed much longer but
          they involve walking long distances for a spiritual purpose associated
          with specific religions. Hiking has long been an important outdoor
          activity, whether as a means of exploration, exercise or reflection.
          The act of setting foot down a path through natural areas provides an
          unparalleled opportunity to build the human spirit, improve physical
          fitness, and increase environmental awareness. Hiking is a powerful
          cardio workout that can: Lower your risk of heart disease. Improve
          your blood pressure and blood sugar levels. Boost bone density, since
          walking is a weight-bearing exercise. An hour of hiking to friendly
          trails in a day is already enough. You can do more during the
          weekends, or during the days that you are not occupied with any
          important matters. But if you are a busy person, you don’t need to
          push yourself to hike daily. You can do this once a week. Although
          hiking uphill can be strenuous because of steep inclines and rocky
          terrain, it is actually downhill hiking that can damage the knee joint
          and surrounding cartilage. This is because compressive forces on the
          knee are three to four times greater when hiking downhill than uphill.
        </h3>
        <div class="gallery">
            <h1>Gallery</h1>
            <div class="images">
                <img src="g1.jpeg" alt="">
                <img src="g2.jpeg" alt="">
                <img src="g3.jpeg" alt="">
                <img src="g4.jpeg" alt="">
                <img src="g5.jpeg" alt="">
                <img src="g6.jpeg" alt="">
                <img src="g7.jpeg" alt="">
                <img src="g8.jpeg" alt="">
                <img src="g9.jpeg" alt="">
            </div>
        </div>
      </div>`;
});
