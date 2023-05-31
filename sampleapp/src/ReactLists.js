function ReactLists(props){
  
    return (
        <ul>
            {
                props.Movies.map((data) => 
                    <li key={data.id}>
                        {data.name}
                    </li>
                )
            }

        </ul>
    )
}
export default ReactLists;