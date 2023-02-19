import axios from "axios";
import { stringify } from "querystring";
import { Affair, Events } from "../models/Events";

export function GetEventData(): Promise<Events> {
  return axios
    .get<Events>(
      "https://app.ticketmaster.com/discovery/v2/events.json?size=6&apikey=LG8mjVMbvHfPJKBLUIbBnzPxZ3V2q8ru"
    )
    .then((response) => response.data);
}

export function queryEvent(keyword: string, city: string, stateCode: string) {
  return (
    axios
      .get<Events>("https://app.ticketmaster.com/discovery/v2/events.json", {
        params: {
          apikey: "LG8mjVMbvHfPJKBLUIbBnzPxZ3V2q8ru",
          Keyword: keyword || "",
          City: city || "",
          stateCode: stateCode || "",
        },
      })
      .then((response) => response.data)
      //handle successful response, extract relevant data from the API response
      //const events:Affair[] = response.data?._embedded?.events || [];

      .catch((error) => {
        alert("Invalid search term, please try again");
        console.log(error);
      })
  );
}

export function GetEventById(id: string) {
  return axios.get<Events>(
    `https://app.ticketmaster.com/discovery/v2/events/${id}`,
    { params: { apikey: "aTIAD40BFN88gtqVOCuXKbz9V6LJtuZV" } }
  );
}
