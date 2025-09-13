export const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000';

export async function apiPost(path, body) {
    const res = await fetch(`${API_BASE}${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        credentials: 'include',
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
        const message = data?.message || 'Request failed';
        throw new Error(message);
    }
    return data;
}




