import { useEffect, useState } from "react";
import { queryEvent } from "../services/EventService";
import { EventList } from "./EventList";


export interface ISearchFormProps {
  filterEvents: Function
}

export function SearchForm (props: ISearchFormProps) {

  const [keyword, setKeyWord] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [stateCode, setStateCode] = useState<string>('');

  // function onSubmit(e:React.FormEvent<HTMLElement>){
//   //   e.preventDefault();

//     props.filterEvents({KeyWord: keyword, City: city, Venue: venue})
// }

function handleSubmit(e:React.FormEvent<HTMLElement>){
  e.preventDefault()
  ///make an API call based on whats in form
  queryEvent(keyword, city, stateCode).then(data => props.filterEvents(data))
  //take what you get back and feed into the filterEvents function that was passed in 



}

  return (
    
    <div>


      <form onSubmit={handleSubmit}>
                <label>KeyWord</label>
                <input type="text" placeholder="Search..." onChange={(e) => setKeyWord(e.target.value)}></input>
                <label>City</label>
                <input type="text" placeholder="Search..." onChange={(e) => setCity(e.target.value)}></input>
                <label>State Code</label>
                <input type="text" placeholder="Search..." onChange={(e) => setStateCode(e.target.value)}></input>
                <button type="submit">Submit</button>
      </form>
    </div>
  );
}
