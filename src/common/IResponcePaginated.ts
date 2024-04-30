interface IResponcePaginated {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    items: any[];
    pageIndex: number;
    totalCount: number;
    totalPages: number;
}

export default IResponcePaginated;