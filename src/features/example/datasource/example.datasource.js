import {
    PUT,
    GET,
    POST,
    DELETE,
    PATCH,
} from '@shared/datasource/api.datasource';

const getExamples = async (params) => {
    return await GET('/v1', '/api/talent-insider', params, {}, true);
};

const getExample = async (id) => {
    return await GET('/v1', `/private/talent-insider/${id}`, {}, {}, true);
};

const createExample = async (payload) => {
    return await POST('/v1', '/api/talent-insider', { request: payload }, true);
};

const updateExample = async (id, payload) => {
    return await PUT(
        '/v1',
        `/private/talent-insider/${id}`,
        { request: payload },
        true
    );
};

const updateExampleChangePosition = async (payload) => {
    return await PATCH(
        '/v1',
        '/api/talent-insider',
        { request: payload },
        true
    );
};

const deleteExample = async (id) => {
    return await DELETE('/v1', `/private/implant-steps/${id}`, true);
};

export default {
    getExamples,
    getExample,
    createExample,
    updateExample,
    updateExampleChangePosition,
    deleteExample,
};
