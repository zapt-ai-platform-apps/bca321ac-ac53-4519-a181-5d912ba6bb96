import React from 'react';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
            <header className="flex justify-end p-4">
                <ThemeToggle />
            </header>
            <main className="p-4">
                <h1 className="text-2xl font-bold mb-4">ReactJS App Template</h1>
                <p>Welcome to the app. Use the toggle button in the header to switch between light and dark mode.</p>
            </main>
            <footer className="flex justify-center p-4">
                <a
                    href="https://www.zapt.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    Made on ZAPT
                </a>
            </footer>
        </div>
    );
}