const services = [
    {
      img : "img/Frame 1.jpg",
      txt : "1- Flight Bookings: The agency offers domestic and international flight bookings. They work with major airlines and can provide competitive prices for different travel destinations."
    },
    {
      img : "img/Frame 2.jpg",
      txt : "2. Hotel Accommodations: Wanderlust Travels offers a wide range of hotel options to suit travelers' preferences and budgets. They have partnerships with various hotels worldwide to provide discounted rates and ensure a comfortable stay."
    },
    {
      img : "img/Frame 3.jpg",
      txt : "3. Vacation Packages: The agency also specializes in creating personalized vacation packages. Whether you're looking for an all-inclusive beach getaway, an adventurous hiking trip, or a cultural city tour, they can tailor the itinerary to your specific needs."
    },
    {
      img : "img/Frame 4.jpg",
      txt : "4. Cruise bookings: If you're looking for a unique and relaxing holiday experience, we can help you book a cruise. Explore beautiful destinations while enjoying onboard amenities and entertainment."
    },
    {
        img : "img/Frame 5.jpg",
      txt : "5. Vacation Packages: The agency also specializes in creating personalized vacation packages. Whether you're looking for an all-inclusive beach getaway, an adventurous hiking trip, or a cultural city tour, they can tailor the itinerary to your specific needs."
    }
];

export default function Services(){
  return(
    <div className="services" id="services">
      <h1>Services</h1>
      {
        services.map((i , index)=> <Service txt={i.txt} img={i.img} key={index}/>)
      }
    </div>
  );
}


function Service({txt , img}){
    return(
      <div className="service">
        <div className="service-txt">
          {txt}
        </div>
  
        <img src={img} alt="img" />
      </div>
    );
}
  