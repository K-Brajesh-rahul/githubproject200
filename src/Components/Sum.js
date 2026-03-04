function Sum(props){
    const {a,b}=props
    const c=a+b;
    return(
        <div>
            <h1>{c}</h1>
            <h1>It is the Sum of {a} and {b} is {c}</h1>
        </div>
    )
}
export default Sum
