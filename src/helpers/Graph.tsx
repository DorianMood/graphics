export class Graph<ValueType> {
    public id: number;
    public nodes: Array<Graph<ValueType>>;
    public value: ValueType;
}