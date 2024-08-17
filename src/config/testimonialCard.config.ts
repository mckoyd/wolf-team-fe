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
  try {
    if (process.env.BE_HOST) {
      const { data } = await axios.get(`${process.env.BE_HOST}success-cards`, {
        timeout: 50000,
      });

      const cards = data.map((card: ICardDataResponse) => serializeCard(card));

      return cards;
    }
  } catch (error) {
    console.error(error);
  }
};
