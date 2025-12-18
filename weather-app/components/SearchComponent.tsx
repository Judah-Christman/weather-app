export default function SearchComponent({ city, setCity, searchCity }){

	return(
		<form 
			className="my-20"
			onSubmit={(e) => {
        		e.preventDefault();
        		searchCity();
      		}}>
			<input
				placeholder="Enter City Name..."
    	    	value={city}
        		onChange={(e) => setCity(e.target.value)}
        		className="text-black border border-blue-400 rounded-tl-sm rounded-bl-sm p-1 bg-gray-100"
	      	/>
    	  	<button 
    	  		type="submit"
    	  		className="bg-blue-400 border border-blue-400 p-1 rounded-tr-sm rounded-br-sm"
    	  	>Search</button>
      	</form>
	);
}