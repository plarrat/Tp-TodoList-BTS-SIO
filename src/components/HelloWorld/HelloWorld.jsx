export default function HelloWorld(props){
    return(
        <div>
            <h1>Hello World !</h1>
            <h3>By {props.nom}</h3>
            <hr />
            <p>Mon premier composant de CRA</p>
        </div>
    )
}