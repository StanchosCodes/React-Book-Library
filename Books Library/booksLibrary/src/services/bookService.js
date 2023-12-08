import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/books';

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOne = async (bookId) => {
    const result = await request.get(`${baseUrl}/${bookId}`);

    return result;
};

export const getRecent = async () => {
    const query = new URLSearchParams({
        //sortBy: '_createdOn desc',
        offset: 0,
        pageSize: 4
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (bookData) => {
    const result = await request.post(baseUrl, bookData);

    return result;
};

export const edit = async (bookId, bookData) => {
    const result = await request.put(`${baseUrl}/${bookId}`, bookData);

    return result;
};

export const remove = async (bookId) => {
    const result = await request.remove(`${baseUrl}/${bookId}`);

    return result;
};