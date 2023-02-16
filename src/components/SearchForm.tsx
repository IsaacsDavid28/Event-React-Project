import { useState } from "react";



export interface ISearchFormProps {
  filterEvents: Function
}

export function SearchForm (props: ISearchFormProps) {

  const [keyword, setKeyWord] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [venue, setVenue] = useState<string>('');

  function onSubmit(e:React.FormEvent<HTMLElement>){
    e.preventDefault();

    props.filterEvents({KeyWord: keyword, City: city, Venue: venue})
}


  return (
    <div>
      <form onSubmit={onSubmit}>
                <label>KeyWord</label>
                <input type="text"onChange={(e) => setKeyWord(e.target.value)}></input>
                <label>City</label>
                <input type="text" onChange={(e) => setCity(e.target.value)}></input>
                <label>Venue</label>
                <input type="text" onChange={(e) => setVenue(e.target.value)}></input>
                <button type="submit">Submit</button>
      </form>
    </div>
  );
}
