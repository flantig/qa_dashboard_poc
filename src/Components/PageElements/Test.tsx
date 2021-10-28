import * as React from "react";

interface PropsType<T> {
    items: T[];
    renderer: (item: T) => React.ReactNode;
    filterFn?: (item: T) => boolean;
}

interface AbstractItem {
    key: string;
}

export function List<T extends AbstractItem>(props: PropsType<T>) {
    const items = props.filterFn
        ? props.items.filter(props.filterFn)
        : props.items;

    return (
        <ul>
            {items.map((item) => {
                return <li key={item.key}>{props.renderer(item)}</li>;
            })}
        </ul>
    );
}
