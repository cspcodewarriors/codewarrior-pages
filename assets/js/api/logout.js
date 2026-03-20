import { pythonURI, javaURI, fetchOptions } from './config.js';

// logout from both java and python backends
export async function handleLogout() {
    // import config dynamically since we can't use import in non-module script

    // logout from python backend
    try {
        await fetch(pythonURI + '/api/authenticate', {
            ...fetchOptions,
            method: 'DELETE'
        });
    } catch (e) {
        // log error but continue
        console.error('python logout failed:', e);
    }

    // logout from java backend
    try {
        await fetch(javaURI + '/api/logout', {
            ...fetchOptions,
            method: 'POST',
        });
    } catch (e) {
        // log error but continue
        console.error('java logout failed:', e);
    }

    // Clear JWT and session cookies client-side as a fallback
    // (only works for non-httpOnly cookies, i.e. in development)
    document.cookie = 'jwt_python_flask=; Max-Age=0; path=/;';
    document.cookie = 'jwt_java_flask=; Max-Age=0; path=/;';
    document.cookie = 'sess_python_flask=; Max-Age=0; path=/;';
}
