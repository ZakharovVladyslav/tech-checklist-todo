import { configureStore } from "@reduxjs/toolkit";
import { todoSlicer } from "./slicers/todoSlicer";

const saveState = (state: object) => {
    try {
        const serialisedState = JSON.stringify(state);
        window.sessionStorage.setItem("app_state", serialisedState);
    } catch (err) {}
};

const loadState = () => {
    try {
        const serialisedState = window.sessionStorage.getItem("app_state");

        if (!serialisedState) return undefined;

        return JSON.parse(serialisedState);
    } catch (err) {
        return undefined;
    }
};

const oldState = loadState();

const store = configureStore({
    reducer: {
        todos: todoSlicer.reducer,
    },
    preloadedState: oldState,
});

store.subscribe(() => {
    saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
