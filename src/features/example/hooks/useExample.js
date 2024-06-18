import {
	getExamplesAsyncAction,
	getExampleAsyncAction,
	createExampleAsyncAction,
	updateExampleAsyncAction,
	deleteExampleAsyncAction,
	updateExampleChangePositionAsyncAction,
} from '@features/example/store/example.asyncAction';
import { moduleNameSlice } from '@features/example/store/example.slice';

import { useReduxDispatch } from '@shared/hooks/useReduxDispatch/useReduxDispatch';
import { useReduxSelector } from '@shared/hooks/useReduxSelector/useReduxSelector';

export const useExample = () => {
	const dispatch = useReduxDispatch();
	const state = useReduxSelector((state) => state['examples']);

	const resetAll = () => {
		dispatch(moduleNameSlice.actions.resetAll());
	};

	const resetError = (param) => {
		dispatch(moduleNameSlice.actions.resetErrorMessage(param));
	};

	const resetStatus = (param) => {
		dispatch(moduleNameSlice.actions.resetStatus(param));
	};

	const getList = (param) => {
		dispatch(getExamplesAsyncAction(param));
	};

	const getDetail = (param) => {
		dispatch(getExampleAsyncAction(param));
	};

	const createExample = (payload) => {
		dispatch(createExampleAsyncAction(payload));
	};

	const updateExample = (id, payload) => {
		dispatch(updateExampleAsyncAction({ id, payload }));
	};

	const updateExampleChangePosition = (payload) => {
		dispatch(updateExampleChangePositionAsyncAction(payload));
	};

	const deleteExample = (id) => {
		dispatch(deleteExampleAsyncAction(id));
	};

	return {
		state,
		resetError,
		resetStatus,
		resetAll,
		getList,
		getDetail,
		createExample,
		updateExample,
		updateExampleChangePosition,
		deleteExample,
	};
};
