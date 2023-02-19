import { useEffect, useState } from "react";
import { queryEvent } from "../services/EventService";
import { EventList } from "./EventList";
import '../css/SearchForm.css'


export interface ISearchFormProps {
  filterEvents: Function
}

export function SearchForm (props: ISearchFormProps) {

  const [keyword, setKeyWord] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [stateCode, setStateCode] = useState<string>('');

function handleSubmit(e:React.FormEvent<HTMLElement>){
  e.preventDefault()
  ///make an API call based on whats in form
  queryEvent(keyword, city, stateCode).then(data => props.filterEvents(data))
  //take what you get back and feed into the filterEvents function that was passed in 
}

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-form">
  <div className="form-group">
    <label htmlFor="keyword">KeyWord</label>
    <input type="text" id="keyword" className="form-control" placeholder="Search..." onChange={(e) => setKeyWord(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="city">City</label>
    <input type="text" id="city" className="form-control" placeholder="Search..." onChange={(e) => setCity(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="state-code">State Code</label>
    <input type="text" id="state-code" className="form-control" placeholder="Search..." onChange={(e) => setStateCode(e.target.value)} />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );
}
