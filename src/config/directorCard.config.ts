import axios from "axios";
import { ICardDataResponse } from "../interfaces";
import { serializeCard } from "./testimonialCard.config";

export const directorSectionTitle = "Meet the Directors";

export const getDirectorCards = async () => {
  console.log("getting cards");
  try {
    if (process.env.BE_HOST) {
      const { data } = await axios.get(`${process.env.BE_HOST}director-cards`, {
        timeout: 50000,
      });

      const cards = data.map((card: ICardDataResponse) => serializeCard(card));
      return cards;
    }
  } catch (error) {
    console.error(error);
  }
};
