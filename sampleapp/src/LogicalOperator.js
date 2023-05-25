function LogicalOperator(props){
    const result = true && "hello word";
    return (
       props.isLoading && <p> Logical Operator</p>
    )
}
export default LogicalOperator;