import { Route, Routes } from 'solid-app-router'
import type { Component } from 'solid-js'
import { app, main } from './App.css'
import Game from './Game'
import Header from './Header'

const App: Component = () => {
    return (
        <div class={app}>
            <Header />
            <main class={main}>
                <Routes>
                    <Route path="/help" element={<></>} />
                    <Route path="/" element={<Game />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
