import { createAsyncThunk } from '@reduxjs/toolkit';

import exampleAPI from '@features/example/datasource/example.datasource';

export const getExamplesAsyncAction = createAsyncThunk('EXAMPLE/moduleName/get', async (param, { rejectWithValue }) => {
	try {
		const response = await exampleAPI.getExamples(param);
		return response;
	} catch (error) {
		return rejectWithValue(JSON.parse(JSON.stringify(error)));
	}
});

export const getExampleAsyncAction = createAsyncThunk('EXAMPLE/moduleName/read', async (id, { rejectWithValue }) => {
	try {
		const response = await exampleAPI.getExample(id);
		return response;
	} catch (error) {
		return rejectWithValue(JSON.parse(JSON.stringify(error)));
	}
});

export const createExampleAsyncAction = createAsyncThunk(
	'EXAMPLE/moduleName/create',
	async (payload, { rejectWithValue }) => {
		try {
			const response = await exampleAPI.createExample(payload);
			return response;
		} catch (error) {
			return rejectWithValue(JSON.parse(JSON.stringify(error)));
		}
	},
);

export const updateExampleAsyncAction = createAsyncThunk(
	'EXAMPLE/moduleName/update',
	async ({ id, payload }, { rejectWithValue }) => {
		try {
			const response = await exampleAPI.updateExample(id, payload);
			return response;
		} catch (error) {
			return rejectWithValue(JSON.parse(JSON.stringify(error)));
		}
	},
);

export const updateExampleChangePositionAsyncAction = createAsyncThunk(
	'EXAMPLE/moduleName/patch',
	async (payload, { rejectWithValue }) => {
		try {
			const response = await exampleAPI.updateExampleChangePosition(payload);
			return response;
		} catch (error) {
			return rejectWithValue(JSON.parse(JSON.stringify(error)));
		}
	},
);

export const deleteExampleAsyncAction = createAsyncThunk(
	'EXAMPLE/moduleName/delete',
	async (id, { rejectWithValue }) => {
		try {
			const response = await exampleAPI.deleteExample(id);
			return response;
		} catch (error) {
			return rejectWithValue(JSON.parse(JSON.stringify(error)));
		}
	},
);
