
// controls the page that is being viewed
export type AppNav = "budget" 
                   | "settings"
                   | "profile"
                   | "about";

// App Wide state 
export interface AppState{
    nav: AppNav
}

// Set State method
export type SetAppState = React.Dispatch<React.SetStateAction<AppState>> | ((s: AppState) => any);

export function setAppView(state: AppState, setState: SetAppState, newNav: AppNav){
    setState({
        ...state,
        nav: newNav
    });
}