export class Graph<ValueType> {
    public nodes: Array<Graph<ValueType>>;
    public value: ValueType;
}