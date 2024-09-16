import Store from "./store";

export const productStore = Store();

export type TRootState = ReturnType<typeof productStore.getState>;
export type TAppDispatch = typeof productStore.dispatch;
