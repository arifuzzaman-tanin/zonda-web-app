export default interface IResponse{
    data: any[] | any,
    errors: any[];
    isSucceed: boolean;
    message: string | null;
}