import { Routes, Route, Link } from "react-router-dom";
import "./styles/index.scss";
import { Suspense } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <button onClick={toggleTheme}>TOGGLE</button>
            <AppRouter />
        </div>
    );
};

export default App;