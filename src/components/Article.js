// import react from "react";
const date = "January 1, 1970"

function Article ({tittle, date, preview}){
	return (
		<article>
		<h3>{tittle}</h3>
		<small>{date}</small>
		<p>{preview}</p>
		</article>
	)
}

export default Article;
