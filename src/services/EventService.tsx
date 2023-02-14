import axios from "axios";
import { Events } from "../models/Events";


export function GetEventData() :Promise<Events[]> {
    return axios.get<Events[]>("https://app.ticketmaster.com/discovery/v2/events.json?size=5&apikey=LG8mjVMbvHfPJKBLUIbBnzPxZ3V2q8ru").then(response => response.data)
}