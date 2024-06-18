import { createSlice } from '@reduxjs/toolkit';

import { authSharedAsyncActionUnauthorized } from '@features/auth/store/auth.asyncAction';
import {
    getExamplesAsyncAction,
    getExampleAsyncAction,
    createExampleAsyncAction,
    updateExampleAsyncAction,
    updateExampleChangePositionAsyncAction,
    deleteExampleAsyncAction,
} from '@features/example/store/example.asyncAction';

const initialState = {
    status_GET: 'IDLE',
    status_POST: 'IDLE',
    status_PUT: 'IDLE',
    status_PATCH: 'IDLE',
    status_DELETE: 'IDLE',
    error: {
        message: '',
        description: '',
    },
    data: [],
    detail: {},
    meta: {
        currentPage: 1,
        perPage: 10,
        total: 0,
        search: '',
        sort: {
            by: '',
            direction: '',
        },
    },
};

export const moduleNameSlice = createSlice({
    name: 'APP_NAME/moduleNameSlice',
    initialState,
    reducers: {
        resetAll(state) {
            state = initialState;
            return state;
        },
        resetErrorMessage(state, action) {
            state.error =
                action.payload === 'RESET'
                    ? {
                          message: '',
                          description: '',
                      }
                    : state.error;
        },
        resetStatus(state, action) {
            state.message = '';
            state.status_GET =
                action.payload === 'GET' ? 'IDLE' : state.status_GET;
            state.status_POST =
                action.payload === 'POST' ? 'IDLE' : state.status_POST;
            state.status_PUT =
                action.payload === 'PUT' ? 'IDLE' : state.status_PUT;
            state.status_PATCH =
                action.payload === 'PATCH' ? 'IDLE' : state.status_PATCH;
            state.status_DELETE =
                action.payload === 'DELETE' ? 'IDLE' : state.status_DELETE;
            return state;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getExamplesAsyncAction.pending, (state) => {
            state.status_GET = 'LOADING';
        });
        builder.addCase(
            getExamplesAsyncAction.fulfilled,
            (state, { payload }) => {
                state.status_GET = 'SUCCESS';
                state.data = payload.data;
                state.meta = payload.meta;
            }
        );
        builder.addCase(
            getExamplesAsyncAction.rejected,
            (state, { payload }) => {
                state.status_GET = 'FAILED';
                state.error = {
                    message: payload.message,
                    description: payload.description,
                };
            }
        );
        builder.addCase(getExampleAsyncAction.pending, (state) => {
            state.status_GET = 'LOADING';
        });
        builder.addCase(
            getExampleAsyncAction.fulfilled,
            (state, { payload }) => {
                state.status_GET = 'SUCCESS';
                state.detail = payload.data;
            }
        );
        builder.addCase(
            getExampleAsyncAction.rejected,
            (state, { payload }) => {
                state.status_GET = 'FAILED';
                state.error = {
                    message: payload.message,
                    description: payload.description,
                };
            }
        );
        builder.addCase(createExampleAsyncAction.pending, (state) => {
            state.status_POST = 'LOADING';
        });
        builder.addCase(createExampleAsyncAction.fulfilled, (state) => {
            state.status_POST = 'SUCCESS';
        });
        builder.addCase(
            createExampleAsyncAction.rejected,
            (state, { payload }) => {
                state.status_POST = 'FAILED';
                state.error = {
                    message: payload.message,
                    description: payload.description,
                };
            }
        );
        builder.addCase(updateExampleAsyncAction.pending, (state) => {
            state.status_PUT = 'LOADING';
        });
        builder.addCase(updateExampleAsyncAction.fulfilled, (state) => {
            state.status_PUT = 'SUCCESS';
        });
        builder.addCase(
            updateExampleAsyncAction.rejected,
            (state, { payload }) => {
                state.status_PUT = 'FAILED';
                state.error = {
                    message: payload.message,
                    description: payload.description,
                };
            }
        );
        builder.addCase(
            updateExampleChangePositionAsyncAction.pending,
            (state) => {
                state.status_PATCH = 'LOADING';
            }
        );
        builder.addCase(
            updateExampleChangePositionAsyncAction.fulfilled,
            (state) => {
                state.status_PATCH = 'SUCCESS';
            }
        );
        builder.addCase(
            updateExampleChangePositionAsyncAction.rejected,
            (state, { payload }) => {
                state.status_PATCH = 'FAILED';
                state.error = {
                    message: payload.message,
                    description: payload.description,
                };
            }
        );
        builder.addCase(deleteExampleAsyncAction.pending, (state) => {
            state.status_DELETE = 'LOADING';
        });
        builder.addCase(deleteExampleAsyncAction.fulfilled, (state) => {
            state.status_DELETE = 'SUCCESS';
        });
        builder.addCase(
            deleteExampleAsyncAction.rejected,
            (state, { payload }) => {
                state.status_DELETE = 'FAILED';
                state.error = {
                    message: payload.message,
                    description: payload.description,
                };
            }
        );
        builder.addCase(
            authSharedAsyncActionUnauthorized.fulfilled,
            (state) => {
                state = { ...initialState };
                return state;
            }
        );

        return builder;
    },
});
