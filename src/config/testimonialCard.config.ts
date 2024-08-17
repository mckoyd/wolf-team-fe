import axios from "axios";
import { ICardDataResponse } from "../interfaces";

export const testimonialSectionTitle =
  "Delivering real results for top companies. Some of our";
export const testimonialSectionTitleSpan = "success stories.";

export const serializeCard = ({
  fullName,
  imageUrl,
  jobTitle,
  description,
}: ICardDataResponse) => {
  return {
    fullName,
    imageUrl,
    jobTitle,
    description,
  };
};

export const getTestimonialCards = async () => {
  console.log("host", process.env.BE_HOST);
  try {
    if (process.env.BE_HOST) {
      const { data } = await axios.get(`${process.env.BE_HOST}success-cards`, {
        timeout: 50000,
      });
      console.log("raw data", data);
      const cards = data.map((card: ICardDataResponse) => serializeCard(card));
      console.log("serialized cards", cards);
      return cards;
    }
  } catch (error) {
    console.error(error);
  }
};
