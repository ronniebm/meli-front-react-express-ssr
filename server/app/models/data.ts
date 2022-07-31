interface Data {
    author: {
        name: string,
        lastname: string
    },
    categories: [string] | [] | any,
    items: [ItemResult] | [] | any
}