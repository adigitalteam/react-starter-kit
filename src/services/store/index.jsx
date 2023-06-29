import {create} from 'zustand'
import {devtools, persist} from "zustand/middleware";


let store = (set) => ({
    increaseCounterNumber: () => set((state) => ({number: state.number + 1})),
    loginPrepare: false,
    setLoginPrepare: (prepare) => set((state) => ({...state, loginPrepare: prepare})),
    sidebarOpen: false,
    setSidebarOpen: (prepare) => set((state) => ({...state, sidebarOpen: prepare})),
    contentOpen: false,
    setContentOpen: (prepare) => set((state) => ({...state, contentOpen: prepare})),
})

let settingsStore = (set) => ({
    token: null,
    tokenData: null,
    breadcrumb: [{label: "Home", "link": "/"}],
    user: null,
    isAuthenticated: false,
    setToken: (token) => set(state => ({...state, token})),
    setTokenData: (tokenData) => set(state => ({...state, tokenData})),
    setUser: (user) => set(state => ({...state, user})),
    setAuth: (isAuthenticated) => set(state => ({...state, isAuthenticated})),
    setBreadcrumb: (breadcrumb) => set(state => ({...state, breadcrumb})),
    addBreadcrumb: (breadcrumb) => set(state => ({
        ...state,
        breadcrumb: [...get(state, "breadcrumb", []), breadcrumb]
    })),
    clearBreadcrumb: () => set(state => ({...state, breadcrumb: []})),
})


store = devtools(store);
settingsStore = devtools(settingsStore)
settingsStore = persist(settingsStore, {name: 'settings'});

export const useStore = create(store)
export const useSettingsStore = create(settingsStore)
