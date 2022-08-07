import React from "react";
import './About.css'

const About = () => {



return (
  <>
  <div className="about-page">
  <section className="about-top">
    <h1 className="about-header">Satellite ImageMe</h1>
    <h3 className="about-subhead">Satellite ImageMe is an educational website designed to bolster interest in satellites and space technology.</h3>
  </section>
  <section className="about">
    <div className="imageme-header">How ImageMe Works</div>
    <hr className="line"></hr>
    <p className="about-content"><b>What is an API?</b></p>
    <p className="about-content">An API (Application Programming Interface) is a common way for applications to communicate information
      or data to eachother. Satellite ImageMe itself is an application, and in order to get access to the satellite data on this site,
      we need API's that will let us ask for it! 
    </p>
    <p className="about-content">ImageMe uses two API's to get an image of your location, NASA's EarthAPI and the Geolocation API developed by the World Wide Web Consortium (W3C)</p>
    <p className="about-content">When you click the 'GO!' button, we first use the Geolocation API to find your latitude and longitude. This is accomplished largely by the 
      technology already installed on your device! These data come from either GPS, your mobile network location (cell towers), or your IP address location. 
      The Geolocation API will choose the most accurate method available, and from there we can then begin to make use of the NASA Earth API. 
    </p>
    <p className="about-content">Once your coordinates have been determined, we then make a request to NASA to give us some data back through their Earth API. 
      We plug in your coordinates and the date you've selected in our request, and NASA returns us a response with some data points, including the exact time
      the photo was taken, what satellite took the photo, and of course, the image itself!
    </p>
    <hr className="line"></hr>
    <p><b>So, how do satellites work?</b></p>
    <p className="about-content">Some satellites don't do anything at all! A satellite is categorized as a space-object that orbits a larger body. By this definition, 
      you may be surprised to learn that our own Moon is a satellite! The moon isn't going to send us any cool pictures though, even if we ask nicely. 
      Us humans therefore must build our own satellites with innovative technology to achieve our goals. And we sure have! As of now, there are roughly 6,000 human-made satellites orbiting the Earth, 
      where 60% of them no longer work. When satellites are no longer operational, they then get demoted to being 'space-junk'. Depending on the height of their orbit, they will either fall back to Earth and burn up,
      or be stuck there for longer than anyones lifetime, adding to the ever-growing issue of a cluttered atmosphere.
    </p>
    <p className="about-content">Satellites generally serve 1-3 purposes, communication, navigation, and imaging. Here we will focus how imaging satellites operate.</p>
    <p className="about-content">The satellite used by ImageMe through NASA and the USGS is called Landsat 8. It was launched February 11, 2013 and is part of a larger mission called Landsat, 
      which has been sending land surveying satellites up into orbit since 1972. At the time of writing this, Landsat 9 has been launched but has not yet been incorportated in NASA's Earth API.</p>
    <p className="about-content">Important to note is that satellite imaging is used for much more than simply taking a picture like you may here on Earth. Satellites often come with a variety of
      sensors installed, and these sensors can view light, or rather, parts of the electromagnetic spectrum, that we humans cannot see. Think about using a microwave, you know that microwaves must be present when you use the device, but no matter how hard you squint, you can't see them! 
      Satellites have sensors to see a variety of different wavelengths of light, such as infrared, microwave, or ultra-violet. These wavelengths outside the visible light spectrum (the waveband of light we can see) offer a robust variety of 
      scientific data we can use to make hypotheses about our planet. For example, there is a waveband of infrared light that can tell us if a plant is healthy! This band in particular will be reflected by a healthy plant to the satellite, and we can look at an area
      of plant-life such as a forest, to determine if the forest is healthy. With that information, we can make more informed decisions about what we are doing or may do with that area. Or maybe you'd just like to know how your garden is doing!
      Satellites do this kind of thing every day, and have an ever increasing arsenal of technology that allow us to make better decisions about what to do on our planet. 
    </p>
    <p className="about-content">With all this in mind, you may be wondering how Landsat 8 delivered you a photo from your location. Well if you've been following closely, you might realize that Landsat 8 actually didn't take any photos at all!
      Landsat 8 has two sensors, the OLI (Operational Land Imager) and TIRS (Thermal Infrared Sensor). Light is first refelected off the Earth's surface. This light then bounces back up to Landsat 8 where it collects wavelength data in the form spectral signatures from the electromagnetic spectrum, and in a 
      30 meter grid, assigns values of how much light was reflected for each section of the image. All of this data is then sent to a computer for analysis, where it can then be assigned colors we humans would see, and Eureka! You now have a satellite image!
    </p>
  </section>
  </div>
  </>
)

}


export default About