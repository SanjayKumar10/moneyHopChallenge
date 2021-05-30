import React from "react";
import tw from "twin.macro";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex md:flex-row justify-center max-w-screen-xl mx-auto py-20 md:py-24`;
const Statistics = tw.div`flex flex-wrap justify-center`
const Statistic = tw.div`text-lg sm:text-2xl lg:text-3xl w-1/2 mt-4 lg:mt-10 text-center md:text-left`
const Value = tw.div`font-bold text-primary-500`
const Key = tw.div`font-medium text-gray-700`

export default ({ textOnLeft = false, statistics = [
  {
    key: "Countries",
    value: "192",
  },
  {
    key: "Hotels",
    value: "479",
  },
  {
    key: "Rooms",
    value: "2093",
  },
  {
    key: "Workers",
    value: "10347",
  }
] }) => {

  return (
    <Container>
      <TwoColumn>
        <Statistics>
          {statistics.map((statistic, index) => (
            <Statistic key={index}>
              <Value>{statistic.value}</Value>
              <Key>{statistic.key}</Key>
            </Statistic>
          ))}
        </Statistics>
      </TwoColumn>
    </Container>
  );
};
