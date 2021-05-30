import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Hero from "../components/hero/TwoColumnWithVideo.js";
import Features from "../components/features/ThreeColSimple.js";
import WeatherJson from '../weather.json'

import chefIconImageSrc from "../images/chef-icon.svg";
import celebrationIconImageSrc from "../images/celebration-icon.svg";
import shopIconImageSrc from "../images/shop-icon.svg";

export default () => {
  console.log(WeatherJson)
  const observationsArr = Object.keys(WeatherJson['current_observation']);
  observationsArr.splice(-1, 1);
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Welcome to Money Hop <HighlightedText>Weather Forecast</HighlightedText></>}
        description="Full-stack global banking solution for Indian millennials. Save, Invest, Borrow, and Spend with hop."
        imageSrc="https://media.sciencephoto.com/c0/05/35/22/c0053522-800px-wm.jpg"
        imageCss={imageCss}
      />
      <Features
        heading={<><HighlightedText>New York</HighlightedText> <br/>  Observations </>}
        description={"TimeZone = " + WeatherJson['location']['timezone_id']}
        statistics={[
          {
            value: "Current Weather",
            key: WeatherJson['current_observation']['condition']['text'],
          },
          {
            value: "Temperature (High/Low)",
            key: WeatherJson['current_observation']['condition']['temperature'] + " / " +
              (WeatherJson['current_observation']['condition']['temperature'] - 20),
          },
          {
            value: "Sunrise",
            key: WeatherJson['current_observation']['astronomy']['sunrise'],
          },
          {
            value: "Sunset",
            key: WeatherJson['current_observation']['astronomy']['sunset'],
          },
          {
            value: "Wind Speed",
            key: WeatherJson['current_observation']['wind']['speed'],
          },
          {
            value: "Humidity",
            key: WeatherJson['current_observation']['atmosphere']['humidity'],
          },
          {
            value: "Pressure",
            key: WeatherJson['current_observation']['atmosphere']['pressure'],
          },
          {
            value: "Visibility",
            key: WeatherJson['current_observation']['atmosphere']['visibility'],
          }
        ]}
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "230+ Locations",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://google.com"
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Professional Chefs",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://timerse.com"
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Birthday Catering",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://reddit.com"
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Birthday Catering",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://reddit.com"
          }
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
    </AnimationRevealPage>
  );
}
